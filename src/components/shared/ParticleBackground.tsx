import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { getParticleGradientStops } from '@/theme/tokens';

interface ParticleBackgroundProps {
  className?: string;
  /** Horizontal focal point as a fraction of width (0-1). Density peaks here. */
  focalX?: number;
  /** Vertical focal point as a fraction of height (0-1). Density peaks here. */
  focalY?: number;
  desktopCount?: number;
  mobileCount?: number;
}

interface Particle {
  angle: number;
  radiusFraction: number; // 0 (center) - 1 (edge)
  radius: number; // dot size in px
  hueT: number; // 0 = light gold, 0.5 = deep gold, 1 = charcoal
  wanderAmp: number;
  wanderSpeed: number;
  wanderPhase: number;
  pulseSpeed: number;
  pulsePhase: number;
  alphaScale: number; // per-particle variation on top of the radial falloff
  dx: number; // eased cursor-repulsion offset (px)
  dy: number;
}

const MOBILE_BREAKPOINT = 768;
// How far (px) the cursor's influence reaches, and how far it can push a dot.
const CURSOR_INFLUENCE_RADIUS = 160;
const CURSOR_MAX_PUSH = 34;
const CURSOR_EASE = 0.12;

type ColorStop = { stop: number; rgb: [number, number, number] };

// Brand gradient: light gold -> Trovix gold -> charcoal, read live from
// theme.css via src/theme/tokens.ts (see colorStops in the effect below).
function colorAt(t: number, colorStops: ColorStop[]): [number, number, number] {
  const clamped = Math.min(1, Math.max(0, t));
  let lower = colorStops[0];
  let upper = colorStops[colorStops.length - 1];
  for (let i = 0; i < colorStops.length - 1; i++) {
    if (clamped >= colorStops[i].stop && clamped <= colorStops[i + 1].stop) {
      lower = colorStops[i];
      upper = colorStops[i + 1];
      break;
    }
  }
  const span = upper.stop - lower.stop || 1;
  const localT = (clamped - lower.stop) / span;
  return [
    Math.round(lower.rgb[0] + (upper.rgb[0] - lower.rgb[0]) * localT),
    Math.round(lower.rgb[1] + (upper.rgb[1] - lower.rgb[1]) * localT),
    Math.round(lower.rgb[2] + (upper.rgb[2] - lower.rgb[2]) * localT),
  ];
}

function createParticles(count: number): Particle[] {
  const particles: Particle[] = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      angle: Math.random() * Math.PI * 2,
      // Skewed toward 0 so dots cluster near the focal point and thin out at the edge.
      radiusFraction: Math.pow(Math.random(), 1.8),
      radius: 1.2 + Math.random() * 1.8,
      hueT: Math.random(),
      wanderAmp: 5 + Math.random() * 10,
      wanderSpeed: 0.06 + Math.random() * 0.09,
      wanderPhase: Math.random() * Math.PI * 2,
      pulseSpeed: 0.15 + Math.random() * 0.25,
      pulsePhase: Math.random() * Math.PI * 2,
      alphaScale: 0.7 + Math.random() * 0.3,
      dx: 0,
      dy: 0,
    });
  }
  return particles;
}

export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  className = '',
  focalX = 0.5,
  focalY = 0.5,
  desktopCount = 320,
  mobileCount = 100,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    // Read once per mount — theme.css's brand primitives don't change between
    // light/dark, so there's no need to re-read on every frame or theme toggle.
    const colorStops = getParticleGradientStops();

    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let animationFrame = 0;
    let isMobile = container.clientWidth < MOBILE_BREAKPOINT;
    let containerRect = container.getBoundingClientRect();
    // Cursor position in canvas-local px, or null when the pointer isn't over the field.
    let pointer: { x: number; y: number } | null = null;

    const draw = (elapsedSeconds: number, animate: boolean) => {
      ctx.clearRect(0, 0, width, height);
      const isDark = theme === 'dark';
      const alphaMin = isDark ? 0.5 : 0.32;
      const alphaMax = isDark ? 1 : 0.85;
      // Additive blending gives a soft glow on dark backgrounds; on light/white
      // backgrounds additive blending washes colors out toward white, so use
      // normal alpha compositing there instead.
      ctx.globalCompositeOperation = isDark ? 'lighter' : 'source-over';

      const cx = width * focalX;
      const cy = height * focalY;
      const maxRadius = Math.max(
        Math.hypot(cx, cy),
        Math.hypot(width - cx, cy),
        Math.hypot(cx, height - cy),
        Math.hypot(width - cx, height - cy),
      );

      for (const p of particles) {
        const wanderX = animate ? Math.cos(elapsedSeconds * p.wanderSpeed + p.wanderPhase) * p.wanderAmp : 0;
        const wanderY = animate ? Math.sin(elapsedSeconds * p.wanderSpeed * 0.8 + p.wanderPhase) * p.wanderAmp : 0;
        const r = p.radiusFraction * maxRadius;
        const baseX = cx + Math.cos(p.angle) * r + wanderX;
        const baseY = cy + Math.sin(p.angle) * r + wanderY;

        // Gently push dots away from the cursor, easing toward the target offset
        // each frame so the motion feels springy rather than snapping.
        let targetDx = 0;
        let targetDy = 0;
        if (animate && pointer) {
          const distX = baseX - pointer.x;
          const distY = baseY - pointer.y;
          const dist = Math.hypot(distX, distY);
          if (dist < CURSOR_INFLUENCE_RADIUS) {
            const proximity = 1 - dist / CURSOR_INFLUENCE_RADIUS;
            const push = proximity * proximity * CURSOR_MAX_PUSH;
            const nx = dist > 0.001 ? distX / dist : Math.cos(p.angle);
            const ny = dist > 0.001 ? distY / dist : Math.sin(p.angle);
            targetDx = nx * push;
            targetDy = ny * push;
          }
        }
        p.dx += (targetDx - p.dx) * CURSOR_EASE;
        p.dy += (targetDy - p.dy) * CURSOR_EASE;

        const x = baseX + p.dx;
        const y = baseY + p.dy;

        // Dots near the cursor brighten and grow slightly, like a spotlight.
        let proximityGlow = 0;
        if (pointer) {
          const dist = Math.hypot(x - pointer.x, y - pointer.y);
          if (dist < CURSOR_INFLUENCE_RADIUS) {
            proximityGlow = 1 - dist / CURSOR_INFLUENCE_RADIUS;
          }
        }

        const pulse = animate ? 0.85 + 0.15 * Math.sin(elapsedSeconds * p.pulseSpeed + p.pulsePhase) : 1;
        const falloff = 1 - p.radiusFraction * 0.7;
        const alpha = (alphaMin + (alphaMax - alphaMin) * falloff) * p.alphaScale * pulse + proximityGlow * 0.4;
        const drawRadius = p.radius + proximityGlow * 1.6;

        const [r255, g255, b255] = colorAt(p.hueT * 0.5 + p.radiusFraction * 0.5, colorStops);
        ctx.beginPath();
        ctx.fillStyle = `rgba(${r255}, ${g255}, ${b255}, ${Math.max(0, Math.min(1, alpha))})`;
        ctx.arc(x, y, drawRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = 'source-over';
    };

    const render = (timestamp: number) => {
      draw(timestamp * 0.001, true);
      animationFrame = requestAnimationFrame(render);
    };

    const start = () => {
      cancelAnimationFrame(animationFrame);
      if (reducedMotionQuery.matches) {
        draw(0, false);
      } else if (document.visibilityState === 'visible') {
        animationFrame = requestAnimationFrame(render);
      }
    };

    const resize = () => {
      containerRect = container.getBoundingClientRect();
      width = containerRect.width;
      height = containerRect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const nowMobile = width < MOBILE_BREAKPOINT;
      if (particles.length === 0 || nowMobile !== isMobile) {
        isMobile = nowMobile;
        particles = createParticles(isMobile ? mobileCount : desktopCount);
      }

      if (reducedMotionQuery.matches) {
        draw(0, false);
      }
    };

    resize();
    start();

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(container);

    // Reduced-motion users get a static field, so skip wiring up pointer tracking entirely.
    const handlePointerMove = (e: PointerEvent) => {
      if (reducedMotionQuery.matches) return;
      const localX = e.clientX - containerRect.left;
      const localY = e.clientY - containerRect.top;
      if (localX < 0 || localY < 0 || localX > width || localY > height) {
        pointer = null;
      } else {
        pointer = { x: localX, y: localY };
      }
    };
    const clearPointer = () => {
      pointer = null;
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', clearPointer);
    window.addEventListener('blur', clearPointer);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        start();
      } else {
        cancelAnimationFrame(animationFrame);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const handleMotionPreferenceChange = () => {
      pointer = null;
      start();
    };
    reducedMotionQuery.addEventListener('change', handleMotionPreferenceChange);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerMove);
      document.removeEventListener('mouseleave', clearPointer);
      window.removeEventListener('blur', clearPointer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      reducedMotionQuery.removeEventListener('change', handleMotionPreferenceChange);
    };
    // theme is intentionally included so the static (reduced-motion) field redraws with the new palette on toggle
  }, [focalX, focalY, desktopCount, mobileCount, theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
};

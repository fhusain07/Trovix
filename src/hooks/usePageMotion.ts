import { useEffect, type RefObject } from "react";

// Target existing presentation elements, never form fields or legal copy. Keeping
// content visible by default also makes prerendering and animation failures safe.
// Above-the-fold hero and page intros animate in CSS (motion.css) at first paint.
const revealTargets = [
  "[data-motion-reveal]",
  ".section-heading > div > *",
  ".section-heading > .text-link",
  ".service-card", ".project-card", ".technology-card", ".content-panel",
  ".process-grid > li", ".mission-grid > article", ".partner-process > li",
  ".differentiators > div", ".portfolio-empty > *", ".case-image",
  ".why-section > div:first-child > *",
  ".two-column > div:not(.section-heading) > *",
  ".about-lead > .container > *", ".about-capabilities > *",
  ".stack-section > .container > div > *",
  ".partnership-banner > :not(.partnership-symbol)",
  ".faq-section > div:first-child > *", ".faq-list > details",
  ".contact-aside > :is(.eyebrow, h2, p, .contact-method)",
  ".cta-section > :not(.cta-orbit)",
].join(",");

/** Small, bounded visual-only scroll response. Measurements happen on resize,
 * not on scroll; the original dashboard transform remains the resting pose. */
function dashboardParallax(hero: HTMLElement, visual: HTMLElement) {
  const desktop = window.matchMedia("(min-width: 1100px)");
  const tablet = window.matchMedia("(min-width: 768px)");
  let top = 0;
  let range = 1;
  let frame = 0;
  let visible = false;
  let listening = false;

  const reset = () => {
    visual.style.removeProperty("--dashboard-y");
    visual.style.removeProperty("--dashboard-yaw");
    visual.style.removeProperty("--dashboard-pitch");
  };
  const render = () => {
    frame = 0;
    const progress = Math.min(1, Math.max(0, (window.scrollY - top) / range));
    const intensity = desktop.matches ? 1 : 0.5;
    visual.style.setProperty("--dashboard-y", `${(progress * 20 * intensity).toFixed(2)}px`);
    visual.style.setProperty("--dashboard-yaw", `${(progress * 1.5 * intensity).toFixed(3)}deg`);
    visual.style.setProperty("--dashboard-pitch", `${(-progress * 0.75 * intensity).toFixed(3)}deg`);
  };
  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(render);
  };
  const sync = () => {
    const enabled = visible && tablet.matches && !document.hidden;
    if (enabled && !listening) window.addEventListener("scroll", schedule, { passive: true });
    if (!enabled && listening) window.removeEventListener("scroll", schedule);
    listening = enabled;
    cancelAnimationFrame(frame);
    frame = 0;
    if (enabled) schedule();
    else reset();
  };
  const measure = () => {
    const bounds = hero.getBoundingClientRect();
    top = bounds.top + window.scrollY;
    range = Math.max(1, bounds.height);
    sync();
  };
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    sync();
  });
  observer.observe(hero);
  const resize = typeof ResizeObserver === "function" ? new ResizeObserver(measure) : null;
  resize?.observe(hero);
  window.addEventListener("resize", measure, { passive: true });
  document.addEventListener("visibilitychange", sync);
  measure();
  return () => {
    observer.disconnect();
    resize?.disconnect();
    window.removeEventListener("resize", measure);
    window.removeEventListener("scroll", schedule);
    document.removeEventListener("visibilitychange", sync);
    cancelAnimationFrame(frame);
    reset();
  };
}

const PENDING = "data-motion-pending";

export function usePageMotion(scope: RefObject<HTMLElement | null>, route: string) {
  useEffect(() => {
    const root = scope.current;
    if (!root || typeof IntersectionObserver !== "function" || !Element.prototype.animate) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const seen = new WeakSet<Element>();
    const pending = new Set<HTMLElement>();
    const active = new Map<Element, Animation>();
    let observer: IntersectionObserver | undefined;
    let mutations: MutationObserver | undefined;
    let stopParallax: (() => void) | undefined;
    let dashboard: Element | null = null;
    let frame = 0;

    const release = (target: HTMLElement) => {
      target.removeAttribute(PENDING);
      pending.delete(target);
      observer?.unobserve(target);
    };
    const finish = (target: Element) => {
      active.get(target)?.cancel(); // Underlying styles are always fully visible.
      active.delete(target);
    };
    const focus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      for (const target of pending) if (target.contains(event.target)) release(target);
      for (const target of active.keys()) if (target.contains(event.target)) finish(target);
    };
    const scan = () => {
      frame = 0;
      const fresh: HTMLElement[] = [];
      root.querySelectorAll<HTMLElement>(revealTargets).forEach(target => {
        if (seen.has(target)) return;
        seen.add(target);
        // Avoid compounded reveals when a reusable wrapper already owns motion.
        const parent = target.parentElement?.closest(revealTargets);
        if (parent && root.contains(parent)) return;
        fresh.push(target);
      });
      // Read every position first, then write, so a scan costs one layout pass.
      // Only content that starts below the fold is held back: anything already on
      // screen (prerendered first paint, restored scroll, deep links) stays put.
      const fold = window.innerHeight;
      const below = fresh.filter(target => target.getBoundingClientRect().top >= fold);
      for (const target of below) {
        target.setAttribute(PENDING, "");
        pending.add(target);
        observer?.observe(target);
      }
      const next = root.querySelector<HTMLElement>(".hero .product-window");
      if (next !== dashboard) {
        stopParallax?.();
        dashboard = next;
        const hero = next?.closest<HTMLElement>(".hero");
        stopParallax = next && hero ? dashboardParallax(hero, next) : undefined;
      }
    };
    const stop = () => {
      observer?.disconnect();
      mutations?.disconnect();
      stopParallax?.();
      dashboard = null;
      cancelAnimationFrame(frame);
      frame = 0;
      for (const target of [...pending]) release(target);
      for (const target of active.keys()) finish(target);
    };
    const reveal = (entries: IntersectionObserverEntry[]) => {
      const batches = new Map<Element | null, number>();
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const target = entry.target as HTMLElement;
        const viewport = entry.rootBounds?.height ?? window.innerHeight;
        const fromAbove = entry.boundingClientRect.top < 0;
        // Tall blocks can never reach 15%; a quarter of the viewport is enough.
        const enough = entry.intersectionRatio >= 0.15 || entry.intersectionRect.height >= viewport * 0.25;
        if (!fromAbove && !enough) continue;
        release(target);
        // Jumping past content (End key, anchors) shows it without replaying motion.
        if (fromAbove || target.contains(document.activeElement)) continue;
        // Stagger only siblings that arrive together, so a lone late card is not delayed.
        const group = target.parentElement;
        const index = batches.get(group) ?? 0;
        batches.set(group, index + 1);
        const delay = Number(target.dataset.motionDelay) || Math.min(index, 4) * 90;
        try {
          const animation = target.animate([
            { opacity: 0, translate: "0 24px" },
            { opacity: 1, translate: "0 0" },
          ], {
            duration: 680,
            delay: Math.min(360, delay),
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "backwards",
          });
          active.set(target, animation);
          animation.onfinish = () => finish(target);
        } catch { /* Unsupported animation properties leave content visible. */ }
      }
    };
    const start = () => {
      if (preference.matches) return;
      observer = new IntersectionObserver(reveal, { threshold: [0, 0.15, 0.3] });
      // Measure after the layout's route-change scroll reset has been applied.
      frame = requestAnimationFrame(scan);
      mutations = new MutationObserver(() => {
        if (!frame) frame = requestAnimationFrame(scan);
      });
      // Lazy route content and existing filtered cards share the same observer.
      mutations.observe(root, { childList: true, subtree: true });
    };
    const change = () => { stop(); start(); };
    const print = () => { for (const target of [...pending]) release(target); };
    root.addEventListener("focusin", focus);
    preference.addEventListener("change", change);
    window.addEventListener("beforeprint", print);
    start();
    return () => {
      stop();
      root.removeEventListener("focusin", focus);
      preference.removeEventListener("change", change);
      window.removeEventListener("beforeprint", print);
    };
  }, [scope, route]);
}

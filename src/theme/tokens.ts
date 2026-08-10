/**
 * JS-side access to the brand palette for contexts CSS can't reach — canvas
 * drawing, inline styles, etc.
 *
 * This file holds NO color literals of its own. Every value here is read at
 * call time from the `--brand-*` custom properties defined in
 * src/theme/theme.css (the single source of truth), then converted from HSL
 * to RGB/hex. Change a brand color in theme.css and everything below follows
 * automatically — there is nothing to keep "in sync" by hand.
 */

/** Names of the brand primitive custom properties declared in theme.css. */
const BRAND_CSS_VARS = {
  gold: '--brand-gold',
  goldLight: '--brand-gold-light',
  goldDark: '--brand-gold-dark',
  charcoal: '--brand-charcoal',
  charcoalLight: '--brand-charcoal-light',
  white: '--brand-white',
  surface: '--brand-surface',
} as const;

type BrandColorName = keyof typeof BRAND_CSS_VARS;
type Rgb = [number, number, number];

/** Parses a CSS "H S% L%" triplet (theme.css's storage format) into numbers. */
function parseHslTriplet(raw: string): [number, number, number] | null {
  const match = raw.trim().match(/^(-?[\d.]+)\s+([\d.]+)%\s+([\d.]+)%$/);
  if (!match) return null;
  return [parseFloat(match[1]), parseFloat(match[2]), parseFloat(match[3])];
}

function hslToRgb(h: number, s: number, l: number): Rgb {
  const sFrac = s / 100;
  const lFrac = l / 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = sFrac * Math.min(lFrac, 1 - lFrac);
  const f = (n: number) => lFrac - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [Math.round(255 * f(0)), Math.round(255 * f(8)), Math.round(255 * f(4))];
}

export function rgbToHex([r, g, b]: Rgb): string {
  const channel = (n: number) => n.toString(16).padStart(2, '0');
  return `#${channel(r)}${channel(g)}${channel(b)}`.toUpperCase();
}

/**
 * Reads a `--brand-*` custom property off the document root and converts it
 * to RGB. Falls back to mid-grey with a console warning if theme.css hasn't
 * loaded or the variable is missing/malformed — that fallback is deliberately
 * NOT a brand color, so it can never masquerade as a valid (if stale) brand
 * value.
 */
function readBrandVarRgb(varName: string): Rgb {
  if (typeof document === 'undefined') {
    console.warn(`[theme] Cannot read ${varName}: no DOM available (non-browser environment).`);
    return [128, 128, 128];
  }
  const raw = getComputedStyle(document.documentElement).getPropertyValue(varName);
  const triplet = raw ? parseHslTriplet(raw) : null;
  if (!triplet) {
    console.warn(`[theme] CSS variable ${varName} is missing or malformed; check src/theme/theme.css.`);
    return [128, 128, 128];
  }
  return hslToRgb(...triplet);
}

/** Live brand palette as RGB tuples, derived from theme.css at call time. */
export function getBrandColorsRgb(): Record<BrandColorName, Rgb> {
  const entries = (Object.keys(BRAND_CSS_VARS) as BrandColorName[]).map(
    (name) => [name, readBrandVarRgb(BRAND_CSS_VARS[name])] as const,
  );
  return Object.fromEntries(entries) as Record<BrandColorName, Rgb>;
}

/** Live brand palette as hex strings, derived from theme.css at call time. */
export function getBrandColorsHex(): Record<BrandColorName, string> {
  const rgb = getBrandColorsRgb();
  const entries = (Object.keys(rgb) as BrandColorName[]).map(
    (name) => [name, rgbToHex(rgb[name])] as const,
  );
  return Object.fromEntries(entries) as Record<BrandColorName, string>;
}

/**
 * Ordered gradient stops for the hero particle field: light gold -> gold ->
 * charcoal. Computed fresh from theme.css each call.
 */
export function getParticleGradientStops(): Array<{ stop: number; rgb: Rgb }> {
  const colors = getBrandColorsRgb();
  return [
    { stop: 0, rgb: colors.goldLight },
    { stop: 0.5, rgb: colors.gold },
    { stop: 1, rgb: colors.charcoalLight },
  ];
}

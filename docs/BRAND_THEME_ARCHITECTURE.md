# Brand & Theme Architecture

Status: implemented and verified (`tsc -b` and `vite build` both pass clean as of this writing).

This document describes how Trovix's brand colors, design tokens, and logo
assets are wired through the codebase. It exists so a future rebrand — a new
gold shade, a new logo file, a light/dark tweak — touches one place instead
of dozens of components.

## 1. Centralized architecture and source of truth

All brand color lives in exactly one file: **`src/theme/theme.css`**. It
defines a small set of raw brand primitives (gold, charcoal, white, surface,
border) as CSS custom properties, then maps semantic UI roles (`--primary`,
`--card`, `--border`, etc.) onto those primitives for both light and dark
mode.

Everything else *reads from* `theme.css` — nothing else *defines* a brand
color:

```
src/theme/theme.css   ← single source of truth (CSS custom properties)
        │
        ├─→ tailwind.config.js   (gold/charcoal/primary Tailwind colors → hsl(var(--brand-*)))
        ├─→ globals.css          (@import's theme.css; base layer only, no colors)
        ├─→ src/theme/tokens.ts  (reads the live CSS vars at runtime for canvas/JS use)
        └─→ every component      (via Tailwind utility classes: bg-gold, text-charcoal, bg-primary, …)
```

Because Tailwind's `gold`/`charcoal`/`primary`/etc. colors are generated as
`hsl(var(--brand-gold))`-style values rather than static hex, **every
Tailwind class in the app that uses those names is already reading from
`theme.css` — there is no separate "component-level" copy of the palette to
hunt down.**

## 2. The `src/theme/` module

| File | Role |
|---|---|
| `theme.css` | Source of truth. Brand primitives + semantic role tokens (light & dark) + the `.glass-effect` / `.gradient-text` / `.glow-effect` utility classes. |
| `tokens.ts` | JS-side access to the palette for contexts CSS can't reach (canvas). Contains **no color literals** — every value is derived at call time from the live `--brand-*` custom properties. |
| `logoAssets.ts` | Single registry of logo image imports. |
| `BrandLogo.tsx` | Reusable `<BrandLogo />` React component (icon + optional wordmark) used by `Navbar` and `Footer`. |

### `theme.css`

```css
@layer base {
  :root {
    /* ---- Brand primitives ------------------------------------------- */
    --brand-gold: 46 65% 52%;            /* #D4AF37 */
    --brand-gold-light: 45 74% 65%;      /* #E8C766 */
    --brand-gold-dark: 43 61% 45%;       /* #B8912C */
    --brand-charcoal: 221 39% 11%;       /* #111827 */
    --brand-charcoal-light: 215 28% 17%; /* #1F2937 */
    --brand-white: 0 0% 100%;
    --brand-surface: 220 14% 96%;        /* #F3F4F6 */
    --brand-border: 220 13% 90%;

    /* ---- Semantic role tokens (light theme) -------------------------- */
    --background: var(--brand-white);
    --foreground: var(--brand-charcoal);
    --primary: var(--brand-gold);
    --primary-foreground: var(--brand-charcoal);
    --primary-hover: var(--brand-gold-dark);
    /* … secondary, muted, accent, card, popover, border, input, ring, radius */
  }

  .dark {
    /* neutrals hand-tuned per role for dark-surface hierarchy */
    --primary: var(--brand-gold);        /* same brand gold, not a re-picked literal */
    --primary-foreground: var(--brand-charcoal);
    --primary-hover: var(--brand-gold-light);
    --ring: var(--brand-gold);
    /* … */
  }

  .glass-effect  { @apply bg-card/90 backdrop-blur-xl border border-border; }
  .gradient-text { @apply bg-gradient-to-r from-gold-dark via-gold-light to-gold-dark bg-clip-text text-transparent; }
  .glow-effect   { box-shadow: 0 0 20px hsl(var(--brand-gold) / 0.35); }
}
```

Values are stored as raw `H S% L%` triplets (no `hsl()` wrapper) so they can
be consumed either as `hsl(var(--token))` (opaque) or
`hsl(var(--token) / <alpha>)` (with alpha) — this is the pattern Tailwind's
CSS-variable color convention expects, and it's what `theme.css`, the
`.glow-effect` shadow, and `tailwind.config.js` all use.

Note that both light and dark mode's `--primary`/`--ring` point at
`var(--brand-gold)` directly — there is deliberately no separate "dark mode
gold" literal, so the two themes can never silently drift apart.

### `tokens.ts`

```ts
function readBrandVarRgb(varName: string): Rgb {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(varName);
  const triplet = parseHslTriplet(raw);
  if (!triplet) { console.warn(...); return [128, 128, 128]; } // never a brand color
  return hslToRgb(...triplet);
}

export function getBrandColorsRgb(): Record<BrandColorName, Rgb> { … }
export function getBrandColorsHex(): Record<BrandColorName, string> { … }
export function getParticleGradientStops(): Array<{ stop: number; rgb: Rgb }> { … }
```

`tokens.ts` holds zero hex/rgb/hsl literals of its own. `getBrandColorsRgb()`
reads each `--brand-*` custom property straight off `document.documentElement`
via `getComputedStyle`, parses the `"H S% L%"` triplet, and converts it to
RGB (and `getBrandColorsHex()` converts that to hex). If `theme.css` hasn't
loaded or a variable is missing, the reader falls back to mid-grey
`[128, 128, 128]` with a `console.warn` — a deliberately *non-brand* color,
so a broken read can never be mistaken for a valid (if stale) brand value.

See §5 for how this is consumed.

### `logoAssets.ts` / `BrandLogo.tsx`

See §6.

## 3. Tailwind → CSS variable integration

`tailwind.config.js` extends the color palette so that `gold`, `charcoal`,
and `primary.hover` resolve through the same CSS variables as everything
else, instead of hardcoded hex:

```js
colors: {
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
    hover: "hsl(var(--primary-hover))",
  },
  // …
  gold: {
    DEFAULT: "hsl(var(--brand-gold))",
    light: "hsl(var(--brand-gold-light))",
    dark: "hsl(var(--brand-gold-dark))",
  },
  charcoal: {
    DEFAULT: "hsl(var(--brand-charcoal))",
    light: "hsl(var(--brand-charcoal-light))",
  },
}
```

`globals.css` wires the pieces together in order:

```css
@import "tailwindcss";
@import "./theme/theme.css";
@config "../tailwind.config.js";
```

Result: `bg-gold`, `text-charcoal`, `bg-primary`, `text-primary-foreground`,
`ring-gold`, `from-gold-dark`, `hover:bg-gold-dark`, etc. are all ordinary
Tailwind utility classes throughout the app — but every one of them resolves
through a `--brand-*`/`--primary`/etc. CSS variable defined once in
`theme.css`.

## 4. Semantic brand/design tokens

| Token | Light value | Dark value | Used for |
|---|---|---|---|
| `--brand-gold` | `46 65% 52%` (`#D4AF37`) | *(same)* | Primary brand accent |
| `--brand-gold-light` | `45 74% 65%` (`#E8C766`) | *(same)* | Gradient highlight stop, dark-mode hover |
| `--brand-gold-dark` | `43 61% 45%` (`#B8912C`) | *(same)* | Gradient shadow stop, light-mode hover |
| `--brand-charcoal` | `221 39% 11%` (`#111827`) | *(same)* | Secondary brand color, text-on-gold |
| `--brand-charcoal-light` | `215 28% 17%` (`#1F2937`) | *(same)* | Particle gradient tail |
| `--brand-white` | `0 0% 100%` | — | Base background |
| `--brand-surface` | `220 14% 96%` (`#F3F4F6`) | — | Light neutral surface (muted/secondary/accent) |
| `--brand-border` | `220 13% 90%` | — | Light-mode border/input |
| `--primary` / `--primary-foreground` / `--primary-hover` | gold / charcoal / gold-dark | gold / charcoal / gold-light | Buttons, links, focus rings, active states |
| `--background` / `--foreground` | white / charcoal | dark navy-charcoal / near-white | Page background & body text |
| `--card`, `--popover`, `--muted`, `--accent`, `--secondary` (+ `-foreground`) | role-specific neutrals derived from the primitives above | independently tuned dark-surface neutrals | Card/panel surfaces, subtle backgrounds |
| `--border`, `--input` | `var(--brand-border)` | dark neutral | Borders, form field outlines |
| `--ring` | `var(--brand-gold)` | `var(--brand-gold)` | Focus ring color |
| `--destructive` / `--destructive-foreground` | red | red (adjusted) | Error states — **not** a brand color, kept separate by design |
| `--radius` | `0.5rem` | — | Corner rounding (not a color, included for completeness) |

Dark-mode's neutral surface tokens (`--background`, `--card`, `--popover`,
`--muted`, `--border`, `--accent`, `--secondary`) are intentionally
hand-tuned per role rather than derived from a single primitive — a dark UI
needs distinct steps of lightness to separate background from card from
popover, so these are standard shadcn/ui-style role tokens, not brand colors
requiring further tokenization.

## 5. Runtime JS/canvas color handling

The one place color needs to exist as raw numbers in JavaScript (rather than
a CSS class) is `src/components/shared/ParticleBackground.tsx`, which paints
the hero's animated dot field on a `<canvas>` and needs `rgba(r, g, b, a)`
strings per frame.

```tsx
import { getParticleGradientStops } from '@/theme/tokens';

useEffect(() => {
  // Read once per mount — brand primitives don't change between light/dark,
  // so there's no need to re-read on every frame or theme toggle.
  const colorStops = getParticleGradientStops();
  // … colorAt(t, colorStops) interpolates between the 3 stops per particle,
  // draw() writes `rgba(${r}, ${g}, ${b}, ${alpha})` to ctx.fillStyle.
}, [...]);
```

`getParticleGradientStops()` calls `getBrandColorsRgb()`, which reads
`--brand-gold-light` / `--brand-gold` / `--brand-charcoal-light` from the
live DOM. The gradient stops are computed **once per component mount**
(inside the `useEffect`, not at module load) so the DOM/CSS is guaranteed to
be ready, and passed down into the per-frame `colorAt()` interpolation as a
plain argument. There is no cached/duplicated copy — if `theme.css` changes,
the next mount picks up the new gold automatically.

## 6. Logo asset architecture

```
src/assets/trovix_logo_assets/     ← raw logo art (icons, favicons, wordmark PNGs)
        │
        └─→ src/theme/logoAssets.ts   ← the only file that imports from the folder above
                    │
                    └─→ src/theme/BrandLogo.tsx   ← the only component that renders logo art
                                │
                                ├─→ Navbar.tsx   <BrandLogo className="group-hover:scale-110 transition-transform" />
                                └─→ Footer.tsx   <BrandLogo />
```

`logoAssets.ts` currently exports one entry, `icon` (the circular "T" mark,
`trovix-icon-128.png`). `BrandLogo.tsx` renders that icon plus an optional
"TROVIX" wordmark (styled with the `.gradient-text` utility, so it also
tracks the gold gradient automatically), with props for size and
extra classes:

```tsx
<BrandLogo
  size={40}              // icon pixel size, default 40
  showWordmark={true}    // show "TROVIX" text next to the icon
  className=""           // extra classes on the <img>
  wordmarkClassName=""   // extra classes on the wordmark <span>
  wrapperClassName=""    // extra classes on the wrapping <span>
/>
```

Swapping the logo image site-wide requires editing exactly one line in
`logoAssets.ts`. Favicons (`public/favicon.ico`, `public/trovix-icon-*.png`)
are copied static files referenced directly from `index.html`'s `<link
rel="icon">` tags — they aren't run through `BrandLogo`/`logoAssets.ts`
because browsers require favicons to resolve as plain static URLs, not
bundled JS module imports.

## 7. Light/dark theme behavior

`ThemeContext` (`src/contexts/ThemeContext.tsx`) toggles a `light`/`dark`
class on `<html>`, persisted to `localStorage`, defaulting to the OS
`prefers-color-scheme`. `theme.css`'s `:root` block is the light theme;
`.dark` overrides it.

- **Brand primitives** (`--brand-gold*`, `--brand-charcoal*`) do **not**
  change between themes — gold is gold in both. Only the *role* tokens that
  reference them shift (e.g. `--primary-hover` swaps from `gold-dark` in
  light mode to `gold-light` in dark mode, since a darker hover shade reads
  as *more* contrast on a light background but *less* contrast on a dark
  one).
- **Surface neutrals** (`--background`, `--card`, `--popover`, `--muted`,
  `--border`, `--accent`, `--secondary`) are redefined per theme, as is
  standard for a light/dark UI.
- `ParticleBackground` reads `theme` from `ThemeContext` only to adjust
  particle *alpha/blend mode* (brighter/additive on dark, softer/normal on
  light) — the particle *colors themselves* come from the theme-independent
  brand primitives via `tokens.ts`.

## 8. Intentional exceptions

Three cases in the codebase use a color literal instead of a token, all
deliberate:

1. **`index.html` `<meta name="theme-color" content="#D4AF37">`** — the
   mobile browser-chrome tint color. Browsers read this tag before any
   CSS/JS executes, so it structurally cannot reference a CSS custom
   property or be computed at runtime. It's commented in place pointing
   back to `--brand-gold` in `theme.css` so a future palette change is a
   visible prompt to update it too.

2. **WhatsApp green (`#25D366` / `#1fbd5a`)** in
   `src/components/shared/WhatsAppFloatButton.tsx` and `src/pages/ThankYou.tsx`
   — this is WhatsApp's own third-party brand color, not Trovix's. It's
   correct for it to stay a fixed literal and *not* move if the Trovix
   palette changes.

3. **`src/App.tsx`** — a leftover "CodeRocket.app" placeholder page (hardcoded
   `bg-[#0B0B1D]` / `text-[#FFFFFF]`, third-party branding) generated by the
   scaffolding tool this project was bootstrapped from. **It is dead code**:
   `src/main.tsx` builds the app's router tree directly and never imports
   `App.tsx`, so this component is unreachable in the running site. It was
   left as-is (not deleted, not retheme'd) because it's outside the scope of
   Trovix's brand — it's someone else's placeholder inside an unused file.

No other hardcoded brand hex/rgb/hsl values exist in `src/` outside of
`theme.css` (where they appear only as human-readable comments next to the
canonical HSL triplets) and `tokens.ts`'s non-brand grey fallback.

## 9. Hardcoded-color policy

- **Never** add a new brand color as a literal (hex/rgb/hsl) inside a
  component, page, or inline `style`. Add or reuse a token in `theme.css`
  instead.
- **Never** duplicate a brand value as a second literal "for convenience" —
  e.g. don't hand-pick a "slightly brighter gold for dark mode" as a new raw
  triplet; either reuse `var(--brand-gold)` or add a named, documented
  primitive (`--brand-gold-light`/`-dark`) that itself only exists once.
- Non-brand, third-party colors (WhatsApp green, standard red/destructive
  states) are fine to keep as literals — they aren't part of Trovix's
  identity and shouldn't move if the brand palette changes.
- If a JS/canvas context needs a brand color, add a function to `tokens.ts`
  that derives it from the CSS variable — never hardcode a parallel RGB
  array.
- Structural exceptions (things that must be static, like `index.html`'s
  `theme-color` meta tag) must be commented with a pointer back to the
  `theme.css` token they mirror.

## 10. How to change the brand/theme in the future

**To change a color** (e.g. a new gold shade): edit the relevant
`--brand-*` value in `src/theme/theme.css` `:root`. That's it —
Tailwind utility classes, `.gradient-text`/`.glow-effect`/`.glass-effect`,
the particle field, and every button/link/card/focus-ring pick it up
automatically on next render. Only exception: manually update the
`index.html` `theme-color` meta comment (§8.1) to match.

**To change the logo**: edit `src/theme/logoAssets.ts` to import a
different file from `src/assets/trovix_logo_assets/` (or a new folder). Every
consumer of `<BrandLogo />` updates automatically. To change favicon art,
replace the files copied into `public/` and referenced in `index.html`.

**To add a new semantic role** (e.g. a "success" color): add
`--success`/`--success-foreground` primitives to both `:root` and `.dark` in
`theme.css`, then register them in `tailwind.config.js`'s `colors` block the
same way `destructive` is registered.

**To add a new JS/canvas consumer** of brand colors: import
`getBrandColorsRgb()` / `getBrandColorsHex()` from `@/theme/tokens` and call
it where needed (inside a `useEffect`/event handler, not at module scope, so
the DOM is guaranteed ready) — do not hardcode a new literal array.

## 11. Key files and responsibilities

| File | Responsibility |
|---|---|
| `src/theme/theme.css` | **Source of truth.** Brand primitives, semantic role tokens (light + dark), brand utility classes. |
| `src/theme/tokens.ts` | Runtime CSS-var → RGB/hex derivation for JS/canvas consumers. No literals. |
| `src/theme/logoAssets.ts` | Single import point for logo art. |
| `src/theme/BrandLogo.tsx` | Reusable logo component (icon + wordmark). |
| `tailwind.config.js` | Maps Tailwind color names (`gold`, `charcoal`, `primary`, …) onto `hsl(var(--brand-*))`. |
| `src/globals.css` | Imports `theme.css`, Tailwind base layer (fonts, resets) — no color values. |
| `src/components/layout/Navbar.tsx`, `Footer.tsx` | Consume `<BrandLogo />`; all colors via Tailwind token classes. |
| `src/components/shared/ParticleBackground.tsx` | Consumes `getParticleGradientStops()` for the hero canvas animation. |
| `src/components/ui/button.tsx` | Button variants via `bg-gold`/`bg-primary`/`bg-secondary` token classes. |
| `index.html` | One documented static exception (`theme-color` meta). |

## 12. Verification / build status

- `npx tsc -b` — passes clean, no errors.
- `npx vite build` — passes clean, no errors.
- Visual regression check: production build screenshotted before and after
  the `tokens.ts` runtime-derivation refactor produced byte-identical PNG
  output (same file size, same pixels) for the hero section — confirming the
  CSS-var → RGB derivation reproduces the exact same colors as the previous
  hardcoded values.
- Full-repo grep for hardcoded hex/rgb/hsl brand values (`src/`, `index.html`,
  `tailwind.config.js`) confirmed no remaining Trovix brand-color literals
  outside `theme.css`/`tokens.ts`, aside from the three documented
  exceptions in §8.

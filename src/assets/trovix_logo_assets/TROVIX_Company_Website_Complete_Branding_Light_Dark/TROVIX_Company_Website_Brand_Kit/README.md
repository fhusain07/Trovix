# TROVIX — Company Website Branding Kit

**For:** TROVIX company website (trovixtech.com); **not** TROVIX Campus ERP.

Approved company-only wordmark: **T emblem + TROVIX + gold arc**. NO "CAMPUS", NO book icon.

## Contents
- `logos/light/` — dark charcoal letters + gold accents for LIGHT backgrounds; transparent PNG 600, 1200, 2400, 4000 pixels wide
- `logos/dark/` — near-white letters + gold accents for DARK backgrounds; transparent PNG, same sizes
- `logos/source/` — approved new TROVIX-only generated raster artwork
- `icons/light/` and `icons/dark/` — cropped T emblem from the TROVIX-only logo, transparent PNG in 64–1024 sizes
- `favicons/` — light & dark backgrounds: PNG/ICO, 16–512 sizes
- `social/` — 1200x630 preview cards in light and dark
- `theme/` — full light/dark colors in JSON, CSS, and TypeScript
- `guides/` — Codex implementation prompt
- `examples/` — example head tags

## Usage
Use `logos/light/` on white or light backgrounds and `logos/dark/` on charcoal or dark backgrounds. For the browser tab use icon-only favicons. If the site has a user theme toggle, favicon mode should ideally follow the actual selected mode, not only operating-system preference.

## Asset fidelity caveat
The TROVIX-only logo is generated high-resolution PNG, not original hand-edited native vector paths. Included SVG images contain embedded PNG rather than editable SVG path geometry. Keep master PNG; a designer can vectorize the identity for print / very large-scale use. The T-only badge is cropped from that same approved company wordmark to keep the mark consistent. The dark wordmark was color-adapted from that same artwork.

## Important scope boundary
Do not replace TROVIX Campus logos in the school ERP/mobile apps. The company's logo has **no Campus and no book**. Core application behavior, content, APIs, and business logic are out of scope.

# TROVIX Campus — Web Branding Package

This kit combines the user-supplied **original full-brand vector logos** with a newly generated **T-only raster emblem** for browser tab, compact navigation, and app-icon use. No application code has been modified.

## What is where
- `original-source/`: untouched source SVG logos
- `01-full-logos/`: original full mark and light-readable version, SVG + 1200/2400/4000px PNG exports
- `02-T-icon/`: T-only transparent PNG plus contrasting dark and light rounded-square badge PNGs, 16–1024px
- `03-favicons/`: ICO, browser PNGs, apple touch icon, PWA icon PNGs and example manifest
- `04-web-ready/`: directly copyable public branding assets, sample isolated brand tokens, integration instructions
- `06-guides/`: audit-first Codex prompt, QA checklist

## Intended usage
- Login page and branding sections: full logo adjusted to background lightness
- Collapsed sidebar: T-only emblem
- Browser tab/favicon: dark-badge `favicon.ico` (works against light or dark browser tabs)
- App icon/PWA: 192/512px dark-badge icon
- Light mode: light-readable full logo, choose dark badge T icon for best contrast
- Dark mode: full original dark logo, transparent T logo on dark panels or dark badge
- Schools that already customize sidebar colors retain their overrides

## Critical distinctions
- Full logo SVGs are source-derived vectors. T-only icon was AI-rendered and delivered as **PNG raster**, not a true production SVG. For a pixel-perfect matching vector T, commission a manual vector extraction of the original mark.
- The original dark full logo **includes a dark background**. The light readable alternate has transparent backing. Inspect on actual app header surfaces.
- Color codes are recommended normalized brand tokens rather than certified exact Pantone specifications.
- This package has NOT been implemented or tested inside the SMS Web codebase; the Codex document defines required audit and acceptance tests.
- All website/PWA integration examples are templates, not an assertion of the app's existing file names or theme APIs.

# TROVIX company website — branding implementation prompt

Project: existing public TROVIX company website at trovixtech.com, NOT the TROVIX Campus School ERP.

The supplied TROVIX Company Website Brand Kit contains the approved TROVIX-only artwork (NO CAMPUS, NO BOOK), dark and light wordmarks, T-only icon variants, browser favicons, OG cards, design tokens, and examples.

1. Audit the site's existing routes, light/dark theme mode, user mode persistence, header/navigation, asset loading, public metadata, favicon, and responsive layouts.
2. Replace only company-website logo references with these TROVIX-only assets; choose the LIGHT variant on light surfaces and DARK variant on dark surfaces. Preserve original proportions and whitespace. Use T-only for favicons and compact branding.
3. Integrate theme tokens into the CURRENT theme system without introducing a competing provider. Respect existing theme toggle, stored preference, and system fallback.
4. Audit contrast and visual quality for light/dark nav, hero, CTA, cards, contact forms, menus, footer, and mobile states. Keep original content and layout intact unless a theme-only correction is necessary.
5. Preserve marketing content, navigation behavior, contact forms, analytics, SEO URLs, APIs, authentication, integrations, deployment config and business logic. Do not modify TROVIX Campus assets in any other project.
6. Browser favicons and social OG cards should be wired in by existing framework conventions; avoid hardcoded duplicate <head> tags. OG defaults can use the light card unless your stack supports per-theme previews.
7. Confirm production build and lint; test responsive header, transparent backgrounds, theme toggle, favicon, caching, link previews and accessibility.

Important: The source new TROVIX-only logo is raster artwork. SVG files here are embedded-PNG wrappers, NOT native editable vectors. Do not describe them as infinitely scalable editable path vectors. Do not change or redesign the logo. Report modified files and test results.

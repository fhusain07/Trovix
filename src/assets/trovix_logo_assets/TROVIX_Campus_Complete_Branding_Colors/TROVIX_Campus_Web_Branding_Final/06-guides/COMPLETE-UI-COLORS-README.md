# TROVIX Campus Complete Web Branding & UI Colors

This is a proposed design system, not a claim that these values are already used by your SMS web application.

## Implementation priorities
1. Inspect actual theme provider, current CSS variables, MUI ThemeProvider, storage and tenant preference logic.
2. Preserve user's and school's customized sidebar colors and existing dark/light theme switching.
3. Apply these brand and UI variables only as *fallbacks* to uncustomized parts of the app. Do not globally replace existing theme tokens.
4. Use full dark logo on dark surfaces, readable light logo on light surfaces; the T-only badge for favicons, PWA, collapsed sidebar.
5. Verify accessible contrast in active, hover, disabled, input, status, chart and selected states; adjust tokens if needed.
6. No API, routing, auth, data model, business logic or feature behavior changes.
7. Validate with at least two tenants having distinct custom sidebar settings, both display modes, persistence after reload, and a clean tenant.

## Files
- `06-guides/COMPLETE-UI-COLOR-SYSTEM.json`: full hex code registry.
- `04-web-ready/src/trovix-complete-ui-tokens.css`: namespaced CSS tokens for default themes.
- Existing assets, favicons, original vector logo and first-audit Codex instructions remain included.

## Accessibility
Do not assume a brand hex automatically passes WCAG for every text pairing. Test actual typography/contrast, including UI status chips and gold links on both themes.

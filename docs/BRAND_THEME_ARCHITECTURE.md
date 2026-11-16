# Trovix branding and theme architecture

Current source: `src/assets/trovix_logo_assets/TROVIX_Campus_Complete_Branding_Colors/TROVIX_Campus_Web_Branding_Final/`.

This pack supplies the readable light-mode logo and dedicated T-only icons. The earlier eight-file `trovix-new-branding` folder and 15 loose legacy logo/icon files are preserved for future use in [the legacy branding backup](../backups/trovix-legacy-branding-2026-11-15.zip), outside the active website assets. All 70 files in the current pack remain in place and unchanged; the active public favicons continue to use this pack's exports.

## Asset audit and selection

The pack contains 51 PNGs, 6 SVGs, 2 ICO files, and supporting guides, color registries, CSS examples, and manifest examples. All 57 image files were previewed, including the duplicate web-ready exports and the original source SVGs.

| Group | Available artwork | Selected use |
| --- | --- | --- |
| `01-full-logos/light/` | Transparent, dark-lettered full logo; SVG viewBox 3770.2 × 928.26; 1200/2400/4000px PNGs | Header, footer, and error fallback in light mode |
| `01-full-logos/dark/` | Original ivory-lettered full logo with dark backing and original spacing; SVG viewBox 4689.79 × 1705.04; 1200/2400/4000px PNGs | Header, footer, and error fallback in dark mode; organization schema and social card |
| `02-T-icon/` | Transparent, dark-badge, and light-badge PNG variants, each in 16/32/48/64/128/180/192/256/512/1024px sizes | Dark-badge 128px PNG displayed at 64px in the loading state |
| `03-favicons/` | Dedicated ICO; 16/32/48px browser PNGs; 180px touch icon; 192/512px app icons; light/dark variants | Supplied dark-badge ICO and PNGs copied byte-for-byte to existing public icon URLs |
| `04-web-ready/` | Duplicate web assets plus suggested CSS and integration examples | Audited; actual integration uses this website's existing theme architecture |
| `06-guides/` | Brand and complete UI JSON registries, readme, implementation notes, acceptance checklist | Source for palette and usage decisions |
| `original-source/` | Original dark and pale-lettered full SVGs | Preserved source references |

Full wordmarks remain original vector SVGs. The supplied T-only artwork is raster PNG. Browser tabs use the supplied ICO and size-specific PNGs. The existing `/favicon.svg` URL is retained as a compatibility wrapper around the supplied 512px PNG badge; it is not described as a vector T icon.

## Effective theme and layout

`BrandLogo.tsx` reads the existing `useTheme()` context. The saved application preference selects the logo, independently of the operating-system color scheme. The shared component renders exactly one image per placement.

Light-mode logos now have transparent backing with readable dark lettering. Dark-mode logos retain their supplied dark canvas and internal spacing. Neither SVG has been cropped, recolored, or edited. Fixed logo frames and proportional image sizing keep header and footer placement stable when switching themes.

Desktop header frames are 196 × 72px; mobile frames are 160 × 60px. Footer frames are 230 × 84px. Each SVG retains its natural aspect ratio inside its frame. Original content, navigation, forms, and responsive layout structure are retained.

## Color audit: previous integration to final pack

Values follow `06-guides/COMPLETE-UI-COLOR-SYSTEM.json`, adapted to existing semantic roles.

| Role | Previous | Final |
| --- | --- | --- |
| Brand gold | #EBB00B | #EBB00B |
| Brand bronze | #AB7029 | #AB7029 |
| Dark canvas | #1C1B17 | #1C1B17 |
| Light canvas | #FAF9F6 | #F8F9FB |
| Light body text | #2B2A29 | #202124 |
| Dark body text | #FEFEFE | #F9FAFB |
| Light secondary text | #656157 | #626873 |
| Dark secondary text | #B8B4A8 | #B7B9BE |
| Light link/accent ink | #80531E | #886000 |
| Dark link/accent ink | #EBB00B | #FFD15A |
| Light filled button / label | #EBB00B / #1C1B17 | #8A6000 / #FFFFFF |
| Light filled-button hover | #F2C34B | #704D00 |
| Dark filled button / label | #EBB00B / #1C1B17 | #EBB00B / #1C1B17 |
| Dark filled-button hover | #F2C34B | #FFD15A |
| Light card | #FEFEFE | #FFFFFF |
| Dark secondary surface / card | #23221D / #292821 | #252420 / #302E29 |
| Light border | #DDD8CB | #E1E4E8 |
| Dark border | #464337 | #45433E |
| Light accent surface | #F5EBCD | #FFF5D6 |

The supplied focus example #C58B00 has 2.82:1 contrast against the light canvas. The implemented shared focus-ring role uses the supplied #8A6000 button shade for 5.31:1 contrast. Form boundaries use the supplied #737985 gray, giving 4.37:1 against white and 3.10:1 against the dark input surface. Secondary text uses #626873 in light mode rather than the lower-contrast muted example.

Success, information, and error roles remain semantic colors. The product illustration keeps dark surfaces in both themes, with separate readable status tints. Its gold action label explicitly retains dark ink when the rest of the light theme uses white button labels.

## Files and responsibilities

- `src/theme/logoAssets.ts`: direct imports from the new pack.
- `src/theme/BrandLogo.tsx`: selects the appropriate original SVG using the actual application theme.
- `src/theme/theme.css`: centralized HSL primitives, theme roles, typography, focus/input, and illustration tokens.
- `src/styles/agency.css`: existing page presentation, responsive logo frames, and semantic button/input styling.
- `src/components/layout/Footer.tsx`: shared footer logo sizing.
- `src/components/shared/PageLoader.tsx`: supplied T-only loading badge.
- `index.html`: supplied ICO and 16/32/48px favicon URLs plus the touch icon.
- `scripts/prepare-brand-assets.mjs`: copies supplied icons unchanged and embeds the original full dark SVG in the site-specific share card.
- `scripts/render-brand-assets.mjs`: renders only the social PNG; it does not recreate supplied icons.
- `scripts/lib/brand-colors.mjs`: reads centralized palette values for standalone artwork.
- `src/data/metadata.ts`: existing organization logo mapping now resolves to the new registry's dark SVG.

Inter body text and Space Grotesk headings are retained through the existing font tokens. No new font files or package dependencies are required.

## Regeneration and application scope

`npm run brand:assets` copies the supplied favicon/touch/app icon exports and regenerates SVG share artwork. It also runs before production builds. `npm run brand:render` additionally refreshes the 1200 × 630 social PNG using an installed Chrome/Chromium/Edge browser.

This repository is the public marketing website. The pack's SMS-specific tenant, authentication, sidebar-customization, and PWA instructions are examples for a separate application. No tenant settings, preference resets, routes, API behavior, hosting configuration, or install behavior are introduced here. The provided manifest example remains unchanged in the source pack.

Final verification is recorded in `docs/REBRANDING_VERIFICATION.md`. Local previews and measurements for this pack are under `.trovix-review/new-pack/`.

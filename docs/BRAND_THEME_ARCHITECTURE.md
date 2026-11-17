# Trovix company branding and theme architecture

Current logo source: `src/assets/trovix_logo_assets/TROVIX_Company_Website_Complete_Branding_FIXED/TROVIX_Company_Website_Logo_Kit_FIXED/`.

Applied on November 17, 2026. This is the company website identity: the T emblem, TROVIX wordmark, and gold arc. Campus artwork is retained in its original folder for future use; active website branding uses the company kit. The [23-file legacy ZIP backup](../backups/trovix-legacy-branding-2026-11-15.zip) remains unchanged.

## Supplied assets and selected placements

Inspected all 45 fixed-kit files and previewed all 41 visual files: 33 PNGs, four native vector SVGs, two ICOs, and two JPEG cards. The supplied CorelDRAW-derived paths and clipping are preserved unchanged.

| Variation | Selected placement |
| --- | --- |
| logos/light/trovix-company-light-vector.svg | Light header, mobile header, footer, error fallback, and organization schema |
| logos/dark/trovix-company-dark-vector.svg | Corresponding dark surfaces |
| icons/{light,dark}/trovix-t-{mode}-128.png | Theme-matching loader at 64px |
| icons/dark/trovix-t-dark.svg | Native vector favicon.svg compatibility URL |
| favicons/{light,dark}/favicon.ico and favicon-{size}.png | Theme-matching browser and touch icons; all supplied sizes available publicly |
| social/og-{light,dark}-1200x630.jpg | Exact supplied JPEGs; light card is the social metadata default |
| PNG wordmarks at 600/1200/2400/4000px and other T sizes | Preserved alternatives |

Header frames remain 196 ? 72px on desktop and 160 ? 60px on mobile; the footer remains 230 ? 84px. The native wordmark viewBox is 3770.2 ? 928.26. Images retain their natural ratio and the kit's original clipping, including the golden arc and dot. The application adds no cropping or recoloring. The fixed SVGs contain editable paths rather than embedded bitmap wrappers, so PNG srcsets are no longer needed for the wordmark.

## Theme and palette mapping

The existing `.dark` selector and ThemeProvider remain the theme system. Saved user preference wins; absent a valid saved preference, the provider follows system mode and subsequent system changes. Theme restoration uses a React transition to preserve prerendered page content while lazy routes hydrate. Root colors, shared logo state, browser icons, and theme-color metadata update together before paint.

The existing HSL palette in `src/theme/theme.css`, originally mapped from the previous company kit's `theme/trovix-colors.json`, is retained for this focused logo replacement, as instructed by the fixed kit. Its UI gold (#D4AF37) and dark canvas (#0F0F11) remain compatible with the fixed artwork. The palette table below records the earlier UI migration. Tailwind, agency styles, canvas consumers, and generated standalone illustrations continue to read those centralized tokens. No competing provider or parallel token stylesheet was introduced.

| Role | Previous HEX | Current HEX |
| --- | --- | --- |
| UI gold | #EBB00B | #D4AF37 |
| Gold highlight / dark links | #FFD15A | #F5D778 |
| Deep UI gold | #AB7029 | #8A650C |
| Dark canvas | #1C1B17 | #0F0F11 |
| Dark surface | #252420 | #1B1B1F |
| Dark cards / inputs | #302E29 | #242429 |
| Dark body text | #F9FAFB | #F8F9FA |
| Dark secondary text | #B7B9BE | #B5B8C2 |
| Dark borders | #45433E | #35353B |
| Light canvas | #F8F9FB | #F8F9FB |
| Light cards / inputs | #FFFFFF | #FFFFFF |
| Light body text | #202124 | #17191D |
| Light secondary text | #626873 | #5C6472 |
| Light borders | #E1E4E8 | #E5E7EB |
| Light primary button | #8A6000 | #805A00 |
| Light primary hover | #704D00 | #8A650C |
| Dark primary hover | #FFD15A | #B88913 |
| Input boundary | #737985 | #7B8290 |
| Light focus ring | #8A6000 | #A47700 |
| Light link | #886000 | #886000 |
| Light selected surface | #FFF5D6 | #FFF1C2 |
| Dark selected surface | #40351F | #4A3915 |

Logo gradients retain their supplied colors. UI accents use the new kit's UI gold. Input boundaries use the supplied muted shade to meet 3:1 contrast. Existing accessible error text shades (#B91C1C light, #FEE2E2 dark) and pale success/info text tints are retained for readable small text. Neutral backgrounds, decorative borders, dark product illustrations, shadows, hover states, and focus treatment all follow the semantic roles.

Inter remains the body font and Space Grotesk remains the display font. The new kit does not supply a replacement font. Original content and page layouts are preserved.

## Public assets and metadata

`scripts/prepare-brand-assets.mjs` copies the supplied exports byte-for-byte into `public/branding/company/{light,dark}/` and copies both social cards into `public/branding/company/`. The build runs this automatically. `brand:render` optionally refreshes the historical PNG social URLs by converting the supplied JPEG cards through the existing headless-browser helper. The converted PNGs are checked in; normal builds do not need a browser.

The existing head links have `data-theme-icon` filenames. ThemeProvider updates their URLs from the actual selected application mode, including the touch icon. This also gives the company artwork fresh URLs instead of reusing cached Campus URLs. The default social URL is `/branding/company/og-light.jpg`. Organization schema uses the supplied readable light vector SVG on all 35 generated pages. Company image alt text is Trovix.

Legacy public favicon, PNG icon, and social URLs remain available with the company artwork. The favicon.svg compatibility URL is the original supplied T vector; og-card.svg wraps the supplied JPEG. Browser icon links include the company-fixed cache version. The portfolio abstract SVG is regenerated from the updated shared palette. Earlier source packs and ZIP backups are outside the deployed public output.

## Components and page scope

Fixed-kit changes: BrandLogo, logoAssets, index head markup, public icon/social assets, and asset preparation/rendering scripts. Existing PageLoader and organization metadata inherit the updated asset registry. ThemeContext, design tokens, styles, typography, and business logic are preserved. Header, mobile navigation, footer, error fallback, calls to action, cards, forms, legal text, and decorative elements inherit the shared identity.

All 35 production routes are covered: Home; services and eight service details; portfolio and ten case studies; About, Technologies, Partners, Contact, Careers; privacy, terms and deletion pages; thank-you, 404, and existing aliases. Layouts, copy, canonical URLs, forms, analytics, and business logic are preserved. No dependencies were added. No other project or Campus application was edited.

See [verification results](REBRANDING_VERIFICATION.md) for checks and limits.

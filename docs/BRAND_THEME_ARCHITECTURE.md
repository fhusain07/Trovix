# Trovix company branding and theme architecture

Current source: `src/assets/trovix_logo_assets/TROVIX_Company_Website_Complete_Branding_Light_Dark/TROVIX_Company_Website_Brand_Kit/`.

Applied on November 17, 2026. This is the company website identity: the T emblem, TROVIX wordmark, and gold arc. Campus artwork is retained in its original folder for future use; active website branding uses the company kit. The [23-file legacy ZIP backup](../backups/trovix-legacy-branding-2026-11-15.zip) remains unchanged.

## Supplied assets and selected placements

Inspected all 46 files and previewed all 40 image/icon files: 36 PNGs, two embedded-PNG SVGs, and two ICOs. Supporting files include the README, implementation guide, example head markup, and JSON/CSS/TypeScript color registries.

| Available variation | Selected use |
| --- | --- |
| Light transparent company wordmark: 600/1200/2400/4000px PNGs and embedded-PNG SVG | 600px PNG with supplied 1200px 2x export in light header, mobile header, footer, and error fallback |
| Dark transparent company wordmark: same sizes and SVG wrapper | Corresponding 600px/1200px exports on dark surfaces |
| Source company PNG, 2172 × 724 | Preserved master reference |
| Light/dark transparent T icons, 64/128/256/512/1024px | Corresponding 128px export displayed at 64px in the loader |
| Light/dark favicons: ICO and 16/32/48/64/180/192/512px PNGs | Theme-specific browser ICO and 16/32/48px PNGs; 180px touch icon; all sizes available under the public company paths |
| Light/dark 1200 × 630 social cards | Supplied light card is the Open Graph/Twitter default; dark card is also retained publicly |
| PREVIEW.png | Audit reference only |

Both logo variants have transparent backgrounds and use the same frame. Header frames remain 196 × 72px on desktop and 160 × 60px on mobile; the footer remains 230 × 84px. Images retain their aspect ratios, original whitespace, and supplied bytes. No artwork is cropped, recolored, or redrawn. The SVGs in this kit embed raster PNGs; they are not native editable path vectors. PNG imports avoid the larger wrapper downloads.

## Theme and palette mapping

The existing `.dark` selector and ThemeProvider remain the theme system. Saved user preference wins; absent a valid saved preference, the provider follows system mode and subsequent system changes. Theme restoration uses a React transition to preserve prerendered page content while lazy routes hydrate. Root colors, shared logo state, browser icons, and theme-color metadata update together before paint.

The supplied `theme/trovix-colors.json` is mapped into the existing HSL tokens in `src/theme/theme.css`. Tailwind, agency styles, canvas consumers, and generated standalone illustrations continue to read those centralized tokens. No competing provider or parallel token stylesheet was introduced.

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

`scripts/prepare-brand-assets.mjs` copies the supplied exports byte-for-byte into `public/branding/company/{light,dark}/` and copies both social cards into `public/branding/company/`. The build runs this automatically. `brand:render` remains a compatible alias and now copies the finished supplied social artwork without browser rasterization.

The existing head links have `data-theme-icon` filenames. ThemeProvider updates their URLs from the actual selected application mode, including the touch icon. This also gives the company artwork fresh URLs instead of reusing cached Campus URLs. The default social URL is `/branding/company/og-light.png`. Organization schema uses the supplied readable light 1200px PNG on all 35 generated pages. Company image alt text is Trovix.

Legacy public favicon, PNG icon, and social URLs remain available with the company artwork. The favicon.svg and og-card.svg compatibility URLs wrap original supplied PNGs. The portfolio abstract SVG is regenerated from the updated shared palette. Earlier source packs and ZIP backups are outside the deployed public output.

## Components and page scope

Direct changes: BrandLogo, logoAssets, PageLoader, ThemeContext, organization metadata, index head markup, shared theme/agency styles, public icon/social assets, and asset preparation/rendering scripts. Header, mobile navigation, footer, error fallback, calls to action, cards, forms, legal text, and decorative elements inherit the shared identity.

All 35 production routes are covered: Home; services and eight service details; portfolio and ten case studies; About, Technologies, Partners, Contact, Careers; privacy, terms and deletion pages; thank-you, 404, and existing aliases. Layouts, copy, canonical URLs, forms, analytics, and business logic are preserved. No dependencies were added. No other project or Campus application was edited.

See [verification results](REBRANDING_VERIFICATION.md) for checks and limits.

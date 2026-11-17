# TROVIX Company Website — FIXED Logo Kit

## Logo accuracy
Created directly from your original CorelDRAW vector SVG, not an AI recreation. The official **T** icon, **TROVIX** lettering, golden X, gold arc and dot are retained. Campus subtitle, book icon and underline ornaments are hidden using an SVG clipping mask. Light variant changes white letter fills to charcoal while preserving gold. No Campus elements are displayed.

## Which asset to use
- On DARK website headers/backgrounds: `logos/dark/trovix-company-dark-vector.svg` (white+gold)
- On LIGHT website headers/backgrounds: `logos/light/trovix-company-light-vector.svg` (charcoal+gold)
- Favicon: `favicons/dark/favicon.ico` or `favicons/light/favicon.ico`; or use your theme-based PNG favicon.
- Icon only: `icons/{dark|light}/trovix-t-{mode}.svg`
- Transparent PNG: `logos/{dark|light}/*.png` and `icons/{dark|light}/*.png` have alpha backgrounds. Favicons and social cards intentionally have solid backgrounds.

**Important:** the SVG files contain editable vector paths with clipping, not embedded PNG wrappers. Keep source originals unchanged. For a pixel-perfect comparison to current site, use these original-vector derived assets, rather than prior AI-generated samples.

## Integration
Use existing site theme switch (do not replace its state or persistence). In React choose image `src` according to current resolved theme. Keep logo natural aspect ratio with `object-fit:contain` and never stretch. For browser tab icons pick the matching variant. Existing content, layout, routing, forms, APIs, SEO and behavior should stay unchanged.

## QA
Verify dot remains present at end of arc, no spot at lower right of T, no CAMPUS/book, transparency on both themes, favicon at 16px, and mobile header proportions. Perform screenshots in light and dark mode.

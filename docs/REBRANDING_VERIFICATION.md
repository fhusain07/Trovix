# Company website branding verification

Completed locally on November 17, 2026 using TROVIX_Company_Website_Brand_Kit. This supersedes the Campus-pack integration report. Scope: the Trovix public company website in this repository.

## Asset audit and preservation

- Inspected all 46 supplied files; previewed all 40 visual files, including both ICOs and both embedded-PNG SVG wrappers.
- All 46 company source files retain their original SHA-256 hashes.
- All 70 files in the earlier Campus pack remain unchanged in their original folder.
- The 23-file legacy ZIP backup still matches its recorded archive checksum.
- All 18 themed public exports match the supplied originals in both public and production output.
- Active company logos, loader icons, browser icons, social cards, and organization metadata use the new kit.

## Checks

| Check | Result |
| --- | --- |
| Production build | Passed; 35 prerendered pages |
| Strict TypeScript | Passed |
| ESLint | Passed |
| Existing tests | 9 passed, 0 failed |
| Responsive route audit | 350 checks: 35 routes × 2 themes × 5 viewport sizes |
| Viewports | 1440 × 1000, 1024 × 900, 768 × 1000, 390 × 844, 320 × 740 |
| Logo selection / proportions | Correct company-only image in both themes; original ratio; no clipped header controls |
| Layout / assets | No horizontal overflow or broken images |
| Console / network | No application exceptions, console errors, or local asset failures |
| Theme persistence | Toggle, reload, and saved preference overriding the opposite OS mode passed |
| System fallback | With no saved preference, initial system mode and live system changes passed |
| Browser identity | All five head icon links follow the selected application mode; icon dimensions passed |
| High-density displays | Supplied 1200px 2x logo selected at mobile DPR 3 |
| Navigation | Mobile open, Escape close, selection/navigation, and close-after-selection passed |
| Forms | Required-field errors and valid email-draft preparation passed |
| SEO branding | Supplied social card and readable organization logo resolve in all 35 pages |

The light-mode audit exposed a startup interaction between theme restoration and lazy route hydration. Theme state updates now use transitions, preserving prerendered content. Surface colors, logo variants, favicon links, and theme-color metadata are synchronized before paint. The final browser pass verifies the corrected implementation.

## Contrast

| Checked pair | Foreground / background | Ratio |
| --- | --- | --- |
| Light body | #17191D / #F8F9FB | 16.71:1 |
| Light secondary text | #5C6472 / #F8F9FB | 5.66:1 |
| Light primary button | #FFFFFF / #805A00 | 6.21:1 |
| Light primary hover | #FFFFFF / #8A650C | 5.32:1 |
| Light link | #886000 / #F8F9FB | 5.36:1 |
| Light selected text | #886000 / #FFF1C2 | 5.00:1 |
| Light focus ring | #A47700 / #F8F9FB | 3.82:1 |
| Light input boundary | #7B8290 / #FFFFFF | 3.86:1 |
| Dark body | #F8F9FA / #0F0F11 | 18.16:1 |
| Dark secondary text | #B5B8C2 / #242429 | 7.80:1 |
| Dark primary button | #18140B / #D4AF37 | 8.73:1 |
| Dark primary hover | #18140B / #B88913 | 5.79:1 |
| Dark link | #F5D778 / #242429 | 10.94:1 |
| Dark selected text | #F5D778 / #4A3915 | 7.88:1 |
| Dark focus ring | #F5D778 / #242429 | 10.94:1 |
| Dark input boundary | #7B8290 / #242429 | 4.00:1 |
| Light error text | #B91C1C / #FFFFFF | 6.47:1 |
| Dark error text | #FEE2E2 / #242429 | 12.65:1 |

Checked normal text pairs reach at least 4.5:1; focus indicators and input boundaries reach at least 3:1. Decorative borders use the kit's lighter neutral shades. Light primary hover uses the supplied deeper gold to retain readable white text; dark hover uses the supplied goldHover shade with dark text.

## Evidence and limits

Screenshots and measurements are stored locally in `.trovix-review/company-kit/qa-verified/`; supplied-asset contact sheets and source hashes are in `.trovix-review/company-kit/`. Reviewed representative home, service, portfolio, about, contact, legal, footer, tablet, and mobile screenshots in both themes, alongside automated checks for every route.

Verification used installed headless Chrome. Safari, Firefox, physical devices, and live social-platform cache refresh were not tested. No deployment was performed. The supplied logos are raster artwork; the included SVGs are PNG wrappers, so native vector fidelity for print would require a separate designer-supplied export. Earlier branding assets and backups remain available for future use.

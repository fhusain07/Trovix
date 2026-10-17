# Trovix website

React 19 + TypeScript + Vite + React Router, retaining the existing Tailwind theme and Trovix gold/charcoal branding.

## Local development

Use Node.js 22.18+ (Node 24 was used for verification) and the existing Yarn lockfile. Dependencies are already installed in this checkout.

```sh
npm run dev
npm run lint
npm run typecheck
npm run build
npm test
npm run preview
```

The development and build scripts explicitly select the existing `vite.config.ts` because an ignored, older `vite.config.js` may exist locally. No hosting configuration or production environment was changed.

The build renders 35 HTML pages, including ten approved portfolio case studies, using the existing React routes, then adds page metadata, JSON-LD, and a sitemap. Existing URLs remain available; legacy aliases canonicalize to the primary route. The local preview serves each generated route directly. Hosting should serve generated files before the existing SPA fallback. Unknown-path HTTP status behavior depends on the unchanged hosting configuration.

## Content and approval

- `src/data/site.ts`: company contact details, eight services, technologies, and process.
- `src/data/portfolio.ts`: typed portfolio schema and explicitly approved public entries.
- `src/data/metadata.ts`: route metadata, canonical URLs, sitemap scope, and schema.
- `/__review/portfolio`: development-only draft review, excluded from production.
- `.trovix-review/`: ignored local repository inventory, private drafts, illustrations, and QA evidence.

The website owner approved ten sanitized public portfolio summaries on 2026-10-17. The original source audits and review records remain private. Entries stay brief: summary, key features, core stack, and team contribution. The academic queue screenshot is public; the operational school screenshot remains private. Missing images show a text placeholder. Concept/demo studies are hidden. Team participation is user-confirmed across authorized repositories, independently of commit identities. Direct Trovix delivery, client IP ownership, confidentiality, and publication permission remain separate.

The original eleven repository reviews are supplemented by nine local repositories grouped into four additional drafts. Related components share one project; duplicate checkouts, libraries, and tests do not add portfolio entries. Eligible source inventories and detailed evidence remain in the private audit. Authenticated GitHub discovery is still unavailable, so this is not a complete account-wide inventory. See [portfolio workflow](docs/portfolio-workflow.md).

## Inquiry forms

No working form backend was configured in the original project. By default, both forms validate input and prepare an email draft; the visitor must open and send it from their email application. Nothing is silently submitted or reported as delivered.

`.env.example` documents the optional public `VITE_INQUIRY_ENDPOINT`. Use an approved Formspree URL or a same-origin `/api/` handler. A configured handler must validate fields, enforce rate limits/spam protection, restrict request size, handle personal information appropriately, and return JSON `{"ok":true}` or `{"success":true}` only after acceptance. A 200 HTML fallback or negative acknowledgement is treated as an error. Client validation and the honeypot are not substitutes for server protections.

No API key is required or stored in the client. Never put credentials in `VITE_` variables. No production endpoint or environment secret was modified.

## Browser verification

Browser checks use an isolated, ignored QA installation, without adding runtime dependencies:

```sh
npm install --prefix node_modules/.cache/trovix-qa --no-save --package-lock=false playwright @axe-core/playwright
node scripts/browser-check.mjs
```

The browser script expects the development server at `127.0.0.1:5173` and installed Chrome. It checks 11 routes across five viewport sizes, navigation, keyboard behavior, draft filters, email fallback, runtime errors, and WCAG A/AA rules through axe. It also exports the original SVG social card as `public/og-image.png`.

`scripts/form-check.mjs` expects production preview on port 4173 and a second local Vite process on port 5174 with the process-local test endpoint `VITE_INQUIRY_ENDPOINT=/api/inquiry-test`. It intercepts every inquiry request and verifies accepted responses, error states, HTML fallbacks, negative acknowledgements, and spam handling. It also checks production navigation, hydration, and content with JavaScript disabled. No test inquiries are sent externally.

Original draft illustrations can be regenerated with `node scripts/create-visuals.mjs`. Phase reports and verification limits are recorded in [upgrade progress](docs/upgrade-progress.md).

Publication and push were explicitly authorized on 2026-10-17. The existing GitHub main branch is connected to Vercel production. Public portfolio: `https://www.trovixtech.com/portfolio`. `/__review/portfolio` is development-only.

> Publication update (2026-10-17): the owner approved ten sanitized public summaries and requested a push to the existing repository. Private evidence and operational school screenshots stay local; the two excluded prototype candidates remain excluded. Earlier draft-only notes below describe the work before this approval.

> Current portfolio count: ten private drafts. Four more source-reviewed team projects were added from nine local repositories, with related components grouped together. Incomplete entries retain their scope labels. Missing screenshots use a text placeholder. Nothing is approved for publication.

> Presentation stays short: overview, key feature bullets, core technologies, and team contribution. Concept/demo projects are hidden. Actual screenshots and illustration captions remain distinct. The long module/evidence audit is kept separately. The previous presentation changes passed lint, strict type checks, build, and desktop/mobile smoke checks.

# Trovix website upgrade

## Phase 1 — audit and implementation plan

Repository: React 19, TypeScript, Vite 7, React Router 6, Tailwind 4, Radix primitives, Framer Motion, Formik/Yup, Lucide. Routing lives in `src/main.tsx` (the existing `App.tsx` is an unused template). Existing pages: home, about, services, seven service details, projects, careers, contact, thank-you, privacy, terms, and account/data deletion aliases. Shared theme tokens and logo assets are already available. Dependencies are installed. No AGENTS.md or existing automated test suite was found. Working tree was clean.

Findings:

- Keep the React/Vite architecture, gold/charcoal identity, legal documents, WhatsApp contact channel, and existing URLs.
- Project outcomes, project counts, prices, delivery promises, and support entitlements lack supporting approval. Replace public marketing claims with specific capabilities and clearly labeled illustrative design studies; keep an editorial audit trail here.
- Contact uses a placeholder Formspree endpoint. Calendly and analytics also contain unconfirmed/placeholder configuration. There is no working server backend in this checkout. Never imply an email was delivered.
- Mobile navigation needs expanded state, Escape behavior, focus handling, and route-change closing. Link/button nesting and focus visibility need correction.
- Metadata is client-only, social image is absent, sitemap needs new routes. Add build-time rendered HTML and route metadata without replacing the framework.
- Heavy canvas particles are unnecessary for the homepage. Use CSS and a product interface illustration; support reduced motion.

Plan (before implementation):

1. Establish reusable page/layout elements and responsive styles; update navigation, footer, and homepage.
2. Add typed portfolio data, reusable project cards, filtering, demo visuals, and detailed design studies. Do not claim these are shipped products.
3. Complete eight service pages, About, Technologies, and Partnerships. Preserve legacy routes as aliases.
4. Add shared validated inquiry forms, honeypot, request/error handling, and an explicit email fallback until an approved backend is supplied. Add metadata, schema, sitemap, social card, and prerendering.
5. Run lint, actual TypeScript checks, production build, route/content checks, and browser checks where available. Record all limits.

User confirmation requested asynchronously: approved project material, working form endpoint, and permission to repeat registration/team claims. Continue independent work using conservative content until an answer arrives. No deployment or production/environment configuration changes are authorized.

## Phase 2 — shared design, navigation, footer, and homepage

Created `src/styles/agency.css`, `src/components/shared/PageElements.tsx`, `src/components/shared/ProductVisual.tsx`, and `src/data/site.ts`. Modified the layout components, theme provider, global stylesheet, homepage, process/FAQ sections, and persistent contact links.

Completed: retained gold/charcoal branding; responsive editorial layouts; original illustrative CRM hero; eight service cards; technology capabilities; honest portfolio empty state; five engineering differentiators; eight delivery steps; agency CTA; accessible native FAQ disclosures; final contact CTA; light/dark preferences; reduced-motion support. The sticky navigation has a mobile disclosure, focus handling, Escape closing, active links, and route-change reset. The layout includes a skip link and main landmark. Links styled as buttons replace nested interactive elements.

Issues resolved: removed unsupported delivery counts, response-time promises, estimated savings, blanket prices, and support guarantees from public marketing. Unconfirmed social accounts and the unverified scheduling embed are not promoted. Kept WhatsApp, email, existing logo assets, and source-of-truth location. No fabricated clients, ratings, awards, or team members were added.

Verification: desktop/mobile visual review, browser runtime checks, keyboard menu checks, and automated responsive tests. Subsequent accessibility review corrected the floating link's accessible name and light-theme gold contrast. No phase-2 implementation remains.

## Phase 3 — portfolio and case study system

Created `src/data/portfolio.ts`, `src/components/portfolio/ProjectCard.tsx`, `src/pages/CaseStudy.tsx`, `src/pages/DraftPortfolio.tsx`, `scripts/create-visuals.mjs`, `public/images/portfolio-abstract.svg`, and `docs/portfolio-workflow.md`. Replaced `src/pages/Projects.tsx`. Added the ignored `.trovix-review/` inventory and original draft illustrations.

Completed: typed public/draft records; responsive cards; category/technology filters; empty states; reusable case study pages with overview, challenge, solution, features, architecture, stack, supported contributions, status, optional verified results, screenshot/illustration captions, and optional live/repository links. Three original interface studies exist only as local drafts. Development-only review is at `/__review/portfolio`; generated repository drafts remain private and require explicit content approval before promotion. Public portfolio routes and sitemap use only explicitly approved sanitized entries. The old unverified client projects/results were removed from public presentation for lack of evidence.

New user direction: inspect all authorized GitHub repositories, including private ones; screen out duplicates, tutorials, tests, and incomplete projects; derive features/stacks/contributions from source evidence; retain every generated record as a draft. GitHub initially returned `UNAUTHORIZED`. After the user reconnected, the plugin manager confirmed GitHub installed/enabled, but account, repository-list, and repository-read calls consistently returned `Unknown tool`. The local GitHub CLI has no authenticated account. Account-wide remote discovery remains unavailable. The later local-source fallback is recorded below; the three interface studies are not repository-derived projects.

Verification: draft category filter and detail-page browser checks passed; build tests confirm no private inventory or design-study content enters production JS/HTML/sitemap. Publication records require approved status, a classified project type, and an explicit content-approval flag. Remaining: account-wide discovery and user approval of individual portfolio entries.

Local-source continuation: inspected six checkouts without changing them. The current team clarification supersedes the earlier individual-commit restriction. Related web/API/mobile, companion host tooling, and the user-confirmed marketing website now form one private team-project draft with eleven feature summaries, ten module sections, a verified stack/architecture description, and sixty-five source references. Team participation is confirmed by the user for the entire authorized codebase. Incomplete host billing/support screens, fixture-based legacy attendance, unsupported payroll/marks features, experimental AI, duplicate snapshots, and unverified outcomes are excluded at feature scope. Product runtime behavior, live integrations, client relationships, IP ownership, and direct Trovix delivery are separate from team participation and are not established for publication.

Public-source continuation: unauthenticated API enumeration found six public owned repositories with no further pages, and was repeated after the team clarification. Five additional snapshots were fetched without executing their code; the current website's public remote HEAD matched its inspected local revision. The combined scope is eleven distinct repositories. The education product website's verified navigation, theme, structured content, and email links are incorporated into the same product, following the user's explicit grouping confirmation. Its old draft URL redirects to the website section of the combined draft; its updated component record is retained privately without another product card. Advertised ERP functionality is not claimed from marketing copy. The consolidated Team Project remains unapproved. An academic example is held for approval; an incomplete printing site, simulated booking prototype, and default MVC scaffold are excluded for scope/completeness, never for commit authorship. Private, organization, and collaborator discovery remains unavailable through authenticated tools.

Full-source team review: inventoried and programmatically scanned 4,924 eligible source files across all eleven known repositories, followed by manual tracing of claimed workflows through UI/service clients, controllers/handlers, persistence, and architecture. The scan does not constitute a line-by-line manual review or runtime acceptance test. Codebase coverage, the current team policy, repository dispositions, grouping evidence, feature limits, and immutable references are recorded in the ignored team audit. Old local generators now delegate to the canonical team generator so they cannot reinstate author-based filtering. Product grouping is confirmed and implemented; the remaining marketing variant is held rather than counted as a separate completed delivery.

## Phase 4 — services, company, technologies, and partnerships

Created `src/pages/ServiceDetail.tsx`, `src/pages/Technologies.tsx`, `src/pages/Partners.tsx`, and shared `src/routes.tsx`. Modified `src/components/templates/ServicePageTemplate.tsx`, `src/pages/Services.tsx`, `src/pages/About.tsx`, and the seven legacy service modules (now thin compatibility wrappers). Added custom-software development as the eighth dedicated service. Replaced the unused template `App.tsx` with the lazy page registry, and retained `main.tsx` as the browser entry.

Completed: service-specific problems, capabilities, development approaches, stacks, industries, FAQs, breadcrumbs, and CTAs. About explains mission, vision, methodology, engineering approach, location, and contact using existing company information. Technologies covers only React, TypeScript, Vite, .NET Web API, PostgreSQL, Azure, and Docker. Partnerships explains all six requested collaboration models, handoffs, milestones, confidentiality/NDA considerations, and inquiry fields. Models are described as available options rather than existing relationships; no agency is falsely named as a partner. Rates, capacity, and schedules require per-engagement confirmation.

Existing privacy, terms, and deletion documents retain their original text; only their outer main wrapper changed to avoid nested main landmarks. Registration/team claims were not repeated in new marketing without approval. Careers remains available as an expressions-of-interest page; unconfirmed job postings/benefits were removed. Existing `/projects`, `/terms-of-service`, and data-deletion aliases remain supported with canonical primary URLs.

Verification: strict TypeScript checks, route rendering, unique headings, breadcrumb/service schema, internal-link checks, and browser navigation. No additional real company facts were invented. Remaining: approved business/team information if the owner wants it displayed.

## Phase 5 — inquiry forms, SEO, performance, accessibility

Created `src/components/forms/InquiryForm.tsx`, `src/lib/inquiry.ts`, `src/data/metadata.ts`, `src/entry-server.tsx`, `scripts/prerender.mjs`, `scripts/preview.mjs`, `.env.example`, `public/og-card.svg`, and `public/og-image.png`. Modified Contact, ThankYou, useSEO, index.html, robots.txt, sitemap.xml, package scripts, and root routing. No runtime dependencies were added; browser tooling lives in an ignored QA installation.

Completed: shared project/partnership forms; labels, field errors, length/email/URL validation, honeypot, duplicate-send protection, request timeout, error preservation, and truthful acceptance states. Without a backend, forms prepare an email draft and explicitly require the visitor to send it. A configured approved endpoint must return an affirmative JSON acknowledgement; status-200 HTML and negative JSON are errors. The old standalone thank-you page no longer falsely confirms a submission. No inquiry data is logged or stored in browser storage.

SEO: 19 indexable URLs and 25 generated HTML pages including aliases, thank-you, and 404. Unique titles/descriptions, canonical URLs, Open Graph/Twitter metadata, original 1200×630 social card, sitemap, robots, Organization/Service/BreadcrumbList schema, semantic headings, internal links, and sized images. Aliases canonicalize and are noindex. Draft review is development-only and noindex. Removed placeholder GA/Clarity/Search Console injection rather than sending to dummy identifiers.

Performance: kept lazy browser routes, removed canvas/particle and form-library code from the active experience, used native FAQ disclosures and original SVG artwork, lazy-loaded lower-page images, limited font weights with swap, and explicitly selected the already-existing optimized `vite.config.ts` instead of an older ignored generated JS config. The final shared client chunks are about 90 KB gzip plus the homepage route (~3.4 KB gzip); these are build sizes, not measured Core Web Vitals.

Static rendering uses eager imports of the same route definitions that the client lazy-loads. This avoids streaming fallbacks in static HTML. Preview now resolves generated route directories instead of serving the homepage at every deep URL. The browser entry hydrates only when the HTML's path matches the requested URL; unknown-path SPA fallbacks render the correct client route. Hosting/environment configuration was not changed; production hosting must continue to serve generated files before its SPA fallback.

Accessibility: visible focus states, skip navigation, main landmark, mobile menu keyboard handling, labels/error relationships/live feedback, native FAQ controls, reduced motion, mobile layouts, and adjusted light-theme text contrast. The original legal links now have persistent underlines.

Remaining: an approved receiving endpoint and its server validation/rate limiting/spam controls; real email-delivery verification cannot be done without that service. No endpoint, API key, environment secret, or production configuration was changed.

## Phase 6 — verification and cleanup

Created `tests/inquiry.test.mjs`, `tests/build.test.mjs`, `scripts/browser-check.mjs`, and `scripts/form-check.mjs`. Updated README, package check scripts, and ESLint's generated/private-directory ignore. Existing lint errors from shared component/hook exports were fixed with narrow documented rule exceptions.

Verification performed:

- `npm run lint` — passed.
- `npm run typecheck` — passed, including strict/no-unused checks in addition to the existing compiler settings.
- `npm run build` — passed; generated 25 HTML pages with metadata/schema/sitemap.
- `npm test` — 9 tests passed: validation, email escaping, endpoint constraints, spam trap, every sitemap route's static content/metadata/images/internal links, legacy canonicalization, draft exclusion, and social-card dimensions.
- Browser checks — 11 representative routes at 1440, 1024, 768, 390, and 320 px (55 combinations); no horizontal overflow, broken images, duplicate main landmarks, or extra h1s.
- Keyboard/menu navigation, draft filtering/detail navigation, and email fallback — passed.
- Axe WCAG A/AA checks — zero violations on Home, Contact, Partners, SaaS detail, Portfolio, Privacy, and the light-theme homepage. This is automated representative coverage, not a full accessibility certification.
- Local intercepted submission scenarios — project and partnership accepted JSON; HTTP error; HTML fallback; negative JSON acknowledgement; honeypot rejection; data preservation. No external inquiry was sent.
- Production hydration/navigation and JavaScript-disabled service content — passed using the route-aware local preview.
- Team-case verification (2026-10-17) — the consolidated product draft passed category/technology filters, image decoding, single main/h1, and no overflow at 1440, 1024, 768, 390, and 320 px. It rendered eleven feature summaries, ten module sections, five team-contribution descriptions, and sixty-five source references. Team participation and delivery context are displayed separately. Keyboard expansion/collapse of source evidence and the former website-draft URL's redirect/scroll to its component section passed. Axe reported zero violations and there were no browser runtime errors. Lint, strict type checks, the 25-page production build, and all nine tests passed again after consolidation. Production exclusion includes the consolidated draft, preserved component record, and old draft alias. Evidence/report/screenshots remain in the ignored review directory.
- Whitespace checks and added-source secret-pattern review — performed; no credentials intentionally added. No commit/push/deployment was made.

Local QA evidence is in `.trovix-review/qa/`: desktop/mobile/light screenshots and browser-report.json. Generated diagnostics and test servers are local-only. No Core Web Vitals benchmark, real email delivery, production-host routing check, or account-wide GitHub audit can be claimed from these checks. Source-review findings above are separate from website runtime verification.

Final outstanding items are external: restore authenticated GitHub operations to complete private/organization/collaborator discovery, approve public project naming/delivery context/confidential-content permissions, and provide a receiving endpoint if automatic inquiry delivery is desired. Team participation and the confirmed companion-website grouping are already accepted. Deployment remains outside the authorized scope.

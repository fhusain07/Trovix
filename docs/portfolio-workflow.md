> Current presentation: keep the portfolio brief. Show project summary, key features, core stack, and team contribution. Concept/demo studies are hidden from the review. Images are labeled illustrations unless they are actual approved application screenshots. Detailed audit material stays separate.

# Portfolio editorial workflow

The owner approved publication and push on 2026-10-17. Ten sanitized public summaries are in `approvedEntries`. Private source inventories, evidence URLs, operational school screenshots, and the two user-excluded prototype candidates remain outside public content.

## Local review

Run `npm run dev` and open `http://localhost:5173/__review/portfolio` (use the URL Vite prints if a different port is selected). The review route exists only in development. It shows ten repository-based drafts from `.trovix-review/portfolio.json`; concept/demo studies are hidden. Related repositories share one project, with product grouping confirmed where needed. New drafts without screenshots use a text placeholder.

Private repository inventories, evidence, and draft illustrations belong in the ignored `.trovix-review/` directory. They must never be copied into `public/`, imported by public pages, or included in Git commits. Keep this directory on the local computer. The development server should bind to loopback; do not expose it to a public network.

## GitHub scan status

Repository discovery initially returned `UNAUTHORIZED`. After the user reconnected GitHub, the plugin manager confirmed it was installed and enabled, but all GitHub operations returned `Unknown tool`. The GitHub CLI is installed but not authenticated. Account-wide discovery, including authorized private repositories, still requires working authenticated access.

Six nearby local checkouts were inspected read-only as a partial fallback. Related web, API, and mobile implementations were grouped into one source-backed draft; incomplete host screens, duplicate snapshots, and an unclassified marketing-only site were excluded as separate deliveries. The ignored inventory records the exact scope, source revisions, exclusions, and evidence. It does not claim that every account repository was discovered or that the reviewed applications were run successfully.

An unauthenticated GitHub API fallback enumerated six public owned repositories across the two confirmed accounts, with no remaining pages; the listings were checked again after the team clarification. Five additional committed snapshots were fetched read-only; the sixth matched the already inspected current website revision. The combined inventory covers eleven distinct repositories. An academic mini-project is held for approval; an unfinished printing site, simulated booking prototype, and MVC scaffold are excluded based on implementation scope, not authorship. Public enumeration does not discover private repositories, collaborator access, or authorized organization scope. Detailed screening and immutable references remain in the ignored review directory.

## Team participation and implementation scope

The user explicitly confirms that all authorized repositories contain development by them and/or their team. This establishes team participation for the reviewed projects. Do not filter team scope by commit author, GitHub username, email address, or who authored the latest commit. Use “Developed as part of a team” or “Team-based full-stack development” where supported by the implementation. Do not mark participation unconfirmed solely because another developer authored commits. Specific personal tasks require more precision only if the user requests individual attribution.

The consolidated case study is a `Team Project` record. Responsibilities summarize implemented team work across the codebase; they do not imply exclusive authorship. Team participation is separate from direct Trovix delivery, prior professional-work chronology, client relationships, IP ownership, confidentiality, and publication permission. The draft uses a professional/team-work context without claiming direct Trovix delivery. No private content is approved for disclosure by this confirmation.

The broader review inventories and programmatically scans all eligible committed source across the eleven known repositories, then manually traces claimed workflows through clients, controllers/handlers, persistence, and architecture. This is not a line-by-line manual review or runtime acceptance test. Complete module descriptions are bounded by actual implementation; route names, README promises, dependency declarations, fixture screens, and placeholders do not establish delivered features. Secrets, environment files, service-account material, runtime records, binary assets, vendored libraries, and generated output are excluded from analysis.

The user explicitly confirms that the companion marketing website is the same product as the school platform. Web, API, mobile, companion host tenant tooling, and that website are therefore one product and one review card. Its ten module sections include the product website, and its sixty-five references cover both former drafts. The old website-draft URL redirects to the combined case study's website section; the updated component record remains in the private inventory's `groupedDrafts`, with `draftAliases` preserving the route. Incomplete host billing/support screens remain excluded at feature scope. Another school-related marketing variant is held for grouping/content review rather than counted as another delivery. Private references identify configured origins and committed snapshots; remote visibility and current private branches remain unverified.

The canonical ignored generator and audit are `.trovix-review/refresh-team-review.py` and `.trovix-review/team-repository-audit.md`. Older generator entry points delegate to the canonical generator and cannot restore author-based attribution restrictions.

When access is restored:

1. Identify the authenticated account and every authorized installation/account. Enumerate all repository pages, including authorized private repositories and collaborators/organizations. Record the accessible scope and any denied or unavailable repositories.
2. Screen repositories using metadata, default-branch trees, README files, manifests, and source. Record forks, mirrors, duplicates, tutorials, exercises, test repositories, and incomplete scaffolds in the inventory, with the reason for exclusion. Excluded entries do not become portfolio drafts without user approval.
3. Inspect the implementation of each eligible candidate. Distinguish implemented features from README promises and planned features. Record file/line or immutable commit URLs for every feature and technology claim.
4. Apply the user's team-development confirmation to authorized projects. Analyze implemented team scope across the full codebase, independently of commit identities. Keep individual task attribution distinct from team participation and do not imply sole authorship.
5. Create a draft with neutral project naming, overview, challenge, implemented features, evidence-backed stack, architecture, supported contribution descriptions, status, and source references. Treat repo availability as distinct from client permission, legal ownership, production use, and measured results.
6. Use an approved screenshot or a clearly captioned original illustration. Never present an illustration as a product screenshot. Keep assets derived from private repositories local until approved.

## Approval and promotion

The owner reviews each project's public name, summary, features, technologies, responsibilities, source disclosure, illustration, and permission to publish. Private source links and client names need explicit approval. There are no auto-approval controls.

After explicit approval, confirm the delivery context and product grouping, copy only the sanitized public record into `approvedEntries` in `src/data/portfolio.ts`, set `publication: 'approved'`, and record `approval.approvedBy`, `approval.approvedAt`, and `approval.publicContentApproved: true`. Unclassified or unapproved entries do not appear in public cards, case-study routes, metadata, sitemap, or production JavaScript. Remove private evidence links and editorial review notes from the promoted record unless their disclosure has been expressly approved. Team participation confirmation never auto-approves publication.

The reusable `Project` model supports team/client/internal/demo types, delivery context, contribution model, module/workflow descriptions, overview, challenge, solution, features, stack, architecture, responsibilities, status, images, verified results, and approved links/client names. Review-only notes and expandable evidence appear in the development review. `ProjectCard` and `CaseStudy` render the presentation. Public filters derive from approved content.

Run `npm run build` and `npm test` after promotion. The owner explicitly authorized the current publication and push to the existing GitHub/Vercel deployment. Future publication still requires owner authorization.

# Codex prompt — TROVIX Campus visual branding ONLY

Use the attached `TROVIX_Campus_Web_Branding_Final` folder. First audit the existing SMS Web React implementation and identify the current effective theme provider, light/dark handling, sidebar customization, tenant/white-label logo priority, all logo and favicon locations, and browser document title. Present a concise file-by-file plan before modifying code.

After approval, implement the TROVIX Campus branding assets from `04-web-ready/public/branding` and carefully wire dark/light logo selection into the actual existing theme system. Reuse current school-specific logo policy and existing preference persistence. Do NOT overwrite sidebar color preferences with the TROVIX gold palette. Gold tokens are brand-only defaults. Keep school-customizable sidebar, colors, tenant choices, and user settings working exactly as before.

Branding-only scope: logo and T-icon replacement, favicon, app/manifest icons, browser title and optional brand-color tokens, visual alignment where necessary. NO feature logic, database, API, permissions, authentication, tenant workflows, routes, or unrelated CSS/JS refactoring. No migrations or forced preference resets. Do not modify production settings.

After implementation, report changed files and provide evidence for: build/lint/tests, light & dark, custom sidebar color in both modes, tenant-logo fallback, hard refresh/browser favicon, PWA (if used), mobile/responsive sidebar and regression review. Explain any behavior that could not be tested. Do not deploy without approval.

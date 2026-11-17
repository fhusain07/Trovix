# Integrate into the existing React web app (adapt after repo audit)

1. Copy `public/branding` into your React app's public/branding folder.
2. Import `brand-tokens.css` once. Do not use it to overwrite any existing sidebar/theme variables.
3. Resolve the existing app's EFFECTIVE theme (`light` or `dark`), not simply the OS setting. If the tenant/user preference is explicit, it takes priority.
4. Render `/branding/logo-light.svg` on light UI surfaces and `/branding/logo-dark.svg` on dark UI surfaces. Logos contain original brand artwork; dark original includes its background, so inspect layout before choosing it for tight headers.
5. Use `/branding/T-icon-transparent.png` for compact places with a known contrast-safe background; use the dark/light badge icons for fixed square surfaces.
6. Update the document title, favicon links and manifest only at the application's existing brand entry points. On tenant-white-label pages use the tenant logo as required by existing policy.
7. Test sidebar color controls including blue/green/custom, persisted preferences, tenant switching, dark/light modes, refresh and mobile layouts.

## Example HTML (do not paste blindly into a project with existing favicon handling)

```html
<link rel="icon" href="/branding/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/branding/favicon-32.png">
<link rel="apple-touch-icon" href="/branding/apple-touch-icon.png">
<link rel="manifest" href="/branding/site.webmanifest">
```

Avoid automatically switching the favicon based on the OS if the app has its own independent dark/light selection. Default dark-badge favicon works in either browser theme.

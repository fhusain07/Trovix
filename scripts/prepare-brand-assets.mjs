import { copyFile, readFile, writeFile } from 'node:fs/promises';
import { readBrandColors } from './lib/brand-colors.mjs';

// Full-logo social artwork embeds the supplied SVG unchanged.
// The legacy favicon.svg URL wraps the supplied PNG badge; it is not vector art.
const branding = 'src/assets/trovix_logo_assets/TROVIX_Campus_Complete_Branding_Colors/TROVIX_Campus_Web_Branding_Final/';
// Copy supplied raster exports byte-for-byte; never recreate the T icon.
const faviconFiles = [
  ['favicon.ico', 'favicon.ico'],
  ['favicon-16.png', 'trovix-icon-16.png'],
  ['favicon-32.png', 'trovix-icon-32.png'],
  ['favicon-48.png', 'trovix-icon-48.png'],
  ['apple-touch-icon.png', 'trovix-icon-180.png'],
  ['icon-192.png', 'trovix-icon-192.png'],
  ['icon-512.png', 'trovix-icon-512.png'],
];
for (const [source, target] of faviconFiles) {
  await copyFile(branding + '03-favicons/' + source, 'public/' + target);
}
const badge = 'data:image/png;base64,' + (await readFile(branding + '03-favicons/icon-512.png')).toString('base64');
const colors = await readBrandColors();
const darkLogo = await readFile(branding + '01-full-logos/dark/trovix-campus-dark-original.svg');
const source = 'data:image/svg+xml;base64,' + darkLogo.toString('base64');
const { dark, gold, text: white, muted, line: border } = colors;

await writeFile('public/favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>Trovix Campus</title><image href="${badge}" width="512" height="512" preserveAspectRatio="xMidYMid meet"/></svg>\n`);
await writeFile('public/og-card.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="${dark}"/><g fill="none" stroke="${border}"><circle cx="1040" cy="315" r="300"/><circle cx="1040" cy="315" r="250"/><circle cx="1040" cy="315" r="200"/><circle cx="1040" cy="315" r="150"/></g><path d="M0 550h1200" stroke="${border}"/><image href="${source}" x="50" y="28" width="340" height="124" preserveAspectRatio="xMidYMid meet"/><text x="75" y="265" font-family="Arial,sans-serif" font-size="59" letter-spacing="-2" fill="${white}">Thoughtful software.</text><text x="75" y="345" font-family="Arial,sans-serif" font-size="59" letter-spacing="-2" fill="${gold}">Real business progress.</text><text x="79" y="423" font-family="Arial,sans-serif" font-size="22" fill="${muted}">Custom software · SaaS · CRM · Business automation</text><text x="79" y="592" font-family="Arial,sans-serif" font-size="18" fill="${muted}">trovixtech.com</text><circle cx="1070" cy="586" r="4" fill="${gold}"/></svg>\n`);
console.log('Prepared supplied T-icon favicons and full-logo social artwork.');

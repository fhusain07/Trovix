import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { openBrowser } from './lib/chromium.mjs';
import './prepare-brand-assets.mjs';

// Favicons and touch icons come directly from the pack. Only the site-specific
// 1200 × 630 social card requires rendering.
const browser = await openBrowser();
try {
  await browser.viewport(1200, 630);
  await browser.navigate(pathToFileURL(resolve('public/og-card.svg')).href);
  await browser.evaluate('Promise.all(Array.from(document.images, image => image.decode()))');
  await browser.screenshot('public/og-image.png');
  console.log('Rendered social image; supplied favicon and touch icons copied unchanged.');
} finally { await browser.close(); }

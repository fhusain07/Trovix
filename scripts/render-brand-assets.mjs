// The fixed kit supplies JPEG cards. Keep historical PNG URLs in sync when needed.
import { readFile, copyFile } from 'node:fs/promises';
import { openBrowser } from './lib/chromium.mjs';
import './prepare-brand-assets.mjs';

const browser = await openBrowser();
try {
  await browser.viewport(1200, 630);
  for (const theme of ['light', 'dark']) {
    const path = `public/branding/company/og-${theme}`;
    const source = 'data:image/jpeg;base64,' + (await readFile(path + '.jpg')).toString('base64');
    await browser.evaluate(`(async () => {
      document.body.style.margin = '0';
      document.body.replaceChildren();
      const image = new Image(1200, 630);
      image.src = ${JSON.stringify(source)};
      document.body.append(image);
      await image.decode();
    })()`);
    await browser.screenshot(path + '.png');
  }
  await copyFile('public/branding/company/og-light.png', 'public/og-image.png');
} finally { await browser.close(); }

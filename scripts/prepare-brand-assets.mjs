import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';

const branding = 'src/assets/trovix_logo_assets/TROVIX_Company_Website_Complete_Branding_Light_Dark/TROVIX_Company_Website_Brand_Kit/';
const publicBranding = 'public/branding/company';
const sizes = [16, 32, 48, 64, 180, 192, 512];

// Copy the approved exports unchanged. Site-selected mode chooses the public URL.
for (const theme of ['light', 'dark']) {
  const destination = `${publicBranding}/${theme}`;
  await mkdir(destination, { recursive: true });
  await copyFile(`${branding}favicons/favicon-${theme}.ico`, `${destination}/favicon.ico`);
  for (const size of sizes) {
    await copyFile(`${branding}favicons/trovix-favicon-${theme}-${size}.png`, `${destination}/icon-${size}.png`);
  }
  await copyFile(`${branding}social/trovix-og-${theme}-1200x630.png`, `${publicBranding}/og-${theme}.png`);
}

// Retain existing public URLs for bookmarks and older pages; these now use company artwork.
await copyFile(`${publicBranding}/dark/favicon.ico`, 'public/favicon.ico');
for (const size of sizes.filter(size => size !== 64)) {
  await copyFile(`${publicBranding}/dark/icon-${size}.png`, `public/trovix-icon-${size}.png`);
}
await copyFile(`${publicBranding}/og-light.png`, 'public/og-image.png');

// Compatibility SVG URLs wrap the original PNGs; they are not native vector artwork.
const wrapper = (image, width, height) => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><title>Trovix</title><image href="data:image/png;base64,${image.toString('base64')}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid meet"/></svg>\n`;
await writeFile('public/favicon.svg', wrapper(await readFile(`${publicBranding}/dark/icon-512.png`), 512, 512));
await writeFile('public/og-card.svg', wrapper(await readFile(`${publicBranding}/og-light.png`), 1200, 630));
console.log('Prepared unchanged company favicons and supplied light/dark social cards.');

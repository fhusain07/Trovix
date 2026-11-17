import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';

const branding = 'src/assets/trovix_logo_assets/TROVIX_Company_Website_Complete_Branding_FIXED/TROVIX_Company_Website_Logo_Kit_FIXED/';
const publicBranding = 'public/branding/company';
const sizes = [16, 32, 48, 64, 180, 192, 512];

// Copy the approved exports unchanged. Site-selected mode chooses the public URL.
for (const theme of ['light', 'dark']) {
  const destination = `${publicBranding}/${theme}`;
  await mkdir(destination, { recursive: true });
  await copyFile(`${branding}favicons/${theme}/favicon.ico`, `${destination}/favicon.ico`);
  for (const size of sizes) {
    await copyFile(`${branding}favicons/${theme}/favicon-${size}.png`, `${destination}/icon-${size}.png`);
  }
  await copyFile(`${branding}social/og-${theme}-1200x630.jpg`, `${publicBranding}/og-${theme}.jpg`);
}

// Retain existing public URLs for bookmarks and older pages; these now use company artwork.
await copyFile(`${publicBranding}/dark/favicon.ico`, 'public/favicon.ico');
for (const size of sizes.filter(size => size !== 64)) {
  await copyFile(`${publicBranding}/dark/icon-${size}.png`, `public/trovix-icon-${size}.png`);
}
// Legacy social PNGs are checked-in format conversions, refreshed by brand:render.
await copyFile(`${publicBranding}/og-light.png`, 'public/og-image.png');

function wrapper(image, format, width, height) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><title>Trovix</title><image href="data:image/${format};base64,${image.toString('base64')}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid meet"/></svg>\n`;
}
// Keep original vector geometry; normalize trailing export whitespace in this public copy.
const faviconVector = await readFile(`${branding}icons/dark/trovix-t-dark.svg`, 'utf8');
await writeFile('public/favicon.svg', faviconVector.replace(/[\t ]+$/gm, ''));
await writeFile('public/og-card.svg', wrapper(await readFile(`${publicBranding}/og-light.jpg`), 'jpeg', 1200, 630));
console.log('Prepared unchanged company favicons and supplied light/dark social cards.');

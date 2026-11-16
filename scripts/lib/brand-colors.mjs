import { readFile } from 'node:fs/promises';

/** Read primitives for standalone SVGs, which cannot inherit page CSS. */
export async function readBrandColors() {
  const css = await readFile('src/theme/theme.css', 'utf8');
  const tokens = {
    dark: 'brand-dark', gold: 'brand-gold', bronze: 'brand-gold-dark',
    text: 'visual-text-hsl', muted: 'visual-muted-hsl', line: 'brand-charcoal-light',
    surface: 'visual-surface-hsl', raised: 'visual-raised-hsl',
    soft: 'visual-accent-hsl', success: 'status-success-on-dark', info: 'status-info-on-dark',
  };
  return Object.fromEntries(Object.entries(tokens).map(([name, token]) => {
    const value = css.match(new RegExp('--' + token + ':\\s*([^;]+);'))?.[1];
    if (!value || value.includes('var(')) throw new Error('Missing primitive: ' + token);
    return [name, 'hsl(' + value + ')'];
  }));
}

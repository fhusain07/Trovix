/** Import original artwork here; never alter or relocate the supplied files. */
import wordmarkOnLight from '@/assets/trovix_logo_assets/TROVIX_Campus_Complete_Branding_Colors/TROVIX_Campus_Web_Branding_Final/01-full-logos/light/trovix-campus-light-readable.svg';
import wordmarkOnDark from '@/assets/trovix_logo_assets/TROVIX_Campus_Complete_Branding_Colors/TROVIX_Campus_Web_Branding_Final/01-full-logos/dark/trovix-campus-dark-original.svg';
import iconBadge from '@/assets/trovix_logo_assets/TROVIX_Campus_Complete_Branding_Colors/TROVIX_Campus_Web_Branding_Final/02-T-icon/dark-badge/T-icon-dark-badge-128.png';

export const logoAssets = {
  /** Transparent full artwork with dark lettering, made for light surfaces. */
  wordmarkOnLight,
  /** Full artwork with its original dark background and spacing. */
  wordmarkOnDark,
  /** Supplied T-only raster badge, readable on either theme. */
  iconBadge,
} as const;

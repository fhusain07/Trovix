/**
 * Central registry of Trovix logo/favicon assets. Import logo images from
 * here rather than reaching into src/assets/trovix_logo_assets directly, so
 * swapping brand art is a one-file change.
 */
import trovixIconMark from '@/assets/trovix_logo_assets/trovix-icon-128.png';

export const logoAssets = {
  /** Circular "T" mark, no wordmark — used wherever a compact icon is needed. */
  icon: trovixIconMark,
} as const;

import React from 'react';
import { cn } from '@/lib/utils';
import { logoAssets } from '@/theme/logoAssets';

export interface BrandLogoProps {
  /** Pixel size of the icon mark (square). Defaults to 40. */
  size?: number;
  /** Show the "TROVIX" wordmark next to the icon. Defaults to true. */
  showWordmark?: boolean;
  /** Extra classes for the icon <img>. */
  className?: string;
  /** Extra classes for the wordmark <span>. */
  wordmarkClassName?: string;
  /** Extra classes for the wrapping element. */
  wrapperClassName?: string;
}

/**
 * Trovix logo mark (+ optional wordmark). The single place components pull
 * brand logo art from — swapping the underlying image only requires editing
 * src/theme/logoAssets.ts.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 40,
  showWordmark = true,
  className,
  wordmarkClassName,
  wrapperClassName,
}) => {
  return (
    <span className={cn('inline-flex items-center space-x-2', wrapperClassName)}>
      <img
        src={logoAssets.icon}
        alt="Trovix"
        width={size}
        height={size}
        className={cn('object-contain', className)}
        style={{ width: size, height: size }}
      />
      {showWordmark && (
        <span className={cn('text-2xl font-display font-bold gradient-text', wordmarkClassName)}>
          TROVIX
        </span>
      )}
    </span>
  );
};

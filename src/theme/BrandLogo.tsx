import { cn } from '@/lib/utils';
import { logoAssets } from '@/theme/logoAssets';
import { useTheme } from '@/contexts/ThemeContext';

export interface BrandLogoProps {
  className?: string;
}

/** Approved company-only wordmark, with its original proportions and spacing. */
export function BrandLogo({ className }: BrandLogoProps) {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  return (
    <span className={cn('brand-logo', className)}>
      <img
        src={dark ? logoAssets.wordmarkOnDarkSmall : logoAssets.wordmarkOnLightSmall}
        srcSet={`${dark ? logoAssets.wordmarkOnDark : logoAssets.wordmarkOnLight} 2x`}
        alt="Trovix"
        width={600}
        height={194}
        decoding="async"
      />
    </span>
  );
}

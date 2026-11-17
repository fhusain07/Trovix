import { cn } from '@/lib/utils';
import { logoAssets } from '@/theme/logoAssets';
import { useTheme } from '@/contexts/ThemeContext';

export interface BrandLogoProps {
  className?: string;
}

/** Complete supplied artwork, including the Campus descriptor. */
export function BrandLogo({ className }: BrandLogoProps) {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  return (
    <span className={cn('brand-logo', dark && 'brand-logo-dark', className)}>
      <img
        src={dark ? logoAssets.wordmarkOnDark : logoAssets.wordmarkOnLight}
        alt="Trovix Campus"
        width={dark ? 4690 : 3770}
        height={dark ? 1705 : 928}
        decoding="async"
      />
    </span>
  );
}

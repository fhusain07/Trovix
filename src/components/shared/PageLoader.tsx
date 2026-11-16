import React from 'react';
import { logoAssets } from '@/theme/logoAssets';

export const PageLoader: React.FC = () => (
  <div
    className="min-h-screen flex items-center justify-center bg-background"
    role="status"
    aria-label="Loading page"
  >
    <div className="flex flex-col items-center gap-4">
      <img src={logoAssets.iconBadge} alt="" width={64} height={64} aria-hidden="true" />
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-gold/20" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold animate-spin" />
      </div>
      <span className="text-sm text-muted-foreground">Loading…</span>
    </div>
  </div>
);

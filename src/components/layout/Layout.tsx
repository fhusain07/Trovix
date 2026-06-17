import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppFloatButton } from '@/components/shared/WhatsAppFloatButton';
import { StickyMobileCTA } from '@/components/shared/StickyMobileCTA';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* Desktop: floating WhatsApp button — hidden on mobile */}
      <WhatsAppFloatButton />
      {/* Mobile: sticky bottom bar — hidden on md+ */}
      <StickyMobileCTA />
    </div>
  );
};

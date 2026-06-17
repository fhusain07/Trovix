import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const WHATSAPP_URL =
  'https://wa.me/918956121778?text=Hi%20Trovix%2C%20I%27d%20like%20to%20discuss%20a%20project.';

export const StickyMobileCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden glass-effect border-t border-white/10 p-3 flex gap-2">
      <Link to="/contact" className="flex-1">
        <Button size="sm" className="w-full cursor-pointer text-xs font-semibold">
          Book a Free Call
        </Button>
      </Link>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1"
      >
        <Button size="sm" variant="outline" className="w-full cursor-pointer text-xs font-semibold">
          WhatsApp Us
        </Button>
      </a>
    </div>
  );
};

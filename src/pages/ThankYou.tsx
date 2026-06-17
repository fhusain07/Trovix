import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';

const WHATSAPP_URL =
  'https://wa.me/918956121778?text=Hi%20Trovix%2C%20I%20just%20sent%20a%20message%20via%20the%20website.';

const ThankYou: React.FC = () => {
  useSEO({
    title: 'Message Received — Trovix',
    description: "We've received your project inquiry and will reply within 24 hours with a free estimate.",
    canonical: 'https://www.trovixtech.com/thank-you',
  });

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2, type: 'spring', stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <CheckCircle className="h-20 w-20 text-green-400" />
        </motion.div>

        <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4">
          Message <span className="gradient-text">Received!</span>
        </h1>

        <p className="text-lg text-muted-foreground mb-3">
          Thanks for reaching out. We'll reply within <strong className="text-foreground">24 hours</strong> with a free project estimate.
        </p>

        <p className="text-sm text-muted-foreground mb-10">
          Need a faster response? WhatsApp us directly and we'll get back to you within the hour.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" variant="outline" className="cursor-pointer group">
              <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
              Back to Home
            </Button>
          </Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="cursor-pointer bg-[#25D366] hover:bg-[#1fbd5a]">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Us Now
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYou;

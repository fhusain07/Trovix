import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { GlassCard } from '@/components/shared/GlassCard';

export const FounderSection: React.FC = () => (
  <AnimatedSection>
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-12">
        Meet the <span className="gradient-text">Founder</span>
      </h2>
      <GlassCard hover={false} className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-gold to-charcoal flex items-center justify-center text-4xl font-bold text-white font-display shadow-lg select-none">
              FH
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-display font-bold mb-1">Faizan Hussain</h3>
            <p className="text-gold text-sm font-semibold mb-5">
              Founder &amp; Lead Developer — Trovix · Nagpur, India
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I started Trovix because the software options available to small businesses, schools, and growing agencies in India were either too expensive, too generic, or built for someone completely different. My clients were running operations on shared WhatsApp groups and colour-coded Excel sheets — not because they liked it, but because nothing else fit their workflow or budget.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Trovix is my answer to that gap. Every project I take on is built directly by me using React, .NET Web API, and PostgreSQL — no subcontracting, no hand-offs, no disappearing after delivery. You get a system that fits your exact process and a developer who is reachable on WhatsApp when something needs changing.
            </p>
            <div className="flex flex-wrap gap-5 justify-center md:justify-start">
              <a
                href="https://linkedin.com/in/faizanhussain"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
                aria-label="Faizan Hussain on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/fhusain07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
                aria-label="Faizan Hussain on GitHub"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="mailto:info@trovixtech.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@trovixtech.com
              </a>
            </div>
          </div>
        </div>
      </GlassCard>
    </section>
  </AnimatedSection>
);

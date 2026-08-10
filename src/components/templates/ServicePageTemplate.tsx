import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { GlassCard } from '@/components/shared/GlassCard';
import { Button } from '@/components/ui/button';
import { FAQSection, type FAQItem } from '@/components/sections/FAQSection';
import { HowWeWork } from '@/components/sections/HowWeWork';

export interface ServicePageProps {
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
  icon: React.ElementType;
  badge: string;
  title: string;
  titleGradient: string;
  description: string;
  problems: Array<{ title: string; description: string }>;
  features: Array<{ title: string; description: string }>;
  techStack: string[];
  faqs: FAQItem[];
  cta: { headline: string; description: string };
}

export const ServicePageTemplate: React.FC<ServicePageProps> = ({
  seo,
  icon: Icon,
  badge,
  title,
  titleGradient,
  description,
  problems,
  features,
  techStack,
  faqs,
  cta,
}) => {
  useSEO(seo);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 mb-6">
              <Icon className="h-4 w-4 text-gold" />
              <span className="text-sm font-semibold text-gold">{badge}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              {title}
              <br />
              <span className="gradient-text">{titleGradient}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="cursor-pointer group">
                  Get a Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a
                href="https://wa.me/918956121778?text=Hi%20Trovix%2C%20I%27m%20interested%20in%20discussing%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="cursor-pointer">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Problems */}
        <AnimatedSection delay={0.1}>
          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-10">
              The Problem We <span className="gradient-text">Solve</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {problems.map((problem, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <GlassCard hover={false} className="h-full border-l-2 border-gold/40">
                    <h3 className="font-semibold mb-2 text-foreground">{problem.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
                  </GlassCard>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Features */}
        <AnimatedSection delay={0.15}>
          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-10">
              What You <span className="gradient-text">Get</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 0.08}>
                  <GlassCard hover={false} className="flex gap-4 h-full">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </GlassCard>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Tech Stack */}
        <AnimatedSection delay={0.2}>
          <section className="mb-20 text-center">
            <h2 className="text-2xl font-display font-bold mb-8">
              Built With a <span className="gradient-text">Modern Stack</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="glass-effect px-5 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* How We Work */}
        <HowWeWork />

        {/* FAQ */}
        <FAQSection
          faqs={faqs}
          heading={
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              Questions About <span className="gradient-text">{badge}</span>
            </h2>
          }
        />

        {/* CTA */}
        <AnimatedSection>
          <GlassCard className="text-center py-14">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              {cta.headline.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="gradient-text">{cta.headline.split(' ').slice(-1)}</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="cursor-pointer group">
                  Get a Free Estimate
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="cursor-pointer">
                  View All Services
                </Button>
              </Link>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Code, Users, Cloud, Workflow, BookOpen, Target, Clock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import { GlassCard } from '@/components/shared/GlassCard';
import { HowWeWork } from '@/components/sections/HowWeWork';
// import { FounderSection } from '@/components/sections/FounderSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { useSEO } from '@/hooks/useSEO';

const trustItems = [
  '10+ Projects Delivered',
  'React + .NET Experts',
  'Based in Nagpur, India',
  'Reply Within 24 Hours',
];

const differentiators = [
  {
    icon: Target,
    title: 'Custom, Not Generic',
    description: 'Every system is built around your exact workflow — no templates, no bloated enterprise tools forced to fit.',
  },
  {
    icon: Clock,
    title: 'Direct Communication',
    description: 'You talk directly to the developer building your product. No account managers, no relay layers, no delays.',
  },
  {
    icon: Code,
    title: 'Production-Grade Stack',
    description: 'React + .NET Web API + PostgreSQL. Maintainable, scalable, and built to production standards from day one.',
  },
  {
    icon: MessageSquare,
    title: 'Post-Launch Support',
    description: "We don't disappear after delivery. Ongoing maintenance and WhatsApp support, always responsive.",
  },
];

const services = [
  {
    title: 'CRM Development',
    description: 'Custom Softwares systems that replace spreadsheets — lead tracking, sales pipelines, and client management tailored to your workflow.',
    icon: Users,
    href: '/services/crm-development',
  },
  {
    title: 'Custom SaaS Development',
    description: 'B2B SaaS platforms built from scratch — multi-tenant architecture, user management, subscriptions, and dashboards.',
    icon: Cloud,
    href: '/services/saas-development',
  },
  {
    title: 'School Management Systems',
    description: 'Complete portals for student data, attendance, fee management, exam results, and staff administration.',
    icon: BookOpen,
    href: '/services/school-management-system',
  },
  {
    title: 'Business Automation',
    description: 'Automate lead capture, invoicing, follow-up notifications, and reporting workflows — save 10+ hours every week.',
    icon: Workflow,
    href: '/services/business-automation',
  },
  {
    title: 'Meta Lead Ads Integration',
    description: 'Connect Facebook and Instagram lead ads directly to your CRM. Zero manual entry, instant automated follow-up.',
    icon: Zap,
    href: '/services/meta-lead-ads',
  },
  {
    title: 'Web Application Development',
    description: 'React frontends with .NET Web API backends and PostgreSQL — scalable, maintainable, production-ready.',
    icon: Code,
    href: '/services/web-application-development',
  },
];

const whoWeHelp = [
  {
    title: 'Small Businesses',
    description: 'Replace spreadsheets and manual tracking with a CRM that fits your exact sales process and team size.',
  },
  {
    title: 'Schools & Institutions',
    description: 'Manage students, fees, attendance, and staff from a single purpose-built portal — no more Excel chaos.',
  },
  {
    title: 'Startups',
    description: "Launch your SaaS product or internal tool fast — without enterprise pricing, bloat, or 6-month timelines.",
  },
  {
    title: 'Agencies',
    description: 'Automate client onboarding, lead intake from Meta ads, and reporting so your team can focus on delivery.',
  },
];

const technologies = [
  'React', 'TypeScript', '.NET Web API', 'PostgreSQL', 'Azure', 'Docker', 'Vite',
];

const Home: React.FC = () => {
  useSEO({
    title: 'Trovix — Custom Softwares, SaaS & School Management Systems | India',
    description: 'We build custom CRM systems, SaaS platforms, and school management portals using React & .NET. Based in Nagpur, India. Free estimate in 24 hours.',
    canonical: 'https://www.trovixtech.com/',
  });
  return (
  <div className="min-h-screen">

    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-charcoal/10" />
      <ParticleBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="gradient-text">Custom Softwares, SaaS</span>
            <br />
            <span className="text-foreground">&amp; School Systems</span>
            <br />
            <span className="text-foreground">for Growing Businesses</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We build web applications that automate your operations — CRM systems, school portals, and business tools — using React &amp; .NET, delivered in weeks, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="cursor-pointer group">
                Get a Free Project Estimate
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="cursor-pointer">
                View Our Services
              </Button>
            </Link>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 inline-block" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Why Clients Choose Trovix */}
    <AnimatedSection>
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-12">
          Why Clients Choose <span className="gradient-text">Trovix</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <GlassCard>
                <item.icon className="h-12 w-12 text-gold mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </AnimatedSection>

    {/* Services */}
    <AnimatedSection>
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-12">
          What We <span className="gradient-text">Build</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <GlassCard className="h-full">
                <service.icon className="h-10 w-10 text-gold mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                <Link
                  to={service.href}
                  className="text-gold hover:underline cursor-pointer inline-flex items-center text-sm"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </AnimatedSection>

    {/* How We Work */}
    <HowWeWork />

    {/* Who We Help */}
    <AnimatedSection>
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-12">
          Who We <span className="gradient-text">Help</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whoWeHelp.map((client, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <GlassCard hover={false} className="h-full">
                <h3 className="text-lg font-semibold mb-3 text-gold">{client.title}</h3>
                <p className="text-muted-foreground text-sm">{client.description}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </AnimatedSection>

    {/* Founder */}
    {/* <FounderSection /> */}

    {/* Tech Stack */}
    <AnimatedSection>
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-4">
          Our <span className="gradient-text">Tech Stack</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A focused, modern stack chosen for reliability, performance, and long-term maintainability of your product.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect px-6 py-3 rounded-full cursor-pointer hover:glow-effect transition-all"
              >
                <span className="font-medium">{tech}</span>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </AnimatedSection>

    {/* FAQ */}
    <FAQSection />

    {/* Final CTA */}
    <AnimatedSection>
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard className="text-center py-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Build Your <span className="gradient-text">Next Product?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tell us about your project and get a free estimate within 24 hours. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="cursor-pointer">
                Get a Free Estimate
              </Button>
            </Link>
            <a
              href="https://wa.me/918956121778?text=Hi%20Trovix%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="cursor-pointer">
                WhatsApp Us Directly
              </Button>
            </a>
          </div>
        </GlassCard>
      </section>
    </AnimatedSection>

  </div>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Cloud, BookOpen, Workflow, Zap, Code, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { GlassCard } from '@/components/shared/GlassCard';
import { Button } from '@/components/ui/button';
import { HowWeWork } from '@/components/sections/HowWeWork';
import { useSEO } from '@/hooks/useSEO';

const services = [
  {
    icon: Users,
    title: 'CRM Development',
    description: 'Stop managing leads in spreadsheets. We build custom CRM systems tailored to your exact sales process — lead capture, pipeline tracking, follow-up automation, and reporting dashboards.',
    features: ['Lead & Contact Management', 'Sales Pipeline Tracking', 'Follow-up Automation', 'Custom Reporting Dashboards'],
    href: '/services/crm-development',
  },
  {
    icon: Cloud,
    title: 'Custom SaaS Development',
    description: "Can't find a SaaS tool that fits your business model? We build B2B SaaS platforms from scratch — multi-tenant architecture, subscription billing, user roles, and admin dashboards.",
    features: ['Multi-tenant Architecture', 'Subscription & Billing Integration', 'User Roles & Permissions', 'Admin & Analytics Dashboards'],
    href: '/services/saas-development',
  },
  {
    icon: BookOpen,
    title: 'School Management Systems',
    description: 'Purpose-built portals for schools and educational institutions — replacing Excel and paper with a single system that handles everything from student registration to fee collection.',
    features: ['Student Registration & Profiles', 'Attendance Tracking', 'Fee Management & Receipts', 'Exam Results & Report Cards'],
    href: '/services/school-management-system',
  },
  {
    icon: Workflow,
    title: 'Business Automation',
    description: "Identify the repetitive tasks consuming your team's time and automate them. From lead intake to invoice generation, we connect your tools and build workflows that run without manual effort.",
    features: ['Lead Capture Automation', 'Invoice & Payment Workflows', 'Notification & Reminder Systems', 'Third-party Integrations'],
    href: '/services/business-automation',
  },
  {
    icon: Zap,
    title: 'Meta Lead Ads Integration',
    description: 'Every lead from your Facebook and Instagram ads should land in your CRM instantly — not in a spreadsheet download days later. We build the real-time integration between Meta and your system.',
    features: ['Facebook & Instagram Ads Integration', 'Real-time CRM Sync', 'Automated Lead Qualification', 'Lead Source Tracking & Reporting'],
    href: '/services/meta-lead-ads',
  },
  {
    icon: Code,
    title: 'Web Application Development',
    description: 'Full-stack web applications built on a modern, reliable foundation. React frontends that are fast and responsive, .NET Web API backends that are secure and scalable, PostgreSQL for solid data management.',
    features: ['React + TypeScript Frontends', '.NET Web API Backends', 'PostgreSQL Database Design', 'REST API Development'],
    href: '/services/web-application-development',
  },
];

const Services: React.FC = () => {
  useSEO({
    title: 'Services — CRM Development, SaaS, School Management & More | Trovix',
    description: 'Custom Softwares development, SaaS platforms, school management systems, business automation, Meta Lead Ads integration, and web application development.',
    canonical: 'https://www.trovixtech.com/services',
  });
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
              What We <span className="gradient-text">Build</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We specialise in a focused set of software products for growing businesses, schools, and startups. Every project is custom-built — no templates, no off-the-shelf tools adapted to fit.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <GlassCard className="h-full flex flex-col">
                <service.icon className="h-12 w-12 text-gold mb-4" />
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-sm text-gold hover:underline cursor-pointer mt-auto"
                >
                  Learn more about {service.title}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <HowWeWork />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <AnimatedSection delay={0.3}>
          <GlassCard className="text-center py-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Describe your problem in plain language and we'll recommend the right solution. Free 30-minute discovery call, no commitment.
            </p>
            <Link to="/contact">
              <Button size="lg" className="cursor-pointer group">
                Book a Free Discovery Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </GlassCard>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Services;

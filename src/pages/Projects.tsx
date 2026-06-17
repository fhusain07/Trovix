import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight, Mail } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { GlassCard } from '@/components/shared/GlassCard';
import { Button } from '@/components/ui/button';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
              Our <span className="gradient-text">Work</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're assembling detailed case studies for our completed projects. Reach out to see relevant work samples and discuss what we can build for you.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <GlassCard className="text-center py-20 mb-8">
            <Briefcase className="h-16 w-16 text-electric-blue mx-auto mb-6 opacity-60" />
            <h2 className="text-2xl font-display font-bold mb-4">Case Studies Coming Soon</h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              We're documenting our projects with full case studies — covering the problem, our solution, the tech stack used, and measurable outcomes. In the meantime, contact us and we'll share relevant work samples directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="cursor-pointer group">
                  Request Work Samples
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="mailto:info@trovixtech.com">
                <Button variant="outline" className="cursor-pointer">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us Directly
                </Button>
              </a>
            </div>
          </GlassCard>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'CRM & SaaS Platforms', description: 'Custom CRM systems and SaaS tools for sales teams and service businesses.' },
              { label: 'School Management Portals', description: 'Student, fee, and attendance management systems for educational institutions.' },
              { label: 'Business Automation Tools', description: 'Workflow automation connecting Meta ads, CRMs, invoicing, and notifications.' },
            ].map((area, index) => (
              <AnimatedSection key={index} delay={0.4 + index * 0.1}>
                <GlassCard hover={false} className="text-center h-full">
                  <h3 className="font-semibold text-electric-blue mb-2">{area.label}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Projects;

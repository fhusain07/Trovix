import React from 'react';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { GlassCard } from '@/components/shared/GlassCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';

const positions = [
  {
    title: 'React Frontend Developer',
    location: 'Nagpur, India / Remote',
    type: 'Full-time',
    description: 'Build modern React applications with TypeScript and Tailwind CSS for our client projects — sales management dashboards, school portals, and SaaS products.',
  },
  {
    title: '.NET Backend Developer',
    location: 'Nagpur, India / Remote',
    type: 'Full-time',
    description: 'Develop REST APIs using .NET Web API with PostgreSQL, handling business logic for SaaS platforms and sales management software.',
  },
  {
    title: 'Full Stack Developer',
    location: 'Nagpur, India / Remote',
    type: 'Full-time',
    description: 'Work across React frontends and .NET backends, contributing to sales management software, school management portals, and business automation tools.',
  },
  {
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Freelance / Contract',
    description: 'Design intuitive interfaces for web applications — dashboards, sales management portals, school portals, and admin panels.',
  },
];

const benefits = [
  'Competitive compensation',
  'Remote-friendly work environment',
  'Direct mentorship from founders',
  'Real client projects from day one',
  'Flexible working hours',
  'Room to grow with the company',
];

const Careers: React.FC = () => {
  useSEO({
    title: 'Careers at Trovix — React & .NET Developers, Nagpur India',
    description: 'Join Trovix. We hire React developers, .NET backend developers, full stack developers, and UI/UX designers. Remote-friendly, based in Nagpur, India.',
    canonical: 'https://www.trovixtech.com/careers',
  });
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
              Join <span className="gradient-text">Trovix</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're a small, focused team based in Nagpur, India building real products for real clients. If you want to work directly on sales management software, SaaS platforms, and school portals — we'd like to hear from you.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <GlassCard className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6">Why Work With Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-gold mr-3 flex-shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>
          </GlassCard>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-12">
            Open <span className="gradient-text">Positions</span>
          </h2>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <AnimatedSection key={index} delay={0.4 + index * 0.1}>
                <GlassCard>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                      <p className="text-muted-foreground mb-4">{position.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-gold" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-gold" />
                          {position.type}
                        </div>
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button className="cursor-pointer whitespace-nowrap">
                        <Briefcase className="h-4 w-4 mr-2" />
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Careers;

import React from 'react';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { GlassCard } from '@/components/shared/GlassCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const positions = [
  {
    title: 'Senior Full Stack Engineer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Build scalable web applications with React, Node.js, and cloud technologies.',
  },
  {
    title: 'Machine Learning Engineer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Develop and deploy ML models for production-scale applications.',
  },
  {
    title: 'DevOps Engineer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Manage cloud infrastructure and CI/CD pipelines using modern tools.',
  },
  {
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create beautiful, user-centered designs for web and mobile applications.',
  },
];
const benefits = [
  'Competitive salary and equity',
  'Comprehensive health insurance',
  'Flexible remote work options',
  'Professional development budget',
  'Latest tech equipment',
  'Unlimited PTO',
];
const Careers: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
              Join <span className="gradient-text">TROVIX</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Help us build the future of technology. Work with cutting-edge tools, talented people, and solve challenging problems.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <GlassCard className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6">Why Work With Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-electric-blue mr-3" />
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
                          <MapPin className="h-4 w-4 mr-1 text-electric-blue" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-electric-blue" />
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
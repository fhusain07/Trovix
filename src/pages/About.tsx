import React from 'react';
import { Target, Lightbulb, Award, Users } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { GlassCard } from '@/components/shared/GlassCard';
const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Focused on delivering exceptional value to our clients',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Constantly exploring new technologies and methodologies',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to the highest standards of quality',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Your success is our primary objective',
  },
];
const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
              About <span className="gradient-text">TROVIX</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are a cutting-edge technology company dedicated to transforming businesses through innovative software solutions and strategic IT consulting.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <GlassCard className="mb-16">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-xl mb-6">
                Founded in 2020, TROVIX has rapidly grown to become a trusted partner for organizations seeking to leverage technology for competitive advantage.
              </p>
              <p className="mb-6">
                Our team of expert engineers, designers, and consultants brings together decades of combined experience in cloud computing, artificial intelligence, web development, and data engineering. We specialize in building scalable, secure, and innovative solutions that drive real business results.
              </p>
              <p>
                From startups to Fortune 500 companies, we've helped hundreds of organizations navigate digital transformation and achieve their technology goals. Our commitment to excellence, innovation, and client success sets us apart in the competitive technology landscape.
              </p>
            </div>
          </GlassCard>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-12">
            Our <span className="gradient-text">Values</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={0.4 + index * 0.1}>
                <GlassCard className="h-full text-center">
                  <value.icon className="h-12 w-12 text-electric-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};
export default About;
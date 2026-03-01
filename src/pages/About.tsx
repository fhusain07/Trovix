import React from 'react';
import { Target, Lightbulb, Award, Users } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { GlassCard } from '@/components/shared/GlassCard';
const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Engineering high-performance digital infrastructure for innovation and growth.',
  },
  {
    icon: Lightbulb,
    title: 'Modern & Innovative',
    description: 'Combining modern frontend, robust backend, and cloud-native strategies.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Delivering scalable, secure, and reliable solutions tailored to business needs.',
  },
  {
    icon: Users,
    title: 'Client Success',
    description: 'Your long-term growth and efficiency is our primary objective.',
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
              TROVIX Tech is a modern IT and software solutions company based in Nagpur, Maharashtra, India. We specialize in building scalable, secure, and future-ready digital systems for startups, enterprises, and growing businesses.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <GlassCard className="mb-16">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-xl mb-6">
                Our mission is to engineer high-performance digital infrastructure that drives innovation, efficiency, and long-term growth. We combine modern frontend technologies, robust backend architectures, and cloud-native strategies to deliver reliable software solutions tailored to business needs.
              </p>
              <p className="mb-6">
                <b>We focus on:</b>
                <ul>
                  <li>Custom Web Application Development</li>
                  <li>Enterprise Software Solutions</li>
                  <li>API & Backend Architecture</li>
                  <li>Cloud-Ready Infrastructure</li>
                  <li>Performance Optimization & Scalability</li>
                </ul>
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
import React from 'react';
import { Cloud, Cpu, Code, Database, Shield, Workflow } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { GlassCard } from '@/components/shared/GlassCard';
const services = [
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Comprehensive cloud migration, architecture, and management services for AWS, Azure, and GCP.',
    features: ['Cloud Migration', 'Infrastructure as Code', 'DevOps Implementation', 'Cloud Security'],
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description: 'Custom AI models, natural language processing, computer vision, and predictive analytics.',
    features: ['Custom ML Models', 'NLP Solutions', 'Computer Vision', 'Predictive Analytics'],
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge frameworks and best practices.',
    features: ['React/Next.js', 'TypeScript', 'Progressive Web Apps', 'API Development'],
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Big data processing, ETL pipelines, data warehousing, and real-time analytics solutions.',
    features: ['Data Pipelines', 'ETL Processing', 'Data Warehousing', 'Real-time Analytics'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security audits, penetration testing, and security infrastructure design.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Intelligent automation solutions to streamline workflows and increase operational efficiency.',
    features: ['RPA Implementation', 'Workflow Optimization', 'Integration Services', 'Custom Automation'],
  },
];
const Services: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your unique business needs and objectives.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <GlassCard className="h-full">
                <service.icon className="h-12 w-12 text-electric-blue mb-4" />
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-electric-blue mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { GlassCard } from '@/components/shared/GlassCard';
import { Button } from '@/components/ui/button';
const projects = [
  {
    title: 'Enterprise Cloud Migration',
    client: 'Fortune 500 Retailer',
    description: 'Complete AWS cloud migration for a major retail chain, reducing infrastructure costs by 40%.',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'Microservices'],
  },
  {
    title: 'AI-Powered Analytics Platform',
    client: 'Financial Services Company',
    description: 'Custom machine learning platform for fraud detection with 95% accuracy rate.',
    tags: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
  },
  {
    title: 'Real-time Collaboration Tool',
    client: 'Tech Startup',
    description: 'Modern SaaS platform supporting 100K+ concurrent users with real-time features.',
    tags: ['React', 'Node.js', 'WebSockets', 'MongoDB'],
  },
  {
    title: 'Healthcare Data Pipeline',
    client: 'Medical Research Institute',
    description: 'Secure data processing pipeline handling 10M+ records daily for medical research.',
    tags: ['Apache Kafka', 'Spark', 'Python', 'HIPAA Compliant'],
  },
  {
    title: 'E-commerce Platform',
    client: 'D2C Fashion Brand',
    description: 'Headless commerce solution with advanced personalization and recommendations.',
    tags: ['Next.js', 'Shopify', 'GraphQL', 'Vercel'],
  },
  {
    title: 'IoT Monitoring System',
    client: 'Manufacturing Company',
    description: 'Real-time IoT monitoring and predictive maintenance system for factory equipment.',
    tags: ['IoT', 'Azure', 'Time-series DB', 'React'],
  },
];
const Projects: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of successful projects and innovative solutions we've delivered for our clients.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <GlassCard className="h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-electric-blue mb-3">{project.client}</p>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" className="cursor-pointer flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Case Study
                  </Button>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
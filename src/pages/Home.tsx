import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Cpu, Cloud, Database, Workflow, Code, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { GlassCard } from '@/components/shared/GlassCard';
const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance for real-world applications',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security standards',
  },
  {
    icon: Cpu,
    title: 'AI-Powered',
    description: 'Next-gen intelligent automation',
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    description: 'Scalable infrastructure solutions',
  },
];
const services = [
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services',
    icon: Cloud,
  },
  {
    title: 'AI & Machine Learning',
    description: 'Custom AI models and intelligent automation',
    icon: Cpu,
  },
  {
    title: 'Web Development',
    description: 'Modern, responsive web applications',
    icon: Code,
  },
  {
    title: 'Data Engineering',
    description: 'Big data processing and analytics',
    icon: Database,
  },
];
const technologies = [
  'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 'TensorFlow'
];
const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, TechCorp',
    content: 'TROVIX transformed our infrastructure. Their cloud solutions are exceptional.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'CEO, DataFlow',
    content: 'Best technology partner we\'ve worked with. Professional and innovative.',
  },
  {
    name: 'Emily Watson',
    role: 'Director, InnovateLabs',
    content: 'Their AI solutions helped us automate 60% of our workflows. Incredible ROI.',
  },
];
const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-transparent to-electric-violet/10" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-violet/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6">
              <span className="gradient-text">Build Tomorrow</span>
              <br />
              <span className="text-foreground">Today</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Modern IT & Software Solutions powered by cutting-edge technology and innovative thinking
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="cursor-pointer group">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline" className="cursor-pointer">
                  View Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Features Section */}
      <AnimatedSection>
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-12">
            Why Choose <span className="gradient-text">TROVIX</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard>
                  <feature.icon className="h-12 w-12 text-electric-blue mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>
      {/* Services Section */}
      <AnimatedSection>
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-12">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard className="h-full">
                  <service.icon className="h-10 w-10 text-electric-blue mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link to="/services" className="text-electric-blue hover:underline cursor-pointer inline-flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>
      {/* Testimonials Section */}
      <AnimatedSection>
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-12">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard hover={false}>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-blue to-electric-violet flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>
      {/* Tech Stack Section */}
      <AnimatedSection>
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-12">
            Tech <span className="gradient-text">Stack</span>
          </h2>
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
      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="text-center py-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's build something amazing together. Get in touch with our team today.
            </p>
            <Link to="/contact">
              <Button size="lg" className="cursor-pointer">
                Contact Us Today
              </Button>
            </Link>
          </GlassCard>
        </section>
      </AnimatedSection>
    </div>
  );
};
export default Home;
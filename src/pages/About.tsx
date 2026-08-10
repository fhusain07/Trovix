import React from 'react';
import { Target, Code, MessageSquare, Handshake } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { GlassCard } from '@/components/shared/GlassCard';
import { FounderSection } from '@/components/sections/FounderSection';
import { useSEO } from '@/hooks/useSEO';

const values = [
  {
    icon: Target,
    title: 'Custom Over Generic',
    description: 'We build systems around your specific workflow — not the other way around. Every product is purpose-built.',
  },
  {
    icon: Code,
    title: 'Production Standards',
    description: 'React + .NET + PostgreSQL. Clean architecture, typed code, tested endpoints, and documented APIs on every project.',
  },
  {
    icon: MessageSquare,
    title: 'Direct Communication',
    description: 'You work directly with the developer. No project managers playing telephone — clear, fast decisions throughout.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    description: "We don't disappear after delivery. Post-launch support, maintenance, and WhatsApp access are part of every engagement.",
  },
];

const About: React.FC = () => {
  useSEO({
    title: 'About Trovix — Custom Software Development Studio, Nagpur India',
    description: 'Trovix is a software development studio in Nagpur, India. We build CRM systems, SaaS platforms, and school management portals using React and .NET.',
    canonical: 'https://www.trovixtech.com/about',
  });
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
              About <span className="gradient-text">Trovix</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Trovix is a custom software development studio based in Nagpur, Maharashtra, India. We build CRM systems, SaaS platforms, school management portals, and automation tools for businesses that have outgrown their spreadsheets.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <GlassCard className="mb-16">
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">
                    Why Trovix <span className="gradient-text">Exists</span>
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Most small businesses and growing companies hit the same wall: they're managing their operations in Excel, WhatsApp groups, and a mix of disconnected SaaS tools — none of which actually fits how they work.
                    </p>
                    <p>
                      Trovix was built to solve that specific problem. We build software that mirrors your exact process, integrates with the tools you already use, and is maintained long after it goes live.
                    </p>
                    <p>
                      We focus on a narrow set of products — CRM systems, school portals, SaaS platforms, and business automation — because depth beats breadth. Every project we take on is something we've built before, in a domain we understand well.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Projects Delivered', value: '10+' },
                    { label: 'Years Building React + .NET', value: '3+' },
                    { label: 'Average Project Timeline', value: '6–8 weeks' },
                    { label: 'Response Time', value: 'Within 24 hours' },
                  ].map((stat) => (
                    <div key={stat.label} className="glass-effect rounded-xl px-6 py-4 flex items-center justify-between">
                      <span className="text-muted-foreground text-sm">{stat.label}</span>
                      <span className="font-bold text-gold">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-slate-800/60 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our mission is to engineer high-performance digital infrastructure that drives innovation, efficiency, and long-term growth. We combine modern frontend technologies, robust backend architectures, and cloud-native strategies to deliver reliable software solutions tailored to business needs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">What We Focus On</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
                    <li>Custom Web Application Development</li>
                    <li>Enterprise Software Solutions</li>
                    <li>API & Backend Architecture</li>
                    <li>Cloud-Ready Infrastructure</li>
                    <li>Performance Optimization & Scalability</li>
                  </ul>
                </div>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-12">
            How We <span className="gradient-text">Work</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={0.4 + index * 0.1}>
                <GlassCard className="h-full text-center">
                  <value.icon className="h-12 w-12 text-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <FounderSection />

      </div>
    </div>
  );
};
export default About;

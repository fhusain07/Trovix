import React from 'react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    subtitle: 'Free · 30 minutes',
    description:
      'You describe the problem in plain language — no tech jargon required. We ask questions, understand your workflow, and by the end of the call you know exactly what needs to be built and a rough cost estimate.',
  },
  {
    number: '02',
    title: 'Proposal & Wireframes',
    subtitle: 'Delivered in 48 hours',
    description:
      'We send a written proposal with full scope, timeline, and a fixed price. Wireframes are included so you can visualise the product before committing. No surprise invoices, no vague estimates.',
  },
  {
    number: '03',
    title: 'Build & Deliver',
    subtitle: 'Weekly demos · Milestone payments',
    description:
      'We develop in weekly sprints with live demos. You review progress, give feedback, and only pay per milestone — not upfront in full. After launch, 30 days of free support is included.',
  },
];

export const HowWeWork: React.FC = () => (
  <AnimatedSection>
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-4">
        How We <span className="gradient-text">Work</span>
      </h2>
      <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
        A transparent process so you always know what's happening, what's next, and what it costs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
        {/* Connector line — desktop only */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-electric-blue/40 via-electric-violet/40 to-electric-blue/40"
        />

        {steps.map((step, index) => (
          <AnimatedSection key={index} delay={index * 0.15}>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-electric-blue/20 to-electric-violet/20 border border-electric-blue/30 flex items-center justify-center mb-6 relative z-10 flex-shrink-0">
                <span className="text-2xl font-display font-bold gradient-text">{step.number}</span>
              </div>
              <h3 className="text-xl font-display font-bold mb-1">{step.title}</h3>
              <p className="text-electric-blue text-sm font-semibold mb-3">{step.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </AnimatedSection>
);

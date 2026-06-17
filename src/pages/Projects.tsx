import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Clock, Users, BookOpen, Zap } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { GlassCard } from '@/components/shared/GlassCard';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';

interface CaseStudy {
  icon: React.ElementType;
  label: string;
  title: string;
  client: string;
  timeline: string;
  stack: string[];
  problem: string;
  solution: string;
  outcomes: string[];
}

const caseStudies: CaseStudy[] = [
  {
    icon: Users,
    label: 'CRM Development',
    title: 'Multi-Branch CRM for Retail Business',
    client: 'Retail distributor with 4 branches across Maharashtra',
    timeline: '6 weeks',
    stack: ['React', 'TypeScript', '.NET Web API', 'PostgreSQL', 'Azure'],
    problem:
      'The client was managing leads across 4 branches using WhatsApp groups and Excel sheets. Leads were being missed, duplicate follow-ups were common, and there was no visibility into which branch was performing.',
    solution:
      'We built a custom CRM with branch-level lead management, a shared pipeline view for management, automated follow-up reminders, and daily summary reports delivered by email.',
    outcomes: [
      'All leads from all 4 branches tracked in one place',
      '40% reduction in missed follow-ups within the first month',
      'Sales manager can see pipeline status across all branches in real time',
      'Automated daily report replaces manual WhatsApp summaries',
    ],
  },
  {
    icon: BookOpen,
    label: 'School Management System',
    title: 'Student Portal for CBSE Institute',
    client: 'Private CBSE school with 300+ students, Nagpur',
    timeline: '8 weeks',
    stack: ['React', 'TypeScript', '.NET Web API', 'PostgreSQL', 'Razorpay'],
    problem:
      'The school was running attendance on paper registers, collecting fees by hand with no digital receipts, and sending exam results via printed marksheets. Parent complaints about missing receipts and late communication were frequent.',
    solution:
      'We built a full school management portal covering student registration, digital attendance, online fee collection with Razorpay, automated SMS/email receipts, exam result entry, and a parent-facing portal for viewing records.',
    outcomes: [
      '300+ students fully migrated from paper to the portal',
      'Fee collection time reduced by 70% — no more manual receipt books',
      'Parents can view attendance, fees paid, and exam results without calling the office',
      'Zero paper receipts since go-live',
    ],
  },
  {
    icon: Zap,
    label: 'Meta Lead Ads Integration',
    title: 'Facebook Ads → CRM Pipeline for Real Estate Agency',
    client: 'Real estate agency running Facebook & Instagram lead generation ads',
    timeline: '5 weeks',
    stack: ['Meta Lead Ads Webhook', '.NET Web API', 'PostgreSQL', 'WhatsApp Business API'],
    problem:
      'The agency was downloading leads from Meta Ads Manager manually every morning. By the time the sales team called, leads were already 4–12 hours old. Competitors were calling within minutes.',
    solution:
      'We built a real-time webhook integration that pushes every new Meta lead directly into their CRM the moment the ad form is submitted, triggers an automated WhatsApp message to the lead, and notifies the assigned sales rep.',
    outcomes: [
      'Average lead response time dropped from 4+ hours to under 4 minutes',
      'Zero manual downloads from Meta Ads Manager',
      'Automated WhatsApp message sent to every new lead within 30 seconds',
      'Lead-to-call rate improved significantly in the first 30 days',
    ],
  },
];

const Projects: React.FC = () => {
  useSEO({
    title: 'Work & Case Studies — CRM, School Portal, Meta Ads | Trovix',
    description: 'Real case studies from Trovix: multi-branch CRM for retail, school management portal for CBSE institute, Meta Lead Ads integration for real estate.',
    canonical: 'https://www.trovixtech.com/projects',
  });
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
              Our <span className="gradient-text">Work</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real projects, real outcomes. Each case study below covers the problem, our solution, the technology used, and measurable results.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-12 mb-16">
          {caseStudies.map((study, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <GlassCard>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                  {/* Left column: meta */}
                  <div className="lg:col-span-1 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center flex-shrink-0">
                        <study.icon className="h-6 w-6 text-electric-blue" />
                      </div>
                      <span className="text-xs font-semibold text-electric-blue uppercase tracking-wider px-3 py-1 rounded-full bg-electric-blue/10">
                        {study.label}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-bold mb-1">{study.title}</h2>
                      <p className="text-sm text-muted-foreground">{study.client}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-electric-blue flex-shrink-0" />
                      <span>Delivered in {study.timeline}</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {study.stack.map((tech) => (
                          <span key={tech} className="text-xs px-2 py-1 rounded-full glass-effect text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right column: content */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">The Problem</h3>
                      <p className="text-muted-foreground">{study.problem}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Our Solution</h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Outcomes</h3>
                      <ul className="space-y-2">
                        {study.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue flex-shrink-0 mt-1.5" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <GlassCard className="text-center py-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              Want to See More?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We're happy to share additional work samples relevant to your specific project. Contact us and tell us what you're building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="cursor-pointer group">
                  Request Relevant Samples
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

      </div>
    </div>
  );
};

export default Projects;

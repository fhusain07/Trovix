import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

export interface FAQItem {
  question: string;
  answer: string;
}

const defaultFAQs: FAQItem[] = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Simple sales management software and automation tools typically take 4–6 weeks. School management portals and SaaS platforms with complex features take 8–16 weeks. We provide an accurate timeline in the proposal — not a vague range.',
  },
  {
    question: 'What does a project typically cost?',
    answer:
      'Projects start from ₹50,000 for focused automation tools and simple sales management systems. Full school management systems and SaaS platforms typically range from ₹1,50,000–₹5,00,000 depending on scope. We provide a fixed-price quote upfront — no surprise invoices.',
  },
  {
    question: 'Do we own the code after delivery?',
    answer:
      "Completely. Upon final payment you receive the full source code and own it outright. We don't use proprietary platforms or lock you into a subscription with us. Host it anywhere, with any team.",
  },
  {
    question: 'How do payments work?',
    answer:
      'We use a milestone-based structure — typically 30% on project kickoff, 40% at the mid-project demo, and 30% on final delivery. This protects both parties. We accept bank transfer, UPI, and international wire.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer:
      'Yes. Every project includes 30 days of free bug fixes after launch. Beyond that, we offer monthly maintenance packages covering hosting management, feature updates, and priority WhatsApp support.',
  },
  {
    question: 'Can you work in our timezone?',
    answer:
      "We're based in Nagpur, India (IST, UTC+5:30). For international clients we schedule discovery and review calls during overlapping hours and manage day-to-day communication asynchronously via WhatsApp and email.",
  },
  {
    question: 'Do you sign NDAs?',
    answer:
      "Yes. We sign NDAs before any project discussion when requested. Our standard client agreement includes a confidentiality clause — your business data, processes, and project details are always kept private.",
  },
  {
    question: 'Can you integrate with tools we already use?',
    answer:
      "Yes. We commonly integrate with WhatsApp Business API, Razorpay, Stripe, Google Workspace, Meta Ads, Zoho, and custom REST APIs. Tell us what you use during the discovery call and we'll confirm compatibility.",
  },
];

interface FAQSectionProps {
  faqs?: FAQItem[];
  heading?: React.ReactNode;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  faqs = defaultFAQs,
  heading,
}) => (
  <AnimatedSection>
    <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        {heading ?? (
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        )}
      </div>

      <Accordion.Root type="single" collapsible className="space-y-3">
        {faqs.map((faq, index) => (
          <Accordion.Item
            key={index}
            value={`faq-${index}`}
            className="glass-effect rounded-xl overflow-hidden"
          >
            <Accordion.Header asChild>
              <div>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold hover:text-gold transition-colors">
                  <span>{faq.question}</span>
                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-gold transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </div>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
              <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  </AnimatedSection>
);

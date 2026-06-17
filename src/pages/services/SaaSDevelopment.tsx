import React from 'react';
import { Cloud } from 'lucide-react';
import { ServicePageTemplate, type ServicePageProps } from '@/components/templates/ServicePageTemplate';

const data: ServicePageProps = {
  seo: {
    title: 'Custom SaaS Development India | B2B SaaS Platforms | Trovix',
    description:
      'Custom SaaS platforms built from scratch — multi-tenant architecture, subscription billing, user management, and admin dashboards. React + .NET + PostgreSQL. Nagpur, India.',
    canonical: 'https://www.trovixtech.com/services/saas-development',
  },
  icon: Cloud,
  badge: 'Custom SaaS Development',
  title: 'B2B SaaS Platforms',
  titleGradient: 'Built From Scratch',
  description:
    "Can't find a SaaS tool that fits your business model? We build B2B SaaS platforms from scratch — multi-tenant architecture, subscription billing, user roles, admin dashboards, and the exact feature set your users actually need.",
  problems: [
    {
      title: 'Off-the-Shelf Tools Don\'t Fit',
      description:
        'Every SaaS product is built for the average user. If your business model, workflow, or pricing structure is even slightly different, you spend more time working around the tool than using it.',
    },
    {
      title: 'Enterprise Platforms Are Overkill',
      description:
        'Building on Salesforce or ServiceNow means paying for 90% of features you don\'t need, dealing with vendor lock-in, and watching your costs scale every time you add a user.',
    },
    {
      title: 'No Product, No Revenue',
      description:
        'You have validated demand for a SaaS idea but no technical co-founder. Every month without a product is another month competitors can close the gap.',
    },
  ],
  features: [
    {
      title: 'Multi-Tenant Architecture',
      description:
        'Each customer organisation gets fully isolated data within a single codebase. Onboard 1 client or 1,000 — the architecture scales without restructuring.',
    },
    {
      title: 'Subscription & Billing Integration',
      description:
        'Plan tiers, trial periods, usage limits, and payment collection — integrated with Razorpay or Stripe. Billing is handled automatically.',
    },
    {
      title: 'User Roles & Permissions',
      description:
        'Granular role-based access: Owner, Admin, Manager, Member. Each role sees and can do exactly what they should — nothing more.',
    },
    {
      title: 'Onboarding Flow',
      description:
        'New user signup, workspace creation, email verification, and guided first-use steps — all built in so your users activate without needing support.',
    },
    {
      title: 'Super Admin Dashboard',
      description:
        'See all tenants, monitor usage, manage subscriptions, and intervene on any account — from a single internal admin panel.',
    },
    {
      title: 'API-First Architecture',
      description:
        'REST APIs built from day one so the platform can be integrated with third-party tools, mobile apps, or your clients\' own systems in the future.',
    },
  ],
  techStack: ['React', 'TypeScript', '.NET Web API', 'PostgreSQL', 'Razorpay / Stripe', 'Azure'],
  faqs: [
    {
      question: 'How do you handle data isolation between tenants?',
      answer:
        'We use row-level tenant isolation in PostgreSQL — every record is tagged with a tenant ID, and the API enforces that users can only query their own organisation\'s data. There is no data bleed between tenants.',
    },
    {
      question: 'Can we start with one pricing plan and add more later?',
      answer:
        'Yes. We build billing integration with future flexibility in mind. Adding a new plan, adjusting feature limits per tier, or introducing usage-based pricing after launch are all straightforward changes.',
    },
    {
      question: 'Will you help us define what to build?',
      answer:
        'Yes. During the discovery phase we help you prioritise features based on what your earliest users actually need vs. what\'s nice to have. Shipping a focused v1 faster is almost always better than shipping a complete v1 late.',
    },
    {
      question: 'Can we add a mobile app later?',
      answer:
        'Yes. Because we build with a REST API backend from day one, a React Native or web-view mobile app can connect to the same backend without any architectural changes.',
    },
    {
      question: 'Do you offer equity for reduced-rate work?',
      answer:
        'We work on fixed-price contracts only. Equity arrangements create misaligned incentives and delayed payment is bad for both parties. If budget is a constraint, we can scope a smaller, shippable v1.',
    },
  ],
  cta: {
    headline: 'Ready to Build Your SaaS?',
    description:
      'Share your idea or existing spec. We\'ll review it and send back a scope, timeline, and fixed price within 24 hours.',
  },
};

const SaaSDevelopment: React.FC = () => <ServicePageTemplate {...data} />;
export default SaaSDevelopment;

import React from 'react';
import { Code } from 'lucide-react';
import { ServicePageTemplate, type ServicePageProps } from '@/components/templates/ServicePageTemplate';

const data: ServicePageProps = {
  seo: {
    title: 'Web Application Development India | React .NET PostgreSQL | Trovix',
    description:
      'Full-stack web applications built with React frontends, .NET Web API backends, and PostgreSQL. Production-ready, scalable, and maintainable. Based in Nagpur, India.',
    canonical: 'https://www.trovixtech.com/services/web-application-development',
  },
  icon: Code,
  badge: 'Web Application Development',
  title: 'Production-Ready Web Apps',
  titleGradient: 'React + .NET + PostgreSQL',
  description:
    'Full-stack web applications built on a modern, reliable stack that you can own, extend, and maintain. React frontends that are fast and accessible. .NET Web API backends that are secure and scalable. PostgreSQL for a solid data foundation.',
  problems: [
    {
      title: 'Inherited Legacy Code No One Understands',
      description:
        'The original developer is gone and nobody wants to touch the codebase. Every feature request requires double the time because the code has no structure, no tests, and no documentation.',
    },
    {
      title: 'Off-the-Shelf Tools Hit Their Ceiling',
      description:
        'WordPress, Wix, or no-code tools got you to ₹10L in revenue. Now your requirements are too complex for the platform, but you\'re not sure what to build next or who to trust to build it.',
    },
    {
      title: 'Vendor Lock-in on the Current Platform',
      description:
        'Your current system is hosted on a proprietary platform. Switching providers means rebuilding from scratch — or paying indefinitely for something that doesn\'t fully work.',
    },
  ],
  features: [
    {
      title: 'React + TypeScript Frontend',
      description:
        'Component-based UIs built with React 19 and TypeScript. Fast, accessible, responsive, and built to be extended without breaking existing functionality.',
    },
    {
      title: '.NET Web API Backend',
      description:
        'RESTful APIs built with ASP.NET Core. Structured with clean architecture so the codebase stays maintainable as features accumulate over time.',
    },
    {
      title: 'PostgreSQL Database Design',
      description:
        'Relational schema design that handles your actual data model — not a generic schema that forces you to store data in ways that don\'t make sense for your business.',
    },
    {
      title: 'Authentication & Authorisation',
      description:
        'JWT-based auth with role-based access control. Email/password login, optional Google SSO, password reset flows, and session management all built in.',
    },
    {
      title: 'Performance Optimisation',
      description:
        'Query optimisation, database indexing, API response caching, and frontend code splitting so the application is fast under real-world usage — not just in development.',
    },
    {
      title: 'Deployment & Hosting Setup',
      description:
        'We handle the initial deployment to Azure, a VPS, or a provider of your choice. Docker configuration, environment variables, and SSL setup all included.',
    },
  ],
  techStack: ['React 19', 'TypeScript', 'ASP.NET Core', 'PostgreSQL', 'Docker', 'Azure / VPS'],
  faqs: [
    {
      question: 'Why React and .NET instead of another stack?',
      answer:
        'React is the industry standard for maintainable, scalable frontends. .NET Core is fast, mature, and has excellent tooling for building secure APIs. PostgreSQL is the most capable open-source relational database. Together they give you a stack that any good developer can work with — you\'re not tied to a niche ecosystem.',
    },
    {
      question: 'Can you rebuild an existing application on a better stack?',
      answer:
        'Yes. We commonly take over applications built on outdated or poorly structured code and rebuild them on a clean architecture. We analyse the existing system first to understand all the requirements before starting.',
    },
    {
      question: 'Will you write tests?',
      answer:
        'We write unit tests for business logic and integration tests for critical API endpoints. The level of test coverage is agreed in the project scope — higher coverage means more time and cost, which is worth it for complex or high-stakes systems.',
    },
    {
      question: 'Do you handle hosting and DevOps?',
      answer:
        "We set up the initial deployment environment and CI/CD pipeline. For ongoing hosting management, we offer a monthly retainer. We don't resell hosting — you pay the cloud provider directly so there's no markup.",
    },
    {
      question: 'What happens after delivery?',
      answer:
        '30 days of free bug fixes are included. After that, changes and new features are scoped separately. We aim to make every handover clean — full source code, deployment documentation, and a recorded walkthrough of the codebase.',
    },
  ],
  cta: {
    headline: 'Let\'s Build Something Solid',
    description:
      "Share your requirements — existing system, new idea, or a scope doc. We'll review and send back a proposal within 24 hours.",
  },
};

const WebDevelopment: React.FC = () => <ServicePageTemplate {...data} />;
export default WebDevelopment;

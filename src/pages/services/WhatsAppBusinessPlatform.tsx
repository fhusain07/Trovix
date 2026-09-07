import React from 'react';
import { MessageCircle } from 'lucide-react';
import { ServicePageTemplate, type ServicePageProps } from '@/components/templates/ServicePageTemplate';

const data: ServicePageProps = {
  seo: {
    title: 'WhatsApp Business Platform Integration India | Messaging Automation | Trovix',
    description:
      'WhatsApp Business Platform integrations for CRM and business software — two-way customer communication, automated notifications, and messaging workflows. Built with React & .NET. Based in Nagpur, India.',
    canonical: 'https://www.trovixtech.com/services/whatsapp-business-platform',
  },
  icon: MessageCircle,
  badge: 'WhatsApp Business Platform',
  title: 'Two-Way Customer Communication',
  titleGradient: 'Built Into Your Software',
  description:
    'We integrate the official WhatsApp Business Platform into your CRM, sales system, school portal, or SaaS product — so notifications, updates, reminders, and two-way customer conversations all flow through the software your business or organization already uses, instead of a phone kept in someone\'s pocket.',
  problems: [
    {
      title: 'Customer Replies Get Lost',
      description:
        'A shared WhatsApp number on someone\'s personal phone means messages get missed, conversations aren\'t logged anywhere, and there\'s no record when that person is on leave.',
    },
    {
      title: 'Manual Notifications Don\'t Scale',
      description:
        'Sending order confirmations, appointment reminders, or payment alerts by hand works for 10 customers. At 500, someone needs a system that sends them automatically, every time, without fail.',
    },
    {
      title: 'Messaging Lives Outside Your System',
      description:
        'Your CRM has the customer data. Your WhatsApp has the conversation. When they\'re disconnected, no one has the full picture, and following up requires switching between five apps.',
    },
  ],
  features: [
    {
      title: 'Official WhatsApp Business Platform Integration',
      description:
        'We integrate via approved Meta Business Solution Providers (BSPs) so messaging is compliant, reliable, and tied to a verified business number — not a workaround.',
    },
    {
      title: 'Two-Way Conversations in Your Software',
      description:
        'Customer replies land directly inside your CRM or dashboard, next to their full record — order history, support tickets, and prior conversations in one place.',
    },
    {
      title: 'Automated Notifications & Alerts',
      description:
        'Order confirmations, payment reminders, appointment updates, and status changes are sent automatically the moment they happen — no one has to remember to send them.',
    },
    {
      title: 'Template & Session Messaging',
      description:
        'We set up approved message templates for notifications and manage session-based replies for support conversations, in line with WhatsApp\'s messaging policies.',
    },
    {
      title: 'Workflow-Triggered Messaging',
      description:
        'Connect messaging to the events that matter in your business — a new lead, an overdue invoice, a completed order — so the right message goes out automatically, to the right person.',
    },
    {
      title: 'Works With Your Existing System',
      description:
        'Whether you already have a CRM or sales system we built, or one you\'re running elsewhere, we integrate WhatsApp messaging into it rather than asking you to switch tools.',
    },
  ],
  techStack: ['React', 'TypeScript', '.NET Web API', 'PostgreSQL', 'WhatsApp Business Platform', 'Meta Graph API'],
  faqs: [
    {
      question: 'Is this the official WhatsApp Business Platform, or a workaround?',
      answer:
        'The official platform. We integrate through approved Meta Business Solution Providers so your business number is verified and messaging stays compliant with WhatsApp\'s commerce and business messaging policies.',
    },
    {
      question: 'Can customers reply and have that show up in our CRM?',
      answer:
        'Yes. That two-way flow — customer sends a message, it appears against their record in your system, your team replies from the same screen — is the core of what we build.',
    },
    {
      question: 'What kind of automated messages can be sent?',
      answer:
        'Order and payment confirmations, appointment or follow-up reminders, delivery updates, lead acknowledgements, and internal alerts to your team — anything that\'s currently a manual message tied to a predictable event.',
    },
    {
      question: 'Do we need an existing WhatsApp Business account?',
      answer:
        'You\'ll need a WhatsApp Business Account and a verified business number. If you don\'t have one set up yet, we guide you through the Meta verification and BSP onboarding process as part of the project.',
    },
    {
      question: 'Can this integrate with a CRM or system you didn\'t build?',
      answer:
        'Yes, provided it has an accessible API or webhook. We\'ve connected WhatsApp messaging to both custom systems we\'ve built and existing third-party tools.',
    },
  ],
  cta: {
    headline: 'Bring WhatsApp Into Your Workflow',
    description:
      'Tell us how you currently message customers and where the gaps are. We\'ll map out an integration and send a free estimate within 24 hours.',
  },
};

const WhatsAppBusinessPlatform: React.FC = () => <ServicePageTemplate {...data} />;
export default WhatsAppBusinessPlatform;

import React from 'react';
import { Users } from 'lucide-react';
import { ServicePageTemplate, type ServicePageProps } from '@/components/templates/ServicePageTemplate';

const data: ServicePageProps = {
  seo: {
    title: 'CRM Development India | Custom Softwares Systems for Small Business | Trovix',
    description:
      'Custom Softwares systems built for your exact sales process — lead tracking, pipeline management, and follow-up automation. React + .NET + PostgreSQL. Based in Nagpur, India.',
    canonical: 'https://www.trovixtech.com/services/crm-development',
  },
  icon: Users,
  badge: 'CRM Development',
  title: 'Custom Softwares Systems',
  titleGradient: 'Built for Your Sales Process',
  description:
    'Stop managing leads in spreadsheets shared across five people. We build CRM systems that match the way your sales team actually works — lead capture, pipeline tracking, follow-up automation, and management dashboards, all in one place.',
  problems: [
    {
      title: 'Leads Falling Through the Cracks',
      description:
        'When follow-ups live in a shared Excel file or a WhatsApp group, leads get missed. Someone forgets to update the sheet. Two people call the same prospect. A hot lead goes cold because no one noticed it was overdue.',
    },
    {
      title: 'No Visibility Across the Team',
      description:
        'Managers have no real-time view of what\'s in the pipeline, which salesperson is overloaded, or why deals are getting stuck. Reporting means asking someone to compile a spreadsheet at the end of the month.',
    },
    {
      title: 'Generic CRMs Don\'t Fit',
      description:
        'Salesforce is built for enterprise companies. Zoho has 200 features you\'ll never use. Neither works the way your team actually sells. You spend more time configuring the tool than using it.',
    },
  ],
  features: [
    {
      title: 'Lead Capture from Multiple Sources',
      description:
        'Web inquiry forms, WhatsApp messages, phone call logs, and Meta lead ads all flow into one unified pipeline — automatically.',
    },
    {
      title: 'Visual Sales Pipeline',
      description:
        'Customisable pipeline stages that match your actual sales process — New, Contacted, Proposal Sent, Negotiating, Won, Lost. Drag-and-drop cards, no spreadsheet gymnastics.',
    },
    {
      title: 'Automated Follow-up Reminders',
      description:
        'Set follow-up dates and receive WhatsApp or email reminders before leads go cold. Never miss a scheduled callback again.',
    },
    {
      title: 'Role-Based Access',
      description:
        'Salespeople see their own leads. Managers see everyone. Admins control everything. No more accidental overwriting of other people\'s data.',
    },
    {
      title: 'Management Dashboard',
      description:
        'Real-time view of total leads, conversion rates by stage, top performers, and monthly targets. Share a link with leadership — no spreadsheet assembly required.',
    },
    {
      title: 'Full Lead History',
      description:
        'Every call, note, and status change is logged against the contact permanently. When a lead comes back six months later, the full context is there.',
    },
  ],
  techStack: ['React', 'TypeScript', '.NET Web API', 'PostgreSQL', 'WhatsApp Business API'],
  faqs: [
    {
      question: 'Can I import my existing Excel data into the new CRM?',
      answer:
        'Yes. We build a data import tool into every CRM project. Your existing spreadsheet is cleaned, mapped, and imported — so you start with your full history intact, not from zero.',
    },
    {
      question: 'Can the CRM capture leads from Facebook and Instagram ads?',
      answer:
        'Yes. We integrate Meta Lead Ads directly into your CRM via the Meta Graph API. Every new lead arrives in real time — within 30 seconds of the form being submitted.',
    },
    {
      question: 'Can we customise the pipeline stages to match our sales process?',
      answer:
        'Completely. The pipeline stages, lead fields, and status labels are designed around your workflow — not the other way around. During discovery we map your exact process before writing a line of code.',
    },
    {
      question: 'What if our sales process changes after launch?',
      answer:
        'We build CRMs to be flexible. Adding a new pipeline stage, a new lead source, or a new report is a small change — not a rebuild. Post-launch changes are quoted separately and handled quickly.',
    },
    {
      question: 'Does the CRM work on mobile?',
      answer:
        'Yes. Every CRM we build is fully responsive and works on any device. Salespeople can update leads from their phone in the field without needing to open a laptop.',
    },
  ],
  cta: {
    headline: 'Ready to Replace Your Spreadsheet?',
    description:
      'Tell us about your sales team and current lead management process. We\'ll send a free estimate within 24 hours.',
  },
};

const CRMDevelopment: React.FC = () => <ServicePageTemplate {...data} />;
export default CRMDevelopment;

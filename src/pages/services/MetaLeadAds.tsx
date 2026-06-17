import React from 'react';
import { Zap } from 'lucide-react';
import { ServicePageTemplate, type ServicePageProps } from '@/components/templates/ServicePageTemplate';

const data: ServicePageProps = {
  seo: {
    title: 'Meta Lead Ads CRM Integration India | Facebook Instagram Lead Sync | Trovix',
    description:
      'Connect Facebook and Instagram lead ads directly to your CRM in real time. No manual downloads, instant follow-up. Built with Meta Graph API + .NET. Nagpur, India.',
    canonical: 'https://www.trovixtech.com/services/meta-lead-ads',
  },
  icon: Zap,
  badge: 'Meta Lead Ads Integration',
  title: 'Facebook & Instagram Leads',
  titleGradient: 'Into Your CRM in Real Time',
  description:
    "Every lead from your Facebook and Instagram ad campaigns should arrive in your CRM within seconds — not sitting in Meta's Lead Centre waiting to be downloaded days later. We build the real-time integration that makes this happen.",
  problems: [
    {
      title: 'Leads Sitting in Meta\'s Lead Centre',
      description:
        'Meta doesn\'t send leads to you — you have to go and collect them. Manual downloads every few days mean your team is calling prospects who contacted competitors two days ago.',
    },
    {
      title: 'No Way to Track Which Ad Generated Which Revenue',
      description:
        'Leads go into a spreadsheet. Revenue is tracked separately. There\'s no way to see which campaign, ad set, or creative actually converted to paying clients. Ad spend decisions are made blind.',
    },
    {
      title: 'Slow Follow-up Kills Conversion',
      description:
        'Research consistently shows that contacting a lead within 5 minutes delivers dramatically higher conversion than contacting them the next day. Every hour of delay after that cuts your odds further.',
    },
  ],
  features: [
    {
      title: 'Real-Time Lead Sync via Webhook',
      description:
        'Every lead form submission on Facebook or Instagram arrives in your CRM within 30 seconds via the Meta Graph API webhook. No delays, no manual steps.',
    },
    {
      title: 'Instant Agent WhatsApp Notification',
      description:
        'The moment a lead arrives, the assigned agent receives a WhatsApp notification with the lead\'s name, phone number, and the ad they responded to. First contact within minutes.',
    },
    {
      title: 'Automatic Lead Tagging by Campaign',
      description:
        'Every lead is tagged with the campaign name, ad set, and ad creative that generated it. Track conversion rates and revenue per campaign without any manual attribution.',
    },
    {
      title: 'CRM Pipeline Entry',
      description:
        'New leads enter the CRM pipeline at the correct stage automatically, with all Meta form fields mapped to CRM fields — no copy-pasting from one system to another.',
    },
    {
      title: 'Campaign ROI Dashboard',
      description:
        'See cost-per-lead, cost-per-appointment, and cost-per-conversion broken down by campaign and ad creative. Know exactly which ads are making money and which are wasting budget.',
    },
    {
      title: 'Multi-Page & Multi-Ad Account Support',
      description:
        'Connect multiple Facebook Pages, Instagram accounts, and ad accounts to a single CRM instance. All leads centralised, all attribution preserved.',
    },
  ],
  techStack: ['React', 'TypeScript', '.NET Web API', 'PostgreSQL', 'Meta Graph API', 'WhatsApp Business API'],
  faqs: [
    {
      question: 'Does this work with my existing CRM or do I need a new one?',
      answer:
        'If you have a CRM with a webhook or REST API, we can integrate Meta leads directly into it. If you don\'t have a CRM yet, we can build one as part of the same project — which is usually the most cost-effective approach.',
    },
    {
      question: 'How does Meta lead access work technically?',
      answer:
        'We register a webhook with the Meta Graph API on your Facebook Page. When a user submits a lead form, Meta sends the lead data to our endpoint instantly, which processes and inserts it into your CRM.',
    },
    {
      question: 'Can this handle high volumes of leads?',
      answer:
        "Yes. The integration is built on a queued processing architecture. Whether you receive 10 leads a day or 1,000, every lead is processed reliably without the system backing up.",
    },
    {
      question: 'What happens if the integration goes down?',
      answer:
        'We implement retry logic and a dead-letter queue so that if our server is temporarily unavailable, Meta\'s lead data is retried and no leads are lost. You also receive an alert if processing failures are detected.',
    },
    {
      question: 'Can we also integrate Instagram DM leads or only lead form leads?',
      answer:
        'This integration covers Meta Lead Ads specifically (Instant Forms on Facebook and Instagram). Instagram DM automation is a separate integration via the Instagram Messaging API — we can scope that as an add-on.',
    },
  ],
  cta: {
    headline: 'Stop Losing Leads to Slow Follow-Up',
    description:
      "Tell us how many leads you generate per month and which CRM you're using (or if you need one built). We'll send a proposal within 24 hours.",
  },
};

const MetaLeadAds: React.FC = () => <ServicePageTemplate {...data} />;
export default MetaLeadAds;

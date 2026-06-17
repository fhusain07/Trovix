import React from 'react';
import { Workflow } from 'lucide-react';
import { ServicePageTemplate, type ServicePageProps } from '@/components/templates/ServicePageTemplate';

const data: ServicePageProps = {
  seo: {
    title: 'Business Automation Software India | Workflow Automation | Trovix',
    description:
      'Automate lead capture, invoicing, follow-up reminders, and reporting workflows. Custom business automation using React & .NET. Based in Nagpur, India.',
    canonical: 'https://www.trovixtech.com/services/business-automation',
  },
  icon: Workflow,
  badge: 'Business Automation',
  title: 'Stop Doing Manually',
  titleGradient: "What Software Can Do Automatically",
  description:
    'Identify the repetitive, time-consuming tasks running your team into the ground and replace them with automated workflows. Lead intake, invoice generation, follow-up reminders, daily summaries — built once, running forever.',
  problems: [
    {
      title: 'Your Team Is the Automation',
      description:
        'Manually copying lead details from one system to another, sending the same follow-up message 40 times a week, compiling the same report every Monday morning — your team\'s time is worth more than this.',
    },
    {
      title: 'Things Keep Slipping',
      description:
        'Without automated checkpoints, things get missed. A lead follows up and finds out they were never contacted. An invoice isn\'t sent because the account manager forgot. A deadline passes unnoticed.',
    },
    {
      title: 'Growth Makes It Worse',
      description:
        'Manual processes that kind of work at 50 customers completely break at 200. The cost of not automating compounds as you scale.',
    },
  ],
  features: [
    {
      title: 'Lead Capture Automation',
      description:
        'New leads from web forms, WhatsApp, Meta ads, or phone calls are captured, tagged, and routed to the right person automatically — no manual entry.',
    },
    {
      title: 'Automated Follow-up Sequences',
      description:
        'Define a follow-up schedule and let the system send WhatsApp or email messages at the right intervals. Sequences stop automatically when a lead responds or converts.',
    },
    {
      title: 'Invoice & Payment Workflows',
      description:
        'Trigger invoice generation on milestone completion, send the invoice to the client automatically, and follow up on overdue payments without anyone lifting a finger.',
    },
    {
      title: 'Notification & Alert Systems',
      description:
        'Get WhatsApp alerts when something needs attention — a new inbound inquiry, an overdue task, a payment received, or a key business event. Stay informed without checking dashboards.',
    },
    {
      title: 'Third-Party Integrations',
      description:
        'Connect your existing tools via API — Google Sheets, Zoho, Razorpay, Tally, WhatsApp Business, or any system with an accessible API or webhook.',
    },
    {
      title: 'Daily & Weekly Automated Reports',
      description:
        'Receive a WhatsApp or email summary every morning showing yesterday\'s leads, conversions, outstanding tasks, and revenue — without anyone compiling it.',
    },
  ],
  techStack: ['React', 'TypeScript', '.NET Web API', 'PostgreSQL', 'WhatsApp Business API', 'REST Integrations'],
  faqs: [
    {
      question: 'How do you decide what to automate first?',
      answer:
        'During the discovery call we map your current processes and identify the highest-value automation targets — tasks that consume the most time or are most prone to human error. We prioritise those first.',
    },
    {
      question: 'Can automation replace staff?',
      answer:
        'Automation handles the repetitive, rule-based tasks so your staff can focus on the high-value work that actually requires human judgement. The goal is not to reduce headcount but to make your existing team dramatically more productive.',
    },
    {
      question: 'What if our workflow changes after the automation is built?',
      answer:
        'Business automation is built to be configurable. Changing trigger conditions, notification recipients, or message templates is usually a configuration change, not a rebuild. We account for this in the post-launch support period.',
    },
    {
      question: 'Can you integrate with WhatsApp for automated messages?',
      answer:
        'Yes. We integrate with the official WhatsApp Business API (via BSPs like Interakt, AiSensy, or 360dialog) to send automated, compliant WhatsApp messages. This requires a WhatsApp Business account, which we can help you set up.',
    },
    {
      question: 'Do you connect with Tally or accounting software?',
      answer:
        'We can connect with accounting systems that have an API or XML import. For Tally specifically, we use Tally\'s XML data exchange format to push invoices and payment records across.',
    },
  ],
  cta: {
    headline: 'Let\'s Automate Your Workflow',
    description:
      "Describe your most time-consuming manual process. We'll tell you exactly how to automate it and what it'll cost.",
  },
};

const BusinessAutomation: React.FC = () => <ServicePageTemplate {...data} />;
export default BusinessAutomation;

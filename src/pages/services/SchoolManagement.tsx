import React from 'react';
import { BookOpen } from 'lucide-react';
import { ServicePageTemplate, type ServicePageProps } from '@/components/templates/ServicePageTemplate';

const data: ServicePageProps = {
  seo: {
    title: 'School Management System Software India | Student & Fee Portal | Trovix',
    description:
      'Custom school management portals for student registration, attendance, fee collection, exam results, and staff management. Built in React & .NET. Based in Nagpur, India.',
    canonical: 'https://www.trovixtech.com/services/school-management-system',
  },
  icon: BookOpen,
  badge: 'School Management Systems',
  title: 'School Management Portals',
  titleGradient: 'Built for Indian Institutions',
  description:
    'Replace the paper registers, Excel sheets, and WhatsApp payment confirmations with a single portal that manages everything — student records, daily attendance, fee collection, exam results, and staff administration.',
  problems: [
    {
      title: 'Paper Registers and Excel Chaos',
      description:
        'Attendance in class registers, fees in separate Excel files, student data in another spreadsheet — all siloed, inconsistent, and impossible to aggregate at a glance. Month-end reporting takes days.',
    },
    {
      title: 'Fee Collection Without Visibility',
      description:
        'Parents pay via bank transfer or cash. Confirmation happens over WhatsApp. The accounts team manually updates a sheet. Defaulters aren\'t identified until it\'s too late to follow up.',
    },
    {
      title: 'Principal Has No Real-Time View',
      description:
        'To know today\'s attendance or this month\'s fee collection, someone has to manually compile data from multiple sources. By the time the report is ready, the data is already stale.',
    },
  ],
  features: [
    {
      title: 'Student Registration & Profiles',
      description:
        'Complete student records including personal details, guardian contact, class, section, roll number, and admission documents — searchable and exportable.',
    },
    {
      title: 'Digital Attendance Tracking',
      description:
        'Teachers mark daily attendance digitally per class and subject. Automated WhatsApp or SMS alerts sent to parents when a student is absent.',
    },
    {
      title: 'Fee Collection & Online Payments',
      description:
        'Define fee structures per class, generate term-wise invoices, accept online payments via Razorpay, and issue digital receipts automatically on payment.',
    },
    {
      title: 'Defaulter Tracking & Reminders',
      description:
        'Real-time view of outstanding fees per student. Automated reminders sent at configurable intervals. No more chasing payments manually.',
    },
    {
      title: 'Exam Results & Report Cards',
      description:
        'Enter marks per subject, auto-calculate totals, grades, and rank. Generate printable or PDF report cards in one click.',
    },
    {
      title: 'Principal & Management Dashboard',
      description:
        'Live view of total enrolment, today\'s attendance percentage per class, monthly fee collection vs outstanding, and upcoming exam schedules — all on one screen.',
    },
  ],
  techStack: ['React', 'TypeScript', '.NET Web API', 'PostgreSQL', 'Razorpay', 'WhatsApp Business API'],
  faqs: [
    {
      question: 'Can we set different fee structures for different classes?',
      answer:
        'Yes. Fee structures are fully configurable per class, section, or academic year. You can have different tuition fees, lab fees, transport fees, and exam fees for each class independently.',
    },
    {
      question: 'Can parents access the portal to see attendance and results?',
      answer:
        'Yes. We build a separate parent-facing view where guardians can log in to see their child\'s attendance record, fee status, and exam results — reducing the volume of calls to the office.',
    },
    {
      question: 'Can we import existing student data from Excel?',
      answer:
        'Yes. We build an Excel import tool so your existing student records are migrated into the system on day one. You don\'t start from scratch.',
    },
    {
      question: 'Does it support multiple branches or campuses?',
      answer:
        'Yes. Multi-branch support is built in from the start. Each branch has its own staff, classes, and students, while management gets a consolidated view across all locations.',
    },
    {
      question: 'Is the system compliant with Indian school data requirements?',
      answer:
        'The system is designed for Indian CBSE and state-board school workflows. All data is stored on servers within India, and we can implement any board-specific reporting requirements you have.',
    },
  ],
  cta: {
    headline: 'Ready to Modernise Your School?',
    description:
      'Tell us your student count, the number of classes, and the key problems you need to solve. We\'ll send a scoped proposal within 24 hours.',
  },
};

const SchoolManagement: React.FC = () => <ServicePageTemplate {...data} />;
export default SchoolManagement;

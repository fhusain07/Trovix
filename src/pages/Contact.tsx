import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { GlassCard } from '@/components/shared/GlassCard';

// Sign up at https://formspree.io, create a form, and replace this with your form ID.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_YOUR_FORMSPREE_ID';

interface ContactFormValues {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

type FormStatus = 'idle' | 'success' | 'error';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  company: Yup.string()
    .min(2, 'Company name must be at least 2 characters'),
  phone: Yup.string()
    .matches(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/, 'Invalid phone number'),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required'),
});

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');

  const formik = useFormik<ContactFormValues>({
    initialValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setFormStatus('idle');
      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        });
        if (!response.ok) throw new Error('Submission failed');
        setFormStatus('success');
        resetForm();
      } catch {
        setFormStatus('error');
      } finally {
        setSubmitting(false);
      }
    },
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@trovixtech.com',
      link: 'mailto:info@trovixtech.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 89561 21778',
      link: 'tel:+918956121778',
    },
    {
      icon: Phone,
      title: 'Alternate Phone',
      content: '+91 93079 27612',
      link: 'tel:+919307927612',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'Nagpur, Maharashtra, India',
      link: 'https://maps.google.com/?q=Nagpur,+Maharashtra,+India',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us about your project and we'll get back to you within 24 hours with a free estimate. No commitment required.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <GlassCard hover={false} className="text-center">
                <info.icon className="h-10 w-10 text-electric-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{info.title}</h3>
                <a
                  href={info.link}
                  className="text-muted-foreground hover:text-electric-blue transition-colors cursor-pointer text-sm"
                >
                  {info.content}
                </a>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <GlassCard className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-display font-bold mb-2 text-center">Send Us a Message</h2>
            <p className="text-sm text-muted-foreground text-center mb-6">We reply within 24 hours.</p>

            {formStatus === 'success' && (
              <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm text-center">
                ✓ Message sent successfully — we'll reply within 24 hours.
              </div>
            )}

            {formStatus === 'error' && (
              <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
                Something went wrong. Please email us directly at{' '}
                <a href="mailto:info@trovixtech.com" className="underline">
                  info@trovixtech.com
                </a>
              </div>
            )}

            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && formik.errors.name ? formik.errors.name : undefined}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your Company"
                    value={formik.values.company}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.company && formik.errors.company ? formik.errors.company : undefined}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">WhatsApp / Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.phone && formik.errors.phone ? formik.errors.phone : undefined}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Tell us about your project *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Describe what you need — e.g. 'I need a CRM for my 5-person sales team to track 200 leads per month' or 'I run a school with 300 students and need a fee and attendance system'."
                  rows={6}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.message && formik.errors.message ? formik.errors.message : undefined}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full cursor-pointer"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </GlassCard>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;

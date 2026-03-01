import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { GlassCard } from '@/components/shared/GlassCard';
interface ContactFormValues {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}
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
      try {
        // API call would go here
        console.log('Form submitted:', values);
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert('Thank you for contacting us! We will get back to you soon.');
        resetForm();
      } catch (error) {
        console.error('Submission error:', error);
        alert('Something went wrong. Please try again.');
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
      content: '+91 8956121778',
      link: 'tel:+918956121778',
    },
    {
      icon: Phone,
      title: 'Alternate Phone',
      content: '+91 9307927612',
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
              Have a project in mind? Let's discuss how we can help transform your ideas into reality.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <GlassCard hover={false} className="text-center">
                <info.icon className="h-10 w-10 text-electric-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{info.title}</h3>
                <a 
                  href={info.link} 
                  className="text-muted-foreground hover:text-electric-blue transition-colors cursor-pointer"
                >
                  {info.content}
                </a>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.3}>
          <GlassCard className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">Send us a Message</h2>
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
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.phone && formik.errors.phone ? formik.errors.phone : undefined}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
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
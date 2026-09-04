import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { BrandLogo } from '@/theme/BrandLogo';

const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M18.244 2H21.5l-7.59 8.67L23 22h-7.16l-5.6-7.31L3.6 22H.34l8.11-9.27L1 2h7.29l5.05 6.61L18.244 2Zm-2.51 18h1.98L8.09 4h-2l9.644 16Z" />
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-charcoal text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <BrandLogo />
            <p className="text-sm text-gray-400">
              Custom Softwares, SaaS &amp; school management systems for growing businesses.<br />
              Based in Nagpur, India. Founded in 2025.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/trovixtech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors cursor-pointer"
                aria-label="X (Twitter)"
              >
                <XIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/trovix-tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/trovixtech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors cursor-pointer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@trovixtech.com"
                className="text-gray-400 hover:text-gold transition-colors cursor-pointer"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-gold transition-colors cursor-pointer">About Us</Link></li>
              <li><Link to="/careers" className="text-sm text-gray-400 hover:text-gold transition-colors cursor-pointer">Careers</Link></li>
              <li><Link to="/projects" className="text-sm text-gray-400 hover:text-gold transition-colors cursor-pointer">Our Work</Link></li>
              <li><Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-gold transition-colors cursor-pointer">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-sm text-gray-400 hover:text-gold transition-colors cursor-pointer">Terms of Service</Link></li>
              <li><Link to="/account-deletion" className="text-sm text-gray-400 hover:text-gold transition-colors cursor-pointer">Data Deletion Instructions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-gold transition-colors cursor-pointer">CRM Development</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-gold transition-colors cursor-pointer">Custom SaaS Development</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-gold transition-colors cursor-pointer">School Management Systems</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-gold transition-colors cursor-pointer">Business Automation</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-gold transition-colors cursor-pointer">Meta Lead Ads Integration</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">info@trovixtech.com</li>
              {/* <li className="text-sm text-gray-400">+91 89561 21778</li> */}
              {/* <li className="text-sm text-gray-400">+91 93079 27612</li> */}
              <li className="text-sm text-gray-400">Nagpur, Maharashtra, India</li>
              <li><Link to="/contact" className="text-sm text-gold hover:underline cursor-pointer">Get in Touch →</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Trovix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

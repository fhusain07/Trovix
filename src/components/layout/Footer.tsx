import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

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
    <footer className="glass-effect border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric-blue to-electric-violet flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-display font-bold gradient-text">TROVIX</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Modern IT & Software Solutions for tomorrow's challenges.<br />
              Founded in 2025.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-electric-blue transition-colors cursor-pointer" aria-label="X (Twitter)">
                <XIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-electric-blue transition-colors cursor-pointer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-electric-blue transition-colors cursor-pointer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="" className="text-muted-foreground hover:text-electric-blue transition-colors cursor-pointer" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-electric-blue transition-colors cursor-pointer">About Us</Link></li>
              <li><Link to="/careers" className="text-sm text-muted-foreground hover:text-electric-blue transition-colors cursor-pointer">Careers</Link></li>
              <li><Link to="/projects" className="text-sm text-muted-foreground hover:text-electric-blue transition-colors cursor-pointer">Projects</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-electric-blue transition-colors cursor-pointer">Cloud Solutions</Link></li>
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-electric-blue transition-colors cursor-pointer">AI & ML</Link></li>
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-electric-blue transition-colors cursor-pointer">Web Development</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">info@trovixtech.com</li>
              <li className="text-sm text-muted-foreground">+91 8956121778 - +91 9307927612</li>
              <li><Link to="/contact" className="text-sm text-electric-blue hover:underline cursor-pointer">Get in Touch</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} TROVIX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
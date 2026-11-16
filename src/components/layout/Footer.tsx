import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "@/theme/BrandLogo";
import { services, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" aria-label="Trovix home">
            <BrandLogo className="brand-logo-footer" />
          </Link>
          <p>
            Thoughtful software.
            <br />
            Real business progress.
          </p>
          <a href={`mailto:${site.email}`}>
            {site.email}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <span>{site.location}</span>
        </div>
        <div>
          <h2>Explore</h2>
          <Link to="/about">About Trovix</Link>
          <Link to="/portfolio">Our work</Link>
          <Link to="/technologies">Technologies</Link>
          <Link to="/partners">Agency partnerships</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact us</Link>
        </div>
        <div>
          <h2>What we build</h2>
          {services.map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`}>
              {service.shortTitle}
            </Link>
          ))}
        </div>
        <div className="footer-note">
          <p className="eyebrow">A TECHNICAL PARTNER</p>
          <h2>Good things start with a conversation.</h2>
          <Link className="text-link" to="/contact">
            Tell us what you’re thinking
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Trovix. All rights reserved.</span>
        <div>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/account-deletion">Data Deletion</Link>
        </div>
        <span className="footer-location">
          <span />
          Built with purpose, in India.
        </span>
      </div>
    </footer>
  );
}

import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Cloud,
  Users,
  AppWindow,
  GraduationCap,
  Workflow,
  MessageCircle,
  Zap,
  Check,
  Layers3,
  Handshake,
} from "lucide-react";
import { Link } from "react-router-dom";
import { services, technologies, differentiators } from "@/data/site";
import { projects } from "@/data/portfolio";
import {
  ActionLink,
  FinalCTA,
  SectionHeading,
  TextLink,
} from "@/components/shared/PageElements";
import { ProductVisual } from "@/components/shared/ProductVisual";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { FAQSection } from "@/components/sections/FAQSection";
const icons = [
  Code2,
  Cloud,
  Users,
  AppWindow,
  GraduationCap,
  Workflow,
  MessageCircle,
  Zap,
];

export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            SOFTWARE, WITH A PURPOSE.
          </p>
          <h1>
            We Build Software
            <br />
            That Moves
            <br />
            Businesses <span className="gold-text">Forward.</span>
          </h1>
          <p className="hero-description">
            Custom software. Connected systems. Clearer possibilities.
            <br className="desktop-break" /> We build SaaS platforms, CRM
            systems, web applications,
            <br className="desktop-break" /> and automation around the way your
            business works.
          </p>
          <div className="hero-actions">
            <ActionLink to="/contact">Discuss Your Project</ActionLink>
            <ActionLink to="/portfolio" secondary>
              Explore Our Work
            </ActionLink>
          </div>
          <div className="hero-footnote">
            <span className="status-dot" />
            Direct collaboration. Thoughtful engineering.
          </div>
        </div>
        <ProductVisual />
        <a className="hero-scroll" href="#capabilities">
          <ArrowDown size={14} />A little more about what we do
        </a>
      </section>
      <section id="capabilities" className="capability-strip">
        <div className="container">
          <p>
            CONSIDERED TOOLS.
            <br />
            <strong>DEPENDABLE FOUNDATIONS.</strong>
          </p>
          <div>
            {technologies.map((tech) => (
              <Link to="/technologies" key={tech.name}>
                <span className="tech-monogram">{tech.mark}</span>
                {tech.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="container section services-section">
        <SectionHeading
          eyebrow="WHAT WE BUILD"
          title="Built for your business. Ready for what’s next."
          description="From a single workflow to an entire platform, we turn complex challenges into software that makes sense."
        >
          <TextLink to="/services">Explore all services</TextLink>
        </SectionHeading>
        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <Link
                className="service-card"
                key={service.slug}
                to={`/services/${service.slug}`}
              >
                <div className="service-card-top">
                  <span className="service-icon">
                    <Icon size={23} strokeWidth={1.5} />
                  </span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="card-link">
                  Explore service <ArrowUpRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="work-section">
        <div className="container section">
          <SectionHeading
            eyebrow="IDEAS MADE TANGIBLE"
            title="Your next chapter, built with purpose."
            description="Thoughtful interfaces. Connected workflows. Software that fits the people who use it."
          >
            <TextLink to="/portfolio">Explore our work</TextLink>
          </SectionHeading>
          {projects.length ? (
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <div className="portfolio-empty">
              <img
                src="/images/portfolio-abstract.svg"
                width="560"
                height="300"
                alt="Abstract illustration of connected application interfaces"
                loading="lazy"
              />
              <div>
                <p className="eyebrow">SOMETHING WORTH BUILDING</p>
                <h3>
                  Every useful system starts with a real business challenge.
                </h3>
                <p>
                  We share project details only when publication is approved.
                  Tell us what you’re building, and let’s explore the right
                  technical approach.
                </p>
                <TextLink to="/contact">Let’s talk about your project</TextLink>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="container section why-section">
        <div>
          <p className="eyebrow">
            <span />
            THE TROVIX APPROACH
          </p>
          <h2>
            A technical partner.
            <br />
            An extension of
            <br />
            <span className="gold-text">your ambition.</span>
          </h2>
          <p className="section-description">
            Good software takes more than good code. It takes clear
            conversations, thoughtful decisions, and a shared understanding of
            what success looks like.
          </p>
          <TextLink to="/about">Get to know Trovix</TextLink>
          <div className="engineering-note">
            <Layers3 size={24} />
            <span>
              Built with clarity.
              <br />
              <strong>Designed for the long run.</strong>
            </span>
          </div>
        </div>
        <div className="differentiators">
          {differentiators.map(([title, text]) => (
            <div key={title}>
              <span>
                <Check size={16} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <HowWeWork />
      <section className="container partnership-banner">
        <div className="partnership-symbol" aria-hidden="true">
          <Handshake size={38} strokeWidth={1.3} />
        </div>
        <div>
          <p className="eyebrow">FOR AMBITIOUS AGENCIES</p>
          <h2>
            Your vision. Our engineering.
            <br />
            One strong partnership.
          </h2>
          <p>
            White-label development, project delivery, and technical
            collaboration — shaped around your agency.
          </p>
        </div>
        <ActionLink to="/partners" secondary>
          Explore a Partnership
        </ActionLink>
      </section>
      <FAQSection />
      <FinalCTA />
    </>
  );
}

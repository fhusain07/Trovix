import { Check } from "lucide-react";
import { services, site, technologies, differentiators } from "@/data/site";
import {
  ActionLink,
  FinalCTA,
  PageIntro,
  SectionHeading,
} from "@/components/shared/PageElements";
import { HowWeWork } from "@/components/sections/HowWeWork";
export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="MEET TROVIX"
        title="Thoughtful engineering. Practical business progress."
        description="Trovix is a software and SaaS technology company based in Nagpur, India. We focus on custom applications, CRM systems, communication integrations, and business workflow automation."
      />
      <section className="about-lead">
        <div className="container">
          <h2>Software should make your work clearer.</h2>
          <p>
            We build around the way people work: the information they need, the
            decisions they make, and the tasks that slow them down. Our approach
            connects considered interfaces with dependable backend systems,
            using React, .NET Web API, and PostgreSQL.
          </p>
        </div>
      </section>
      <section className="container section">
        <div className="mission-grid">
          <article>
            <p className="eyebrow">OUR MISSION</p>
            <h2>Turn operational complexity into useful software.</h2>
            <p>
              Help businesses replace disconnected tools and repetitive tasks
              with systems that reflect their needs, support their teams, and
              can evolve over time.
            </p>
          </article>
          <article>
            <p className="eyebrow">OUR VISION</p>
            <h2>Technology that grows with the business it serves.</h2>
            <p>
              Make well-designed, maintainable software a practical foundation
              for businesses and agencies building their next stage of growth.
            </p>
          </article>
        </div>
        <div className="about-capabilities">
          <h2>What we focus on</h2>
          <div className="tags">
            {services.map((service) => (
              <span key={service.slug}>{service.title}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="container section two-column">
        <SectionHeading
          eyebrow="ENGINEERING APPROACH"
          title="Clear decisions. Maintainable foundations."
          description="We prioritize scoped releases, documented interfaces, code review, testing, and a deliberate handover. Architecture choices follow the product’s requirements and constraints."
        />
        <ul className="check-list">
          {differentiators.map(([title]) => (
            <li key={title}>
              <Check size={18} />
              {title}
            </li>
          ))}
        </ul>
      </section>
      <HowWeWork />
      <section className="container section two-column">
        <div>
          <p className="eyebrow">OUR TOOLKIT</p>
          <h2>Focused technical capabilities.</h2>
          <div className="tags">
            {technologies.map((tech) => (
              <span key={tech.name}>{tech.name}</span>
            ))}
          </div>
          <div className="hero-actions">
            <ActionLink to="/technologies" secondary>
              Explore technologies
            </ActionLink>
          </div>
        </div>
        <div>
          <p className="eyebrow">LET’S CONNECT</p>
          <h2>
            Based in India.
            <br />
            Open to your next idea.
          </h2>
          <p className="section-description">
            {site.location}
            <br />
            <a className="inline-link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <div className="hero-actions">
            <ActionLink to="/contact">Start a conversation</ActionLink>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

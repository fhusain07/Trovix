import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import type { Service } from "@/data/site";
import {
  ActionLink,
  Breadcrumbs,
  FinalCTA,
  SectionHeading,
  TextLink,
} from "@/components/shared/PageElements";
import { FAQSection } from "@/components/sections/FAQSection";
import { HowWeWork } from "@/components/sections/HowWeWork";
export function ServicePageTemplate({ service }: { service: Service }) {
  return (
    <>
      <header className="page-intro container service-detail-hero">
        <Breadcrumbs
          items={[
            { label: "Services", to: "/services" },
            { label: service.shortTitle },
          ]}
        />
        <p className="eyebrow">
          <span />
          {service.title.toUpperCase()}
        </p>
        <h1>{service.headline}</h1>
        <p className="intro-description">{service.description}</p>
        <div className="hero-actions">
          <ActionLink to="/contact">Discuss Your Project</ActionLink>
          <ActionLink to="/services" secondary>
            Explore all services
          </ActionLink>
        </div>
      </header>
      <section className="container section">
        <SectionHeading
          eyebrow="THE BUSINESS CHALLENGE"
          title="Make room for a better way to work."
        />
        <div className="content-grid">
          {service.problems.map((problem, index) => (
            <article key={problem} className="content-panel">
              <span className="number-label">0{index + 1}</span>
              <h3>{problem}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="container section two-column">
        <div>
          <p className="eyebrow">
            <span />
            CAPABILITIES
          </p>
          <h2>
            A focused foundation.
            <br />
            The features you need.
          </h2>
          <p className="section-description">
            The final scope follows your requirements. These capabilities
            provide a starting point for the conversation.
          </p>
        </div>
        <ul className="check-list">
          {service.features.map((feature) => (
            <li key={feature}>
              <Check size={18} />
              {feature}
            </li>
          ))}
        </ul>
      </section>
      <div className="stack-section">
        <div className="container">
          <div>
            <p className="eyebrow">TECHNOLOGY, WITH PURPOSE</p>
            <h2>Tools chosen for the job.</h2>
            <div className="tags">
              {service.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <p>
              <Link className="inline-link" to="/technologies">
                Explore our technology stack
              </Link>
            </p>
          </div>
          <div>
            <h2>Where this fits</h2>
            <p>{service.industries.join(" · ")}</p>
            <p>{service.approach}</p>
          </div>
        </div>
      </div>
      <HowWeWork />
      <section className="container section">
        <SectionHeading
          eyebrow="RELATED WORK"
          title="See the thinking behind the interfaces."
          description="We publish case studies when the source evidence and publication permissions are approved. Discuss your requirements with us to explore a relevant technical approach."
        >
          <TextLink to="/portfolio">Explore our portfolio</TextLink>
        </SectionHeading>
      </section>
      <FAQSection faqs={service.faqs} />
      <FinalCTA />
    </>
  );
}

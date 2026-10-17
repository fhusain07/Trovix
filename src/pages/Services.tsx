import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/site";
import {
  ActionLink,
  FinalCTA,
  PageIntro,
} from "@/components/shared/PageElements";
import { HowWeWork } from "@/components/sections/HowWeWork";
export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow="WHAT WE BUILD"
        title="Software that fits your business. And helps it grow."
        description="Custom applications, connected workflows, and practical integrations. Start with the problem you need to solve; we’ll help define the right system."
      >
        <div className="hero-actions">
          <ActionLink to="/contact">Discuss Your Project</ActionLink>
        </div>
      </PageIntro>
      <section className="container section">
        <div className="services-grid">
          {services.map((service, index) => (
            <Link
              className="service-card"
              key={service.slug}
              to={`/services/${service.slug}`}
            >
              <div className="service-card-top">
                <span className="number-label">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight size={19} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="card-link">
                Explore capabilities
                <ArrowUpRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <HowWeWork />
      <FinalCTA />
    </>
  );
}

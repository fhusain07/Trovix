import { Check } from "lucide-react";
import { partnershipModels, technologies } from "@/data/site";
import {
  ActionLink,
  FinalCTA,
  PageIntro,
  SectionHeading,
} from "@/components/shared/PageElements";
import { InquiryForm } from "@/components/forms/InquiryForm";
const descriptions = [
  "Deliver software under your agency’s brand with an agreed communication and handover model.",
  "Scope a defined build, integration, or product milestone with clear acceptance criteria.",
  "Discuss ongoing technical support for your delivery roadmap, subject to agreed availability.",
  "Share project responsibilities across design, development, review, and delivery.",
  "Bring engineering input to architecture, requirements, integration, or feasibility decisions.",
  "Develop a repeatable collaboration process as your agency’s needs evolve.",
];
export default function Partners() {
  return (
    <>
      <PageIntro
        eyebrow="FOR AGENCIES / BUILT ON COLLABORATION"
        title="Your Reliable Technology Partner for Software Development."
        description="Bring the client understanding and creative direction. We can support the engineering — custom applications, SaaS platforms, CRM systems, and business integrations."
      >
        <div className="hero-actions">
          <ActionLink to="/partners#inquiry">Explore a Partnership</ActionLink>
          <ActionLink to="/services" secondary>
            Explore capabilities
          </ActionLink>
        </div>
      </PageIntro>
      <section className="container section">
        <SectionHeading
          eyebrow="WAYS TO WORK TOGETHER"
          title="The right shape for your next project."
          description="These are available collaboration models. They do not imply existing partnerships, reserved capacity, or confirmed delivery dates."
        />
        <div className="engagement-models">
          {partnershipModels.map((model, index) => (
            <article className="content-panel" key={model}>
              <span className="number-label">0{index + 1}</span>
              <h3>{model}</h3>
              <p>{descriptions[index]}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="container section two-column">
        <div>
          <p className="eyebrow">
            <span />A CONSIDERED HANDOFF
          </p>
          <h2>
            Clear ownership.
            <br />
            Shared understanding.
          </h2>
          <p className="section-description">
            We agree how information, feedback, and approvals flow before
            development begins. Your team stays informed through milestone
            reviews and documented decisions.
          </p>
          <div className="tags">
            {technologies.map((tech) => (
              <span key={tech.name}>{tech.name}</span>
            ))}
          </div>
        </div>
        <ol className="partner-process">
          <li>
            <div>
              <strong>Share the brief</strong>Review goals, existing assets,
              technical constraints, and client expectations.
            </div>
          </li>
          <li>
            <div>
              <strong>Agree the delivery plan</strong>Define scope, estimates,
              milestones, acceptance criteria, and the people responsible.
            </div>
          </li>
          <li>
            <div>
              <strong>Build with regular reviews</strong>Use an agreed
              communication channel for progress, decisions, and feedback.
            </div>
          </li>
          <li>
            <div>
              <strong>Handover with context</strong>Plan source access,
              deployment responsibilities, documentation, and support.
            </div>
          </li>
        </ol>
      </section>
      <section className="stack-section">
        <div className="container">
          <div>
            <p className="eyebrow">TRUST & CONFIDENTIALITY</p>
            <h2>Your client relationship matters.</h2>
            <p>
              Discuss white-label requirements, client communication, NDA terms,
              intellectual property, and access controls before sharing
              confidential material. Final commitments belong in the engagement
              agreement.
            </p>
          </div>
          <ul className="check-list">
            <li>
              <Check size={18} />
              Project-based scope and milestones
            </li>
            <li>
              <Check size={18} />
              Agreed review and escalation points
            </li>
            <li>
              <Check size={18} />
              Documented handover responsibilities
            </li>
            <li>
              <Check size={18} />
              Availability and pricing confirmed per project
            </li>
          </ul>
        </div>
      </section>
      <section id="inquiry" className="container section partnership-inquiry">
        <div className="inquiry-layout">
          <div className="contact-aside">
            <p className="eyebrow">
              <span />
              START THE CONVERSATION
            </p>
            <h2>Tell us about your agency. And what’s next.</h2>
            <p>
              Share the project context, the type of collaboration you have in
              mind, and your expected timeline. We’ll use that to work through a
              possible engagement.
            </p>
            <p className="section-description">
              Prefer email?
              <br />
              <a className="inline-link" href="mailto:info@trovixtech.com">
                info@trovixtech.com
              </a>
            </p>
          </div>
          <InquiryForm kind="partnership" />
        </div>
      </section>
      <FinalCTA partnership />
    </>
  );
}

import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { PageIntro } from "@/components/shared/PageElements";
import { InquiryForm } from "@/components/forms/InquiryForm";
export default function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="LET’S TALK"
        title="Your next step starts with a conversation."
        description="Tell us what you’re building, what needs to work better, or where you could use a technical partner. A rough idea is a perfectly good place to start."
      />
      <section className="container inquiry-layout">
        <aside className="contact-aside">
          <h2>
            Bring the challenge.
            <br />
            We’ll explore the possibilities.
          </h2>
          <p>
            Share a little context about your business and your priorities.
            Scope, cost, availability, and delivery milestones are agreed after
            we understand the project.
          </p>
          <div className="contact-method">
            <Mail size={19} />
            <div>
              <span>EMAIL US</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </div>
          <div className="contact-method">
            <MessageCircle size={19} />
            <div>
              <span>START ON WHATSAPP</span>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                +91 89561 21778
              </a>
            </div>
          </div>
          <div className="contact-method">
            <MapPin size={19} />
            <div>
              <span>BASED IN</span>
              <p>{site.location}</p>
            </div>
          </div>
          <div className="editorial-notice">
            <p>
              Looking for white-label development or technical delivery support?{" "}
              <Link className="inline-link" to="/partners">
                Explore agency partnerships.
              </Link>
            </p>
          </div>
        </aside>
        <InquiryForm kind="project" />
      </section>
    </>
  );
}

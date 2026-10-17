import type { ReactNode } from "react";
import { Plus } from "lucide-react";
export interface FAQItem {
  question: string;
  answer: string;
}
const defaults: FAQItem[] = [
  {
    question: "What does it cost to build custom software?",
    answer:
      "Cost depends on the workflows, integrations, user roles, and scope. We discuss priorities first and provide a proposal with an estimate and defined milestones. Rates and payment terms are agreed for each project.",
  },
  {
    question: "How long will my project take?",
    answer:
      "We estimate the schedule after reviewing requirements, dependencies, and delivery priorities. A focused first release can help you validate the product before committing to a wider roadmap.",
  },
  {
    question: "Can you support our agency behind the scenes?",
    answer:
      "White-label development, scoped project delivery, and technical collaboration are available engagement models. We agree on communication, confidentiality, responsibilities, and availability before starting.",
  },
  {
    question: "Can you help after launch?",
    answer:
      "We can discuss ongoing maintenance, monitoring, and improvements. Coverage, availability, and any support commitments are documented in the engagement agreement.",
  },
  {
    question: "Can we discuss a confidential idea?",
    answer:
      "Raise any NDA or confidentiality requirements before sharing sensitive material. We can review the required agreement and access arrangements as part of discovery.",
  },
];
export function FAQSection({
  faqs = defaults,
  heading,
}: {
  faqs?: FAQItem[];
  heading?: ReactNode;
}) {
  return (
    <section className="container section faq-section">
      <div>
        <p className="eyebrow">
          <span />A FEW THINGS YOU MIGHT ASK
        </p>
        {heading ?? (
          <h2>
            Let’s clear
            <br />a few things up.
          </h2>
        )}
        <p className="section-description">
          Have something else in mind?
          <br />
          <a className="inline-link" href="mailto:info@trovixtech.com">
            We’re happy to talk.
          </a>
        </p>
      </div>
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>
              {faq.question}
              <Plus size={18} aria-hidden="true" />
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

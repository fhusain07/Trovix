import { PageIntro } from "@/components/shared/PageElements";
export default function Careers() {
  return (
    <>
      <PageIntro
        eyebrow="CAREERS"
        title="Interested in building thoughtful software?"
        description="If you work with React, TypeScript, .NET, PostgreSQL, or product interface design, you can share an expression of interest with Trovix."
      />
      <section className="container section">
        <div className="editorial-notice">
          <p>
            No current vacancies or employment benefits have been confirmed for
            publication. Please contact us to ask about current opportunities,
            location requirements, and engagement terms.
          </p>
        </div>
        <div className="hero-actions">
          <a
            href="mailto:info@trovixtech.com?subject=Career%20inquiry"
            className="action action-primary"
          >
            Email your introduction
          </a>
        </div>
      </section>
    </>
  );
}

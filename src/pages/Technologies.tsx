import { technologies } from "@/data/site";
import { FinalCTA, PageIntro } from "@/components/shared/PageElements";
export default function Technologies() {
  return (
    <>
      <PageIntro
        eyebrow="OUR TECHNOLOGIES"
        title="A focused stack. A dependable foundation."
        description="We choose tools for the business problem, the team maintaining the system, and the product’s next stage. These are the technical capabilities already established in Trovix’s website."
      />
      <section className="container section">
        <div className="technology-grid">
          {technologies.map((tech) => (
            <article key={tech.name} className="technology-card">
              <div className="technology-card-top">
                <span aria-hidden="true">{tech.mark}</span>
                <span>{tech.category}</span>
              </div>
              <h2>{tech.name}</h2>
              <p>{tech.use}</p>
              <small>
                <strong>Typical applications</strong>
                <br />
                {tech.application}
              </small>
            </article>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

import { process } from "@/data/site";
import { SectionHeading } from "@/components/shared/PageElements";
export function HowWeWork() {
  return (
    <section className="container section process-section">
      <SectionHeading
        eyebrow="A CLEAR PATH FORWARD"
        title="Good software starts with understanding."
        description="From the first conversation to what comes after launch, every step has a purpose."
      />
      <ol className="process-grid">
        {process.map(([title, text], i) => (
          <li key={title}>
            <span className="process-number">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

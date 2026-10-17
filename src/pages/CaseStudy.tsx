import { useParams } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Breadcrumbs, FinalCTA } from "@/components/shared/PageElements";
import NotFound from "@/NotFound";

export default function CaseStudy({
  reviewProject,
}: {
  reviewProject?: Project;
}) {
  const { slug } = useParams();
  const project = reviewProject ?? projects.find((item) => item.slug === slug);
  if (!project) return <NotFound />;
  const isScreenshot = project.imageKind === "screenshot";

  return (
    <>
      <header className="container case-intro">
        <Breadcrumbs
          items={[
            { label: "Our work", to: "/portfolio" },
            { label: project.category },
          ]}
        />
        <p className="eyebrow">
          {project.category} / {project.type}
        </p>
        <h1>{project.title}</h1>
        <p className="intro-description">{project.description}</p>
        <div className="case-facts">
          <div>
            <span>Status</span>
            <strong>{project.status}</strong>
          </div>
          <div>
            <span>Context</span>
            <strong>{project.deliveryContext ?? project.type}</strong>
          </div>
          <div>
            <span>Technologies</span>
            <strong>{project.stack.join(" / ")}</strong>
          </div>
          {project.client && (
            <div>
              <span>Client</span>
              <strong>{project.client}</strong>
            </div>
          )}
        </div>
      </header>
      {project.image && (
        <figure className={`container case-image project-${project.accent}`}>
          <img
            src={project.image}
            width="960"
            height="640"
            alt={
              isScreenshot
                ? `${project.title} screenshot`
                : `${project.title} illustration`
            }
          />
          <figcaption>
            {isScreenshot
              ? (project.imageCaption ?? "Application screenshot.")
              : "Illustration only — not a screenshot of the actual application."}
          </figcaption>
        </figure>
      )}
      <section className="container section case-body">
        <aside>
          <h2>{project.contributionModel ?? "Development contribution"}</h2>
          {project.deliveryContext === "Professional/team work" && (
            <p>
              Team-developed work. Direct Trovix delivery and publication
              permissions are recorded separately.
            </p>
          )}
        </aside>
        <div className="case-narrative">
          <div
            id={
              project.modules?.some(
                (module) => module.anchor === "product-website",
              )
                ? "product-website"
                : undefined
            }
            style={{ scrollMarginTop: 120 }}
          >
            <h2>Overview</h2>
            <p>{project.overview ?? project.description}</p>
          </div>
          <div>
            <h2>Key features</h2>
            <ul className="check-list">
              {project.features.map((feature) => (
                <li key={feature}>
                  <Check size={16} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          {!!project.results?.length && (
            <div>
              <h2>Verified results</h2>
              <ul>
                {project.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </div>
          )}
          {project.liveUrl && (
            <a
              className="text-link"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo
              <ArrowUpRight size={16} />
            </a>
          )}
          {project.repositoryUrl && (
            <a
              className="text-link"
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Public repository
              <ArrowUpRight size={16} />
            </a>
          )}
          {reviewProject && (
            <details>
              <summary>Private review notes</summary>
              <p>
                Public naming, confidentiality, and publication permission still
                need approval. The detailed source audit is kept separately in
                the local review folder.
              </p>
            </details>
          )}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

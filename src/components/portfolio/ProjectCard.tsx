import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
export function ProjectCard({
  project,
  basePath = "/portfolio",
}: {
  project: Project;
  basePath?: string;
}) {
  return (
    <article className={`project-card project-${project.accent}`}>
      <Link
        className="project-image-link"
        to={`${basePath}/${project.slug}`}
        aria-label={`Explore ${project.title}`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={
              project.type === "Demo"
                ? `Illustrative ${project.category.toLowerCase()} dashboard with fictional sample data`
                : `${project.title} - ${project.imageKind === "screenshot" ? "application screenshot" : "project illustration"}`
            }
            width="960"
            height="640"
            loading="lazy"
          />
        ) : (
          <span
            style={{
              display: "grid",
              placeItems: "center",
              aspectRatio: "1.5",
              color: "var(--agency-muted)",
              fontSize: 13,
            }}
          >
            Screenshot not supplied
          </span>
        )}
        <span className="image-arrow">
          <ArrowUpRight size={20} />
        </span>
      </Link>
      <div className="project-meta">
        <span>
          {project.category}
          {project.image && project.imageKind !== "screenshot"
            ? " · Illustration"
            : ""}
        </span>
        <span className="demo-badge">
          {project.publication === "draft" ? "DRAFT · " : ""}
          {project.type === "Demo"
            ? "DESIGN STUDY"
            : project.type.toUpperCase()}
        </span>
      </div>
      <h3>
        <Link to={`${basePath}/${project.slug}`}>{project.title}</Link>
      </h3>
      <p>{project.description}</p>
      <div className="tags">
        {project.stack.slice(0, 4).map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </article>
  );
}

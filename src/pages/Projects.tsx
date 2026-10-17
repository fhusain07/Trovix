import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import {
  ActionLink,
  FinalCTA,
  PageIntro,
} from "@/components/shared/PageElements";

export default function Projects() {
  const [category, setCategory] = useState("All");
  const [technology, setTechnology] = useState("All");
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];
  const technologies = [
    "All",
    ...new Set(projects.flatMap((project) => project.stack)),
  ];
  const filtered = projects.filter(
    (project) =>
      (category === "All" || category === project.category) &&
      (technology === "All" || project.stack.includes(technology)),
  );
  return (
    <>
      <PageIntro
        eyebrow="OUR WORK"
        title="Useful software starts with a real challenge."
        description="Explore team-developed business platforms, backend services, academic work, and clearly labeled prototypes."
      />
      <section className="container portfolio-section">
        {projects.length ? (
          <>
            <div className="section-heading">
              <div>
                <h2>What our team builds</h2>
                <p>
                  We build business platforms with connected web and mobile
                  interfaces, workflow automation, financial modules, document
                  generation, and API integrations.
                </p>
              </div>
            </div>
            <div className="portfolio-filters">
              <div role="group" aria-label="Filter projects by category">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={
                      category === item ? "filter-chip active" : "filter-chip"
                    }
                    aria-pressed={category === item}
                    onClick={() => setCategory(item)}
                  >
                    {item === "All" ? "All projects" : item}
                  </button>
                ))}
              </div>
              <div className="technology-filter">
                <SlidersHorizontal size={16} aria-hidden="true" />
                <label className="sr-only" htmlFor="portfolio-technology">
                  Technology
                </label>
                <select
                  id="portfolio-technology"
                  value={technology}
                  onChange={(event) => setTechnology(event.target.value)}
                >
                  {technologies.map((item) => (
                    <option key={item} value={item}>
                      {item === "All" ? "All technologies" : item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <p className="result-count" role="status">
              {filtered.length} {filtered.length === 1 ? "project" : "projects"}{" "}
              to explore
            </p>
            {filtered.length ? (
              <div className="projects-grid">
                {filtered.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <h2>No projects match these filters.</h2>
                <p>Try another category or technology.</p>
                <button
                  className="action action-secondary"
                  type="button"
                  onClick={() => {
                    setCategory("All");
                    setTechnology("All");
                  }}
                >
                  <X size={16} />
                  Clear filters
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="portfolio-empty">
            <img
              src="/images/portfolio-abstract.svg"
              width="560"
              height="300"
              alt="Abstract illustration of connected software interfaces"
              loading="lazy"
            />
            <div>
              <p className="eyebrow">A CONSIDERED PORTFOLIO</p>
              <h2>Good work deserves the right context.</h2>
              <p>
                Public case studies are being prepared for review. We publish
                project details only after the content and permissions are
                approved.
              </p>
              <ActionLink to="/contact">Discuss a similar project</ActionLink>
            </div>
          </div>
        )}
      </section>
      <FinalCTA />
    </>
  );
}

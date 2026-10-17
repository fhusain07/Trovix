import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import type { Project } from "@/data/portfolio";
import { PageIntro } from "@/components/shared/PageElements";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import CaseStudy from "./CaseStudy";

interface Inventory {
  scanStatus: string;
  reviewedAt: string | null;
  repositoryCount: number;
  sourceMode?: string;
  draftAliases?: Record<string, string>;
  repositories: { name: string; disposition: string; reason: string }[];
  projects: Project[];
}
export default function DraftPortfolio() {
  const { slug } = useParams();
  const location = useLocation();
  const [inventory, setInventory] = useState<Inventory | null>(null);
  const [category, setCategory] = useState("All");
  const [technology, setTechnology] = useState("All");
  useEffect(() => {
    if (!import.meta.env.DEV) return;
    let active = true;
    fetch("/.trovix-review/portfolio.json", { cache: "no-store" })
      .then((response) => {
        if (
          !response.ok ||
          !response.headers.get("content-type")?.includes("application/json")
        )
          throw new Error();
        return response.json() as Promise<Inventory>;
      })
      .then((data) => {
        if (active) setInventory(data);
      })
      .catch(() => {
        if (active)
          setInventory({
            scanStatus:
              "The local review inventory could not be loaded. Check the ignored portfolio.json file before drawing conclusions about source coverage.",
            reviewedAt: null,
            repositoryCount: 0,
            repositories: [],
            projects: [],
          });
      });
    return () => {
      active = false;
    };
  }, []);
  useEffect(() => {
    if (!inventory || !location.hash) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(location.hash.slice(1))?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, [inventory, location.hash, location.pathname]);
  if (!import.meta.env.DEV) return null;
  const groupedInto = slug ? inventory?.draftAliases?.[slug] : undefined;
  if (groupedInto) {
    return (
      <Navigate
        replace
        to={`/__review/portfolio/${groupedInto}#product-website`}
      />
    );
  }
  const drafts = inventory?.projects ?? [];
  const selected = drafts.find((project) => project.slug === slug);
  const filtered = drafts.filter(
    (project) =>
      (category === "All" || project.category === category) &&
      (technology === "All" || project.stack.includes(technology)),
  );
  return (
    <>
      <div className="container editorial-notice" style={{ marginTop: 25 }}>
        <p>
          <strong>LOCAL DRAFT REVIEW · NOT PUBLISHED</strong>
          <br />
          Repository-based drafts reflect your confirmation of team development.
          Client permissions, intellectual property, direct Trovix delivery, and
          publication approval are recorded separately. This review route and
          private inventory are excluded from production builds.{" "}
          <Link className="inline-link" to="/__review/portfolio">
            All drafts
          </Link>
        </p>
      </div>
      {selected ? (
        <CaseStudy reviewProject={selected} />
      ) : (
        <>
          <PageIntro
            eyebrow="EDITORIAL REVIEW"
            title="Portfolio drafts, ready for your review."
            description="Review features, source evidence, public naming, contributions, and permissions before a project enters the public portfolio."
          />
          <section className="container section">
            <div className="editorial-notice">
              <p>
                <strong>Source inventory</strong>
                <br />
                {inventory?.scanStatus ?? "Loading local inventory…"}
                <br />
                {inventory?.sourceMode === "local-checkouts"
                  ? "Local checkouts inspected"
                  : "Repositories inspected"}
                : {inventory?.repositoryCount ?? 0}
              </p>
            </div>
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
              <div role="group" aria-label="Filter draft projects">
                {[
                  "All",
                  ...new Set(drafts.map((project) => project.category)),
                ].map((item) => (
                  <button
                    type="button"
                    className={
                      category === item ? "filter-chip active" : "filter-chip"
                    }
                    aria-pressed={category === item}
                    key={item}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="technology-filter">
                <label htmlFor="draft-technology">Technology</label>
                <select
                  id="draft-technology"
                  value={technology}
                  onChange={(event) => setTechnology(event.target.value)}
                >
                  {[
                    "All",
                    ...new Set(drafts.flatMap((project) => project.stack)),
                  ].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
            <p className="result-count" role="status">
              {filtered.length} drafts
            </p>
            <div className="projects-grid">
              {filtered.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  basePath="/__review/portfolio"
                />
              ))}
            </div>
            {!filtered.length && (
              <div className="empty-state">
                <h2>No matching drafts.</h2>
                <button
                  type="button"
                  className="action action-secondary"
                  onClick={() => {
                    setCategory("All");
                    setTechnology("All");
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
            {!!inventory?.repositories.length && (
              <details className="case-narrative" style={{ marginTop: 45 }}>
                <summary>Repository screening (private)</summary>
                {inventory.repositories.map((repo) => (
                  <p key={repo.name}>
                    {repo.name}: {repo.disposition} — {repo.reason}
                  </p>
                ))}
              </details>
            )}
          </section>
        </>
      )}
    </>
  );
}

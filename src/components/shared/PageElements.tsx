import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function ActionLink({
  to,
  children,
  secondary = false,
}: {
  to: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`action ${secondary ? "action-secondary" : "action-primary"}`}
    >
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </Link>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span />
          {eyebrow}
        </p>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {children}
    </div>
  );
}
export function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <header className="page-intro container">
      <p className="eyebrow">
        <span />
        {eyebrow}
      </p>
      <h1>{title}</h1>
      <p className="intro-description">{description}</p>
      {children}
    </header>
  );
}
export function Breadcrumbs({
  items,
}: {
  items: { label: string; to?: string }[];
}) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        {items.map((item) => (
          <li key={item.label}>
            <span aria-hidden="true">/</span>
            {item.to ? (
              <Link to={item.to}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
export function FinalCTA({ partnership = false }: { partnership?: boolean }) {
  return (
    <section className="container cta-section">
      <div className="cta-orbit" aria-hidden="true" />
      <div>
        <p className="eyebrow">
          <span />
          LET’S BUILD WHAT’S NEXT
        </p>
        <h2>
          {partnership
            ? "Your next project.\nOur shared expertise."
            : "Have a challenge?\nLet’s make it a better system."}
        </h2>
        <p>
          Bring your idea, your tangled workflow, or your next big step.
          <br />
          We’ll help you work out where to begin.
        </p>
      </div>
      <ActionLink to={partnership ? "/partners#inquiry" : "/contact"}>
        {partnership ? "Explore a Partnership" : "Discuss Your Project"}
      </ActionLink>
    </section>
  );
}
export function TextLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link className="text-link" to={to}>
      {children}
      <ArrowRight size={16} aria-hidden="true" />
    </Link>
  );
}

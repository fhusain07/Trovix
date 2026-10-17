import { Link } from "react-router-dom";
import { PageIntro } from "@/components/shared/PageElements";
export default function NotFound() {
  return (
    <>
      <PageIntro
        eyebrow="404 / PAGE NOT FOUND"
        title="Looks like a different path."
        description="This page is unavailable or has moved. Explore our services or start again from the homepage."
      />
      <div
        className="container section hero-actions"
        style={{ justifyContent: "center" }}
      >
        <Link to="/" className="action action-primary">
          Back to Home
        </Link>
        <Link to="/services" className="action action-secondary">
          Explore Services
        </Link>
      </div>
    </>
  );
}

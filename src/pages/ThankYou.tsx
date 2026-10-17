import { Link } from "react-router-dom";
import { PageIntro } from "@/components/shared/PageElements";
export default function ThankYou() {
  return (
    <>
      <PageIntro
        eyebrow="GET IN TOUCH"
        title="Let’s start a conversation."
        description="This page does not confirm a submission. A confirmation appears in the inquiry form only after the receiving service accepts your message."
      />
      <div className="container section" style={{ textAlign: "center" }}>
        <Link className="action action-primary" to="/contact">
          Go to the contact page
        </Link>
      </div>
    </>
  );
}

import { lazy } from "react";
import { SiteRoutes, type RoutePages } from "./routes";
const pages: RoutePages = {
  Home: lazy(() => import("@/pages/Home")),
  Services: lazy(() => import("@/pages/Services")),
  ServiceDetail: lazy(() => import("@/pages/ServiceDetail")),
  Projects: lazy(() => import("@/pages/Projects")),
  CaseStudy: lazy(() => import("@/pages/CaseStudy")),
  About: lazy(() => import("@/pages/About")),
  Technologies: lazy(() => import("@/pages/Technologies")),
  Partners: lazy(() => import("@/pages/Partners")),
  Contact: lazy(() => import("@/pages/Contact")),
  Privacy: lazy(() => import("@/pages/PrivacyPolicy")),
  Terms: lazy(() => import("@/pages/TermsOfService")),
  AccountDeletion: lazy(() => import("@/pages/AccountDeletion")),
  Careers: lazy(() => import("@/pages/Careers")),
  ThankYou: lazy(() => import("@/pages/ThankYou")),
  DraftPortfolio: import.meta.env.DEV
    ? lazy(() => import("@/pages/DraftPortfolio"))
    : null,
};
export default function App() {
  return <SiteRoutes pages={pages} />;
}

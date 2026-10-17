import type { ComponentType } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";
import NotFound from "@/NotFound";

export interface RoutePages {
  Home: ComponentType;
  Services: ComponentType;
  ServiceDetail: ComponentType;
  Projects: ComponentType;
  CaseStudy: ComponentType;
  About: ComponentType;
  Technologies: ComponentType;
  Partners: ComponentType;
  Contact: ComponentType;
  Privacy: ComponentType;
  Terms: ComponentType;
  AccountDeletion: ComponentType;
  Careers: ComponentType;
  ThankYou: ComponentType;
  DraftPortfolio?: ComponentType | null;
}

// Shared by lazy client routes and eager build-time rendering.
export function SiteRoutes({ pages }: { pages: RoutePages }) {
  const {
    Home,
    Services,
    ServiceDetail,
    Projects,
    CaseStudy,
    About,
    Technologies,
    Partners,
    Contact,
    Privacy,
    Terms,
    AccountDeletion,
    Careers,
    ThankYou,
    DraftPortfolio,
  } = pages;
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="portfolio" element={<Projects />} />
          <Route path="portfolio/:slug" element={<CaseStudy />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="partners" element={<Partners />} />
          <Route path="contact" element={<Contact />} />
          <Route path="careers" element={<Careers />} />
          <Route path="thank-you" element={<ThankYou />} />
          {DraftPortfolio && (
            <Route path="__review/portfolio" element={<DraftPortfolio />} />
          )}
          {DraftPortfolio && (
            <Route
              path="__review/portfolio/:slug"
              element={<DraftPortfolio />}
            />
          )}
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="terms-of-service" element={<Terms />} />
          {[
            "account-deletion",
            "data-deletion",
            "data-deletion-instructions",
          ].map((path) => (
            <Route key={path} path={path} element={<AccountDeletion />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

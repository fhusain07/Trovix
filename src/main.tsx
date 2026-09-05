import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Layout } from "./components/layout/Layout";
import { ErrorBoundary } from "./components/shared/ErrorBoundary";
import { PageLoader } from "./components/shared/PageLoader";
import NotFound from "./NotFound";

// Lazy-loaded pages — each becomes its own JS chunk for faster initial load
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const AccountDeletion = lazy(() => import("./pages/AccountDeletion"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

// Service landing pages
const SalesManagementSoftware = lazy(() => import("./pages/services/SalesManagementSoftware"));
const SaaSDevelopment = lazy(() => import("./pages/services/SaaSDevelopment"));
const SchoolManagement = lazy(() => import("./pages/services/SchoolManagement"));
const BusinessAutomation = lazy(() => import("./pages/services/BusinessAutomation"));
const MetaLeadAds = lazy(() => import("./pages/services/MetaLeadAds"));
const WebDevelopment = lazy(() => import("./pages/services/WebDevelopment"));

// CODEROCKET
const setupRouteChangeBridge = () => {
  if (typeof window === "undefined") {
    return;
  }
  const bridgeWindow = window as Window & {
    __coderocketRouteBridgeInitialized?: boolean;
  };
  if (bridgeWindow.__coderocketRouteBridgeInitialized) {
    return;
  }
  bridgeWindow.__coderocketRouteBridgeInitialized = true;
  const notifyParent = () => {
    try {
      window.parent?.postMessage(
        {
          type: "coderocket-route-change",
          path:
            window.location.pathname +
            window.location.search +
            window.location.hash,
        },
        "*",
      );
    } catch {
      // Ignore cross-origin access errors
    }
  };
  type HistoryMethod = typeof window.history.pushState;
  const wrapHistoryMethod = (method: "pushState" | "replaceState") => {
    const original = window.history[method] as HistoryMethod;
    window.history[method] = function (...args) {
      const result = original.apply(this, args as Parameters<HistoryMethod>);
      notifyParent();
      return result;
    } as HistoryMethod;
  };
  wrapHistoryMethod("pushState");
  wrapHistoryMethod("replaceState");
  window.addEventListener("popstate", notifyParent);
  window.addEventListener("hashchange", notifyParent);
  notifyParent();
};
setupRouteChangeBridge();
// /CODEROCKET

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="services/sales-management-software" element={<SalesManagementSoftware />} />
                <Route path="services/saas-development" element={<SaaSDevelopment />} />
                <Route path="services/school-management-system" element={<SchoolManagement />} />
                <Route path="services/business-automation" element={<BusinessAutomation />} />
                <Route path="services/meta-lead-ads" element={<MetaLeadAds />} />
                <Route path="services/web-application-development" element={<WebDevelopment />} />
                <Route path="projects" element={<Projects />} />
                <Route path="careers" element={<Careers />} />
                <Route path="contact" element={<Contact />} />
                <Route path="thank-you" element={<ThankYou />} />
                <Route path="account-deletion" element={<AccountDeletion />} />
                <Route path="data-deletion" element={<AccountDeletion />} />
                <Route path="data-deletion-instructions" element={<AccountDeletion />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                <Route path="terms-of-service" element={<TermsOfService />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

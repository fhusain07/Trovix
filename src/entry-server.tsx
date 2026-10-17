import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SiteRoutes } from "./routes";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Projects from "./pages/Projects";
import CaseStudy from "./pages/CaseStudy";
import About from "./pages/About";
import Technologies from "./pages/Technologies";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import Privacy from "./pages/PrivacyPolicy";
import Terms from "./pages/TermsOfService";
import AccountDeletion from "./pages/AccountDeletion";
import Careers from "./pages/Careers";
import ThankYou from "./pages/ThankYou";
export {
  getPageMetadata,
  getStructuredData,
  publicPaths,
  renderPaths,
} from "./data/metadata";

// Eager page imports make the static HTML independent of streaming scripts.
// Client routes retain lazy loading and use the exact same route definitions.
export function render(path: string): string {
  return renderToString(
    <ThemeProvider>
      <StaticRouter location={path}>
        <SiteRoutes
          pages={{
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
          }}
        />
      </StaticRouter>
    </ThemeProvider>,
  );
}

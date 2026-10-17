import { Suspense, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFloatButton } from "@/components/shared/WhatsAppFloatButton";
import { StickyMobileCTA } from "@/components/shared/StickyMobileCTA";
import { useSEO } from "@/hooks/useSEO";
import { getPageMetadata } from "@/data/metadata";
import { PageLoader } from "@/components/shared/PageLoader";

export function Layout() {
  const location = useLocation();
  const previousPath = useRef(location.pathname);
  useSEO(getPageMetadata(location.pathname));
  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() =>
        document
          .getElementById(decodeURIComponent(location.hash.slice(1)))
          ?.scrollIntoView(),
      );
    } else if (previousPath.current !== location.pathname) {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.getElementById("main-content")?.focus({ preventScroll: true });
    }
    previousPath.current = location.pathname;
  }, [location.pathname, location.hash]);
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar key={location.pathname} />
      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFloatButton />
      <StickyMobileCTA />
    </div>
  );
}

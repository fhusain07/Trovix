import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getStructuredData } from "@/data/metadata";
interface SEOOptions {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
}
function setMeta(selector: string, value: string, attribute = "content") {
  document.querySelector(selector)?.setAttribute(attribute, value);
}
export function useSEO({
  title,
  description,
  canonical,
  noindex,
}: SEOOptions): void {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', description);
    for (const network of ["og", "twitter"]) {
      const attr = network === "og" ? "property" : "name";
      setMeta(`meta[${attr}="${network}:title"]`, title);
      setMeta(`meta[${attr}="${network}:description"]`, description);
    }
    if (canonical) {
      setMeta('link[rel="canonical"]', canonical, "href");
      setMeta('meta[property="og:url"]', canonical);
    }
    setMeta(
      'meta[name="robots"]',
      noindex ? "noindex, follow" : "index, follow",
    );
    const schema = document.getElementById("page-schema");
    if (schema)
      schema.textContent = JSON.stringify(getStructuredData(pathname));
  }, [title, description, canonical, noindex, pathname]);
}

import { useEffect } from 'react';

interface SEOOptions {
  title: string;
  description: string;
  canonical?: string;
}

const BASE_TITLE = 'Trovix — Custom CRM, SaaS & School Management Systems | India';
const BASE_DESC =
  'Trovix builds custom CRM systems, SaaS platforms, and school management portals using React and .NET. Based in Nagpur, India. Get a free project estimate in 24 hours.';

function setMeta(selector: string, attr: string, value: string): void {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export const useSEO = ({ title, description, canonical }: SEOOptions): void => {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    if (canonical) setMeta('link[rel="canonical"]', 'href', canonical);

    return () => {
      document.title = BASE_TITLE;
      setMeta('meta[name="description"]', 'content', BASE_DESC);
      setMeta('meta[property="og:title"]', 'content', BASE_TITLE);
      setMeta('meta[property="og:description"]', 'content', BASE_DESC);
      setMeta('meta[name="twitter:title"]', 'content', BASE_TITLE);
      setMeta('meta[name="twitter:description"]', 'content', BASE_DESC);
    };
  }, [title, description, canonical]);
};

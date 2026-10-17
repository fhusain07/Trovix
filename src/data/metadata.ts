import { site, services } from "./site";
import { projects } from "./portfolio";
export interface PageMetadata {
  title: string;
  description: string;
  canonical: string;
  noindex?: boolean;
}
const basic = [
  [
    "/",
    "Custom Software, SaaS & CRM Development | Trovix",
    "Trovix builds custom software, SaaS applications, CRM systems, and business automation using React and .NET. Based in Nagpur, India.",
  ],
  [
    "/services",
    "Software Development Services | Trovix",
    "Explore custom software, SaaS, CRM, web applications, school management, business automation, WhatsApp, and Meta lead integrations.",
  ],
  [
    "/portfolio",
    "Our Work & Project Portfolio | Trovix",
    "Explore team-developed business platforms, backend services, academic projects, and clearly labeled website prototypes.",
  ],
  [
    "/about",
    "About Trovix | Software Development in Nagpur",
    "Get to know Trovix: our engineering approach, custom software capabilities, development process, and technology stack.",
  ],
  [
    "/technologies",
    "Our Technology Stack | React, .NET & PostgreSQL | Trovix",
    "How Trovix uses React, TypeScript, Vite, .NET Web API, PostgreSQL, Azure, and Docker to build business applications.",
  ],
  [
    "/partners",
    "Agency Development Partnerships | Trovix",
    "Explore white-label development, project outsourcing, technical collaboration, and agency delivery partnerships with Trovix.",
  ],
  [
    "/contact",
    "Discuss Your Software Project | Contact Trovix",
    "Tell Trovix about your software project or business workflow. Contact info@trovixtech.com or prepare a detailed project inquiry.",
  ],
  [
    "/privacy-policy",
    "Privacy Policy | Trovix",
    "Read the existing Trovix privacy policy covering personal information, website use, software services, and data rights.",
  ],
  [
    "/terms",
    "Terms & Conditions | Trovix",
    "Read the existing Trovix terms of service for its website, software products, and development services.",
  ],
  [
    "/account-deletion",
    "Data Deletion Instructions | Trovix",
    "How to request deletion of your personal data associated with Trovix services and integrations.",
  ],
  [
    "/careers",
    "Careers & Expressions of Interest | Trovix",
    "Contact Trovix about engineering and design opportunities. Confirm current openings and engagement details directly.",
  ],
  [
    "/thank-you",
    "Contact Trovix | Start a Conversation",
    "Return to the contact form to discuss your software project with Trovix.",
  ],
  [
    "/404",
    "Page Not Found | Trovix",
    "The requested page is unavailable. Explore Trovix services or return to the homepage.",
  ],
] as const;
export const aliases: Record<string, string> = {
  "/projects": "/portfolio",
  "/terms-of-service": "/terms",
  "/data-deletion": "/account-deletion",
  "/data-deletion-instructions": "/account-deletion",
};
export const publicPaths = [
  ...basic
    .filter(([path]) => !["/thank-you", "/404"].includes(path))
    .map(([path]) => path),
  ...services.map((service) => "/services/" + service.slug),
  ...projects.map((project) => "/portfolio/" + project.slug),
];
export const renderPaths = [
  ...publicPaths,
  ...Object.keys(aliases),
  "/thank-you",
  "/404",
];
export function getPageMetadata(pathname: string): PageMetadata {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const canonicalPath = aliases[path] ?? path;
  const basicPage = basic.find(([key]) => key === canonicalPath);
  const service = services.find(
    (item) => "/services/" + item.slug === canonicalPath,
  );
  const project = projects.find(
    (item) => "/portfolio/" + item.slug === canonicalPath,
  );
  const noindex =
    !!aliases[path] ||
    canonicalPath === "/thank-you" ||
    (!basicPage && !service && !project) ||
    canonicalPath === "/404";
  return {
    title: service
      ? service.title + " | Trovix"
      : project
        ? project.title +
          (project.type === "Demo" ? " · Design Study" : "") +
          " | Trovix"
        : (basicPage?.[1] ?? "Page Not Found | Trovix"),
    description:
      service?.description ??
      project?.description ??
      basicPage?.[2] ??
      "The requested page is unavailable. Explore Trovix services or return to the homepage.",
    canonical:
      site.url + (service || project || basicPage ? canonicalPath : "/404"),
    noindex,
  };
}
export function getStructuredData(pathname: string) {
  const path = aliases[pathname] ?? pathname;
  const service = services.find((item) => "/services/" + item.slug === path);
  const project = projects.find((item) => "/portfolio/" + item.slug === path);
  const organization = {
    "@type": "Organization",
    "@id": site.url + "/#organization",
    name: site.name,
    url: site.url,
    logo: site.url + "/trovix-icon-512.png",
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nagpur",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  };
  const graph: Record<string, unknown>[] = [organization];
  if (service)
    graph.push({
      "@type": "Service",
      name: service.title,
      description: service.description,
      url: site.url + path,
      provider: { "@id": organization["@id"] },
      serviceType: service.title,
    });
  if (project)
    graph.push({
      "@type": "CreativeWork",
      name: project.title,
      description:
        project.description +
        (project.type === "Demo"
          ? " Illustrative design study, not completed client work."
          : ""),
      url: site.url + path,
      image: site.url + project.image,
      creator: { "@id": organization["@id"] },
    });
  if (path !== "/" && path !== "/404") {
    const crumbs = [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url + "/" },
    ];
    if (service || project)
      crumbs.push({
        "@type": "ListItem",
        position: 2,
        name: service ? "Services" : "Our Work",
        item: site.url + (service ? "/services" : "/portfolio"),
      });
    crumbs.push({
      "@type": "ListItem",
      position: crumbs.length + 1,
      name:
        service?.title ??
        project?.title ??
        getPageMetadata(path).title.split(" | ")[0],
      item: site.url + path,
    });
    graph.push({ "@type": "BreadcrumbList", itemListElement: crumbs });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

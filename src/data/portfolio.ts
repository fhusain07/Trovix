export interface Project {
  slug: string;
  title: string;
  category: string;
  type:
    | "Demo"
    | "Internal Product"
    | "Client Work"
    | "Team Project"
    | "Unclassified";
  status: string;
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  stack: string[];
  architecture: string;
  responsibilities: string[];
  contributionNote?: string;
  contributionModel?:
    "Developed as part of a team" | "Team-based full-stack development";
  deliveryContext?: "Professional/team work" | "Delivered by Trovix";
  deliveryNote?: string;
  modules?: {
    name: string;
    description: string;
    features: string[];
    anchor?: string;
  }[];
  reviewNotes?: string[];
  image: string;
  imageKind?: "illustration" | "screenshot";
  imageCaption?: string;
  overview?: string;
  accent: string;
  results?: string[];
  client?: string;
  liveUrl?: string;
  repositoryUrl?: string;
  publication: "draft" | "approved";
  evidence?: { label: string; url: string; note: string }[];
  approval?: {
    approvedBy: string;
    approvedAt: string;
    publicContentApproved: boolean;
  };
}

// Editorial rule: only publish approved client material and substantiated outcomes.
// These entries describe the interface demonstrations created for this website.
// They are not deployed applications, completed engagements, or client screenshots.
export const designStudies: Project[] = [
  {
    slug: "sales-workspace-concept",
    title: "A clearer view of your pipeline.",
    category: "CRM & Sales",
    type: "Demo",
    publication: "draft",
    status: "Illustrative interface concept",
    description:
      "An interface study for a connected sales workspace, from first contact to the next follow-up.",
    challenge:
      "Explore how a sales team could organize opportunities, follow-ups, and ownership without switching between disconnected spreadsheets.",
    solution:
      "A sample workspace brings a pipeline summary, activity, and opportunity stages into one clear interface. All figures and records shown are fictional sample data.",
    features: [
      "Pipeline overview",
      "Stage-based opportunity organization",
      "Activity and follow-up layout",
      "Ownership indicators",
    ],
    stack: ["React", "TypeScript"],
    architecture:
      "The website renders a static illustrative product interface. A production CRM would require a separately scoped API, authorization layer, database, and integration services.",
    responsibilities: [
      "Interface composition",
      "Responsive presentation",
      "Sample-data visualization",
    ],
    image: "/.trovix-review/images/sales-workspace.svg",
    accent: "gold",
  },
  {
    slug: "school-workspace-concept",
    title: "School operations, brought together.",
    category: "Education",
    type: "Demo",
    publication: "draft",
    status: "Illustrative interface concept",
    description:
      "A dashboard design exploration for everyday school administration.",
    challenge:
      "Explore how attendance, student records, and administrative tasks could share a consistent workspace.",
    solution:
      "A clearly grouped dashboard concept gives administrators a starting point for daily tasks. It uses fictional sample information and is not a live school portal.",
    features: [
      "Attendance summary layout",
      "Student record organization",
      "Class overview",
      "Administrative task layout",
    ],
    stack: ["React", "TypeScript"],
    architecture:
      "A static interface demonstration created for this website. Institutional access controls, student-data safeguards, data storage, and rollout would be designed during a real engagement.",
    responsibilities: [
      "Information hierarchy",
      "Dashboard composition",
      "Responsive presentation",
    ],
    image: "/.trovix-review/images/school-workspace.svg",
    accent: "sage",
  },
  {
    slug: "automation-workspace-concept",
    title: "A little less manual. A lot more connected.",
    category: "Automation",
    type: "Demo",
    publication: "draft",
    status: "Illustrative interface concept",
    description:
      "A workflow-monitoring interface study for connected business processes.",
    challenge:
      "Explore a useful way to understand automated steps, their connections, and recent activity.",
    solution:
      "An illustrative workflow and activity view makes the intended journey visible. No external services are connected and no production automation is represented.",
    features: [
      "Connected workflow layout",
      "Activity feed concept",
      "Trigger and action hierarchy",
      "Status visualization",
    ],
    stack: ["React", "TypeScript"],
    architecture:
      "This is a static visual concept. A working automation service would need event ingestion, background processing, retry handling, credentials, and operational monitoring.",
    responsibilities: [
      "Workflow visualization",
      "Interface design",
      "Sample activity layout",
    ],
    image: "/.trovix-review/images/automation-workspace.svg",
    accent: "blue",
  },
];

// Never import private repository inventory into public content.
// Add sanitized entries only after explicit approval of their public content.
// Public summaries approved by the website owner on 2026-10-17.
// Private evidence, client identities, and operational school screenshots are excluded.
const approvedEntries: Project[] = [
  {
    "title": "School Operations Platform",
    "category": "Education Software",
    "type": "Team Project",
    "description": "A team-developed school platform connecting web/mobile workflows, tenant administration, fee management, and messaging integrations.",
    "overview": "A multi-tenant school platform spanning admissions, academics, fees, communication, and staff administration. A React web workspace and React Native mobile app connect to a .NET API and PostgreSQL database, with a host portal and companion product website.",
    "challenge": "The engineering problem is coordinating academic workflows, financial records, communication, and access boundaries across multiple schools and user roles. This framing is derived from implementation; no client brief or measurable business outcome is being invented.",
    "solution": "The team implementation separates business domains into module-owned application, domain, and persistence layers. Web and mobile clients use shared API contracts for daily operations, while tenant-aware access checks, query caching, and asynchronous messaging support cross-module workflows. The source distinguishes implemented workflows from future or placeholder screens.",
    "features": [
      "Admissions, bulk student imports, attendance, timetables, and homework",
      "Fee ledgers, receipts, payment handling, and financial reports",
      "WhatsApp template/webhook integration and scheduled notifications",
      "Certificate PDFs and batch ZIP downloads",
      "Web/mobile workflows with tenant provisioning and role/permission controls"
    ],
    "stack": [
      "React",
      "TypeScript",
      ".NET Web API",
      "PostgreSQL",
      "React Native",
      "Expo"
    ],
    "architecture": "A modular monolith separates Academics, Payments, Communication, Examinations, HR, Administration, and UserAccess. Module-owned handlers and repositories use MediatR and EF Core/PostgreSQL persistence; the shared messaging layer includes an outbox and background processing. React/Vite clients use typed service clients and TanStack Query, with Redux for client state. React Native/Expo provides feature-oriented mobile screens, and the host portal shares tenant API contracts. Container definitions and provider adapters are source evidence of packaging/integration design, not proof of a deployed production topology or live third-party delivery. A separate React/Vite marketing frontend presents the same product and uses email links for demo requests; it is grouped with the platform rather than treated as an additional ERP backend.",
    "responsibilities": [
      "Team-based full-stack development across the web workspace, modular .NET API, PostgreSQL data layer, and mobile application.",
      "Team implementation of academic, finance, communication, examination-scheduling, staff-record, and school-administration workflows.",
      "Team development of tenant-aware access, user and role administration, shared API integration, query/mutation state, and host tenant-management tooling.",
      "Team implementation of reusable interfaces, validation and error handling, import processing, document generation, and integration/background-processing code.",
      "Team development of the companion product website, including typed content composition, responsive navigation, theme state, and email-based calls to action."
    ],
    "contributionModel": "Team-based full-stack development",
    "deliveryContext": "Professional/team work",
    "deliveryNote": "Developed as part of a team. This portfolio does not assert exclusive authorship, client IP ownership, or direct delivery by Trovix.",
    "accent": "sage",
    "slug": "school-management-platform",
    "status": "Team-developed platform",
    "image": "",
    "publication": "approved",
    "approval": {
      "approvedBy": "Website owner",
      "approvedAt": "2026-10-17",
      "publicContentApproved": true
    }
  },
  {
    "title": "Smart Queue Management System",
    "category": "Academic Projects",
    "type": "Team Project",
    "description": "An academic team project for issuing queue tokens, displaying service status, and managing the order of customers.",
    "overview": "A React frontend connects to a .NET API and PostgreSQL database. Customers generate tokens and view queue status; an admin interface manages the service order.",
    "challenge": "Organize token issuance and make the current service order visible.",
    "solution": "A token API persists queue state, while the React interface polls for the latest status.",
    "features": [
      "Generate numbered queue tokens",
      "Show the current token and waiting/completed counts",
      "Call the next waiting customer",
      "Complete tokens and reset the queue",
      "Automatically refresh queue status every five seconds"
    ],
    "stack": [
      "React",
      "JavaScript",
      "Vite",
      ".NET Web API",
      "Entity Framework Core",
      "PostgreSQL"
    ],
    "architecture": "React/Vite frontend, Axios API clients, ASP.NET Core controllers, and EF Core/PostgreSQL persistence.",
    "responsibilities": [
      "Team development of the React interface, queue API, and database-backed token workflow."
    ],
    "contributionModel": "Team-based full-stack development",
    "deliveryNote": "Developed as part of a team. This portfolio does not assert exclusive authorship, client IP ownership, or direct delivery by Trovix.",
    "accent": "sage",
    "slug": "queue-management-system",
    "status": "Academic team project",
    "image": "/images/portfolio/queue-status.png",
    "publication": "approved",
    "approval": {
      "approvedBy": "Website owner",
      "approvedAt": "2026-10-17",
      "publicContentApproved": true
    },
    "deliveryContext": "Professional/team work",
    "imageKind": "screenshot",
    "imageCaption": "Queue-status screen from the academic team project; demonstration data."
  },
  {
    "title": "Printing Website",
    "category": "Website Prototype",
    "type": "Team Project",
    "description": "A team-developed printing-business website prototype with home/about pages and image slideshows.",
    "overview": "React and Material UI compose the enabled home and about pages. Additional service, gallery, contact, and payment routes are not implemented.",
    "challenge": "Explore the interface and application scope described above.",
    "solution": "React and Material UI compose the enabled home and about pages. Additional service, gallery, contact, and payment routes are not implemented.",
    "features": [
      "Home and about page routing",
      "Manual and automatic image slideshow controls",
      "Image-led about page and embedded location map"
    ],
    "stack": [
      "React",
      "TypeScript",
      "Vite",
      "Material UI"
    ],
    "architecture": "Source-reviewed implementation using the listed technologies; runtime operation and deployment are unverified.",
    "responsibilities": [
      "Team development of the source implementation within the stated prototype, scaffold, or website scope."
    ],
    "contributionModel": "Developed as part of a team",
    "deliveryNote": "Developed as part of a team. This portfolio does not assert exclusive authorship, client IP ownership, or direct delivery by Trovix.",
    "accent": "sage",
    "slug": "printing-website",
    "status": "Website prototype",
    "image": "",
    "publication": "approved",
    "approval": {
      "approvedBy": "Website owner",
      "approvedAt": "2026-10-17",
      "publicContentApproved": true
    },
    "deliveryContext": "Professional/team work"
  },
  {
    "title": "Scrap Pickup Booking",
    "category": "Frontend Prototype",
    "type": "Team Project",
    "description": "A team-developed scrap-pickup booking interface with form validation and a demonstration confirmation screen.",
    "overview": "The React frontend captures contact, material, and pickup-schedule details. Submission is simulated and saved in browser storage; real booking and notification delivery are not implemented.",
    "challenge": "Explore the interface and application scope described above.",
    "solution": "The React frontend captures contact, material, and pickup-schedule details. Submission is simulated and saved in browser storage; real booking and notification delivery are not implemented.",
    "features": [
      "Pickup details and scheduling form",
      "Client-side validation and saved form drafts",
      "Booking summary and demonstration confirmation screen"
    ],
    "stack": [
      "React",
      "JavaScript",
      "Vite",
      "Tailwind CSS"
    ],
    "architecture": "Source-reviewed implementation using the listed technologies; runtime operation and deployment are unverified.",
    "responsibilities": [
      "Team development of the source implementation within the stated prototype, scaffold, or website scope."
    ],
    "contributionModel": "Developed as part of a team",
    "deliveryNote": "Developed as part of a team. This portfolio does not assert exclusive authorship, client IP ownership, or direct delivery by Trovix.",
    "accent": "sage",
    "slug": "scrap-pickup-booking",
    "status": "Frontend prototype",
    "image": "",
    "publication": "approved",
    "approval": {
      "approvedBy": "Website owner",
      "approvedAt": "2026-10-17",
      "publicContentApproved": true
    },
    "deliveryContext": "Professional/team work"
  },
  {
    "title": "Movie Ticket Starter",
    "category": "Starter Scaffold",
    "type": "Team Project",
    "description": "A team-associated ASP.NET MVC starter for a proposed movie-ticket project. Ticket booking is not implemented.",
    "overview": "The repository contains the default MVC home, privacy, and error pages with a shared Razor layout. Movie listings, seat selection, payment, and booking workflows are absent.",
    "challenge": "Explore the interface and application scope described above.",
    "solution": "The repository contains the default MVC home, privacy, and error pages with a shared Razor layout. Movie listings, seat selection, payment, and booking workflows are absent.",
    "features": [
      "Basic MVC home, privacy, and error routes",
      "Shared Razor layout",
      "Bootstrap-based application shell"
    ],
    "stack": [
      "C#",
      "ASP.NET Core MVC",
      "Razor",
      "Bootstrap"
    ],
    "architecture": "Source-reviewed implementation using the listed technologies; runtime operation and deployment are unverified.",
    "responsibilities": [
      "Team development of the source implementation within the stated prototype, scaffold, or website scope."
    ],
    "contributionModel": "Developed as part of a team",
    "deliveryNote": "Developed as part of a team. This portfolio does not assert exclusive authorship, client IP ownership, or direct delivery by Trovix.",
    "accent": "sage",
    "slug": "movie-ticket-scaffold",
    "status": "Starter scaffold",
    "image": "",
    "publication": "approved",
    "approval": {
      "approvedBy": "Website owner",
      "approvedAt": "2026-10-17",
      "publicContentApproved": true
    },
    "deliveryContext": "Professional/team work"
  },
  {
    "title": "School Product Website",
    "category": "Marketing Website",
    "type": "Team Project",
    "description": "A team-developed school-product marketing website with feature sections, plan-comparison layouts, and contact information.",
    "overview": "A single-page React website presents school-product information, feature summaries, and plan-comparison layouts. This entry covers the marketing website rather than another school-management software delivery.",
    "challenge": "Explore the interface and application scope described above.",
    "solution": "A single-page React implementation presents product information and plan-comparison layouts. Its relationship to the combined school platform remains under review; it is not counted as another completed software-product delivery.",
    "features": [
      "Rotating hero images with navigation controls",
      "Feature and plan-comparison content layouts",
      "Technology and contact sections"
    ],
    "stack": [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS"
    ],
    "architecture": "Source-reviewed implementation using the listed technologies; runtime operation and deployment are unverified.",
    "responsibilities": [
      "Team development of the source implementation within the stated prototype, scaffold, or website scope."
    ],
    "contributionModel": "Developed as part of a team",
    "deliveryNote": "Developed as part of a team. This portfolio does not assert exclusive authorship, client IP ownership, or direct delivery by Trovix.",
    "accent": "sage",
    "slug": "school-product-website",
    "status": "Marketing website",
    "image": "",
    "publication": "approved",
    "approval": {
      "approvedBy": "Website owner",
      "approvedAt": "2026-10-17",
      "publicContentApproved": true
    },
    "deliveryContext": "Professional/team work"
  },
  {
    "title": "HR Management Platform",
    "category": "Business Software",
    "type": "Team Project",
    "description": "A team-developed HR platform combining employee self-service, leave workflows, and backend payroll calculations.",
    "overview": "A Next.js interface works with modular .NET services for employee self-service and administration. Payroll calculations and persistence exist in the backend; the reviewed payroll-generation screen still simulates completion.",
    "challenge": "A team-developed HR platform combining employee self-service, leave workflows, and backend payroll calculations.",
    "solution": "Next.js App Router UI and query clients; gateway controllers forward to employee, HR, and payroll services backed by repositories.",
    "features": [
      "Employee profiles and self-service forms",
      "Leave applications and administrative leave views",
      "Backend payroll calculation using salary, attendance, leave, and approved expenses",
      "Persisted payroll summaries and expense items"
    ],
    "stack": [
      "Next.js",
      "React",
      "TypeScript",
      ".NET 8",
      "Entity Framework Core",
      "SQL Server"
    ],
    "architecture": "Next.js App Router UI and query clients; gateway controllers forward to employee, HR, and payroll services backed by repositories.",
    "responsibilities": [
      "Team development of the source-reviewed application modules described here."
    ],
    "contributionModel": "Team-based full-stack development",
    "deliveryContext": "Professional/team work",
    "deliveryNote": "Developed as part of a team. This portfolio does not assert exclusive authorship, client IP ownership, or direct delivery by Trovix.",
    "accent": "gold",
    "slug": "hr-management-platform",
    "status": "Team-developed platform",
    "image": "",
    "publication": "approved",
    "approval": {
      "approvedBy": "Website owner",
      "approvedAt": "2026-10-17",
      "publicContentApproved": true
    }
  },
  {
    "title": "Calling & CRM Platform",
    "category": "CRM & Sales",
    "type": "Team Project",
    "description": "A team-developed sales workspace connecting lead ownership, call history, deal pipelines, and account administration.",
    "overview": "A React sales interface and related .NET backends bring lead records, call history, deal pipelines, and account administration into one product family.",
    "challenge": "A team-developed sales workspace connecting lead ownership, call history, deal pipelines, and account administration.",
    "solution": "React query/service clients connect to layered .NET controllers, managers, repositories, and unit-of-work persistence. Related backend versions use PostgreSQL and SQL Server respectively.",
    "features": [
      "Lead records, search, filters, and owner assignment",
      "Call history with status, notes, and dispositions",
      "Sales deals and pipeline stages in the related CRM backend",
      "User, role, and plan administration"
    ],
    "stack": [
      "React",
      "TypeScript",
      ".NET",
      "Entity Framework Core",
      "PostgreSQL",
      "SQL Server"
    ],
    "architecture": "React query/service clients connect to layered .NET controllers, managers, repositories, and unit-of-work persistence. Related backend versions use PostgreSQL and SQL Server respectively.",
    "responsibilities": [
      "Team development of the source-reviewed application modules described here."
    ],
    "contributionModel": "Team-based full-stack development",
    "deliveryContext": "Professional/team work",
    "deliveryNote": "Developed as part of a team. This portfolio does not assert exclusive authorship, client IP ownership, or direct delivery by Trovix.",
    "accent": "gold",
    "slug": "sales-calling-crm",
    "status": "Team-developed platform",
    "image": "",
    "publication": "approved",
    "approval": {
      "approvedBy": "Website owner",
      "approvedAt": "2026-10-17",
      "publicContentApproved": true
    }
  },
  {
    "title": "Product Catalogue API",
    "category": "Backend Development",
    "type": "Team Project",
    "description": "A team-developed catalogue API for products, categories, flexible attributes, and product images.",
    "overview": "The backend separates API, application, domain, and infrastructure code. MediatR handlers execute catalogue operations through Dapper and PostgreSQL. A storefront, checkout, and payments are outside the reviewed scope.",
    "challenge": "A team-developed catalogue API for products, categories, flexible attributes, and product images.",
    "solution": "ASP.NET Core controllers dispatch commands and queries through MediatR to Dapper-backed PostgreSQL handlers.",
    "features": [
      "Product create, update, list, detail, and delete endpoints",
      "Categories and flexible product attributes",
      "Product image uploads and thumbnail associations",
      "Filtered and paginated catalogue queries"
    ],
    "stack": [
      "C#",
      ".NET 9",
      "MediatR",
      "Dapper",
      "PostgreSQL"
    ],
    "architecture": "ASP.NET Core controllers dispatch commands and queries through MediatR to Dapper-backed PostgreSQL handlers.",
    "responsibilities": [
      "Team development of the source-reviewed application modules described here."
    ],
    "contributionModel": "Developed as part of a team",
    "deliveryContext": "Professional/team work",
    "deliveryNote": "Developed as part of a team. This portfolio does not assert exclusive authorship, client IP ownership, or direct delivery by Trovix.",
    "accent": "gold",
    "slug": "product-catalogue-backend",
    "status": "Backend project",
    "image": "",
    "publication": "approved",
    "approval": {
      "approvedBy": "Website owner",
      "approvedAt": "2026-10-17",
      "publicContentApproved": true
    }
  },
  {
    "title": "Membership & Workout API",
    "category": "Backend Development",
    "type": "Team Project",
    "description": "A team-developed API for membership records, workouts, and scheduled expiry-reminder processing.",
    "overview": "A .NET API stores client and workout records in PostgreSQL. A background worker identifies memberships nearing expiry and includes Firebase push-notification code; delivery has not been tested.",
    "challenge": "A team-developed API for membership records, workouts, and scheduled expiry-reminder processing.",
    "solution": "ASP.NET Core controllers use an EF Core PostgreSQL context, with a registered background worker for reminder processing.",
    "features": [
      "Search and manage member records",
      "Track membership plans, fees, and expiry dates",
      "Create, update, and remove workout records",
      "Expiry reminder worker and device-token registration"
    ],
    "stack": [
      "C#",
      ".NET 9",
      "Entity Framework Core",
      "PostgreSQL",
      "Firebase Admin"
    ],
    "architecture": "ASP.NET Core controllers use an EF Core PostgreSQL context, with a registered background worker for reminder processing.",
    "responsibilities": [
      "Team development of the source-reviewed application modules described here."
    ],
    "contributionModel": "Developed as part of a team",
    "deliveryContext": "Professional/team work",
    "deliveryNote": "Developed as part of a team. This portfolio does not assert exclusive authorship, client IP ownership, or direct delivery by Trovix.",
    "accent": "gold",
    "slug": "membership-workout-backend",
    "status": "Backend project",
    "image": "",
    "publication": "approved",
    "approval": {
      "approvedBy": "Website owner",
      "approvedAt": "2026-10-17",
      "publicContentApproved": true
    }
  }
];
export const projects = approvedEntries.filter(
  (project) =>
    project.type !== "Unclassified" &&
    project.publication === "approved" &&
    project.approval?.publicContentApproved === true,
);

export const site = {
  name: "Trovix",
  url: "https://www.trovixtech.com",
  email: "info@trovixtech.com",
  location: "Nagpur, Maharashtra, India",
  whatsapp:
    "https://wa.me/918956121778?text=Hi%20Trovix%2C%20I%27d%20like%20to%20discuss%20a%20project.",
};

export const technologies = [
  {
    name: "React",
    mark: "Re",
    category: "Frontend",
    use: "Responsive interfaces for dashboards, portals, and web products.",
    application:
      "Reusable interface components and interactive business workflows.",
  },
  {
    name: "TypeScript",
    mark: "TS",
    category: "Frontend",
    use: "Typed application code that is easier to understand and maintain.",
    application:
      "Shared data contracts, safer refactoring, and reliable frontend features.",
  },
  {
    name: "Vite",
    mark: "Vi",
    category: "Frontend",
    use: "A streamlined development and production build workflow.",
    application: "Fast local iteration and optimized web application bundles.",
  },
  {
    name: ".NET Web API",
    mark: ".N",
    category: "Backend",
    use: "Business logic and APIs connecting interfaces with operational data.",
    application: "Role-based access, integrations, and application services.",
  },
  {
    name: "PostgreSQL",
    mark: "Pg",
    category: "Database",
    use: "Structured, relational storage for business information.",
    application:
      "Sales records, tenant data, reporting, and transactional workflows.",
  },
  {
    name: "Azure",
    mark: "Az",
    category: "Cloud & DevOps",
    use: "Cloud hosting and deployment environments for business applications.",
    application:
      "Application hosting, environment separation, and operational monitoring.",
  },
  {
    name: "Docker",
    mark: "Do",
    category: "Cloud & DevOps",
    use: "Consistent application environments from development to deployment.",
    application: "Containerized services and repeatable delivery workflows.",
  },
];

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  headline: string;
  problems: string[];
  features: string[];
  stack: string[];
  industries: string[];
  approach: string;
  faqs: { question: string; answer: string }[];
}

const commonFAQs = [
  {
    question: "How are scope, budget, and timeline agreed?",
    answer:
      "We start with your workflows, users, and priorities. The proposal defines scope, milestones, dependencies, and an estimated schedule. Pricing and availability are confirmed for each engagement.",
  },
  {
    question: "Can you work with an existing system?",
    answer:
      "We can assess existing code, APIs, and data before recommending an integration, a phased improvement, or a new application. Access and technical constraints are reviewed during discovery.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We discuss maintenance, handover, monitoring, and future improvements during scoping. Support coverage and responsibilities are documented in the project agreement.",
  },
];

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortTitle: "Custom software",
    description:
      "Purpose-built systems for the way your business actually works.",
    headline: "Your workflow. Your software.",
    problems: [
      "Disconnected tools make it hard to see the whole operation.",
      "Spreadsheets cannot reliably manage permissions and complex workflows.",
      "Generic software forces teams to work around the product.",
    ],
    features: [
      "Workflow mapping and requirements",
      "Role-based dashboards and permissions",
      "Operational reporting",
      "Third-party API integrations",
      "Data migration planning",
      "Documented APIs and handover",
    ],
    stack: ["React", "TypeScript", ".NET Web API", "PostgreSQL", "Azure"],
    industries: [
      "Service businesses",
      "Operations teams",
      "Agencies",
      "Growing enterprises",
    ],
    approach:
      "Map the current process, identify the smallest useful release, and build in reviewable milestones. Validate with the people who will use the software before deployment.",
    faqs: commonFAQs,
  },
  {
    slug: "saas-development",
    title: "SaaS Application Development",
    shortTitle: "SaaS applications",
    description:
      "Turn a validated product idea into a focused, maintainable SaaS platform.",
    headline: "From product idea to a platform built to evolve.",
    problems: [
      "The first release needs focus without limiting future growth.",
      "Tenant data and permissions need deliberate boundaries.",
      "Product operations need visibility across customer accounts.",
    ],
    features: [
      "MVP scoping and product workflows",
      "Multi-tenant architecture planning",
      "User onboarding and access roles",
      "Subscription workflow integrations",
      "Product and administration dashboards",
      "API-first application design",
    ],
    stack: [
      "React",
      "TypeScript",
      ".NET Web API",
      "PostgreSQL",
      "Azure",
      "Docker",
    ],
    industries: [
      "B2B startups",
      "Agencies",
      "Service platforms",
      "Vertical software businesses",
    ],
    approach:
      "Prioritize core user needs, define tenancy and access rules, and review a working product at each milestone. Hosting and billing choices follow the actual business model.",
    faqs: commonFAQs,
  },
  {
    slug: "sales-management-software",
    title: "CRM & Sales Management Systems",
    shortTitle: "CRM & sales systems",
    description:
      "Keep leads, conversations, follow-ups, and your pipeline in one place.",
    headline: "A clearer pipeline. A better way to sell.",
    problems: [
      "Leads are scattered across spreadsheets and inboxes.",
      "Follow-ups depend on individual memory.",
      "Managers lack a consistent view of pipeline activity.",
    ],
    features: [
      "Lead capture and assignment",
      "Configurable sales stages",
      "Tasks, notes, and follow-up reminders",
      "Role and branch access",
      "Sales activity reporting",
      "WhatsApp and Meta lead integration planning",
    ],
    stack: ["React", "TypeScript", ".NET Web API", "PostgreSQL", "Azure"],
    industries: [
      "Sales teams",
      "Distributors",
      "Service businesses",
      "Agencies",
    ],
    approach:
      "Model your sales process first, then build stages, ownership rules, and reporting around it. Review imports and integrations against real sample data.",
    faqs: commonFAQs,
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    shortTitle: "Web applications",
    description:
      "Fast, accessible web applications with dependable backend foundations.",
    headline: "Complex operations. Considered interfaces.",
    problems: [
      "Customers and teams need access across devices.",
      "Slow, confusing interfaces make everyday tasks harder.",
      "Business rules need a secure and maintainable API layer.",
    ],
    features: [
      "Responsive React interfaces",
      "Accessible component design",
      "REST APIs and business logic",
      "Authentication and authorization planning",
      "Customer and administration portals",
      "Performance and deployment reviews",
    ],
    stack: ["React", "TypeScript", "Vite", ".NET Web API", "PostgreSQL"],
    industries: [
      "B2B businesses",
      "Customer service teams",
      "Education",
      "Digital agencies",
    ],
    approach:
      "Prototype important user journeys, establish API contracts, and deliver complete features in stages. Test the experience on mobile and desktop before handover.",
    faqs: commonFAQs,
  },
  {
    slug: "school-management-system",
    title: "School Management Systems",
    shortTitle: "School management",
    description:
      "Connect academic and administrative workflows in a purpose-built portal.",
    headline: "Less administration. More room for education.",
    problems: [
      "Student information lives in separate registers and files.",
      "Attendance and fee tracking require repeated manual work.",
      "Staff and administrators need different levels of access.",
    ],
    features: [
      "Student records and admissions",
      "Class and attendance workflows",
      "Fee records and payment tracking",
      "Exam and result management",
      "Staff administration and permissions",
      "Parent communication workflow planning",
    ],
    stack: ["React", "TypeScript", ".NET Web API", "PostgreSQL"],
    industries: ["Schools", "Training institutes", "Education administrators"],
    approach:
      "Review academic calendars, roles, and administrative rules with the institution. Plan data migration and pilot the core workflows before a wider rollout.",
    faqs: commonFAQs,
  },
  {
    slug: "business-automation",
    title: "Business Process Automation",
    shortTitle: "Business automation",
    description:
      "Connect your systems and take repetitive steps out of everyday work.",
    headline: "Let your systems do the repetitive work.",
    problems: [
      "Teams copy the same information between systems.",
      "Routine approvals and reminders are easily missed.",
      "Failures in background workflows are hard to diagnose.",
    ],
    features: [
      "Workflow and trigger mapping",
      "Lead intake automation",
      "Notification and reminder workflows",
      "Approval and routing rules",
      "API connections and data synchronization",
      "Audit logs, retries, and error visibility",
    ],
    stack: [".NET Web API", "PostgreSQL", "React", "Azure", "Docker"],
    industries: [
      "Operations teams",
      "Sales teams",
      "Agencies",
      "Service businesses",
    ],
    approach:
      "Identify repetitive tasks and their exceptions, agree on human checkpoints, and connect systems through documented APIs. Include failure handling and monitoring in the design.",
    faqs: commonFAQs,
  },
  {
    slug: "whatsapp-business-platform",
    title: "WhatsApp Business Platform Integration",
    shortTitle: "WhatsApp integrations",
    description:
      "Bring customer messaging into your CRM and operational workflows.",
    headline: "Customer conversations, connected to your business.",
    problems: [
      "Customer messages are disconnected from sales records.",
      "Routine updates are sent manually.",
      "Messaging permissions and platform requirements need careful handling.",
    ],
    features: [
      "Official platform API integration",
      "Messaging webhook handling",
      "Approved template workflows",
      "CRM conversation linking",
      "Consent and opt-out workflow design",
      "Delivery status and failure tracking",
    ],
    stack: [".NET Web API", "PostgreSQL", "React", "Azure"],
    industries: [
      "Customer support teams",
      "Sales teams",
      "Service businesses",
      "Education",
    ],
    approach:
      "Review account eligibility, consent, and template requirements first. Connect messaging events with your application and test delivery handling. Platform approval, policies, and fees remain subject to Meta.",
    faqs: [
      {
        question: "Do you guarantee WhatsApp account or template approval?",
        answer:
          "No. Meta controls account eligibility, template review, messaging policies, and platform fees. We scope integration work around the current account status and applicable platform requirements.",
      },
      ...commonFAQs,
    ],
  },
  {
    slug: "meta-lead-ads",
    title: "Meta Lead Ads Integration",
    shortTitle: "Meta lead integrations",
    description:
      "Connect Facebook and Instagram lead forms with your sales workflow.",
    headline: "From lead form to the right next step.",
    problems: [
      "Lead exports delay follow-up.",
      "Manual imports create duplicate records.",
      "Campaign data is lost when leads move into a CRM.",
    ],
    features: [
      "Lead webhook integration",
      "Field mapping and validation",
      "Duplicate detection rules",
      "Lead assignment workflows",
      "Source and campaign attribution",
      "Retry handling and integration logs",
    ],
    stack: [".NET Web API", "PostgreSQL", "React", "Azure"],
    industries: ["Marketing agencies", "Sales teams", "Service businesses"],
    approach:
      "Map ad-form fields to your CRM, review permissions and app access, and test lead delivery end to end. Platform access and app review depend on Meta and the connected business account.",
    faqs: commonFAQs,
  },
];

export const process = [
  [
    "Discovery",
    "Understand your business, users, and the problem worth solving.",
  ],
  [
    "Requirement analysis",
    "Map workflows, constraints, integrations, and priorities.",
  ],
  [
    "Planning & proposal",
    "Agree on scope, milestones, responsibilities, and estimates.",
  ],
  ["UI/UX design", "Make key journeys tangible before development begins."],
  ["Development", "Build in focused increments with regular demonstrations."],
  [
    "Testing & quality assurance",
    "Review functionality, accessibility, and critical user paths.",
  ],
  [
    "Deployment",
    "Prepare environments, release checks, and a considered handover.",
  ],
  [
    "Support & maintenance",
    "Plan monitoring, maintenance, and the next improvements.",
  ],
];

export const differentiators = [
  [
    "Built around your business",
    "Software shaped by your workflows, users, and priorities.",
  ],
  [
    "Direct technical communication",
    "Work through decisions with the people building your product.",
  ],
  [
    "Architecture that can evolve",
    "Clear boundaries, documented APIs, and maintainable foundations.",
  ],
  [
    "A visible development process",
    "Agreed milestones, regular reviews, and clear next steps.",
  ],
  [
    "A plan beyond launch",
    "Discuss handover, maintenance, and ongoing support from the start.",
  ],
];

export const partnershipModels = [
  "White-label Development",
  "Project-Based Outsourcing",
  "Dedicated Development Support",
  "Joint Project Execution",
  "Technical Collaboration",
  "Long-Term Agency Partnerships",
];

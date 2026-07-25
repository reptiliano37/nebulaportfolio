// ─── Types ─────────────────────────────────────────────────────────────────────

export type Project = {
  name: string;
  description: string;
  link?: string;
  pageSlug?: string;
  skills?: string[];
};

export type Experience = {
  company: string;
  title: string;
  dateRange: string;
  bullets: string[];
};

export type Education = {
  school: string;
  degree: string;
  dateRange: string;
  achievements?: string[];
};

export type EngineeringPage = {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  markdownContent: string;
};

// ─── Identity & Branding ───────────────────────────────────────────────────────
// Controls: name and professional title rendered in Hero, Nav, Footer.

export const siteConfig = {
  name: "Miguel Arará",
  title: "iOS Developer | SwiftUI, UIKit, and Full-Stack Engineering",

  // ─── Theme ─────────────────────────────────────────────────────────────────
  // accentColorLight → --accent-color in light mode
  // accentColorDark  → --accent-color in dark mode
  // Change these two values to retheme the entire site.

  accentColorLight: "#0369a1",
  accentColorDark: "#0284c7",

  // ─── SEO ───────────────────────────────────────────────────────────────────

  seo: {
    description:
      "Mobile Engineer specialized in iOS development and SwiftUI architecture, building scalable features for high-traffic production apps.",
  },

  // ─── Navigation ────────────────────────────────────────────────────────────
  // Controls: nav link labels in Nav and Footer (desktop + mobile).

  navigation: {
    home: "Home",
    about: "About",
    projects: "Personal Projects",
    experience: "Experience",
    education: "Education",
    pages: "Pages",
    contact: "Contact",
    aria: {
      toggleTheme: "Toggle theme",
      toggleMenu: "Toggle navigation menu",
    },
  },

  // ─── Social ────────────────────────────────────────────────────────────────

  social: {
    email: "miguel.arara5@gmail.com",
    github: "",
    linkedin: "https://www.linkedin.com/in/miguel-arar%C3%A1-a9502914a/",
    aria: {
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },

  // ─── Hero ──────────────────────────────────────────────────────────────────
  // buttons.primary scrolls to Projects.
  // buttons.secondary links to /pages.

  hero: {
    namePrefix: "I'm",
    buttons: {
      primary: "View Projects",
      secondary: "Explore Pages",
      resume: "Download Resume",
      resumeLoading: "Generating…",
    },
    resumeUrl: "",
  },

  // ─── About ─────────────────────────────────────────────────────────────────

  about: {
    sectionTitle: "About Me",
    skillsLabel: "Skills",
    body: "Mobile Engineer specialized in iOS development and SwiftUI architecture, with experience building scalable features for high-traffic e-commerce apps serving millions of users across 30+ markets. Strong background in feature flag systems, A/B experimentation, advanced analytics instrumentation, and dynamic configuration in large-scale multi-market environments. Previously worked as a Full Stack Developer building REST APIs, Python microservices, and automation systems, bringing strong end-to-end product engineering capabilities.",
    skills: [
      "Swift", "SwiftUI", "UIKit", "Swift Concurrency",
      "iOS Architecture", "Feature Flags", "A/B Testing", "Analytics Instrumentation",
      "REST APIs", "Python", "TypeScript", "JavaScript",
      "Git", "GitHub", "Fastlane", "CI/CD", "AWS",
    ],
  },

  // ─── Projects ──────────────────────────────────────────────────────────────
  // Removing all items from items[] hides the Projects section.

  projects: {
    sectionTitle: "Personal Projects",
    deepDiveLabel: "Read page",
    sourceCodeLabel: "Source Code",
    items: [
      {
        name: "Sistema de Automatizacion de Gestion de Pacientes para Clinica Nutricional",
        description:
          "Diseno e infraestructura en produccion de un sistema de automatizacion con n8n sobre VPS/Docker para la gestion de citas, avisos de WhatsApp y entrega de planes nutricionales.",
        pageSlug: "n8n-nutricionista-automation",
        skills: ["n8n", "TypeScript", "Docker", "Webhooks", "REST APIs", "WhatsApp API", "VPS"],
      },
      {
        name: "Freetoeat",
        description:
          "iOS app for nutritionists to manage client plans, track progress, and improve adherence through a clean and data-driven mobile experience.",
        pageSlug: "freetoeat",
        skills: ["Swift", "SwiftUI", "UIKit", "REST APIs"],
      },
      {
        name: "Electoral Promises",
        description:
          "Platform to track campaign promises, monitor delivery status, and compare political commitments against measurable outcomes, designed to scale to Android and iOS with a Cloudflare backend.",
        pageSlug: "electoral-promises",
        skills: ["TypeScript", "Next.js", "Data Visualization"],
      },
      {
        name: "PaddleApp",
        description:
          "App for padel clubs to manage court reservations and training sessions, including winner tracking, unforced-error logging, and live score counting.",
        pageSlug: "paddleapp",
        skills: ["TypeScript", "JavaScript"],
      },
    ] as Project[],
  },

  // ─── Engineering Pages Index ────────────────────────────────────────────────
  // Controls: overhead label, title, description shown on /pages.

  engineeringPages: {
    overheadLabel: "Engineering Documentation",
    title: "Case Studies",
    description:
      "Technical deep dives and implementation notes from real-world product work.",
  },

  // ─── Engineering Pages ─────────────────────────────────────────────────────
  // Each item maps to a route at /pages/[slug].

  pages: [
    {
      id: "electoral-promises",
      title: "Electoral Promises",
      subtitle:
        "Tracking political commitments and evaluating promise fulfillment with transparent public data.",
      slug: "electoral-promises",
      markdownContent: `## Overview

Electoral Promises is a civic-tech project focused on improving transparency around campaign commitments and public accountability.

## Core Features

- Structured catalog of promises by candidate, party, and election cycle.
- Status tracking pipeline (pending, in progress, fulfilled, broken).
- Public timeline of updates based on official sources and verifiable references.
- Comparative views to analyze performance across candidates and parties.

## Product Goal

The goal is to help citizens quickly understand what was promised, what was delivered, and where gaps remain.

## Scalability Roadmap

The platform is being designed with a multi-client strategy so it can scale from web to native Android and iOS experiences without reworking the core domain model.

## Backend Strategy

The backend is planned on Cloudflare infrastructure, leveraging edge-first services to keep latency low, improve global availability, and support growth as usage expands.

## Tech Stack

Built with TypeScript and Next.js, with a strong focus on maintainability, data clarity, and responsive UX for public access.`,
    },
    {
      id: "paddleapp",
      title: "PaddleApp",
      subtitle:
        "Reservation and training management app for padel clubs.",
      slug: "paddleapp",
      markdownContent: `## Overview

PaddleApp helps padel clubs and players organize court reservations and training sessions in a single product.

## Core Features

- Court reservation management for clubs and players.
- Training session tracking with historical records.
- Match performance logging with winner shots and unforced errors.
- Real-time score counting during training and practice matches.

## Product Value

The app centralizes both operational workflows and performance insights, so coaches and players can plan sessions better and make data-informed training decisions.

## Tech Stack

This project is built with TypeScript and JavaScript, focusing on maintainability and fast iteration for product improvements.`,
    },
    {
      id: "freetoeat",
      title: "Freetoeat",
      subtitle:
        "Nutrition-focused iOS product for professional dietitians and nutritionists.",
      slug: "freetoeat",
      markdownContent: `## Overview

Freetoeat is an iOS product focused on helping nutritionists support their clients with structured plans, follow-up workflows, and clear progress visibility.

## Product Goals

- Simplify daily work for nutrition professionals.
- Improve adherence and communication with end users.
- Keep the app experience fast, intuitive, and reliable.

## Engineering Focus

The implementation emphasizes modular screens, reusable UI components, and a predictable networking layer for maintainability as the product evolves.

## UX and Performance

Special attention is given to smooth interactions, readability, and reduced friction in key user journeys such as plan review and progress tracking.

## Next Steps

Future iterations include deeper analytics, more personalized recommendations, and expanded reporting capabilities for professionals.`,
    },
    {
      id: "ios-product-engineering",
      title: "iOS Product Engineering",
      subtitle:
        "How I approach SwiftUI migration, performance optimization, and experimentation-driven delivery in production apps.",
      slug: "ios-product-engineering",
      markdownContent: `## Overview

I build and maintain iOS features for production environments where reliability, speed, and user impact matter every day.

## UIKit to SwiftUI Migration

My migration strategy is incremental: I isolate modules, define clear boundaries between old and new views, and avoid risky full rewrites. This keeps release velocity high while modernizing architecture.

## Performance and UX

I focus on reducing rendering bottlenecks, improving interaction smoothness, and optimizing critical user flows. Small performance wins compound into better retention and product quality.

## Data-Driven Product Work

I work with experimentation and analytics instrumentation to validate feature impact. This helps teams prioritize decisions based on measurable outcomes instead of assumptions.

## Engineering Principles

- Build for maintainability first.
- Keep architecture simple and explicit.
- Favor iterative delivery over big-bang releases.
- Protect user experience in every change.`,
    },
    {
      id: "fullstack-product-engineering",
      title: "Full-Stack Product Engineering",
      subtitle:
        "Building end-to-end product systems with backend automation, data pipelines, and cloud-first delivery.",
      slug: "fullstack-product-engineering",
      markdownContent: `## Overview

This page summarizes my full-stack product engineering work across backend services, cloud infrastructure, and data-driven automation.

## Core Technologies

- AWS for cloud infrastructure, scalable service deployment, and environment operations.
- Python for APIs, microservices, data workflows, and automation tooling.
- JavaScript for frontend and internal product tooling.
- Scraping and crawling pipelines for structured data extraction and processing.
- Neural network experimentation for applied machine-learning use cases.

## Engineering Patterns I Use

- Service-oriented architecture with clear domain boundaries.
- Containerized workflows for reproducible development and deployment.
- Data processing pipelines that prioritize reliability and observability.
- Iterative product delivery with measurable outcomes and quick feedback loops.

## Product Impact

I focus on shipping systems that connect product needs with technical execution: from data ingestion and processing to API exposure and user-facing functionality.

## Tooling and Stack Notes

- Cloud: AWS
- Backend: Python
- Frontend and scripting: JavaScript
- Data extraction: scraping and crawling frameworks
- ML exploration: neural networks for problem-specific models`,
    },
    {
      id: "n8n-nutricionista-automation",
      title: "Sistema de Automatizacion de Gestion de Pacientes para Clinica Nutricional",
      subtitle:
        "Automation Engineer / Backend & DevOps",
      slug: "n8n-nutricionista-automation",
      markdownContent: `## Desafio

El cliente perdia mas de 10 horas semanales en tareas administrativas manuales: confirmacion de citas, envio de recordatorios, gestion de fichas de pacientes y entrega de dietas en PDF.

## Solucion Tecnica

1. Infraestructura & DevOps: Instancia de n8n Self-Hosted desplegada en VPS con Docker Compose y proxy inverso con SSL/HTTPS, garantizando alta disponibilidad y privacidad de datos de salud (RGPD).
2. Flujos en Produccion (Webhooks & APIs):
   - Integracion via Webhooks de produccion con herramientas de reserva y formularios.
   - Automatizacion de mensajes de confirmacion y recordatorio via WhatsApp/Telegram.
   - Envio automatizado de pautas nutricionales personalizadas tras las consultas.
3. Resiliencia: Configuracion de "Error Workflows" en n8n para captura de excepciones y alertas inmediatas ante fallos de API.

## Impacto

- Reduccion de +10 horas/semana en trabajo manual.
- Disminucion del 35% en cancelaciones y ausencias a consulta.
- Disponibilidad 24/7 de la arquitectura de automatizacion.

## Tecnologias

- n8n
- TypeScript
- Docker
- Webhooks
- REST APIs
- WhatsApp API
- VPS`,
    },
  ] as EngineeringPage[],

  // ─── Experience ────────────────────────────────────────────────────────────
  // Removing all items from items[] hides the Experience section.

  experience: {
    sectionTitle: "Experience",
    items: [
      {
        company: "Nomasystems S.L.",
        title: "iOS Developer",
        dateRange: "2022 — Present",
        bullets: [
          "Develop and maintain a high-traffic e-commerce iOS app serving millions of users across 30+ markets.",
          "Architected a core commerce module with dual-backend routing, actor-based mutation queue with debounce and batch coalescing, and optimistic UI with automatic state reversion on failure.",
          "Designed feature flag infrastructure for gradual rollouts and A/B experimentation, enabling runtime service routing without app restarts.",
          "Led migration from legacy completion-handler APIs to Swift Concurrency (async/await), including adapter layers between Objective-C controllers and modern Swift patterns.",
          "Implemented advanced analytics instrumentation with impression tracking, scroll visibility detection, and structured event taxonomy across multiple product surfaces.",
          "Diagnosed and resolved a complex OAuth issue related to ephemeral browser session cookie isolation, coordinating cross-team fixes with backend teams.",
        ],
      },
      {
        company: "Support Factory",
        title: "Full Stack Developer",
        dateRange: "2020 — 2021",
        bullets: [
          "Designed and maintained Python microservices for enterprise and public-sector initiatives.",
          "Automated operational workflows using scraping and crawling scripts, plus data processing pipelines with Pandas.",
          "Developed internal and client-facing solutions with JavaScript and Dockerized environments.",
          "Contributed to large-scale consulting projects with cross-team coordination and delivery ownership.",
        ],
      },
      {
        company: "NTT DATA",
        title: "Full-Stack Engineer",
        dateRange: "2018 — 2020",
        bullets: [
          "Developed full-stack features and internal tools in public-sector and big-data-oriented programs.",
          "Implemented backend services and integration layers focused on reliability and maintainability.",
          "Worked in multidisciplinary consulting teams delivering enterprise software under strict timelines.",
        ],
      },
    ] satisfies Experience[],
  },

  // ─── Education ─────────────────────────────────────────────────────────────
  // Removing all items from items[] hides the Education section.

  education: {
    sectionTitle: "Education",
    items: [
      {
        school: "University of Alcala de Henares",
        degree: "Computer Engineering in Information Systems",
        dateRange: "2015 — 2020",
        achievements: [
          "Faculty of Electrical Engineering and Computing",
        ],
      },
      {
        school: "University of Zagreb",
        degree: "Erasmus Program",
        dateRange: "2020",
      },
    ] satisfies Education[],
  },

  // ─── Contact ───────────────────────────────────────────────────────────────
  // toEmail is used for the mailto href in the form submission.

  contact: {
    sectionTitle: "Contact",
    toEmail: "miguel.arara5@gmail.com",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      messageLabel: "Project Details",
      messagePlaceholder: "Describe your project or inquiry...",
      submitButton: "Send Message",
      sentConfirmation: "Sent ✓",
      emailSubjectTemplate: "Project Inquiry from {name}",
      emailBodyTemplate: "Name: {name}\nEmail: {email}\n\nProject Details:\n{message}",
    },
    labels: {
      availability: "Availability",
      responseTime: "Response Time",
      timezone: "Timezone",
      domains: "Domains",
      channels: "Channels",
    },
    availability: {
      status: "Open to opportunities",
      workMode: "Remote / Hybrid / On-site",
    },
    responseTime: "Usually within 24–48 hours",
    timezone: "CET UTC+1",
    domains: ["iOS Development", "SwiftUI Migration", "Product Engineering", "Full-Stack Development"],
    channels: {
      linkedin: { label: "LinkedIn", handle: "miguel-arara" },
      github: { label: "GitHub", handle: "" },
    },
  },

  // ─── Footer ────────────────────────────────────────────────────────────────

  footer: {
    copyright: "All rights reserved.",
    builtWithLabel: "Built with",
    builtWithName: "NebulaPortfolio",
    builtWithUrl: "https://github.com/vicentemosqueralujan/nebulaportfolio",
  },
};

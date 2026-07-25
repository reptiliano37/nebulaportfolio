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

// ─── Localization ──────────────────────────────────────────────────────────────
// The site ships bilingual (English / Spanish). `en` below is the canonical
// source of truth and defines the SiteConfig shape; `es` (further down) provides
// the translated overrides. Add a new locale by extending Locale + translations.

export type Locale = "en" | "es";
export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "en";

// ─── Identity & Branding ───────────────────────────────────────────────────────
// Controls: name and professional title rendered in Hero, Nav, Footer.

const en = {
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
      toggleLanguage: "Toggle language",
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
    resumeUrl: "/CV_AraraMiguel.pdf",
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
        name: "n8n Patient Management Automation for Nutrition Clinic",
        description:
          "Production-grade automation system built with n8n on VPS/Docker to manage appointments, WhatsApp reminders, and nutrition plan delivery.",
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
      title: "n8n Patient Management Automation for Nutrition Clinic",
      subtitle:
        "Automation Engineering with Backend and DevOps ownership.",
      slug: "n8n-nutricionista-automation",
      markdownContent: `## Challenge

The client was losing more than 10 hours per week on manual administrative tasks: appointment confirmations, reminder messages, patient record handling, and nutrition plan PDF delivery.

## Technical Solution

1. Infrastructure and DevOps: Self-hosted n8n deployed on a VPS with Docker Compose and an SSL/HTTPS reverse proxy, ensuring high availability and health data privacy compliance.
2. Production Workflows (Webhooks and APIs):
   - Production webhook integrations with booking tools and intake forms.
   - Automated confirmation and reminder messaging through WhatsApp and Telegram.
   - Automated delivery of personalized nutrition guidelines after consultations.
3. Resilience: Dedicated error workflows in n8n to capture exceptions and trigger immediate alerts on API failures.

## Impact

- Reduced manual workload by more than 10 hours per week.
- Decreased cancellations and no-shows by 35%.
- Achieved 24/7 availability for the automation architecture.

## Technologies

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

// ─── SiteConfig Shape ──────────────────────────────────────────────────────────
// Derived from the English config so every locale is guaranteed to match it.

export type SiteConfig = typeof en;

// ─── Spanish Translation ───────────────────────────────────────────────────────
// Only translatable strings are overridden. Shared values (name, accent colors,
// URLs, emails, skills, slugs, dates, company names) are inherited via spread so
// they never drift out of sync with the English source.

const es: SiteConfig = {
  ...en,
  title: "Desarrollador iOS | SwiftUI, UIKit e Ingeniería Full-Stack",

  seo: {
    description:
      "Ingeniero móvil especializado en desarrollo iOS y arquitectura SwiftUI, creando funcionalidades escalables para apps de producción de alto tráfico.",
  },

  navigation: {
    home: "Inicio",
    about: "Sobre mí",
    projects: "Proyectos personales",
    experience: "Experiencia",
    education: "Formación",
    pages: "Páginas",
    contact: "Contacto",
    aria: {
      toggleTheme: "Cambiar tema",
      toggleMenu: "Abrir menú de navegación",
      toggleLanguage: "Cambiar idioma",
    },
  },

  social: {
    ...en.social,
    aria: {
      ...en.social.aria,
      email: "Correo",
    },
  },

  hero: {
    ...en.hero,
    namePrefix: "Soy",
    buttons: {
      ...en.hero.buttons,
      primary: "Ver proyectos",
      secondary: "Explorar páginas",
      resume: "Descargar CV",
      resumeLoading: "Generando…",
    },
  },

  about: {
    ...en.about,
    sectionTitle: "Sobre mí",
    skillsLabel: "Habilidades",
    body: "Ingeniero móvil especializado en desarrollo iOS y arquitectura SwiftUI, con experiencia creando funcionalidades escalables para apps de e-commerce de alto tráfico que dan servicio a millones de usuarios en más de 30 mercados. Sólida base en sistemas de feature flags, experimentación A/B, instrumentación avanzada de analítica y configuración dinámica en entornos multi-mercado a gran escala. Anteriormente trabajé como Desarrollador Full Stack construyendo APIs REST, microservicios en Python y sistemas de automatización, aportando sólidas capacidades de ingeniería de producto de extremo a extremo.",
  },

  projects: {
    ...en.projects,
    sectionTitle: "Proyectos personales",
    deepDiveLabel: "Leer página",
    sourceCodeLabel: "Código fuente",
    items: [
      {
        name: "Automatización de Gestión de Pacientes con n8n para Clínica de Nutrición",
        description:
          "Sistema de automatización de nivel producción construido con n8n en VPS/Docker para gestionar citas, recordatorios por WhatsApp y entrega de planes de nutrición.",
        pageSlug: "n8n-nutricionista-automation",
        skills: ["n8n", "TypeScript", "Docker", "Webhooks", "REST APIs", "WhatsApp API", "VPS"],
      },
      {
        name: "Freetoeat",
        description:
          "App iOS para nutricionistas que permite gestionar los planes de sus clientes, seguir su progreso y mejorar la adherencia mediante una experiencia móvil limpia y orientada a datos.",
        pageSlug: "freetoeat",
        skills: ["Swift", "SwiftUI", "UIKit", "REST APIs"],
      },
      {
        name: "Promesas Electorales",
        description:
          "Plataforma para hacer seguimiento de promesas de campaña, monitorizar su cumplimiento y comparar los compromisos políticos con resultados medibles, diseñada para escalar a Android e iOS con un backend en Cloudflare.",
        pageSlug: "electoral-promises",
        skills: ["TypeScript", "Next.js", "Data Visualization"],
      },
      {
        name: "PaddleApp",
        description:
          "App para clubes de pádel que permite gestionar reservas de pistas y sesiones de entrenamiento, incluyendo registro de ganadores, conteo de errores no forzados y marcador en vivo.",
        pageSlug: "paddleapp",
        skills: ["TypeScript", "JavaScript"],
      },
    ] as Project[],
  },

  engineeringPages: {
    overheadLabel: "Documentación de ingeniería",
    title: "Casos de estudio",
    description:
      "Análisis técnicos en profundidad y notas de implementación de trabajo real de producto.",
  },

  pages: [
    {
      id: "electoral-promises",
      title: "Promesas Electorales",
      subtitle:
        "Seguimiento de compromisos políticos y evaluación del cumplimiento de promesas con datos públicos transparentes.",
      slug: "electoral-promises",
      markdownContent: `## Resumen

Promesas Electorales es un proyecto de tecnología cívica centrado en mejorar la transparencia en torno a los compromisos de campaña y la rendición de cuentas pública.

## Funcionalidades principales

- Catálogo estructurado de promesas por candidato, partido y ciclo electoral.
- Flujo de seguimiento de estado (pendiente, en progreso, cumplida, incumplida).
- Cronología pública de actualizaciones basada en fuentes oficiales y referencias verificables.
- Vistas comparativas para analizar el desempeño entre candidatos y partidos.

## Objetivo del producto

El objetivo es ayudar a la ciudadanía a entender rápidamente qué se prometió, qué se cumplió y dónde persisten las carencias.

## Hoja de ruta de escalabilidad

La plataforma se está diseñando con una estrategia multicliente para poder escalar de la web a experiencias nativas de Android e iOS sin rehacer el modelo de dominio central.

## Estrategia de backend

El backend está planteado sobre infraestructura de Cloudflare, aprovechando servicios edge-first para mantener baja la latencia, mejorar la disponibilidad global y soportar el crecimiento a medida que aumenta el uso.

## Stack tecnológico

Construido con TypeScript y Next.js, con un fuerte enfoque en la mantenibilidad, la claridad de los datos y una UX responsiva para el acceso público.`,
    },
    {
      id: "paddleapp",
      title: "PaddleApp",
      subtitle:
        "App de gestión de reservas y entrenamientos para clubes de pádel.",
      slug: "paddleapp",
      markdownContent: `## Resumen

PaddleApp ayuda a clubes y jugadores de pádel a organizar reservas de pistas y sesiones de entrenamiento en un único producto.

## Funcionalidades principales

- Gestión de reservas de pistas para clubes y jugadores.
- Seguimiento de sesiones de entrenamiento con registros históricos.
- Registro del rendimiento en partidos con golpes ganadores y errores no forzados.
- Conteo de marcador en tiempo real durante entrenamientos y partidos de práctica.

## Valor de producto

La app centraliza tanto los flujos operativos como los datos de rendimiento, para que entrenadores y jugadores planifiquen mejor las sesiones y tomen decisiones de entrenamiento basadas en datos.

## Stack tecnológico

Este proyecto está construido con TypeScript y JavaScript, centrándose en la mantenibilidad y la iteración rápida para mejorar el producto.`,
    },
    {
      id: "freetoeat",
      title: "Freetoeat",
      subtitle:
        "Producto iOS centrado en nutrición para dietistas y nutricionistas profesionales.",
      slug: "freetoeat",
      markdownContent: `## Resumen

Freetoeat es un producto iOS centrado en ayudar a los nutricionistas a acompañar a sus clientes con planes estructurados, flujos de seguimiento y visibilidad clara del progreso.

## Objetivos de producto

- Simplificar el trabajo diario de los profesionales de la nutrición.
- Mejorar la adherencia y la comunicación con los usuarios finales.
- Mantener la experiencia de la app rápida, intuitiva y fiable.

## Enfoque de ingeniería

La implementación prioriza pantallas modulares, componentes de UI reutilizables y una capa de red predecible para garantizar la mantenibilidad a medida que el producto evoluciona.

## UX y rendimiento

Se presta especial atención a interacciones fluidas, legibilidad y reducción de fricción en recorridos clave como la revisión de planes y el seguimiento del progreso.

## Próximos pasos

Las futuras iteraciones incluyen analítica más profunda, recomendaciones más personalizadas y capacidades de reporte ampliadas para los profesionales.`,
    },
    {
      id: "ios-product-engineering",
      title: "Ingeniería de Producto iOS",
      subtitle:
        "Cómo abordo la migración a SwiftUI, la optimización de rendimiento y la entrega basada en experimentación en apps de producción.",
      slug: "ios-product-engineering",
      markdownContent: `## Resumen

Construyo y mantengo funcionalidades iOS para entornos de producción donde la fiabilidad, la velocidad y el impacto en el usuario importan cada día.

## Migración de UIKit a SwiftUI

Mi estrategia de migración es incremental: aíslo módulos, defino límites claros entre las vistas antiguas y las nuevas, y evito reescrituras completas arriesgadas. Esto mantiene alta la velocidad de entrega mientras se moderniza la arquitectura.

## Rendimiento y UX

Me centro en reducir los cuellos de botella de renderizado, mejorar la fluidez de las interacciones y optimizar los flujos de usuario críticos. Las pequeñas mejoras de rendimiento se acumulan en una mejor retención y calidad de producto.

## Trabajo de producto basado en datos

Trabajo con experimentación e instrumentación de analítica para validar el impacto de las funcionalidades. Esto ayuda a los equipos a priorizar decisiones basadas en resultados medibles en lugar de suposiciones.

## Principios de ingeniería

- Construir pensando primero en la mantenibilidad.
- Mantener la arquitectura simple y explícita.
- Favorecer la entrega iterativa frente a los lanzamientos de gran impacto.
- Proteger la experiencia de usuario en cada cambio.`,
    },
    {
      id: "fullstack-product-engineering",
      title: "Ingeniería de Producto Full-Stack",
      subtitle:
        "Construcción de sistemas de producto de extremo a extremo con automatización backend, pipelines de datos y entrega cloud-first.",
      slug: "fullstack-product-engineering",
      markdownContent: `## Resumen

Esta página resume mi trabajo de ingeniería de producto full-stack a través de servicios backend, infraestructura cloud y automatización basada en datos.

## Tecnologías principales

- AWS para infraestructura cloud, despliegue escalable de servicios y operación de entornos.
- Python para APIs, microservicios, flujos de datos y herramientas de automatización.
- JavaScript para frontend y herramientas internas de producto.
- Pipelines de scraping y crawling para extracción y procesamiento de datos estructurados.
- Experimentación con redes neuronales para casos de uso aplicados de machine learning.

## Patrones de ingeniería que utilizo

- Arquitectura orientada a servicios con límites de dominio claros.
- Flujos de trabajo en contenedores para un desarrollo y despliegue reproducibles.
- Pipelines de procesamiento de datos que priorizan la fiabilidad y la observabilidad.
- Entrega iterativa de producto con resultados medibles y ciclos de feedback rápidos.

## Impacto en el producto

Me centro en entregar sistemas que conectan las necesidades de producto con la ejecución técnica: desde la ingesta y el procesamiento de datos hasta la exposición de APIs y la funcionalidad de cara al usuario.

## Notas sobre herramientas y stack

- Cloud: AWS
- Backend: Python
- Frontend y scripting: JavaScript
- Extracción de datos: frameworks de scraping y crawling
- Exploración de ML: redes neuronales para modelos específicos de cada problema`,
    },
    {
      id: "n8n-nutricionista-automation",
      title: "Automatización de Gestión de Pacientes con n8n para Clínica de Nutrición",
      subtitle:
        "Ingeniería de automatización con responsabilidad sobre backend y DevOps.",
      slug: "n8n-nutricionista-automation",
      markdownContent: `## Reto

El cliente perdía más de 10 horas por semana en tareas administrativas manuales: confirmaciones de citas, mensajes de recordatorio, gestión de fichas de pacientes y entrega de PDFs con planes de nutrición.

## Solución técnica

1. Infraestructura y DevOps: n8n autoalojado desplegado en un VPS con Docker Compose y un reverse proxy con SSL/HTTPS, garantizando alta disponibilidad y cumplimiento de la privacidad de datos de salud.
2. Flujos de producción (Webhooks y APIs):
   - Integraciones de webhooks de producción con herramientas de reserva y formularios de admisión.
   - Mensajes automatizados de confirmación y recordatorio a través de WhatsApp y Telegram.
   - Entrega automatizada de pautas de nutrición personalizadas tras las consultas.
3. Resiliencia: Flujos de error dedicados en n8n para capturar excepciones y disparar alertas inmediatas ante fallos de API.

## Impacto

- Reducción de la carga de trabajo manual en más de 10 horas por semana.
- Disminución de cancelaciones y ausencias en un 35%.
- Disponibilidad 24/7 de la arquitectura de automatización.

## Tecnologías

- n8n
- TypeScript
- Docker
- Webhooks
- REST APIs
- WhatsApp API
- VPS`,
    },
  ] as EngineeringPage[],

  experience: {
    sectionTitle: "Experiencia",
    items: [
      {
        company: "Nomasystems S.L.",
        title: "Desarrollador iOS",
        dateRange: "2022 — Actualidad",
        bullets: [
          "Desarrollo y mantenimiento de una app iOS de e-commerce de alto tráfico que da servicio a millones de usuarios en más de 30 mercados.",
          "Diseño de un módulo core de comercio con enrutado dual-backend, cola de mutaciones basada en actores con debounce y agrupación en lotes, y UI optimista con reversión automática de estado ante fallos.",
          "Diseño de infraestructura de feature flags para despliegues graduales y experimentación A/B, permitiendo el enrutado de servicios en tiempo de ejecución sin reiniciar la app.",
          "Lideré la migración de APIs legacy basadas en completion handlers a Swift Concurrency (async/await), incluyendo capas de adaptación entre controladores Objective-C y patrones modernos de Swift.",
          "Implementación de instrumentación avanzada de analítica con seguimiento de impresiones, detección de visibilidad en scroll y una taxonomía de eventos estructurada en múltiples superficies de producto.",
          "Diagnóstico y resolución de un problema complejo de OAuth relacionado con el aislamiento de cookies de sesión efímera del navegador, coordinando correcciones con los equipos de backend.",
        ],
      },
      {
        company: "Support Factory",
        title: "Desarrollador Full Stack",
        dateRange: "2020 — 2021",
        bullets: [
          "Diseño y mantenimiento de microservicios en Python para iniciativas empresariales y del sector público.",
          "Automatización de flujos operativos mediante scripts de scraping y crawling, además de pipelines de procesamiento de datos con Pandas.",
          "Desarrollo de soluciones internas y de cara al cliente con JavaScript y entornos dockerizados.",
          "Contribución a proyectos de consultoría a gran escala con coordinación entre equipos y responsabilidad de entrega.",
        ],
      },
      {
        company: "NTT DATA",
        title: "Ingeniero Full-Stack",
        dateRange: "2018 — 2020",
        bullets: [
          "Desarrollo de funcionalidades full-stack y herramientas internas en programas del sector público y orientados a big data.",
          "Implementación de servicios backend y capas de integración centradas en la fiabilidad y la mantenibilidad.",
          "Trabajo en equipos de consultoría multidisciplinares entregando software empresarial con plazos exigentes.",
        ],
      },
    ] as Experience[],
  },

  education: {
    sectionTitle: "Formación",
    items: [
      {
        school: "University of Alcala de Henares",
        degree: "Ingeniería Informática en Sistemas de Información",
        dateRange: "2015 — 2020",
        achievements: [
          "Facultad de Ingeniería Eléctrica e Informática",
        ],
      },
      {
        school: "University of Zagreb",
        degree: "Programa Erasmus",
        dateRange: "2020",
      },
    ] as Education[],
  },

  contact: {
    ...en.contact,
    sectionTitle: "Contacto",
    form: {
      ...en.contact.form,
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Correo",
      emailPlaceholder: "tu@ejemplo.com",
      messageLabel: "Detalles del proyecto",
      messagePlaceholder: "Describe tu proyecto o consulta...",
      submitButton: "Enviar mensaje",
      sentConfirmation: "Enviado ✓",
      emailSubjectTemplate: "Consulta de proyecto de {name}",
      emailBodyTemplate: "Nombre: {name}\nCorreo: {email}\n\nDetalles del proyecto:\n{message}",
    },
    labels: {
      availability: "Disponibilidad",
      responseTime: "Tiempo de respuesta",
      timezone: "Zona horaria",
      domains: "Áreas",
      channels: "Canales",
    },
    availability: {
      status: "Abierto a oportunidades",
      workMode: "Remoto / Híbrido / Presencial",
    },
    responseTime: "Normalmente en 24–48 horas",
    domains: ["Desarrollo iOS", "Migración a SwiftUI", "Ingeniería de producto", "Desarrollo Full-Stack"],
  },

  footer: {
    ...en.footer,
    copyright: "Todos los derechos reservados.",
    builtWithLabel: "Hecho con",
  },
};

// ─── Locale Registry ───────────────────────────────────────────────────────────
// Consumed by the LanguageProvider / useTranslation hook in src/lib/i18n.tsx.

export const translations: Record<Locale, SiteConfig> = { en, es };

// Backward-compatible default export (English). Used by locale-independent,
// server-side concerns: metadata, generateStaticParams, and gating checks.
export const siteConfig = en;

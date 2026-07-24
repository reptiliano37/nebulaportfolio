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
    projects: "Projects",
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
    resumeUrl: "/resume.pdf",
  },

  // ─── About ─────────────────────────────────────────────────────────────────

  about: {
    sectionTitle: "About Me",
    skillsLabel: "Skills",
    body: "Mobile Engineer with 8 years of experience specializing in iOS development, SwiftUI architecture, and scalable product features for high-traffic production apps. Strong background in UIKit, progressive SwiftUI migrations, experimentation frameworks, analytics instrumentation, and dynamic configuration systems. Experienced in shipping data-driven features, improving app performance and user experience, and maintaining high code quality through modern architecture and testing practices.",
    skills: [
      "Swift", "SwiftUI", "UIKit", "Xcode",
      "iOS Architecture", "REST APIs", "GrowthBook", "Analytics Instrumentation",
      "Git", "GitHub", "Fastlane", "CI/CD",
      "Python", "TypeScript", "Docker", "AWS",
    ],
  },

  // ─── Projects ──────────────────────────────────────────────────────────────
  // Removing all items from items[] hides the Projects section.

  projects: {
    sectionTitle: "Projects",
    deepDiveLabel: "Read page",
    sourceCodeLabel: "Source Code",
    items: [
      {
        name: "Freetoeat",
        description:
          "iOS app for nutritionists to manage client plans, track progress, and improve adherence through a clean and data-driven mobile experience.",
        pageSlug: "freetoeat",
        skills: ["Swift", "SwiftUI", "UIKit", "REST APIs"],
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
          "Develop and maintain a leading iOS application within the Inditex Group ecosystem.",
          "Drive progressive migration from UIKit to SwiftUI while preserving product stability and delivery pace.",
          "Contribute to performance optimization and UX improvements across high-traffic app flows.",
          "Collaborate in data-driven feature delivery with experimentation and analytics instrumentation.",
          "Maintain high code quality standards through modern architecture patterns and testing practices.",
        ],
      },
      {
        company: "Support Factory",
        title: "Full Stack Developer",
        dateRange: "2020 — 2021",
        bullets: [
          "Built and maintained microservices in Python for enterprise and public-sector initiatives.",
          "Automated operational workflows using scraping/crawling scripts and Pandas-based data pipelines.",
          "Developed internal and client-facing solutions with JavaScript and containerized Docker environments.",
          "Contributed to large-scale consulting projects with cross-team coordination and delivery ownership.",
        ],
      },
      {
        company: "NTT DATA",
        title: "Full-Stack Engineer",
        dateRange: "2018 — 2020",
        bullets: [
          "Developed full-stack features and internal tools in public-sector and big-data oriented programs.",
          "Implemented backend services and integration layers with strong focus on reliability and maintainability.",
          "Worked in multidisciplinary teams delivering enterprise software under consulting timelines.",
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

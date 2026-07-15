import { Project } from "@/types";

const BASE = "/projects";

export const PROJECTS: Project[] = [
  {
    id: "layer",
    title: "Layer",
    type: "projects",
    categories: ["AI", "SaaS", "Product Design"],
    backgroundImage: `${BASE}/layer/background.jpg`,
    thumbnailImage: `${BASE}/layer/thumbnail.jpg`,
    animatedPreview: `${BASE}/layer/animated.gif`,
    heroImage: `${BASE}/layer/hero.jpg`,
    shortDescription:
      "End-to-end product design for an AI-powered SaaS platform. Led the design system, core workflows, and visual language.",
    longDescription:
      "Led the end-to-end product design for an AI-powered SaaS platform, defining the design system, core workflows, and visual language from the ground up. Collaborated closely with engineering and product teams to ship a cohesive, scalable experience.",
    year: 2024,
    role: "Lead Product Designer",
    client: "Layer AI",
    gallery: [
      { src: `${BASE}/layer/gallery/01.jpg`, alt: "Layer dashboard overview" },
      { src: `${BASE}/layer/gallery/02.jpg`, alt: "Layer workflow editor" },
    ],
    projectUrl: "https://www.withlayer.ai/",
  },
  {
    id: "tentwenty",
    title: "TenTwenty",
    type: "projects",
    categories: ["Web Design", "Brand Identity"],
    backgroundImage: `${BASE}/tentwenty/background.jpg`,
    thumbnailImage: `${BASE}/tentwenty/thumbnail.jpg`,
    animatedPreview: `${BASE}/tentwenty/animated.gif`,
    heroImage: `${BASE}/tentwenty/hero.jpg`,
    shortDescription:
      "Brand identity and web experience for a digital product studio. Focused on bold typography and fluid motion.",
    longDescription:
      "Crafted a bold brand identity and immersive web experience for a digital product studio. The design language centres on striking typography, fluid motion, and a restrained palette that lets the work speak for itself.",
    year: 2024,
    role: "Brand & Web Designer",
    client: "TenTwenty Studio",
    gallery: [
      { src: `${BASE}/tentwenty/gallery/01.jpg`, alt: "TenTwenty brand guidelines" },
      { src: `${BASE}/tentwenty/gallery/02.jpg`, alt: "TenTwenty website hero" },
    ],
    projectUrl: "https://tentwenty.com/",
  },
  {
    id: "perfios",
    title: "Perfios",
    type: "projects",
    categories: ["FinTech", "Dashboard", "UX"],
    backgroundImage: `${BASE}/perfios/background.jpg`,
    thumbnailImage: `${BASE}/perfios/thumbnail.jpg`,
    animatedPreview: `${BASE}/perfios/animated.gif`,
    heroImage: `${BASE}/perfios/hero.jpg`,
    shortDescription:
      "Dashboard and data-visualisation design for a FinTech platform serving enterprise clients across banking and lending.",
    longDescription:
      "Designed dashboards and data-visualisation interfaces for a FinTech platform serving enterprise clients across banking and lending. Focused on clarity, accessibility, and real-time data rendering at scale.",
    year: 2023,
    role: "Product Designer",
    client: "Perfios",
    gallery: [
      { src: `${BASE}/perfios/gallery/01.jpg`, alt: "Perfios analytics dashboard" },
      { src: `${BASE}/perfios/gallery/02.jpg`, alt: "Perfios reporting view" },
    ],
    projectUrl: "https://www.linkedin.com/company/perfios/",
  },
  {
    id: "paperclip",
    title: "PaperClip",
    type: "projects",
    categories: ["Product Design", "App Design", "AI", "B2C", "C2C"],
    backgroundImage: `${BASE}/paperclip/background.webp`,
    thumbnailImage: `${BASE}/paperclip/thumbnail.webp`,
    animatedPreview: `${BASE}/paperclip/animated.gif`,
    shortDescription:
      "Mobile app design for a document intelligence platform. Focused on simplicity and speed in high-volume workflows.",
    longDescription:
      "Designed the mobile experience for a document intelligence platform, emphasising simplicity and speed in high-volume document workflows. The interface reduced cognitive load while maintaining powerful editing capabilities.",
    year: 2023,
    role: "Mobile Product Designer",
    client: "PaperClip HQ",
    projectUrl: "https://www.linkedin.com/company/papercliphq/",
  },
  {
    id: "filterpixel",
    title: "FilterPixel",
    type: "projects",
    categories: ["Product Design", "Design System", "AI", "SaaS", "Software Design"],
    backgroundImage: `${BASE}/filterpixel/background.webp`,
    thumbnailImage: `${BASE}/filterpixel/thumbnail.webp`,
    animatedPreview: `${BASE}/filterpixel/animated.gif`,
    heroImage: `${BASE}/filterpixel/animated.gif`,
    shortDescription:
      "A comprehensive case study covering the end-to-end product design process for an AI-powered photo editing platform.",
    longDescription:
      "Designed the end-to-end product experience for an AI-powered photo editing platform. Focused on intelligent automation, intuitive workflows, and a clean visual language that made professional-grade editing accessible to everyone.",
    year: 2025,
    role: "Product Designer",
    client: "FilterPixel",
    gallery: [
      { src: `${BASE}/filterpixel/gallery/01.jpg`, alt: "FilterPixel dashboard" },
      { src: `${BASE}/filterpixel/gallery/02.jpg`, alt: "FilterPixel editor" },
    ],
    projectUrl: "https://filterpixel.com/",
  },
  {
    id: "reevv",
    title: "Reevv Research",
    type: "projects",
    categories: ["Brand Identity", "Logo Design", "Visual Identity", "Web Design"],
    backgroundImage: `${BASE}/reevv/background.png`,
    thumbnailImage: `${BASE}/reevv/thumbnail.png`,
    animatedPreview: `${BASE}/reevv/animated.gif`,
    shortDescription:
      "Product design for a B2B research and analytics platform. Built scalable component libraries and research tooling.",
    longDescription:
      "Designed the end-to-end product experience for a B2B research and analytics platform. Built scalable component libraries, research tooling, and collaborative workflows that empowered enterprise research teams.",
    year: 2023,
    role: "Product Designer",
    client: "Reevv Inc.",
    projectUrl: "https://www.linkedin.com/company/reevv-inc/",
  },
  {
    id: "void",
    title: "Void",
    type: "labs",
    categories: ["Experimental", "3D", "Concept"],
    backgroundImage: `${BASE}/void/background.jpg`,
    thumbnailImage: `${BASE}/void/thumbnail.jpg`,
    animatedPreview: `${BASE}/void/animated.gif`,
    heroImage: `${BASE}/void/hero.jpg`,
    shortDescription:
      "An experimental design exploration blending 3D environments with typographic systems.",
    longDescription:
      "An experimental design exploration that blends real-time 3D environments with typographic systems. Pushed the boundaries of spatial UI and motion design in the browser.",
    year: 2024,
    role: "Creative Technologist",
    gallery: [
      { src: `${BASE}/void/gallery/01.jpg`, alt: "Void 3D environment" },
      { src: `${BASE}/void/gallery/02.jpg`, alt: "Void typography study" },
    ],
  },
  {
    id: "glyph",
    title: "Glyph",
    type: "labs",
    categories: ["Type Design", "Brand"],
    backgroundImage: `${BASE}/glyph/background.jpg`,
    thumbnailImage: `${BASE}/glyph/thumbnail.jpg`,
    animatedPreview: `${BASE}/glyph/animated.gif`,
    heroImage: `${BASE}/glyph/hero.jpg`,
    shortDescription:
      "A personal type-design and brand identity experiment exploring geometric sans letterforms.",
    longDescription:
      "A personal type-design and brand identity experiment exploring geometric sans-serif letterforms. The project spanned sketch to variable font, with a配套 brand identity system.",
    year: 2024,
    role: "Type Designer",
    gallery: [
      { src: `${BASE}/glyph/gallery/01.jpg`, alt: "Glyph type specimen" },
      { src: `${BASE}/glyph/gallery/02.jpg`, alt: "Glyph brand application" },
    ],
  },
  {
    id: "pulse",
    title: "Pulse",
    type: "labs",
    categories: ["Side Project", "HealthTech"],
    backgroundImage: `${BASE}/pulse/background.jpg`,
    thumbnailImage: `${BASE}/pulse/thumbnail.jpg`,
    animatedPreview: `${BASE}/pulse/animated.gif`,
    heroImage: `${BASE}/pulse/hero.jpg`,
    shortDescription:
      "Side-project exploring health-tech product patterns and wearable data visualisation.",
    longDescription:
      "A side-project exploring health-tech product patterns and wearable data visualisation. Designed a conceptual mobile experience for tracking biometric data with an emphasis on glanceable, beautiful charts.",
    year: 2023,
    role: "Product Designer",
    gallery: [
      { src: `${BASE}/pulse/gallery/01.jpg`, alt: "Pulse health dashboard" },
      { src: `${BASE}/pulse/gallery/02.jpg`, alt: "Pulse wearable sync" },
    ],
  },
  {
    id: "fintech-ux-breakdown",
    title: "PayCrunch UX Breakdown",
    type: "ux-breakdown",
    categories: ["UX Breakdown", "FinTech"],
    thumbnailImage: `${BASE}/fintech-ux-breakdown/thumbnail.webp`,
    backgroundImage: `${BASE}/fintech-ux-breakdown/background.webp`,
    animatedPreview: `${BASE}/fintech-ux-breakdown/animated.gif`,
    shortDescription:
      "A deep-dive case study analysing UX patterns in FinTech applications. Recorded live walkthrough with annotation.",
    longDescription:
      "A deep-dive case study analysing UX patterns in FinTech applications. This recorded live walkthrough with annotation breaks down onboarding flows, data entry patterns, and trust-building design decisions used by leading FinTech products.",
    year: 2025,
    role: "UX Analyst",
    projectUrl: "https://supercut.ai/share/kriva/_L6v9yBk2mlh0rmaMoYZMH",
  },
  {
    id: "fintech-2-ux-breakdown",
    title: "Kiwi UX Breakdown",
    type: "ux-breakdown",
    categories: ["UX Breakdown", "FinTech"],
    backgroundImage: `${BASE}/fintech-2-ux-breakdown/background.webp`,
    shortDescription:
      "A second deep-dive UX breakdown exploring advanced FinTech product patterns across lending, investment, and neo-banking platforms.",
    longDescription:
      "A second deep-dive UX breakdown exploring advanced FinTech product patterns across lending, investment, and neo-banking platforms. The analysis covers complex decision-flows, data-heavy dashboards, and trust-building design strategies.",
    year: 2025,
    role: "UX Analyst",
  },
  {
    id: "healthtech-ux-breakdown",
    title: "GrowthX UX Breakdown",
    type: "ux-breakdown",
    categories: ["UX Breakdown", "HealthTech"],
    thumbnailImage: `${BASE}/healthtech-ux-breakdown/thumbnail.webp`,
    backgroundImage: `${BASE}/healthtech-ux-breakdown/background.webp`,
    animatedPreview: `${BASE}/healthtech-ux-breakdown/animated.gif`,
    shortDescription:
      "Live UX teardown of a HealthTech product, focusing on onboarding flows and trust-building design patterns.",
    longDescription:
      "A live UX teardown of a HealthTech product, focusing on onboarding flows and trust-building design patterns. The analysis covers visual hierarchy, content strategy, and conversion optimisation techniques specific to healthcare applications.",
    year: 2025,
    role: "UX Analyst",
    projectUrl: "https://supercut.ai/share/kriva/9-naqcny94PD8chyPN65HY",
  },
  {
    id: "fintech-case-study",
    title: "FinTech UX Breakdown",
    type: "case-studies",
    categories: ["UX Breakdown", "FinTech"],
    backgroundImage: `${BASE}/fintech-case-study/background.jpg`,
    thumbnailImage: `${BASE}/fintech-case-study/thumbnail.jpg`,
    animatedPreview: `${BASE}/fintech-case-study/animated.gif`,
    heroImage: `${BASE}/fintech-case-study/hero.jpg`,
    shortDescription:
      "A deep-dive case study analysing UX patterns in FinTech applications. Recorded live walkthrough with annotation.",
    longDescription:
      "A deep-dive case study analysing UX patterns in FinTech applications. This recorded live walkthrough with annotation breaks down onboarding flows, data entry patterns, and trust-building design decisions used by leading FinTech products.",
    year: 2025,
    role: "UX Analyst",
    gallery: [
      { src: `${BASE}/fintech-case-study/gallery/01.jpg`, alt: "FinTech UX breakdown overview" },
      { src: `${BASE}/fintech-case-study/gallery/02.jpg`, alt: "FinTech onboarding analysis" },
    ],
    projectUrl: "https://supercut.ai/share/kriva/_L6v9yBk2mlh0rmaMoYZMH",
  },
  {
    id: "healthtech-case-study",
    title: "HealthTech UX Breakdown",
    type: "case-studies",
    categories: ["UX Breakdown", "HealthTech"],
    backgroundImage: `${BASE}/healthtech-case-study/background.jpg`,
    thumbnailImage: `${BASE}/healthtech-case-study/thumbnail.jpg`,
    animatedPreview: `${BASE}/healthtech-case-study/animated.gif`,
    heroImage: `${BASE}/healthtech-case-study/hero.jpg`,
    shortDescription:
      "Live UX teardown of a HealthTech product, focusing on onboarding flows and trust-building design patterns.",
    longDescription:
      "A live UX teardown of a HealthTech product, focusing on onboarding flows and trust-building design patterns. The analysis covers visual hierarchy, content strategy, and conversion optimisation techniques specific to healthcare applications.",
    year: 2025,
    role: "UX Analyst",
    gallery: [
      { src: `${BASE}/healthtech-case-study/gallery/01.jpg`, alt: "HealthTech UX breakdown" },
      { src: `${BASE}/healthtech-case-study/gallery/02.jpg`, alt: "HealthTech onboarding flow" },
    ],
    projectUrl: "https://supercut.ai/share/kriva/9-naqcny94PD8chyPN65HY",
  },
];

export const WORKS_DESCRIPTION =
  "Some of my selected works, live projects and case studies which demonstrates my design thinking, problem solving, ux research and ui design skills/processes in a diversified wide range of industries.";

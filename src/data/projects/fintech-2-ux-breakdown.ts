import { ProjectDetail } from "@/types";

export const fintech2UxBreakdownProject: ProjectDetail = {
  slug: "fintech-2-ux-breakdown",
  title: "KIWI",
  description:
    "A UX assignment completed as part of a product design interview process. Walkthrough of the thinking, decisions, and deliverables.",
  hero: "/projects/fintech-2-ux-breakdown/background.webp",
  heroType: "tella",
  heroEmbedSrc: "https://www.tella.tv/video/vid_cmrq6658q002y04l907yw71dc/embed?b=0&title=0&a=1&loop=0&t=0&muted=1&wt=0&o=0",
  type: "ux-breakdown",
  responsibilities: [],
  contribution: "",
  aboutProject:
    "KiWi challenged me to redesign its home screen to support a broader ecosystem of financial products while preserving the simplicity that made the app intuitive. Rather than redesigning the interface from scratch, the goal was to create a scalable foundation that could accommodate future services, improve discoverability and strengthen user engagement without compromising usability.",
  dateCreated: "November 2025",
  projectDuration: "2 Days",
  liveLink: "https://gokiwi.in/",
  outcome:
    "The final solution demonstrated how KiWi could scale its product ecosystem without sacrificing its signature simplicity. By combining scalable information architecture with thoughtful interaction design, the assignment successfully addressed both user and business goals and ultimately resulted in a full-time offer from the company.",
  sections: [
    {
      type: "editorial",
      title: "Problem Statement",
      body: "The existing home screen was designed around a limited set of core actions such as UPI payments and credit card management. As the product expanded into areas like travel, lending, bill payments and rewards, the interface lacked a scalable information architecture capable of surfacing these experiences while maintaining KiWi's clean and familiar interaction model.",
    },
    {
      type: "editorial",
      title: "My Approach",
      body: "Rather than increasing visual complexity, I focused on creating an interface that could naturally evolve alongside the product. The redesigned home screen introduced an interactive credit card module that transformed unused interface space into a secondary layer for card management, while a dedicated Explore section created room for future products and personalized recommendations. The overall structure was intentionally designed to support changing business priorities without requiring future structural redesigns.",
    },
    {
      type: "editorial",
      title: "Key Design Decisions",
      body: "Designed a scalable home screen architecture capable of supporting future financial products. Converted the static credit card widget into an interactive experience using progressive disclosure. Introduced an Explore section to improve discoverability of products, offers and services. Enabled dynamic prioritization of product modules based on user behaviour and business goals. Expanded credit card management by surfacing offers, payment actions and multi-card support within a single interaction flow.",
    },
  ],
};

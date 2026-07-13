import { ProjectDetail } from "@/types";

const BASE = "/projects/reevv";

export const reevvProject: ProjectDetail = {
  slug: "reevv",
  title: "REEVV",
  description:
    "Visual identity and brand system for an AI-native company. Focused on building a confident and flexible design language that works across products, marketing, and future growth.",
  hero: `${BASE}/animated.gif`,
  responsibilities: [
    "Brand strategy",
    "Visual identity exploration",
    "Logo design",
    "Typography system",
    "Colour system",
    "Iconography",
    "Brand guidelines",
    "Marketing assets",
    "Design system foundations",
  ],
  contribution:
    "I treated branding as a product problem rather than just a visual exercise. Every decision around typography, colour, and composition was made to communicate clarity and confidence while keeping the system flexible enough to grow with the company.",
  externalUrl: "https://www.linkedin.com/company/reevv-inc/",
  dateCreated: "September, 2024",
  projectDuration: "8 Weeks",
  liveLink: "https://www.linkedin.com/company/reevv-inc/",
  outcome:
    "The final identity feels modern and intentional. More importantly it works across products, marketing, and whatever comes next for the company.",
  aboutProject:
    "Reevv needed a visual identity that could keep up with an ambitious AI company. The challenge wasnt designing a logo. It was building a system that works across products, marketing, and entirely new business lines without losing consistency.",
  sections: [
    { type: "full-image", src: `${BASE}/gallery-1.webp`, alt: "Reevv brand identity overview" },
    {
      type: "editorial",
      title: "The Process",
      body: "Before exploring visual directions, I spent time with the founders understanding their vision and what they wanted the company to feel like. That clarity shaped every design decision that came after.",
    },
    { type: "full-image", src: `${BASE}/gallery-2.webp`, alt: "Reevv product design system" },
    {
      type: "editorial",
      title: "Brand Discovery",
      body: "I looked at the competitive landscape to understand how AI companies present themselves visually. The goal was to find a space where Reevv could stand out without falling back on industry cliches.",
    },
    { type: "full-image", src: `${BASE}/gallery-3.webp`, alt: "Reevv UI component library" },
    {
      type: "editorial",
      title: "Visual Exploration",
      body: "I explored several visual directions across typography, symbolism, and composition before committing to one. Comparing them early made it easier to identify what worked and what did not.",
    },
    { type: "full-image", src: `${BASE}/gallery-4.webp`, alt: "Reevv interface exploration" },
    {
      type: "editorial",
      title: "Logo Exploration",
      body: "The logo went through many rounds of refinement. Each iteration got simpler while becoming more recognizable. The final mark works across product UI, marketing, presentations, and small digital spaces without losing its character.",
    },
    { type: "full-image", src: `${BASE}/gallery-5.webp`, alt: "Reevv design workflow" },
    {
      type: "editorial",
      title: "Typography System",
      body: "Typography became one of the defining elements of the identity. The chosen typeface balances technical precision with warmth, and it works just as well inside the product as it does on marketing pages.",
    },
    { type: "full-image", src: `${BASE}/gallery-6.webp`, alt: "Reevv visual language" },
    {
      type: "editorial",
      title: "Colour System",
      body: "I kept the colour palette intentionally small. A restrained set of colours makes the brand more recognizable and gives the system room to breathe across different touchpoints.",
    },
    { type: "full-image", src: `${BASE}/gallery-7.webp`, alt: "Reevv responsive layout study" },
    { type: "full-image", src: `${BASE}/gallery-8.webp`, alt: "Reevv interaction design" },
    { type: "full-image", src: `${BASE}/gallery-9.webp`, alt: "Reevv design detail" },
    { type: "full-image", src: `${BASE}/gallery-10.webp`, alt: "Reevv user interface showcase" },
    { type: "full-image", src: `${BASE}/gallery-11.webp`, alt: "Reevv product screen" },
    { type: "full-image", src: `${BASE}/gallery-12.webp`, alt: "Reevv design system token" },
    {
      type: "editorial",
      title: "Design System",
      body: "The identity goes beyond a logo. I built a system of reusable components, spacing rules, typography, and colour tokens so future products stay consistent without being rigid.",
    },
    { type: "full-image", src: `${BASE}/gallery-13.webp`, alt: "Reevv final presentation" },
    {
      type: "editorial",
      title: "Applications",
      body: "I tested the identity across product interfaces, presentations, marketing assets, and documentation. This helped validate that the system works in real contexts, not just on a brand guidelines page.",
    },
    { type: "full-image", src: `${BASE}/gallery-14.webp`, alt: "Reevv project summary" },
    {
      type: "editorial",
      title: "The Result",
      body: "The final identity feels cohesive and intentional. It gives Reevv a strong foundation that can support new products and future growth without needing to be reinvented.",
    },
    { type: "full-image", src: `${BASE}/outro.webp`, alt: "Reevv outro" },
  ],
};

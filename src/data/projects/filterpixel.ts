import { ProjectDetail } from "@/types";

const BASE = "/projects/filterpixel";

export const filterpixelProject: ProjectDetail = {
  slug: "filterpixel",
  title: "FILTERPIXEL",
  description:
    "A comprehensive case study covering the end-to-end product design process for FilterPixel, an AI-powered photo editing platform. The project explores user research, interaction design, and visual systems.",
  hero: `${BASE}/background.webp`,
  heroType: "vimeo",
  heroVideoId: "1085247810",
  responsibilities: [
    "Conducted user research, competitive analysis, and journey mapping to uncover pain points and define the product strategy.",
    "Led interaction design, wireframing, and prototyping across the full product experience.",
    "Built a scalable design system and reusable component library for consistent execution and faster collaboration.",
    "Facilitated usability testing and collaborated with stakeholders to validate ideas and deliver a production-ready experience.",
  ],
  contribution:
    "I led the end-to-end product design for FilterPixel, defining both the product strategy and the interaction model that shaped the platform. My work focused on simplifying every stage of the photo editing workflow — from AI-assisted adjustments to seamless sharing and collaboration. Beyond the core product experience, I established a scalable design system and reusable component library that enabled faster collaboration, consistent execution, and future product growth.",
  externalUrl: "https://filterpixel.com/",
  dateCreated: "December, 2024",
  projectDuration: "12 Weeks",
  liveLink: "https://filterpixel.com/",
  outcome: [
    "Reduced editing time through AI-powered automation and intelligent presets.",
    "Positive user feedback highlighting speed, ease of use, and intuitive workflows.",
    "Improved task completion rates for key user journeys during usability testing.",
  ],
  aboutProject:
    "FilterPixel is an AI-powered photo editing platform designed to make professional-grade editing accessible to everyone. Existing tools often have steep learning curves and complex workflows that create friction for both amateur and professional photographers. FilterPixel reimagines this experience through intelligent automation, intuitive interactions, and a clean, focused interface — making photo editing feel fast, fun, and effortless.",
  sections: [
    { type: "full-image", src: `${BASE}/gallery-1.webp`, alt: "FilterPixel overview" },
    {
      type: "editorial",
      title: "The Process",
      body: "Before designing any screens, I wanted to understand how photographers actually worked. Rather than making assumptions, I used the Double Diamond framework to explore the existing workflow, identify where people were getting stuck, and define the problems worth solving. It helped us stay focused on improving the experience instead of simply redesigning the interface.",
    },
    { type: "full-image", src: `${BASE}/gallery-2.webp`, alt: "FilterPixel design exploration" },
    {
      type: "editorial",
      title: "Survey",
      body: "Since FilterPixel was already being used by thousands of photographers, I started by collecting both quantitative and qualitative feedback. I gathered responses from 168 users to understand their current workflow, what slowed them down, and what they expected from the next version of the product. The survey helped validate recurring problems before moving into design.",
    },
    {
      type: "editorial",
      title: "User Interviews",
      body: "Survey data told us what users were experiencing, but the interviews explained why. I spoke with ten photographers across different experience levels to understand how they selected, edited, and delivered their work. These conversations revealed small workflow frustrations that wouldn't have surfaced through numbers alone and heavily influenced the direction of the redesign.",
    },
    { type: "full-image", src: `${BASE}/gallery-3.webp`, alt: "FilterPixel interface design" },
    {
      type: "editorial",
      title: "User Persona & Empathy Map",
      body: "After reviewing the research, I created a primary persona named Elena to represent the core user of the platform. Mapping her goals, frustrations, habits, and expectations gave the team a shared understanding of who we were designing for and helped us make more confident product decisions throughout the project.",
    },
    { type: "full-image", src: `${BASE}/gallery-4.webp`, alt: "FilterPixel workflow" },
    { type: "full-image", src: `${BASE}/gallery-5.webp`, alt: "FilterPixel visual system" },
    {
      type: "editorial",
      title: "Competitive Analysis",
      body: "To position FilterPixel strategically within the photo editing market, I evaluated leading competitors including Adobe Lightroom, Capture One, Skylum Luminar, and Darktable. The comparison highlighted clear opportunities to differentiate through AI-powered editing, streamlined workflows, and a modern, accessible interface. These insights shaped the product strategy and reinforced FilterPixel's position as a next-generation editing platform.",
    },
    { type: "full-image", src: `${BASE}/gallery-6.webp`, alt: "FilterPixel interaction design" },
    {
      type: "editorial",
      title: "User Flow",
      body: "The overall workflow already existed, but it was split across two separate applications. Instead of rebuilding everything, my focus was on simplifying the journey and removing unnecessary context switching. The flow shown here is intentionally simplified because of confidentiality, but it reflects the structure that guided the redesign.",
    },
    { type: "full-image", src: `${BASE}/gallery-7.webp`, alt: "FilterPixel user interface" },
    {
      type: "editorial",
      title: "User Persona & Empathy Map",
      body: "To keep the design grounded in real user needs, I created a detailed persona supported by an empathy map based on survey findings and user interviews. This helped me understand what users think, feel, see, and experience throughout their photo editing journey, ensuring every product decision remained user-centred from discovery through delivery.",
    },
    { type: "full-image", src: `${BASE}/gallery-8.webp`, alt: "FilterPixel design detail" },
    {
      type: "editorial",
      title: "Low Fidelity Wireframes",
      body: "Before moving into visual design, I explored several layout directions using low-fidelity wireframes. This made it easy to validate ideas with stakeholders, iterate quickly, and solve navigation problems before investing time in polished interfaces.",
    },
    { type: "full-image", src: `${BASE}/gallery-9.webp`, alt: "FilterPixel component library" },
    {
      type: "editorial",
      title: "High Fidelity Wireframes",
      body: "Once the core workflows were approved, I translated them into production-ready designs. This stage focused on refining interactions, improving usability, and creating a consistent experience that developers could implement with confidence.",
    },
    { type: "full-image", src: `${BASE}/gallery-10.webp`, alt: "FilterPixel responsive layout" },
    { type: "full-image", src: `${BASE}/animated.webm`, alt: "FilterPixel hero animation" },
    { type: "full-image", src: `${BASE}/gallery-11.webp`, alt: "FilterPixel final prototype" },
    {
      type: "editorial",
      title: "The System",
      body: "As the product evolved, I built a reusable design system that brought consistency across both the culling and editing experiences. Shared components, typography, spacing, and interaction patterns helped speed up development while making the interface easier to maintain as the product continued to grow.",
    },
    { type: "full-image", src: `${BASE}/gallery-12.webp`, alt: "FilterPixel project summary" },
    {
      type: "editorial",
      title: "The Result",
      body: "The redesign brought the entire workflow into a single application, allowing photographers to import, cull, edit, and export their work without switching between multiple tools. The result was a faster, more focused experience that reduced friction while keeping photographers in the flow of their work.",
    },
    { type: "full-image", src: `${BASE}/gallery-13.webp`, alt: "FilterPixel project summary" },
    { type: "full-image", src: `${BASE}/outro.webp`, alt: "FilterPixel outro" },
  ],
};

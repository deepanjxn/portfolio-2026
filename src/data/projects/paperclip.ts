import { ProjectDetail } from "@/types";

const BASE = "/projects/paperclip";

export const paperclipProject: ProjectDetail = {
  slug: "paperclip",
  title: "PAPERCLIP",
  description:
    "Mobile app design for a document intelligence platform. Focused on simplicity and speed in high-volume workflows.",
  hero: `${BASE}/background.webp`,
  heroType: "vimeo",
  heroVideoId: "1085649092",
  responsibilities: [
    "Product strategy and UX direction",
    "User research, interviews, and synthesis",
    "Information architecture",
    "End-to-end interaction design",
    "Wireframing and high-fidelity UI design",
    "Design system and component library",
    "Developer handoff and design validation",
  ],
  contribution:
    "One of the biggest opportunities wasn\u2019t adding new features\u2014it was simplifying the overall experience. I redesigned the core marketplace journey by reducing unnecessary decision points, introducing AI-assisted listing, improving trust throughout the buying experience, and creating a more consistent interaction model across the product. The focus was always on helping users complete tasks faster without sacrificing confidence or control.",
  externalUrl: "https://www.linkedin.com/company/papercliphq/",
  outcome: [
    "Listing time reduced by 85% through AI-assisted listing.",
    "Achieved a 4.9\u2605 App Store rating.",
    "Every participant in usability testing successfully completed the full listing-to-shipping workflow.",
    "Users consistently highlighted the platform\u2019s speed, simplicity, and premium experience as its biggest strengths.",
  ],
  aboutProject:
    "Paperclip was built to rethink how people buy and sell second-hand goods. While most resale platforms still rely on long listing forms, manual pricing, and fragmented shipping experiences, Paperclip uses AI to remove much of that friction. The goal wasn\u2019t simply to redesign another marketplace\u2014it was to create an experience where listing an item could feel almost effortless while maintaining the trust and quality expected from a premium marketplace.",
  sections: [
    { type: "full-image", src: `${BASE}/gallery-1.webp`, alt: "Paperclip overview" },
    {
      type: "editorial",
      title: "The Process",
      body: "Rather than starting with interfaces, I spent time understanding how people actually approached buying and selling second-hand items. The Double Diamond framework helped separate discovery from solutioning, allowing the team to validate problems before investing in implementation. That foundation made later design decisions much more deliberate and easier to defend.",
    },
    { type: "full-image", src: `${BASE}/gallery-2.webp`, alt: "Paperclip design exploration" },
    { type: "full-image", src: `${BASE}/gallery-3.webp`, alt: "Paperclip interface design" },
    {
      type: "editorial",
      title: "User & Market Exploration",
      body: "I explored how people currently sell items online by reviewing existing marketplace experiences, interviewing users, and studying products such as Depop, Vinted, and Shpock. Although each platform solved similar problems, they all introduced unnecessary friction during listing, communication, and fulfilment. Those patterns helped identify where Paperclip could offer a meaningfully different experience.",
    },
    { type: "full-image", src: `${BASE}/gallery-4.webp`, alt: "Paperclip workflow" },
    {
      type: "editorial",
      title: "Survey",
      body: "To complement qualitative research, I gathered feedback from 100 participants who regularly used online resale platforms. The survey helped identify recurring behaviours, common frustrations, and areas where users expected automation to reduce repetitive work. These findings became the baseline for prioritising the redesign.",
    },
    { type: "full-image", src: `${BASE}/gallery-5.webp`, alt: "Paperclip visual system" },
    {
      type: "editorial",
      title: "Competitive Analysis",
      body: "Instead of benchmarking visual design alone, I compared how each competitor handled the complete resale journey\u2014from creating a listing to completing a sale. This made it easier to identify opportunities where Paperclip could differentiate itself through AI-powered automation, a cleaner interface, and a more connected end-to-end experience.",
    },
    { type: "full-image", src: `${BASE}/gallery-6.webp`, alt: "Paperclip interaction design" },
    { type: "full-image", src: `${BASE}/animated.gif`, alt: "Paperclip hero animation" },
    {
      type: "editorial",
      title: "Affinity Mapping",
      body: "After consolidating the research, I organised recurring observations into themes that represented the most common user needs. This exercise made it easier to distinguish isolated feedback from broader behavioural patterns, giving the team confidence when prioritising design decisions.",
    },
    { type: "full-image", src: `${BASE}/gallery-7.webp`, alt: "Paperclip user interface" },
    { type: "full-image", src: `${BASE}/gallery-8.webp`, alt: "Paperclip design detail" },
    {
      type: "editorial",
      title: "User Persona & Empathy Map",
      body: "The persona wasn\u2019t created as a documentation exercise\u2014it became a reference point throughout the project. By grounding product decisions around a single representative user, the team could evaluate new ideas against real goals, motivations, and pain points rather than personal opinions.",
    },
    { type: "full-image", src: `${BASE}/gallery-9.webp`, alt: "Paperclip component library" },
    { type: "full-image", src: `${BASE}/gallery-10.webp`, alt: "Paperclip responsive layout" },
    { type: "full-image", src: `${BASE}/gallery-11.webp`, alt: "Paperclip mobile screen" },
    {
      type: "editorial",
      title: "User Flow",
      body: "One of the priorities was reducing the amount of effort required to complete a sale. Mapping the entire journey exposed unnecessary transitions and decision points, making it possible to simplify the experience into a more natural sequence from listing to checkout.",
    },
    { type: "full-image", src: `${BASE}/gallery-12.webp`, alt: "Paperclip product showcase" },
    { type: "full-image", src: `${BASE}/gallery-13.webp`, alt: "Paperclip user flow" },
    {
      type: "editorial",
      title: "Low-Fidelity Wireframes",
      body: "Low-fidelity exploration allowed ideas to evolve quickly before visual design became a constraint. This stage focused on validating structure, navigation, and interaction patterns, making it easier to iterate with stakeholders while keeping discussions centred on usability rather than aesthetics.",
    },
    { type: "full-image", src: `${BASE}/gallery-14.webp`, alt: "Paperclip design system" },
    { type: "full-image", src: `${BASE}/gallery-15.webp`, alt: "Paperclip final prototype" },
    {
      type: "editorial",
      title: "High-Fidelity Designs",
      body: "Once the workflow had been validated, I translated the concepts into production-ready designs. The focus shifted toward interaction details, accessibility, consistency, and preparing the experience for engineering handoff.",
    },
    { type: "full-image", src: `${BASE}/gallery-16.webp`, alt: "Paperclip brand application" },
    { type: "full-image", src: `${BASE}/gallery-17.webp`, alt: "Paperclip presentation" },
    {
      type: "editorial",
      title: "Design System",
      body: "As the product matured, a shared design system became essential. Establishing reusable components, spacing rules, typography, and interaction patterns created a more cohesive experience while also reducing design debt and improving development velocity.",
    },
    { type: "full-image", src: `${BASE}/design-system.webp`, alt: "Paperclip design system" },
    { type: "full-image", src: `${BASE}/gallery-18.webp`, alt: "Paperclip project summary" },
    {
      type: "editorial",
      title: "The Result",
      body: "The redesign transformed Paperclip into a faster and more intuitive marketplace where AI reduced much of the manual effort traditionally involved in buying and selling. From creating listings to completing transactions, every step was designed to remove friction while giving users greater confidence throughout the journey.",
    },
    { type: "vimeo", videoId: "1085654499" },
    { type: "full-image", src: `${BASE}/outro.webp`, alt: "Paperclip outro" },
  ],
};

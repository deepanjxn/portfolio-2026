import { ProjectDetail } from "@/types";

export const fintech2UxBreakdownProject: ProjectDetail = {
  slug: "fintech-2-ux-breakdown",
  title: "KIWI",
  description:
    "A UX assignment completed as part of a product design interview process. Walkthrough of the thinking, decisions, and deliverables.",
  hero: "/projects/fintech-2-ux-breakdown/background.webp",
  heroType: "vimeo",
  heroVideoId: "1085247810",
  type: "ux-breakdown",
  responsibilities: [
    "Evaluated the existing home screen and identified opportunities for future scalability.",
    "Analysed discoverability issues across offers, rewards, and newly introduced financial products.",
    "Created multiple low fidelity concepts before selecting the final direction.",
    "Redesigned the home experience while preserving Kiwi's existing design language.",
    "Proposed reusable interaction patterns requiring minimal engineering effort.",
    "Built high fidelity interfaces demonstrating the redesigned experience.",
    "Documented the reasoning behind every major product and interaction decision.",
  ],
  contribution: "",
  aboutProject:
    "Kiwi asked me to redesign their home screen to support the next stage of product growth. Over time, the platform had expanded beyond its original credit card experience to include rewards, offers, travel, lending, bill payments, and additional financial services. The challenge was to introduce these capabilities without compromising the simplicity that existing users were already familiar with. Instead of proposing a complete redesign, I focused on evolving the current experience through small, high impact improvements that could realistically ship with minimal engineering effort.",
  dateCreated: "November 2025",
  projectDuration: "2 Days",
  liveLink: "",
  sections: [
    {
      type: "editorial",
      title: "Problem Statement",
      body: "Redesign the Kiwi home screen so it can support a growing ecosystem of financial products without becoming visually overwhelming. The solution needed to improve discoverability for offers and rewards, create room for future products, and maintain Kiwi's clean, lightweight design language. Every decision needed to balance usability, business goals, and implementation effort.",
    },
    {
      type: "editorial",
      title: "My Approach",
      body: "Before designing anything, I studied the existing experience to understand why discoverability had become a challenge as the product matured. Rather than replacing familiar interaction patterns, I looked for opportunities to extend what already existed. I documented my observations, explored multiple wireframe concepts, and gradually refined a solution that improved navigation, surfaced important products more effectively, and reduced unnecessary interactions. Throughout the process I prioritised engineering feasibility alongside user experience, ensuring every proposal could realistically be implemented within the existing product.",
    },
    {
      type: "editorial",
      title: "Key Design Decisions",
      body: "One of the biggest priorities was preserving familiarity. Instead of introducing entirely new interaction patterns, I reused existing components and extended their capabilities so the redesign could be adopted incrementally. To improve discoverability, I introduced an expandable product section that exposes multiple financial services without increasing visual clutter. I also surfaced offers directly within existing card components and redesigned the credit card module to provide faster access to payment actions, offers, and related information. Every design decision balanced three priorities: user experience, business impact, and engineering feasibility. The result is a scalable home screen that supports future product growth while remaining intuitive for existing users.",
    },
    {
      type: "editorial",
      title: "Deliverables",
      body: "Existing experience audit, product strategy, information architecture, low fidelity wireframes, high fidelity interface design, home screen redesign, interaction prototype, design rationale documentation.",
    },
  ],
};

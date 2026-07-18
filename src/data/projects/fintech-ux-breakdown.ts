import { ProjectDetail } from "@/types";

export const fintechUxBreakdownProject: ProjectDetail = {
  slug: "fintech-ux-breakdown",
  title: "PAYCRUNCH",
  description:
    "A UX assignment completed as part of a product design interview process. Walkthrough of the thinking, decisions, and deliverables.",
  hero: "/projects/fintech-ux-breakdown/background.webp",
  heroType: "vimeo",
  heroVideoId: "1209826265",
  type: "ux-breakdown",
  responsibilities: [],
  contribution: "",
  aboutProject:
    "PayCrunch is a Gen Z focused fintech company exploring modern payment experiences. As part of the interview process, I was asked to design a bill splitting experience that balanced usability with a clean and engaging interface while demonstrating my end to end product thinking. Rather than limiting the solution to the requested screens, I approached it as a scalable feature that could naturally fit into a larger payments ecosystem.",
  dateCreated: "25 May 2025",
  projectDuration: "2 Days",
  liveLink: "https://www.paycrunch.in/",
  sections: [
    {
      type: "editorial",
      title: "Problem Statement",
      body: "Design a mobile experience that helps users split restaurant bills with friends, even when some participants are not PayCrunch users. The experience needed to support reminders, payment collection, and settlement while remaining simple enough for a Gen Z audience.",
    },
    {
      type: "editorial",
      title: "My Approach",
      body: "Before opening Figma, I documented the assignment, extracted the requirements, and listed every assumption that could influence the experience. From there, I explored edge cases, mapped the complete journey, and identified opportunities beyond the original brief. One of the biggest decisions was treating bill splitting as part of a larger expense management module instead of designing it as a standalone flow. This made the experience easier to scale while keeping the interface simple.",
    },
    {
      type: "editorial",
      title: "Key Design Decisions",
      body: "Instead of solving only the requested flow, I introduced an Expenses module that could become part of a broader financial management experience. To reduce friction, I prioritised quick category selection, reusable components, and familiar iOS patterns. Every interaction was designed to minimise cognitive load while remaining flexible enough to support future product expansion.",
    },
  ],
};

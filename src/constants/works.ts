import { PROJECTS as ALL_PROJECTS, WORKS_DESCRIPTION } from "@/data/projects";
import availableIds from "@/data/projects-available.json";

const ids = availableIds as string[];

export const PROJECTS = ALL_PROJECTS.filter((p) => ids.includes(p.id));

export { WORKS_DESCRIPTION };

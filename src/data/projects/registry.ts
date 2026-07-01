import { ProjectDetail } from "@/types";
import { reevvProject } from "./reevv";

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  reevv: reevvProject,
};

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return PROJECT_DETAILS[slug];
}

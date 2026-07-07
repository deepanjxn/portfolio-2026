import { ProjectDetail } from "@/types";
import { reevvProject } from "./reevv";
import { paperclipProject } from "./paperclip";

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  reevv: reevvProject,
  paperclip: paperclipProject,
};

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return PROJECT_DETAILS[slug];
}

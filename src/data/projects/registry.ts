import { ProjectDetail } from "@/types";
import { reevvProject } from "./reevv";
import { paperclipProject } from "./paperclip";
import { filterpixelProject } from "./filterpixel";

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  reevv: reevvProject,
  paperclip: paperclipProject,
  filterpixel: filterpixelProject,
};

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return PROJECT_DETAILS[slug];
}

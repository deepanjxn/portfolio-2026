import { ProjectDetail } from "@/types";
import { reevvProject } from "./reevv";
import { paperclipProject } from "./paperclip";
import { filterpixelProject } from "./filterpixel";
import { fintechUxBreakdownProject } from "./fintech-ux-breakdown";
import { fintech2UxBreakdownProject } from "./fintech-2-ux-breakdown";
import { healthtechUxBreakdownProject } from "./healthtech-ux-breakdown";
import { tentwentyUxBreakdownProject } from "./tentwenty-ux-breakdown";

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  reevv: reevvProject,
  paperclip: paperclipProject,
  filterpixel: filterpixelProject,
  "fintech-ux-breakdown": fintechUxBreakdownProject,
  "fintech-2-ux-breakdown": fintech2UxBreakdownProject,
  "healthtech-ux-breakdown": healthtechUxBreakdownProject,
  "tentwenty-ux-breakdown": tentwentyUxBreakdownProject,
};

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return PROJECT_DETAILS[slug];
}

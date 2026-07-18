export interface ThemeTokens {
  text: string;
  surface: string;
  gray: string;
  accent: string;
}

export type TabType = "about" | "works";

export interface LinkItem {
  label: string;
  href: string;
  sublabel?: string;
}

export interface MediaFrameProps {
  src?: string;
  alt?: string;
  videoSrc?: string;
  vimeoId?: string;
}

export interface FooterInfoData {
  year: string;
  location: string;
}

export type ProjectType = "projects" | "case-studies" | "labs" | "ux-breakdown";

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  categories: string[];
  backgroundImage?: string;
  thumbnailImage?: string;
  animatedPreview?: string;
  heroImage?: string;
  shortDescription?: string;
  longDescription?: string;
  year?: number;
  role?: string;
  client?: string;
  gallery?: GalleryItem[];
  projectUrl?: string;
}

export type SectionType = "full-image" | "editorial" | "vimeo";

export type ProjectSection =
  | { type: "full-image"; src: string; alt: string }
  | { type: "editorial"; title: string; body: string }
  | { type: "vimeo"; videoId: string };

export interface ProjectDetail {
  slug: string;
  title: string;
  description: string;
  hero: string;
  heroType?: "image" | "vimeo" | "tella";
  heroVideoId?: string;
  heroEmbedSrc?: string;
  sections: ProjectSection[];
  externalUrl?: string;
  responsibilities: string[];
  contribution: string;
  aboutProject: string;
  outcome?: string | string[];
  dateCreated: string;
  projectDuration: string;
  liveLink: string;
  type?: "project" | "ux-breakdown";
}

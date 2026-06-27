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
}

export interface MediaFrameProps {
  src?: string;
  alt?: string;
  videoSrc?: string;
}

export type IconStyle = "outlined" | "rounded" | "sharp";

export interface FooterInfoData {
  year: string;
  location: string;
}

export type ProjectType = "projects" | "case-studies" | "labs";

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
  shortDescription?: string;
  longDescription?: string;
  year?: number;
  role?: string;
  client?: string;
  gallery?: GalleryItem[];
  projectUrl?: string;
}

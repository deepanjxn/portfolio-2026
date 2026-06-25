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

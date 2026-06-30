import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { ThemeScript } from "@/components/ThemeScript";
import { siteConfig } from "@/config/site";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBF9F6" },
    { media: "(prefers-color-scheme: dark)", color: "#191919" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.titleTemplate.default,
    template: siteConfig.titleTemplate.template,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.images.og,
        width: 1729,
        height: 910,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.images.twitter],
    creator: siteConfig.social.twitter,
  },
  icons: {
    icon: siteConfig.icons.icon,
    apple: siteConfig.icons.apple,
  },
  manifest: siteConfig.manifest,
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.author.url,
      email: siteConfig.author.email,
      jobTitle: siteConfig.personSchema.jobTitle,
      knowsAbout: siteConfig.personSchema.knowsAbout,
      image: `${siteConfig.url}/images/portrait.png`,
      sameAs: [
        siteConfig.social.linkedin,
        siteConfig.social.github,
        siteConfig.social.behance,
      ].filter(Boolean),
    },
    {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="h-full w-full overflow-hidden m-0 p-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeScript />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

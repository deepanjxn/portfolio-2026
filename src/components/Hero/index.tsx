"use client";

import { Logo } from "@/components/Logo";
import { Intro } from "@/components/Intro";
import { ExperienceSummary } from "@/components/ExperienceSummary";
import { LinkGroup } from "@/components/LinkGroup";
import { FooterInfo } from "@/components/FooterInfo";
import { Clock } from "@/components/Clock";
import { MediaFrame } from "@/components/MediaFrame";
import { PORTFOLIO_LINKS, UX_LINKS, CONTACT_LINKS } from "@/constants";
import { HERO_GRID_COLUMNS } from "@/theme/tokens";

export function Hero() {
  return (
    <div
      className="w-full h-full"
      style={{
        display: "grid",
        gridTemplateColumns: HERO_GRID_COLUMNS,
        alignItems: "start",
      }}
    >
      {/* Left Column */}
      <div className="flex flex-col h-full justify-start">
        {/* Group 1: Introduction */}
        <div className="flex flex-col">
          <Logo />
          <Intro />
          <ExperienceSummary />
        </div>

        <div style={{ height: 24 }} />

        {/* Group 2: Portfolio Links */}
        <LinkGroup links={PORTFOLIO_LINKS} />

        <div style={{ height: 24 }} />

        {/* Group 3: UX Breakdowns */}
        <LinkGroup links={UX_LINKS} />

        <div style={{ height: 24 }} />

        {/* Group 4: Contact */}
        <LinkGroup links={CONTACT_LINKS} />

        <div style={{ height: 48 }} />

        {/* Group 5: Footer */}
        <div className="flex flex-col">
          <FooterInfo />
          <Clock />
        </div>
      </div>

      {/* Right Column */}
      <div className="h-full flex items-start justify-start self-stretch overflow-hidden">
        <MediaFrame src="/images/portrait.png" alt="Deepanjan Sen portrait" videoSrc="/video/deepanjan-sen-portfolio.mp4" />
      </div>
    </div>
  );
}

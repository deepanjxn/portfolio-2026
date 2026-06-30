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
import { useDensity } from "@/context/DensityContext";

const LAPTOP_GRID_COLUMNS = "1.1fr 1fr";

export function Hero() {
  const density = useDensity();
  const { isCompact, spacing, font } = density;

  const logoSize = font(112);
  const introMargin = spacing(24);
  const spacer12 = spacing(12);
  const spacer24 = spacing(24);
  const spacer48 = spacing(48);
  const clockMargin = spacing(24);

  const gridColumns = isCompact ? LAPTOP_GRID_COLUMNS : HERO_GRID_COLUMNS;

  return (
    <div
      className="w-full h-full"
      {...(isCompact ? { "data-laptop": "" } : {})}
      style={{
        display: "grid",
        gridTemplateColumns: gridColumns,
        alignItems: "start",
        columnGap: isCompact ? spacing(32) : 0,
      }}
    >
      {/* Left Column */}
      <div className="flex flex-col h-full justify-start">
        {/* Group 1: Introduction */}
        <div className="flex flex-col">
          <Logo size={logoSize} />
          <Intro marginTop={introMargin} />
          <div style={{ height: spacer12 }} />
          <ExperienceSummary />
        </div>

        <div style={{ height: spacer24 }} />

        {/* Group 2: Portfolio Links */}
        <LinkGroup links={PORTFOLIO_LINKS} />

        <div style={{ height: spacer24 }} />

        {/* Group 3: UX Breakdowns */}
        <LinkGroup links={UX_LINKS} />

        <div style={{ height: spacer24 }} />

        {/* Group 4: Contact */}
        <LinkGroup links={CONTACT_LINKS} />

        <div style={{ height: spacer48 }} />

        {/* Group 5: Footer */}
        <div className="flex flex-col">
          <FooterInfo />
          <Clock marginTop={clockMargin} />
        </div>
      </div>

      {/* Right Column */}
      <div
        className="h-full flex items-start justify-start self-stretch overflow-hidden"
        {...(isCompact ? { "data-laptop": "" } : {})}
      >
        <MediaFrame src="/images/portrait.png" alt="Deepanjan Sen portrait" videoSrc="/video/deepanjan-sen-portfolio.mp4" />
      </div>
    </div>
  );
}

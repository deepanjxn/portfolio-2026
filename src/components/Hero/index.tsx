"use client";

import { Logo } from "@/components/Logo";
import { ExperienceSummary } from "@/components/ExperienceSummary";
import { LinkGroup } from "@/components/LinkGroup";
import { FooterInfo } from "@/components/FooterInfo";
import { Clock } from "@/components/Clock";
import { MediaFrame } from "@/components/MediaFrame";
import { BOOK_A_CALL_LINK, VISUAL_LINKS, UX_LINKS, CONTACT_LINKS } from "@/constants";
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
      <div className="flex flex-col h-full">
        {/* TOP: Introduction */}
        <div className="flex flex-col" style={{ gap: spacing(16) }}>
          <Logo size={logoSize} />
          <ExperienceSummary />
        </div>

        {/* GROUPS: Three content groups with 24px between them */}
        <div className="flex flex-col" style={{ gap: spacer24, marginTop: spacing(40) }}>
          <LinkGroup links={BOOK_A_CALL_LINK} />
          <LinkGroup links={VISUAL_LINKS} />
          <LinkGroup links={CONTACT_LINKS} />
          <div className="flex flex-col">
            <FooterInfo />
            <Clock />
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div
        className="h-full flex items-start justify-start self-stretch overflow-hidden"
        {...(isCompact ? { "data-laptop": "" } : {})}
      >
        <MediaFrame src="/images/portrait.png" alt="Deepanjan Sen portrait" vimeoId="1208018575" />
      </div>
    </div>
  );
}

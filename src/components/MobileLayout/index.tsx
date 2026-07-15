"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/animations/variants";
import { Logo } from "@/components/Logo";
import { Intro } from "@/components/Intro";
import { ExperienceSummary } from "@/components/ExperienceSummary";
import { LinkGroup } from "@/components/LinkGroup";
import { FooterInfo } from "@/components/FooterInfo";
import { Clock } from "@/components/Clock";
import { MediaFrame } from "@/components/MediaFrame";
import { PORTFOLIO_LINKS, UX_LINKS, CONTACT_LINKS } from "@/constants";
import { useTheme } from "@/context/ThemeContext";

export function MobileLayout() {
  const { theme } = useTheme();

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex-1 overflow-y-auto"
    >
      {/* Text content with background */}
      <div style={{ backgroundColor: theme.surface }}>
        <div style={{ padding: "0 16px" }}>
          <motion.div variants={fadeIn} className="flex flex-col" style={{ paddingTop: 16, paddingBottom: 32 }}>
            {/* Group 1: Introduction */}
            <div className="flex flex-col">
              <Logo size={48} />
              <div style={{ height: 12 }} />
              <Intro marginTop={0} />
              <div style={{ height: 12 }} />
              <ExperienceSummary />
            </div>

            <div style={{ height: 24 }} />

            {/* Group 2: Navigation & Footer */}
            <div className="flex flex-col" style={{ gap: 24 }}>
              <LinkGroup links={PORTFOLIO_LINKS} />
              <LinkGroup links={CONTACT_LINKS} />
              <div className="flex flex-col">
                <FooterInfo />
                <Clock />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video without background */}
      <motion.div variants={fadeIn}>
        <MediaFrame
          src="/images/portrait.png"
          alt="Deepanjan Sen portrait"
          vimeoId="1208018575"
        />
      </motion.div>
    </motion.div>
  );
}

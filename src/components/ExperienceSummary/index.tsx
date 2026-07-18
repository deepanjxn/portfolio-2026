"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/animations/variants";
import { useTheme } from "@/context/ThemeContext";
import { MAX_BODY_WIDTH } from "@/theme/tokens";
import { INTRO_TEXT } from "@/constants";

const linkClass = "underline underline-offset-2";

function TextParagraph({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <motion.p
      variants={fadeInUp}
      className="text-[16px] leading-[1.6] font-medium"
      style={{
        maxWidth: MAX_BODY_WIDTH,
        marginTop: 0,
        marginBottom: 0,
        color: theme.text,
        letterSpacing: "-0.04em",
      }}
    >
      {children}
    </motion.p>
  );
}

export const ExperienceSummary = memo(function ExperienceSummary() {
  const { theme } = useTheme();
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col"
      style={{ gap: 16 }}
    >
      <TextParagraph>
        {INTRO_TEXT} Currently leading Product Design at{" "}
        <a
          href="https://www.withlayer.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          style={{ color: theme.text, textDecorationColor: theme.text }}
        >
          Layer
        </a>
        .
      </TextParagraph>
      <TextParagraph>
        Over the past 5+ years, I&apos;ve worked across AI, FinTech, SaaS
        and consumer technology, collaborating with teams at{" "}
        <a
          href="https://www.linkedin.com/company/perfios/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          style={{ color: theme.text, textDecorationColor: theme.text }}
        >
          Perfios
        </a>
        ,{" "}
        <a
          href="https://www.linkedin.com/company/karza-technologies/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          style={{ color: theme.text, textDecorationColor: theme.text }}
        >
          Karza
        </a>
        ,{" "}
        <a
          href="https://tentwenty.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          style={{ color: theme.text, textDecorationColor: theme.text }}
        >
          TenTwenty
        </a>
        ,{" "}
        <a
          href="https://www.linkedin.com/company/papercliphq/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          style={{ color: theme.text, textDecorationColor: theme.text }}
        >
          PaperClip
        </a>
        ,{" "}
        <a
          href="https://www.linkedin.com/company/reevv-inc/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          style={{ color: theme.text, textDecorationColor: theme.text }}
        >
          Reevv Research
        </a>{" "}
        and{" "}
        <a
          href="https://www.linkedin.com/company/filterpixel/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          style={{ color: theme.text, textDecorationColor: theme.text }}
        >
          FilterPixel
        </a>
        .
      </TextParagraph>
      <TextParagraph>
        Outside of work, I&apos;m usually building something with design, AI and
        code or you&apos;ll find me in the gym, riding my motorcycle or planning
        my next adventure.
      </TextParagraph>
    </motion.div>
  );
});

"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/animations/variants";
import { useTheme } from "@/context/ThemeContext";
import { MAX_BODY_WIDTH } from "@/theme/tokens";

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
      style={{ gap: 12 }}
    >
      <TextParagraph>
        With over half a decade of experience, I&apos;ve worked across AI,
        FinTech, SaaS and consumer products with teams at{" "}
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
        .{" "}
        <span style={{ opacity: 0.5 }}>
          I enjoy taking products from early ideas to production and helping
          them evolve as they grow.
        </span>
      </TextParagraph>
      <TextParagraph>
        Before product design, I spent four and a half years building a tech
        YouTube channel from zero to over 350,000 subscribers.{" "}
        <span style={{ opacity: 0.5 }}>
          That journey shaped the way I think about people, storytelling and
          creating experiences that resonate.
        </span>
      </TextParagraph>
      <TextParagraph>
        Lately, I&apos;ve been exploring the intersection of design, AI and
        code, building products end to end. I built this portfolio myself
        <span style={{ opacity: 0.5 }}>
          {" "}as part of that journey. Outside of work, you&apos;ll usually find me in
          the gym, on my motorcycle or planning my next adventure.
        </span>
      </TextParagraph>
    </motion.div>
  );
});

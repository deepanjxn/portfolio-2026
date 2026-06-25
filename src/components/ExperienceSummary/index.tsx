"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/variants";
import { useTheme } from "@/context/ThemeContext";
import { MAX_BODY_WIDTH } from "@/theme/tokens";

const linkClass = "underline underline-offset-2";

export function ExperienceSummary() {
  const { theme } = useTheme();
  return (
    <motion.p
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="text-[16px] leading-[1.6] font-medium"
      style={{
        maxWidth: MAX_BODY_WIDTH,
        marginTop: 0,
        color: theme.text,
        letterSpacing: "-0.04em",
      }}
    >
      I&apos;m currently Lead Product Designer at{" "}
      <a
        href="https://www.withlayer.ai/"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        style={{ color: theme.text, textDecorationColor: theme.text }}
      >
        Layer
      </a>
      , and I also collaborate with founders to bring early-stage ideas to
      life. My work spans AI, FinTech, Web3, B2B and SaaS, with past projects
      at{" "}
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
      </a>
      ,{" "}
      <a
        href="https://www.linkedin.com/company/filterpixel/"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        style={{ color: theme.text, textDecorationColor: theme.text }}
      >
        FilterPixel
      </a>
      , and more.
    </motion.p>
  );
}

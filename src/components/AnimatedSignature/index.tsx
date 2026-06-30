"use client";

import { useLayoutEffect, useRef } from "react";
import { useAnimate } from "framer-motion";
import { SIGNATURE_2_PATH } from "../../data/signature-2-svg";

interface AnimatedSignatureProps {
  className?: string;
  style?: React.CSSProperties;
  onDrawComplete?: () => void;
}

const DRAW_DURATION = 2;
const INITIAL_DELAY = 0.6;
const HOLD_DURATION = 800;

export default function AnimatedSignature({
  className,
  style,
  onDrawComplete,
}: AnimatedSignatureProps) {
  const [scope, animate] = useAnimate();
  const hasAnimated = useRef(false);

  useLayoutEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const path = scope.current?.querySelector("path");
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    animate(
      path,
      { strokeDashoffset: 0 },
      {
        duration: DRAW_DURATION,
        delay: INITIAL_DELAY,
        ease: [0.42, 0, 0.58, 1],
        onComplete: () => {
          setTimeout(() => {
            onDrawComplete?.();
          }, HOLD_DURATION);
        },
      },
    );
  }, [animate, onDrawComplete, scope]);

  return (
    <div
      ref={scope}
      className={className}
      style={{ display: "block", ...style }}
    >
      <svg
        viewBox="0 0 407 192"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%", height: "auto" }}
      >
        <path
          d={SIGNATURE_2_PATH}
          stroke="currentColor"
          strokeWidth={4}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

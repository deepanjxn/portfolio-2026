"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FullImageProps {
  src: string;
  alt: string;
}

export function FullImage({ src, alt }: FullImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {src.endsWith('.webm') ? (
          <video
            src={src}
            muted
            loop
            playsInline
            autoPlay
            className="w-full h-auto block"
            draggable={false}
          />
        ) : (
          <img
            src={src}
            alt={alt}
            className="w-full h-auto block"
            draggable={false}
          />
        )}
      </motion.div>
    </div>
  );
}

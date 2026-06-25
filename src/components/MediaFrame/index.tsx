"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { scaleIn } from "@/animations/variants";
import { MediaFrameProps } from "@/types";

export function MediaFrame({ src, alt, videoSrc }: MediaFrameProps) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      className="relative w-full h-full flex items-end justify-center overflow-hidden"
    >
      {videoSrc ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-bottom"
          poster={src}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : src ? (
        <Image
          src={src}
          alt={alt || ""}
          fill
          className="object-cover object-bottom"
          priority
          sizes="(max-width: 1200px) 60vw, 50vw"
        />
      ) : null}
    </motion.div>
  );
}

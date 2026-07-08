"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { scaleIn } from "@/animations/variants";
import { MediaFrameProps } from "@/types";

const VIDEO_ASPECT = 1728 / 2160;

const IFRAME_BASE_STYLE: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "none",
  pointerEvents: "none",
};

export function MediaFrame({ src, alt, videoSrc, vimeoId }: MediaFrameProps) {
  const [isVimeoReady, setIsVimeoReady] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [coverStyle, setCoverStyle] = useState<React.CSSProperties>({
    ...IFRAME_BASE_STYLE,
    width: "100%",
    height: "100%",
  });

  // Size the iframe to behave like object-fit:cover relative to its parent.
  // useLayoutEffect runs before paint so Vimeo initialises at the correct size.
  // ResizeObserver handles dynamic container changes (window resize, layout
  // shifts from font loading). object-fit can't be used directly because the
  // cross-origin iframe has no intrinsic aspect ratio.
  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const updateSize = () => {
      const container = wrapper.parentElement;
      if (!container) return;
      const containerAspect = container.clientWidth / container.clientHeight;

      if (containerAspect > VIDEO_ASPECT) {
        setCoverStyle({
          ...IFRAME_BASE_STYLE,
          width: "100%",
          height: `${(containerAspect / VIDEO_ASPECT) * 100}%`,
        });
      } else {
        setCoverStyle({
          ...IFRAME_BASE_STYLE,
          width: `${(VIDEO_ASPECT / containerAspect) * 100}%`,
          height: "100%",
        });
      }
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);
    const container = wrapper.parentElement;
    if (container) observer.observe(container);

    return () => observer.disconnect();
  }, []);

  if (vimeoId) {
    return (
      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        className="relative w-full h-full flex items-end justify-center overflow-hidden"
      >
        <motion.img
          src={src}
          alt={alt || ""}
          className="w-full h-full object-cover object-bottom"
          animate={{ opacity: isVimeoReady ? 0 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          draggable={false}
        />
        <div
          ref={wrapperRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1`}
            style={coverStyle}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={alt || "Hero video"}
            onLoad={() => setIsVimeoReady(true)}
          />
        </div>
      </motion.div>
    );
  }

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

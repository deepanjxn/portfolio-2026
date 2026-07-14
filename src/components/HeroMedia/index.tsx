"use client";

import { useRef, useEffect } from "react";
import { ProjectDetail } from "@/types";

interface HeroMediaProps {
  project: ProjectDetail;
  showControls?: boolean;
}

export function HeroMedia({ project, showControls = false }: HeroMediaProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showControls) return;

    const container = containerRef.current;
    if (!container) return;

    const handler: EventListener = (e: Event) => {
      if (container.contains(e.target as Node)) {
        e.preventDefault();
      }
    };

    document.addEventListener("wheel", handler, { capture: true, passive: false } as EventListenerOptions);
    return () => document.removeEventListener("wheel", handler, { capture: true });
  }, [showControls]);

  if (project.heroType === "vimeo" && project.heroVideoId) {
    const params = showControls
      ? `badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1`
      : `badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1`;

    return (
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          ...(showControls
            ? { aspectRatio: "1920 / 1200" }
            : { paddingTop: "56.25%" }),
        }}
      >
        <iframe
          src={`https://player.vimeo.com/video/${project.heroVideoId}?${params}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
            pointerEvents: showControls ? "auto" : "none",
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={`${project.title} hero`}
        />
      </div>
    );
  }

  return (
    <img
      src={project.hero}
      alt={`${project.title} hero`}
      className="w-full h-auto block"
      draggable={false}
    />
  );
}

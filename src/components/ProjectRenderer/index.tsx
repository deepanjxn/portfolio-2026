"use client";

import { Fragment } from "react";
import { ProjectSection } from "@/types";
import { FullImage } from "./sections/FullImage";
import { Editorial } from "./sections/Editorial";
import { VimeoSection } from "./sections/VimeoSection";
import { useDensity } from "@/context/DensityContext";

interface ProjectRendererProps {
  sections: ProjectSection[];
}

export function ProjectRenderer({ sections }: ProjectRendererProps) {
  const density = useDensity();

  return (
    <>
      {sections.map((section, index) => (
        <Fragment key={index}>
          {(() => {
            switch (section.type) {
              case "full-image":
                return <FullImage src={section.src} alt={section.alt} />;
              case "editorial":
                return <Editorial title={section.title} body={section.body} />;
              case "vimeo":
                return <VimeoSection videoId={section.videoId} />;
              default:
                return null;
            }
          })()}
          {index < sections.length - 1 && (
            <div style={{ height: density.spacing(24) }} />
          )}
        </Fragment>
      ))}
    </>
  );
}

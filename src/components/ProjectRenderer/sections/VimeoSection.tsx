"use client";

interface VimeoSectionProps {
  videoId: string;
}

export function VimeoSection({ videoId }: VimeoSectionProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "56.25%",
      }}
    >
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
          pointerEvents: "none",
        }}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Paperclip video"
      />
    </div>
  );
}

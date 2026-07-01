import { ReactNode } from "react";
import { OUTER_PADDING, MAX_CONTENT_WIDTH } from "@/theme/tokens";

const MAX_CONTAINER_WIDTH = MAX_CONTENT_WIDTH + OUTER_PADDING * 2;

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div
      className="h-full w-full mx-auto"
      style={{ maxWidth: MAX_CONTAINER_WIDTH }}
    >
      {children}
    </div>
  );
}

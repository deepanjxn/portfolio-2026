import { ReactNode, HTMLAttributes } from "react";

interface FullBleedProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function FullBleed({ children, className, style, ...props }: FullBleedProps) {
  return (
    <div
      className={className}
      style={{
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

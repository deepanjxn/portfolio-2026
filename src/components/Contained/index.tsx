import { ReactNode, HTMLAttributes } from "react";

interface ContainedProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Contained({ children, className, ...props }: ContainedProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

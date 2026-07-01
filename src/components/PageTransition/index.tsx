export const pageTransitionConfig = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  fadeAmount: 0,
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full animate-page-enter">
      {children}
    </div>
  );
}

import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border border-border bg-surface p-6 md:p-7",
        "transition-all duration-300 hover:border-border-strong",
        className
      )}
    >
      {children}
    </div>
  );
}

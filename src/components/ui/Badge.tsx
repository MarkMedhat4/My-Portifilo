import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "neutral",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "neutral" | "accent";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
        tone === "neutral" && "border-border-strong text-text-muted bg-surface-2",
        tone === "accent" && "border-accent/40 text-accent bg-accent/10",
        className
      )}
    >
      {children}
    </span>
  );
}

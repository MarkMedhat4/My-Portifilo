import { cn } from "@/lib/utils";

export function Timeline({ children }: { children: React.ReactNode }) {
  return <ol className="relative flex flex-col gap-8">{children}</ol>;
}

export function TimelineItem({
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <li className={cn("relative pl-8 md:pl-10", className)}>
      <span
        aria-hidden
        className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg"
      />
      <span
        aria-hidden
        className="absolute left-[5px] top-5 bottom-[-2rem] w-px bg-border last:hidden"
      />
      <p className="mono-label text-accent">{eyebrow}</p>
      <h3 className="mt-1.5 font-display text-lg md:text-xl font-semibold text-text">{title}</h3>
      {subtitle ? <p className="mt-1 text-sm text-text-muted">{subtitle}</p> : null}
      {children}
    </li>
  );
}

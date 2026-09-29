import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-8 md:mb-12 lg:mb-16 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="mono-label mb-3 text-accent flex items-center gap-2 justify-start">
          <span aria-hidden className="inline-block h-px w-6 bg-accent/60" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-text text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-text-muted text-base md:text-lg leading-relaxed text-balance">
          {description}
        </p>
      ) : null}
    </div>
  );
}

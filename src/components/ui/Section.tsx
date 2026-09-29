import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Section({
  id,
  children,
  className,
  tone = "base",
  containerClassName,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "base" | "elevated";
  containerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 md:py-24 lg:py-28 scroll-mt-24",
        tone === "elevated" && "bg-bg-elevated",
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

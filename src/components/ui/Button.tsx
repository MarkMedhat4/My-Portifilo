import { cn } from "@/lib/utils";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type BaseProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  className?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<string, string> = {
  primary: "bg-accent text-[#03211d] hover:bg-accent-strong",
  secondary:
    "bg-surface-2 text-text border border-border-strong hover:border-accent/60 hover:text-accent",
  ghost: "text-text-muted hover:text-text hover:bg-surface",
};

const sizes: Record<string, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-sm md:text-base px-5 py-3",
};

function Content({
  children,
  icon: Icon,
  iconPosition = "right",
}: Pick<BaseProps, "children" | "icon" | "iconPosition">) {
  return (
    <>
      {Icon && iconPosition === "left" ? <Icon size={18} aria-hidden /> : null}
      {children}
      {Icon && iconPosition === "right" ? <Icon size={18} aria-hidden /> : null}
    </>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  iconPosition,
  ...rest
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      <Content icon={icon} iconPosition={iconPosition}>
        {children}
      </Content>
    </button>
  );
}

export function LinkButton({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  iconPosition,
  href,
  external,
}: BaseProps & { href: string; external?: boolean }) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...externalProps}
    >
      <Content icon={icon} iconPosition={iconPosition}>
        {children}
      </Content>
    </Link>
  );
}

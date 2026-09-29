import { TreePine, Briefcase, Palette, ArrowUpRight, type LucideIcon } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { professionalLinks, type ProfessionalLink } from "@/data/links";

const icons: Record<ProfessionalLink["icon"], LucideIcon | IconType> = {
  github: SiGithub,
  linkedin: FaLinkedin,
  linktree: TreePine,
  youtube: Briefcase,
  briefcase: Briefcase,
  palette: Palette,
  globe: Briefcase,
};

export function ProfessionalLinks() {
  return (
    <div>
      <p className="mono-label text-text-faint mb-4">{"// Find Me Online"}</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {professionalLinks.map((link) => {
          const Icon = icons[link.icon];
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-[var(--radius-md)] border border-border bg-surface px-4 py-3.5 transition-colors hover:border-accent/40"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-surface-2 text-text-muted group-hover:text-accent">
                <Icon size={17} aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-text">{link.name}</span>
                {link.focus ? (
                  <span className="block truncate text-xs text-text-faint">{link.focus}</span>
                ) : null}
              </span>
              <ArrowUpRight
                size={15}
                aria-hidden
                className="shrink-0 text-text-faint group-hover:text-accent"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}

import { ArrowUpRight } from "lucide-react";
import { SiYoutube } from "react-icons/si";
import { youtube } from "@/data/links";

export function YouTubeCard() {
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface p-6 md:p-8 flex flex-col justify-between">
      <div>
        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-danger/10 border border-danger/30 text-danger">
          <SiYoutube size={20} aria-hidden />
        </span>
        <p className="mono-label text-text-faint mt-4">{youtube.description}</p>
        <h3 className="mt-1 font-display text-xl font-semibold text-text">{youtube.name}</h3>
        <p className="mt-1 text-sm text-text-muted">{youtube.handle}</p>
      </div>
      <a
        href={youtube.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] border border-border-strong px-4 py-2.5 text-sm font-medium text-text hover:border-accent/60 hover:text-accent transition-colors"
      >
        Visit YouTube Channel
        <ArrowUpRight size={14} aria-hidden />
      </a>
    </div>
  );
}

import { ArrowUpRight } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { commandCode } from "@/data/links";

export function CommandCode() {
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface p-6 md:p-8">
      <div
        aria-hidden
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
      />
      <p className="mono-label text-accent">{commandCode.category}</p>
      <h3 className="mt-2 font-display text-2xl font-semibold text-text">{commandCode.name}</h3>
      <p className="mt-1 text-sm font-medium text-text-muted">{commandCode.role}</p>
      <p className="mt-4 text-sm text-text-muted leading-relaxed max-w-lg">
        {commandCode.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {commandCode.focus.map((f) => (
          <span key={f} className="rounded-md bg-surface-2 px-2.5 py-1 text-xs text-text-muted">
            {f}
          </span>
        ))}
      </div>
      <a
        href={commandCode.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-border-strong px-4 py-2.5 text-sm font-medium text-text hover:border-accent/60 hover:text-accent transition-colors"
      >
        <SiInstagram size={16} aria-hidden />
        @commandcode.hub
        <ArrowUpRight size={14} aria-hidden />
      </a>
    </div>
  );
}

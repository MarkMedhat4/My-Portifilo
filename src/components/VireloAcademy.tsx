import { MessageCircle, ArrowUpRight } from "lucide-react";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { virelo } from "@/data/links";

export function VireloAcademy() {
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface p-6 md:p-8">
      <div
        aria-hidden
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-2/10 blur-3xl"
      />
      <p className="mono-label text-accent-2">Educational Involvement</p>
      <h3 className="mt-2 font-display text-2xl font-semibold text-text">{virelo.name}</h3>
      <p className="mt-1 text-sm italic text-text-muted">&ldquo;{virelo.slogan}&rdquo;</p>
      <p className="mt-4 text-sm text-text-muted leading-relaxed max-w-lg">
        {virelo.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2.5">
        <a
          href={virelo.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-border-strong px-4 py-2.5 text-sm font-medium text-text hover:border-accent/60 hover:text-accent transition-colors"
        >
          <SiInstagram size={16} aria-hidden />
          Instagram
          <ArrowUpRight size={14} aria-hidden />
        </a>
        <a
          href={virelo.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-border-strong px-4 py-2.5 text-sm font-medium text-text hover:border-accent/60 hover:text-accent transition-colors"
        >
          <SiFacebook size={16} aria-hidden />
          Facebook
          <ArrowUpRight size={14} aria-hidden />
        </a>
        <span className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-surface-2 px-4 py-2.5 text-sm text-text-muted">
          <MessageCircle size={16} aria-hidden />
          {virelo.whatsapp}
        </span>
      </div>
    </div>
  );
}

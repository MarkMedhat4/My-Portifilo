import Image from "next/image";
import { FileText, ExternalLink } from "lucide-react";
import type { Certificate } from "@/data/certifications";

export function CertificateCard({ certificate }: { certificate: Certificate }) {
  const pdfHref = `/certificates/pdf/${certificate.slug}.pdf`;
  const thumbSrc = `/certificates/thumb/${certificate.slug}.jpg`;

  return (
    <div className="group flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface transition-colors hover:border-accent/40">
      <a
        href={pdfHref}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[4/3] w-full overflow-hidden bg-surface-2"
        aria-label={`Open certificate: ${certificate.title}`}
      >
        <Image
          src={thumbSrc}
          alt={`${certificate.title} certificate preview`}
          fill
          sizes="(min-width: 1024px) 320px, 45vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-bg/0 opacity-0 transition-opacity duration-200 group-hover:bg-bg/40 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-bg/90 border border-border-strong px-3 py-1.5 text-xs font-medium text-text">
            <FileText size={14} aria-hidden />
            Open PDF
          </span>
        </span>
      </a>

      <div className="flex flex-1 flex-col p-4">
        <span className="mono-label text-accent">{certificate.category}</span>
        <h3 className="mt-1.5 font-display text-sm md:text-base font-semibold text-text leading-snug">
          {certificate.title}
        </h3>
        <p className="mt-1 text-xs text-text-muted">{certificate.organization}</p>
        <p className="mt-0.5 text-xs text-text-faint">{certificate.date}</p>
        {certificate.detail ? (
          <p className="mt-1.5 text-xs text-text-faint">{certificate.detail}</p>
        ) : null}

        <div className="mt-auto pt-3 flex items-center justify-between">
          <a
            href={pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-accent hover:text-accent-strong"
          >
            View certificate
          </a>
          {certificate.verifyUrl ? (
            <a
              href={certificate.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-text-faint hover:text-text-muted"
            >
              Verify <ExternalLink size={12} aria-hidden />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

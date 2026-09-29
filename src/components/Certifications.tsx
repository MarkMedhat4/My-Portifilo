"use client";

import { useMemo, useState } from "react";
import { Section } from "./ui/Section";
import { SectionHeader } from "./ui/SectionHeader";
import { CertificateCard } from "./CertificateCard";
import { certificates, certificateCategories, type CertificateCategory } from "@/data/certifications";
import { cn } from "@/lib/utils";

const filters: Array<CertificateCategory | "All"> = ["All", ...certificateCategories];

export function Certifications() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return certificates;
    return certificates.filter((c) => c.category === filter);
  }, [filter]);

  return (
    <Section id="certifications">
      <SectionHeader
        eyebrow={`${certificates.length} Verified Certificates`}
        title="Certifications"
        description="Every certificate below is real and on file — organized by category, with the original document viewable as a PDF."
      />

      <div
        role="tablist"
        aria-label="Filter certificates by category"
        className="mb-8 flex flex-wrap gap-2"
      >
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-xs md:text-sm font-medium transition-colors",
              filter === f
                ? "border-accent bg-accent/10 text-accent"
                : "border-border-strong text-text-muted hover:text-text hover:border-text-faint"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((certificate) => (
          <CertificateCard key={certificate.slug} certificate={certificate} />
        ))}
      </div>
    </Section>
  );
}

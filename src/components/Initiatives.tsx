import { Section } from "./ui/Section";
import { SectionHeader } from "./ui/SectionHeader";
import { CommandCode } from "./CommandCode";
import { VireloAcademy } from "./VireloAcademy";
import { YouTubeCard } from "./YouTube";
import { ProfessionalLinks } from "./ProfessionalLinks";

export function Initiatives() {
  return (
    <Section id="initiatives" tone="elevated">
      <SectionHeader
        eyebrow="Beyond the Portfolio"
        title="Initiatives & Presence"
        description="Educational projects and technical content, alongside where to find and follow the work."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        <CommandCode />
        <VireloAcademy />
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.6fr]">
        <YouTubeCard />
        <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 md:p-8">
          <ProfessionalLinks />
        </div>
      </div>
    </Section>
  );
}

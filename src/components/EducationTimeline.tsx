import { GraduationCap } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeader } from "./ui/SectionHeader";
import { Card } from "./ui/Card";
import { education } from "@/data/education";
import { TrainingTimeline } from "./TrainingTimeline";

export function EducationTimeline() {
  return (
    <Section id="education" tone="elevated">
      <SectionHeader
        eyebrow="Academic Background"
        title="Education"
        description="Formal engineering education, alongside continuous, verified professional training."
      />

      <Card className="mb-12">
        <div className="flex items-start gap-4">
          <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 border border-accent/30 text-accent">
            <GraduationCap size={20} aria-hidden />
          </span>
          <div>
            <p className="mono-label text-text-faint">{education.period}</p>
            <h3 className="mt-1 font-display text-xl font-semibold text-text">
              {education.degree}
            </h3>
            <p className="mt-1 text-sm text-text-muted">
              {education.institution} — {education.campus}
            </p>
            <p className="mt-1 text-xs text-text-faint">
              Expected graduation: {education.expectedGraduation}
            </p>
          </div>
        </div>
        <div className="mt-5 pt-5 border-t border-border">
          <p className="mono-label text-text-faint mb-2.5">Relevant Coursework</p>
          <div className="flex flex-wrap gap-1.5">
            {education.coursework.map((c) => (
              <span
                key={c}
                className="rounded-md border border-border-strong bg-surface-2 px-2.5 py-1 text-xs text-text-muted"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </Card>

      <h3 className="mono-label text-text-faint mb-6">{"// Training & Development"}</h3>
      <TrainingTimeline />
    </Section>
  );
}

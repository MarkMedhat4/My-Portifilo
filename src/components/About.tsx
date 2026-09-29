import { GraduationCap, MapPin, Radio } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeader } from "./ui/SectionHeader";
import { Card } from "./ui/Card";
import { profile, getAge } from "@/data/profile";
import { education } from "@/data/education";

export function About() {
  const age = getAge();

  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="About"
            title="An engineer who builds things"
            description={undefined}
          />
          <p className="text-text-muted text-base md:text-lg leading-relaxed">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {profile.titles.map((title) => (
              <span
                key={title}
                className="rounded-full border border-border-strong bg-surface px-3.5 py-1.5 text-sm text-text-muted"
              >
                {title}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 content-start">
          <Card className="flex items-start gap-4">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 border border-accent/30 text-accent">
              <GraduationCap size={19} aria-hidden />
            </span>
            <div>
              <p className="mono-label text-text-faint">Education</p>
              <p className="mt-1 font-display text-lg text-text">{education.degree}</p>
              <p className="mt-1 text-sm text-text-muted">
                {education.institution} — {education.campus}
              </p>
              <p className="mt-1 text-sm text-text-faint">
                {education.period} · Expected graduation {education.expectedGraduation}
              </p>
            </div>
          </Card>

          <Card className="flex items-start gap-4">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 border border-accent/30 text-accent">
              <MapPin size={19} aria-hidden />
            </span>
            <div>
              <p className="mono-label text-text-faint">Location & Age</p>
              <p className="mt-1 font-display text-lg text-text">{profile.location}</p>
              <p className="mt-1 text-sm text-text-muted">
                {age} years old · calculated automatically
              </p>
            </div>
          </Card>

          <Card className="flex items-start gap-4">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 border border-accent/30 text-accent">
              <Radio size={19} aria-hidden />
            </span>
            <div>
              <p className="mono-label text-text-faint">Focus</p>
              <p className="mt-1 text-sm text-text-muted leading-relaxed">
                Electronics · Communication · Embedded Systems · Software · Web · IoT · AI ·
                Education
              </p>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}

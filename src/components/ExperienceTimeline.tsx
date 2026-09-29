import { Section } from "./ui/Section";
import { SectionHeader } from "./ui/SectionHeader";
import { Timeline, TimelineItem } from "./ui/Timeline";
import { Badge } from "./ui/Badge";
import { experience } from "@/data/experience";
import { activities } from "@/data/achievements";

export function ExperienceTimeline() {
  return (
    <Section id="experience">
      <SectionHeader
        eyebrow="Track Record"
        title="Experience & Activities"
        description="Hands-on engineering exposure, technical content creation, and ongoing campus involvement."
      />

      <Timeline>
        {experience.map((item) => (
          <TimelineItem
            key={item.id}
            eyebrow={item.period}
            title={item.role}
            subtitle={item.organization}
          >
            <p className="mt-3 text-sm text-text-muted leading-relaxed max-w-2xl">
              {item.summary}
            </p>
            {item.domains ? (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.domains.map((d) => (
                  <Badge key={d}>{d}</Badge>
                ))}
              </div>
            ) : null}
            <ul className="mt-3 space-y-1.5 max-w-2xl">
              {item.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-text-muted leading-relaxed">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </TimelineItem>
        ))}

        {activities.map((item) => (
          <TimelineItem
            key={item.id}
            eyebrow={item.period}
            title={item.role}
            subtitle={item.organization}
          >
            <ul className="mt-3 space-y-1.5 max-w-2xl">
              {item.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-text-muted leading-relaxed">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Timeline, TimelineItem } from "./ui/Timeline";
import { Badge } from "./ui/Badge";
import { training } from "@/data/training";

export function TrainingTimeline() {
  return (
    <Timeline>
      {training.map((item) => (
        <TimelineItem
          key={item.id}
          eyebrow={item.period}
          title={item.title}
          subtitle={
            item.initiative ? `${item.organization} · ${item.initiative}` : item.organization
          }
        >
          <div className="mt-2 flex flex-wrap gap-2 text-xs text-text-faint">
            {item.grade ? <Badge>Grade: {item.grade}</Badge> : null}
            {item.duration ? <Badge>{item.duration}</Badge> : null}
          </div>
          {item.description ? (
            <p className="mt-3 max-w-2xl text-sm text-text-muted leading-relaxed">
              {item.description}
            </p>
          ) : null}
          <div className="mt-3 flex flex-wrap gap-1.5 max-w-2xl">
            {item.skills.map((s) => (
              <span
                key={s}
                className="rounded-md bg-surface-2 px-2.5 py-1 text-xs text-text-muted"
              >
                {s}
              </span>
            ))}
          </div>
          {item.links && item.links.length > 0 ? (
            <div className="mt-3 flex flex-wrap gap-4">
              <Link
                href={`/training/${item.id}`}
                className="text-xs font-medium text-text hover:text-accent"
              >
                View Details
              </Link>
              {item.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:text-accent-strong"
                >
                  {link.label}
                  <ArrowUpRight size={12} aria-hidden />
                </a>
              ))}
            </div>
          ) : null}
        </TimelineItem>
      ))}
    </Timeline>
  );
}

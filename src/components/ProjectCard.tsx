import Link from "next/link";
import { ArrowUpRight, Users, ArrowRight } from "lucide-react";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col hover:-translate-y-0.5">
      <div className="flex flex-wrap items-center gap-1.5">
        {project.categories.map((cat) => (
          <Badge key={cat} tone="accent">
            {cat}
          </Badge>
        ))}
        {project.team ? (
          <span className="inline-flex items-center gap-1 text-xs text-text-faint">
            <Users size={12} aria-hidden />
            {project.team.type}
          </span>
        ) : null}
      </div>

      <h3 className="mt-4 font-display text-xl font-semibold text-text">{project.name}</h3>

      <p className="mt-2 text-sm text-text-muted leading-relaxed">{project.solution}</p>

      <div className="mt-4 rounded-lg border border-border bg-surface-2 p-3">
        <p className="mono-label text-text-faint">Problem</p>
        <p className="mt-1 text-sm text-text-muted leading-relaxed">{project.problem}</p>
      </div>

      <ul className="mt-4 space-y-1.5">
        {project.features.slice(0, 4).map((f) => (
          <li key={f} className="flex gap-2 text-sm text-text-muted">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.technologies.map((t) => (
          <span key={t} className="rounded-md bg-surface-2 px-2.5 py-1 text-xs text-text-faint">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 pt-5 border-t border-border flex flex-wrap items-center justify-between gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-text hover:text-accent"
        >
          View Details
          <ArrowRight size={16} aria-hidden />
        </Link>

        {project.links && project.links.length > 0 ? (
          <a
            href={project.links[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-strong"
          >
            {project.links[0].label}
            <ArrowUpRight size={16} aria-hidden />
          </a>
        ) : null}
      </div>
    </Card>
  );
}

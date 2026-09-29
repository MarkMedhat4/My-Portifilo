import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { projects, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.solution,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.name, description: project.solution },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="pt-32 pb-20 md:pt-40 md:pb-28">
      <Container className="max-w-3xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent"
        >
          <ArrowLeft size={15} aria-hidden />
          Back to Projects
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-1.5">
          {project.categories.map((cat) => (
            <Badge key={cat} tone="accent">
              {cat}
            </Badge>
          ))}
          {project.team ? (
            <span className="inline-flex items-center gap-1 text-xs text-text-faint">
              <Users size={12} aria-hidden />
              {project.team.type}
              {project.team.note ? ` — ${project.team.note}` : ""}
            </span>
          ) : null}
          {project.period ? (
            <span className="text-xs text-text-faint">{project.period}</span>
          ) : null}
        </div>

        <h1 className="mt-4 font-display text-3xl md:text-4xl font-semibold tracking-tight text-text text-balance">
          {project.name}
        </h1>

        <p className="mt-4 text-base md:text-lg text-text-muted leading-relaxed">
          {project.solution}
        </p>

        <section className="mt-8 rounded-[var(--radius-lg)] border border-border bg-surface p-6">
          <p className="mono-label text-text-faint">Problem</p>
          <p className="mt-2 text-sm md:text-base text-text-muted leading-relaxed">
            {project.problem}
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-lg font-semibold text-text">Key Features</h2>
          <ul className="mt-3 space-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex gap-2.5 text-sm md:text-base text-text-muted leading-relaxed">
                <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-lg font-semibold text-text">
            Technologies & Concepts
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border-strong bg-surface-2 px-3 py-1.5 text-sm text-text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {project.learningOutcomes ? (
          <section className="mt-8">
            <h2 className="font-display text-lg font-semibold text-text">Learning Outcomes</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.learningOutcomes.map((l) => (
                <li
                  key={l}
                  className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-sm text-accent"
                >
                  {l}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {project.futureEnhancements ? (
          <section className="mt-8">
            <h2 className="font-display text-lg font-semibold text-text">Future Enhancements</h2>
            <ul className="mt-3 space-y-2">
              {project.futureEnhancements.map((f) => (
                <li
                  key={f}
                  className="flex gap-2.5 text-sm md:text-base text-text-muted leading-relaxed"
                >
                  <span
                    aria-hidden
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2"
                  />
                  {f}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {project.links && project.links.length > 0 ? (
          <section className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-border-strong px-4 py-2.5 text-sm font-medium text-text hover:border-accent/60 hover:text-accent transition-colors"
              >
                {link.label}
                <ArrowUpRight size={15} aria-hidden />
              </a>
            ))}
          </section>
        ) : null}
      </Container>
    </article>
  );
}

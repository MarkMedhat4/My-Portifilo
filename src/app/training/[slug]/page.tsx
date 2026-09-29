import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { training, getTrainingById } from "@/data/training";

export function generateStaticParams() {
  return training.map((t) => ({ slug: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getTrainingById(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.description ?? `${item.title} — ${item.organization}`,
    alternates: { canonical: `/training/${item.id}` },
  };
}

export default async function TrainingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getTrainingById(slug);
  if (!item) notFound();

  return (
    <article className="pt-32 pb-20 md:pt-40 md:pb-28">
      <Container className="max-w-3xl">
        <Link
          href="/#education"
          className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent"
        >
          <ArrowLeft size={15} aria-hidden />
          Back to Education & Training
        </Link>

        <p className="mono-label text-accent mt-6">{item.period}</p>
        <h1 className="mt-2 font-display text-3xl md:text-4xl font-semibold tracking-tight text-text text-balance">
          {item.title}
        </h1>
        <p className="mt-2 text-base text-text-muted">
          {item.organization}
          {item.initiative ? ` · ${item.initiative}` : ""}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-text-faint">
          {item.grade ? (
            <span className="rounded-full border border-border-strong bg-surface-2 px-3 py-1">
              Grade: {item.grade}
            </span>
          ) : null}
          {item.duration ? (
            <span className="rounded-full border border-border-strong bg-surface-2 px-3 py-1">
              {item.duration}
            </span>
          ) : null}
        </div>

        {item.description ? (
          <p className="mt-6 text-base text-text-muted leading-relaxed">{item.description}</p>
        ) : null}

        <section className="mt-8">
          <h2 className="font-display text-lg font-semibold text-text">Skills & Topics</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {item.skills.map((s) => (
              <span
                key={s}
                className="rounded-md border border-border-strong bg-surface-2 px-3 py-1.5 text-sm text-text-muted"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {item.links && item.links.length > 0 ? (
          <section className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
            {item.links.map((link) => (
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

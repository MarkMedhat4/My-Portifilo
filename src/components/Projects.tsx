"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section } from "./ui/Section";
import { SectionHeader } from "./ui/SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { projects, projectFilters, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.categories.includes(filter as ProjectCategory));
  }, [filter]);

  return (
    <Section id="projects" tone="elevated">
      <SectionHeader
        eyebrow="Selected Work"
        title="Projects"
        description="Electronics, embedded systems, IoT, and software — built to solve a real, specific problem."
      />

      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="mb-8 flex flex-wrap gap-2"
      >
        {projectFilters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              filter === f
                ? "border-accent bg-accent/10 text-accent"
                : "border-border-strong text-text-muted hover:text-text hover:border-text-faint"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}

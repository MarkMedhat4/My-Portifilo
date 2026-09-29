"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeader } from "./ui/SectionHeader";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

export function Skills() {
  const [openId, setOpenId] = useState<string | null>(skillCategories[0]?.id ?? null);

  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Capabilities"
        title="Technical Skills"
        description="Organized by domain — from embedded hardware to modern web interfaces."
      />

      <div className="grid gap-3">
        {skillCategories.map((category) => {
          const open = openId === category.id;
          return (
            <div
              key={category.id}
              className="rounded-[var(--radius-lg)] border border-border bg-surface overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenId(open ? null : category.id)}
                aria-expanded={open}
                aria-controls={`skills-panel-${category.id}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left"
              >
                <span>
                  <span className="font-display text-base md:text-lg font-semibold text-text">
                    {category.title}
                  </span>
                  <span className="hidden md:inline text-sm text-text-faint">
                    {" "}
                    — {category.description}
                  </span>
                </span>
                <ChevronDown
                  size={20}
                  aria-hidden
                  className={cn(
                    "shrink-0 text-text-muted transition-transform duration-300",
                    open && "rotate-180 text-accent"
                  )}
                />
              </button>
              <div
                id={`skills-panel-${category.id}`}
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-out",
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-wrap gap-2 px-5 pb-5 md:px-6 md:pb-6">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-border-strong bg-surface-2 px-3 py-1.5 text-sm text-text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

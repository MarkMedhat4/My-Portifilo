import { Cpu, Wifi, Code2, Globe, BrainCircuit, CircuitBoard } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeader } from "./ui/SectionHeader";

const stack = [
  {
    title: "Electronics",
    icon: CircuitBoard,
    items: ["Circuit Design", "Digital Systems", "Electronic Components"],
  },
  {
    title: "Embedded Systems",
    icon: Cpu,
    items: ["Arduino", "ESP32", "ESP32-CAM", "STM32"],
  },
  {
    title: "Software",
    icon: Code2,
    items: ["C++", "C", "Python", "JavaScript"],
  },
  {
    title: "Web",
    icon: Globe,
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "IoT",
    icon: Wifi,
    items: ["Sensors", "Wi-Fi", "Data Logging", "Connected Systems"],
  },
  {
    title: "AI",
    icon: BrainCircuit,
    items: ["Deep Learning", "Computer Vision", "Generative AI", "Prompt Engineering"],
  },
];

export function EngineeringStack() {
  return (
    <Section id="engineering" tone="elevated">
      <SectionHeader
        eyebrow="How I Build"
        title="Engineering Stack"
        description="Six connected disciplines that shape how a project moves from an idea to working hardware and software."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map(({ title, icon: Icon, items }) => (
          <div
            key={title}
            className="group relative rounded-[var(--radius-lg)] border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/40"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 border border-accent/30 text-accent transition-transform duration-300 group-hover:scale-105">
              <Icon size={20} aria-hidden />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-text">{title}</h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-surface-2 px-2.5 py-1 text-xs text-text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

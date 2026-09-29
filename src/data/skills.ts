export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    description: "Core languages used across embedded, desktop, and web work.",
    skills: ["C++", "C", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    id: "web",
    title: "Web Development",
    description: "Building fast, modern, production interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "embedded",
    title: "Embedded Systems",
    description: "Microcontroller platforms for real-time and IoT projects.",
    skills: ["Arduino", "ESP32", "ESP32-CAM", "STM32", "Arduino IDE"],
  },
  {
    id: "electronics",
    title: "Electronics & Simulation",
    description: "Circuit design, analysis, and simulation tooling.",
    skills: ["Proteus", "OrCAD", "PSpice", "OrCAD Capture CIS"],
  },
  {
    id: "ai",
    title: "AI / Deep Learning",
    description: "Applied machine learning and generative AI.",
    skills: [
      "Artificial Intelligence",
      "Deep Learning",
      "CNN",
      "Image Datasets",
      "Image Preprocessing",
      "Image Classification",
      "Model Optimization",
      "Generative AI",
      "Prompt Engineering",
    ],
  },
  {
    id: "linux",
    title: "Linux",
    description: "System administration and the command line.",
    skills: [
      "Ubuntu",
      "Shell",
      "Networking",
      "File Management",
      "Permissions",
      "Processes",
      "Compression",
      "Archiving",
      "Command Line",
    ],
  },
  {
    id: "creative",
    title: "Creative Tools",
    description: "Visual and audio production for technical content.",
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe Premiere Pro",
      "Adobe Audition",
      "Audio Editing",
    ],
  },
  {
    id: "productivity",
    title: "Engineering / Productivity",
    description: "Documentation, drafting, and project delivery tools.",
    skills: ["AutoCAD", "Microsoft Word", "Microsoft 365", "Microsoft Office", "Project Management"],
  },
];

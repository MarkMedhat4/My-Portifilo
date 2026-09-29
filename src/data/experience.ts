export type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  period: string;
  summary: string;
  domains?: string[];
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "egyptian-airports",
    role: "Summer Intern — IT & Communications Engineering",
    organization: "Egyptian Airports Company — Aswan International Airport",
    period: "September 2025",
    summary:
      "Technical summer internship at Aswan International Airport under the Egyptian Airports Company (Ministry of Civil Aviation), focused on communication infrastructure in an active aviation environment.",
    domains: [
      "CCTV Monitoring",
      "Fire Alarm",
      "Firefighting",
      "Airport Security",
      "Access Control",
      "IP CCTV",
      "Network Security",
      "Network Design",
      "VHF",
    ],
    bullets: [
      "Gained hands-on exposure to communication infrastructure systems, observing operational radio communication, navigation, and surveillance systems.",
      "Studied safety procedures, engineering operations protocols, and technical documentation standards used in aviation infrastructure.",
      "Observed and analyzed telecom architecture and signal management systems relevant to the Electronics & Communications Engineering curriculum.",
      "Covered network maintenance and hardware troubleshooting as part of the internship program.",
    ],
  },
  {
    id: "commandcode-creator",
    role: "Educational Content Creator",
    organization: "CommandCode — YouTube & Instagram",
    period: "October 2024 – Present",
    summary:
      "Produces technical engineering tutorials and university subject reviews for an audience of engineering students.",
    bullets: [
      "Publishes technical engineering tutorials and course reviews on YouTube (@markmedhat03) and Instagram (@commandcode.hub).",
      "Simplifies signals, circuits, electronics, and programming topics for a student audience.",
      "Produces educational graphics and video content using Adobe Illustrator and video production skills.",
    ],
  },
];

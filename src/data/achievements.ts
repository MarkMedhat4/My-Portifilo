export type Achievement = {
  id: string;
  title: string;
  organization: string;
  period: string;
  detail: string;
};

export const achievements: Achievement[] = [
  {
    id: "icpc-ecpc-2025",
    title: "155th Place — ICPC ECPC Qualifications 2025",
    organization: "ICPC International Collegiate Programming Contest — Day 8",
    period: "7 Aug 2025",
    detail:
      "Team: Mahmoud Gomaa, Ahmed Khaled, Mark Medhat · AASTMT Aswan · Coach: Bahaa Elden Ali Abd Elghany.",
  },
  {
    id: "icpc-acpc-kickoff-2025",
    title: "Honorable Mention — ICPC ACPC Kickoff Online Individual Contest",
    organization: "Arab Collegiate Programming Championship Kickoff",
    period: "25–26 Apr 2025",
    detail: "Individual competitive programming contest · AASTMT Aswan.",
  },
];

export type ActivityItem = {
  id: string;
  role: string;
  organization: string;
  period: string;
  bullets: string[];
};

export const activities: ActivityItem[] = [
  {
    id: "gdgoc",
    role: "Active Member — Programming & Cybersecurity Track",
    organization: "Google Developer Groups on Campus (GDGoC) — AASTMT Aswan",
    period: "2024 – Present",
    bullets: [
      "Participated in the Build With AI Workshop, the Interactive Electronics Track (Robotics Team), and technical skill-building sessions.",
      "Engaged in collaborative engineering projects spanning AI integration, robotics, and hardware-software interfacing.",
    ],
  },
  {
    id: "icpc-aastmt",
    role: "Competitive Programmer",
    organization: "ICPC AASTMT — Aswan",
    period: "2024 – Present",
    bullets: [
      "Represents AASTMT Aswan in ICPC regional and national competitions, applying algorithm design, data structures, and computational problem-solving under time constraints.",
      "Maintains an active Codeforces profile (Mark_Medhat257), practicing algorithmic challenges across difficulty levels.",
    ],
  },
];

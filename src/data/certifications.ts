export type CertificateCategory =
  | "AI & Deep Learning"
  | "Web Development"
  | "Cybersecurity"
  | "Linux"
  | "Electronics"
  | "Programming"
  | "Design"
  | "Competitions"
  | "Other";

export type Certificate = {
  slug: string;
  title: string;
  organization: string;
  date: string;
  category: CertificateCategory;
  detail?: string;
  verifyUrl?: string;
};

export const certificates: Certificate[] = [
  {
    slug: "odc-deep-learning",
    title: "Introduction to Deep Learning",
    organization: "Orange Digital Center — ODC Aswan",
    date: "Dec 2025",
    category: "AI & Deep Learning",
    detail: "Grade: 97% · 64 hours",
  },
  {
    slug: "nti-ai",
    title: "Artificial Intelligence (AI)",
    organization: "Egyptian Talent Academy — NTI & Huawei",
    date: "Feb 2025",
    category: "AI & Deep Learning",
    detail: "Grade: 75% · 80 hours",
  },
  {
    slug: "dubai-1m-prompters",
    title: "1 Million Prompters — AI Prompt Engineering",
    organization: "Dubai Future Foundation / Dubai Centre for Artificial Intelligence",
    date: "2025",
    category: "AI & Deep Learning",
    detail: "Generative AI, prompt design, LLM interaction",
  },
  {
    slug: "coursera-ibm-incident-response",
    title: "Incident Response and Digital Forensics",
    organization: "IBM (via Coursera)",
    date: "Aug 2025",
    category: "Cybersecurity",
    verifyUrl: "https://coursera.org/verify/6IQXT6UDGUX6",
  },
  {
    slug: "coursera-cybersecurity-everyone",
    title: "Cybersecurity for Everyone",
    organization: "University of Maryland, College Park (via Coursera)",
    date: "Sep 2025",
    category: "Cybersecurity",
    verifyUrl: "https://coursera.org/verify/5LLEOPO8M6VY",
  },
  {
    slug: "odc-cyber-forensics",
    title: "Intro to Cybersecurity & Digital Forensics",
    organization: "Orange Digital Center — ODC Aswan",
    date: "2025",
    category: "Cybersecurity",
    detail: "Grade: 90% · 47 hours",
  },
  {
    slug: "ubuntu-linux-essentials",
    title: "Ubuntu Linux Essentials",
    organization: "ITI / Mahara-Tech",
    date: "Jan 2026",
    category: "Linux",
    detail: "7 hours 20 minutes",
  },
  {
    slug: "odc-electronics-design",
    title: "Electronics Design",
    organization: "Orange Digital Center (GIZ / German Cooperation)",
    date: "Dec 2025",
    category: "Electronics",
    detail: "Grade: 99% · 20 hours",
  },
  {
    slug: "gdgoc-robotics-electronics",
    title: "Interactive Electronics Track — Robotics Team",
    organization: "Google Developer Groups on Campus (GDGoC) — AASTMT Aswan",
    date: "2024 – Present",
    category: "Electronics",
  },
  {
    slug: "c-programming-level1",
    title: "C Programming Level 1",
    organization: "SYS (Start Your Start)",
    date: "Jan 2023",
    category: "Programming",
  },
  {
    slug: "gdgoc-build-with-ai",
    title: "Build With AI Workshop",
    organization: "Google Developer Groups on Campus (GDGoC) — AASTMT Aswan",
    date: "2024 – Present",
    category: "Programming",
  },
  {
    slug: "gdgoc-html-webdev-task",
    title: "Web Development Task 1 & HTML Workshop",
    organization: "GDGoC AASTMT Aswan",
    date: "2025",
    category: "Web Development",
  },
  {
    slug: "degp-web-designer",
    title: "Web Designer",
    organization: "Digital Egypt Youth Program — NTI & Ministry of Communications",
    date: "Dec 2025",
    category: "Web Development",
    detail: "Grade: 85% · 90 technical + 30 freelancing hours",
  },
  {
    slug: "coursera-google-ux-foundations",
    title: "Foundations of User Experience (UX) Design",
    organization: "Google (via Coursera)",
    date: "Oct 2025",
    category: "Web Development",
    verifyUrl: "https://coursera.org/verify/W2M56S1XEBMS",
  },
  {
    slug: "coursera-google-ux-start",
    title: "Start the UX Design Process: Empathize, Define, and Ideate",
    organization: "Google (via Coursera)",
    date: "Nov 2025",
    category: "Web Development",
    verifyUrl: "https://coursera.org/verify/QU1IEAVUUEV3",
  },
  {
    slug: "udemy-illustrator",
    title: "Mastering Adobe Illustrator Projects: Build Your Portfolio",
    organization: "Udemy — Sayman Creative Institute",
    date: "Jan 2026",
    category: "Design",
    detail: "6 total hours",
  },
  {
    slug: "itida-freelance-gigs",
    title: "ITIDA Gigs — Freelance Training Program",
    organization: "ITIDA & eyouth",
    date: "2025",
    category: "Other",
    detail: "3-month freelance training program",
  },
  {
    slug: "rally-aastmt-tot-camp",
    title: "Training of Trainers (ToT) Camp",
    organization: "Rally AASTMT / Aswan University",
    date: "Completed",
    category: "Other",
  },
  {
    slug: "icpc-ecpc-2025",
    title: "ICPC ECPC Qualifications 2025 — Day 8",
    organization: "ICPC — International Collegiate Programming Contest",
    date: "7 Aug 2025",
    category: "Competitions",
    detail: "155th Place · Team: Mahmoud Gomaa, Ahmed Khaled, Mark Medhat · AASTMT Aswan",
  },
  {
    slug: "icpc-acpc-kickoff-2025",
    title: "ICPC ACPC Kickoff Online Individual Contest",
    organization: "ICPC — Arab Collegiate Programming Championship",
    date: "25–26 Apr 2025",
    category: "Competitions",
    detail: "Honorable Mention · AASTMT Aswan",
  },
  {
    slug: "egyptian-airports-internship",
    title: "Summer Training Program — Aswan International Airport",
    organization: "Egyptian Airports Company",
    date: "Sep 2025",
    category: "Other",
  },
];

export const certificateCategories: CertificateCategory[] = [
  "AI & Deep Learning",
  "Cybersecurity",
  "Web Development",
  "Electronics",
  "Programming",
  "Linux",
  "Design",
  "Competitions",
  "Other",
];

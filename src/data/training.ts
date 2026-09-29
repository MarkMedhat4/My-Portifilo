export type TrainingLink = {
  label: string;
  url: string;
};

export type TrainingItem = {
  id: string;
  title: string;
  organization: string;
  initiative?: string;
  period: string;
  grade?: string;
  duration?: string;
  description?: string;
  skills: string[];
  links?: TrainingLink[];
};

export const training: TrainingItem[] = [
  {
    id: "odc-deep-learning",
    title: "Introduction to Deep Learning",
    organization: "Orange Digital Center — ODC Aswan",
    period: "9 Nov – 18 Dec 2025",
    grade: "97%",
    duration: "64 hours",
    skills: [
      "Introduction to AI & Python libraries",
      "Fundamentals of deep learning",
      "Working with image datasets",
      "Image preprocessing",
      "Building CNN models",
      "Image classification & model optimization",
    ],
  },
  {
    id: "odc-electronics",
    title: "Electronics Design",
    organization: "Orange Digital Center (GIZ / German Cooperation)",
    period: "11 May – 24 Dec 2025",
    grade: "99%",
    duration: "20 hours",
    skills: [
      "Semiconductor physics & P-N junction",
      "Diode characteristics & modeling",
      "Signal conditioning",
      "BJT fundamentals & small-signal AC analysis",
      "Impedance matching & signal integrity",
      "Applied circuit design & simulation",
    ],
  },
  {
    id: "odc-cyber",
    title: "Intro to Cybersecurity & Digital Forensics",
    organization: "Orange Digital Center — ODC Aswan",
    period: "2025",
    grade: "90%",
    duration: "47 hours",
    skills: [
      "Cybersecurity fundamentals",
      "Telecom architecture overview",
      "Threat actors & motives",
      "Incident response skills",
      "Digital forensics basics",
    ],
  },
  {
    id: "nti-ai",
    title: "Artificial Intelligence (AI)",
    organization: "Egyptian Talent Academy — NTI & Huawei, Ministry of Communications",
    period: "23 Jan – 15 Feb 2025",
    grade: "75%",
    duration: "80 hours",
    skills: ["AI fundamentals", "Machine learning", "Deep learning", "Practical AI applications"],
  },
  {
    id: "ai-ambassadors",
    title: "AI Ambassadors Program",
    organization: "National Telecommunication Institute (NTI)",
    initiative: "Engineers For a Sustainable Egypt (ESE)",
    period: "Completed",
    description:
      "Completed the AI Ambassadors program at the National Telecommunication Institute under the Engineers For a Sustainable Egypt initiative, covering AI fundamentals and applications and the relationship between engineering, AI, and sustainable development.",
    skills: [
      "Artificial Intelligence fundamentals",
      "AI applications",
      "Technology & innovation",
      "Sustainability",
      "Engineering, AI & sustainable development",
    ],
    links: [
      {
        label: "View on LinkedIn",
        url: "https://www.linkedin.com/posts/markmedhat_ai-artificialintelligence-sustainability-activity-7424388996656558080-gc-I",
      },
    ],
  },
  {
    id: "samsung-innovation-campus",
    title: "Samsung Innovation Campus",
    organization: "Samsung",
    period: "Completed",
    skills: ["AI & Machine Learning coursework"],
  },
  {
    id: "rally-tot-camp",
    title: "Training of Trainers (ToT) Camp",
    organization: "Rally AASTMT / Aswan University",
    period: "Completed",
    skills: ["Tech coaching", "Communication", "Training and facilitation"],
  },
  {
    id: "degp-web-designer",
    title: "Web Designer",
    organization: "Digital Egypt Youth Program — NTI & Ministry of Communications",
    period: "7 Nov – 19 Dec 2025",
    grade: "85%",
    duration: "90 technical hours + 30 freelancing hours",
    skills: ["Web design", "Front-end development", "HTML/CSS", "Freelancing with gigs coaching"],
  },
];

export function getTrainingById(id: string): TrainingItem | undefined {
  return training.find((t) => t.id === id);
}

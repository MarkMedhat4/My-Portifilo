export type ProfessionalLink = {
  name: string;
  url: string;
  focus?: string;
  icon: "github" | "linkedin" | "linktree" | "youtube" | "briefcase" | "palette" | "globe";
};

export const professionalLinks: ProfessionalLink[] = [
  { name: "GitHub", url: "https://github.com/MarkMedhat4", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/markmedhat/", icon: "linkedin" },
  { name: "Linktree", url: "https://linktr.ee/markmedhat7", icon: "linktree" },
  {
    name: "Kafiil",
    url: "https://kafiil.com/u/mark_medhat",
    focus: "Design, Video & Audio",
    icon: "palette",
  },
  {
    name: "Nafezly",
    url: "https://nafezly.com/u/Mar_Medhat",
    focus: "UI Developer & Electronics Engineer",
    icon: "briefcase",
  },
  {
    name: "FreelanceYard",
    url: "https://www.freelanceyard.com/en/freelancers/mark-meddhat",
    icon: "briefcase",
  },
];

export const youtube = {
  name: "YouTube",
  url: "https://www.youtube.com/@markmedhat03",
  handle: "@markmedhat03",
  description: "Educational & Technical Content",
};

export const commandCode = {
  name: "CommandCode",
  role: "Founder & Technical Instructor",
  category: "Personal Educational Initiative",
  description:
    "An electronics education initiative designed to help students understand electronics in a simpler and more practical way.",
  focus: ["C++", "Embedded Systems", "Electronics learning"],
  instagram: "https://www.instagram.com/commandcode.hub",
};

export const virelo = {
  name: "Virelo Academy",
  slogan: "We don't compete on quality. We lead it!",
  description:
    "An educational platform focused on education, technology, student learning, and accessible learning experiences.",
  instagram: "https://www.instagram.com/vireloacademy",
  facebook: "https://www.facebook.com/share/1FMkL8Cs1s/",
  whatsapp: "01552481349",
};

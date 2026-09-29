export const profile = {
  fullName: "Mark Medhat Micheal Shaker",
  shortName: "Mark Medhat",
  birthDate: "2006-07-25", // used to calculate age dynamically — never hardcode age
  location: "Aswan, Egypt",
  university: {
    name: "Arab Academy for Science, Technology & Maritime Transport (AASTMT)",
    shortName: "AASTMT",
    campus: "Aswan Campus",
    department: "Electronics and Communications Engineering",
    period: "2024 – 2028",
    expectedGraduation: "2028",
  },
  titles: [
    "Electronics & Communication Engineering Student",
    "Software Developer",
    "Embedded Systems Engineer",
    "IoT Engineer",
    "Technical Educator",
  ],
  tagline: "Building at the intersection of electronics, software, and technology.",
  heroSubtitle:
    "Electronics & Communication Engineering Student — Software Developer · Embedded Systems · IoT · AI",
  summary:
    "Electronics and Communications Engineering student at AASTMT with hands-on experience across full-stack web development, embedded systems, artificial intelligence, and cybersecurity. Holder of verified certifications from IBM, Google, the University of Maryland, Orange Digital Center, NTI, and Udemy. Interned at Egyptian Airports Company, gaining exposure to real-world communication and aviation infrastructure systems. Builds engineering solutions that bridge software intelligence and hardware precision.",
  photo: "/images/profile.jpg",
  contact: {
    whatsapp: "+201220085313",
    phone: "+201220085313",
    phoneOnly: "+201097290636",
    email: "markmadhat03@gmail.com",
  },
  system: {
    status: "ONLINE",
    node: "MARK-01",
    location: "ASWAN, EG",
    field: "ECE",
    system: "ENGINEERING",
  },
  languages: [
    { name: "Arabic", level: "Native Proficiency" },
    { name: "English", level: "Professional Working Proficiency" },
  ],
};

/** Calculates Mark's current age from his birth date. Never hardcode the age. */
export function getAge(now: Date = new Date()): number {
  const birth = new Date(profile.birthDate);
  let age = now.getFullYear() - birth.getFullYear();
  const hasHadBirthdayThisYear =
    now.getMonth() > birth.getMonth() ||
    (now.getMonth() === birth.getMonth() && now.getDate() >= birth.getDate());
  if (!hasHadBirthdayThisYear) age -= 1;
  return age;
}

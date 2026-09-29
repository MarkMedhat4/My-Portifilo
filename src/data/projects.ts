export type ProjectCategory =
  | "Electronics"
  | "Embedded"
  | "IoT"
  | "Software"
  | "Web"
  | "Education"
  | "AI";

export type ProjectLink = {
  label: string;
  url: string;
};

export type TeamContext = {
  /** Only ever set when explicitly known — otherwise the field is omitted entirely. */
  type: "Individual" | "Team";
  note?: string;
};

export type Project = {
  slug: string;
  name: string;
  categories: ProjectCategory[];
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  learningOutcomes?: string[];
  futureEnhancements?: string[];
  team?: TeamContext;
  period?: string;
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "resistor-lab",
    name: "Resistor Lab",
    categories: ["Electronics", "Education", "Web"],
    problem:
      "Reading a resistor's value from its color bands is a basic but error-prone electronics skill, especially for students without a physical reference chart on hand.",
    solution:
      "An interactive web tool that decodes resistor color codes (4-band and beyond) into precise resistance values and tolerance ranges in real time.",
    features: [
      "Live 4-band resistor color-code decoding",
      "Adjustable band colors with instant value calculation",
      "Tolerance range display",
      "Practical reference for electronics students",
    ],
    technologies: ["JavaScript", "Web"],
    links: [
      {
        label: "Open Resistor Lab",
        url: "https://resistorlab.vercel.app/?type=4band&b1=brown&b2=red&multiplier=orange&tolerance=gold",
      },
    ],
  },
  {
    slug: "esp32-cam-mobile-robot",
    name: "ESP32-CAM Mobile Robot",
    categories: ["Embedded", "IoT", "Electronics"],
    problem:
      "Remote inspection and navigation tasks need a mobile platform that can see, sense distance, and be piloted from a phone without dedicated hardware controllers.",
    solution:
      "A remote-controlled robot built around an ESP32-CAM for live video streaming, paired with ultrasonic sensing for obstacle/radar-style tracking and a custom RemoteXY mobile interface for control.",
    features: [
      "Ultrasonic radar-style obstacle tracking",
      "ESP32-CAM live video streaming",
      "Custom RemoteXY mobile control interface",
    ],
    technologies: ["ESP32-CAM", "C++", "Ultrasonic Sensors", "RemoteXY"],
  },
  {
    slug: "qr-attendance-platform",
    name: "QR Attendance Management Platform",
    categories: ["Software", "Web"],
    problem:
      "Manually tracking attendance for organizations and events is slow and error-prone.",
    solution:
      "A web application that automates attendance tracking and organization management using QR-code based check-ins.",
    features: ["Automated attendance tracking", "Organization management workflow"],
    technologies: ["Next.js", "React"],
  },
  {
    slug: "environmental-monitoring-system",
    name: "Environmental Monitoring System",
    categories: ["IoT", "Embedded", "Electronics"],
    problem:
      "Environmental conditions need continuous, unattended monitoring with data available remotely rather than read manually on-site.",
    solution:
      "An STM32-based monitoring system that reads sensor data, logs it, and transmits it over Wi-Fi.",
    features: ["Wi-Fi data transmission", "Data logging", "Multi-sensor integration"],
    technologies: ["STM32", "Wi-Fi", "Sensors"],
  },
  {
    slug: "digital-clock",
    name: "Digital Clock Built with Logic ICs",
    categories: ["Electronics"],
    problem:
      "Building a clock from discrete digital-logic ICs rather than a microcontroller, to apply core digital electronics theory — frequency division, counting, and BCD decoding — directly in hardware.",
    solution:
      "A fully discrete digital clock built from binary counters, gate logic, and a BCD-to-7-segment decoder, dividing a clock source down to a 1 Hz timekeeping signal with correct 60-second and 60-minute rollover.",
    features: [
      "1 Hz clock generation via frequency division",
      "Binary counting with 60-second and 60-minute rollover",
      "BCD-to-7-segment decoding and display driving",
      "Reset logic",
    ],
    technologies: [
      "7493 Binary Counters",
      "7408 AND Gates",
      "7432 OR Gates",
      "CD4511 BCD-to-7-Segment Decoder/Driver",
      "7-Segment Displays",
    ],
    learningOutcomes: [
      "Digital logic design",
      "Hardware system integration",
      "Counter circuits and BCD decoding",
      "Timing and clock signal management",
      "Practical electronics troubleshooting and signal integrity",
    ],
    links: [{ label: "View on LinkedIn", url: "https://lnkd.in/p/eMVqtdJn" }],
  },
  {
    slug: "gpa-calculator",
    name: "GPA Calculator With Tkinter GUI",
    categories: ["Software", "Education"],
    problem:
      "Manually calculating Semester and Cumulative GPA across multiple courses is time-consuming and mistake-prone, especially when tracking many courses and credit hours at once.",
    solution:
      "A desktop application, built as an academic team project, that calculates and tracks both Semester GPA and Cumulative GPA accurately, with automatic letter-grade conversion and GPA status evaluation.",
    features: [
      "Semester GPA calculation",
      "Cumulative GPA calculation",
      "Automatic letter-grade conversion",
      "GPA status evaluation",
      "Dynamic course management with duplicate-course detection",
      "Input validation and error handling",
      "Modern Tkinter GUI with real-time result updates",
    ],
    technologies: [
      "Python 3",
      "Tkinter",
      "Object-Oriented Programming",
      "ttk.Treeview",
      "Weighted GPA formula logic",
    ],
    learningOutcomes: [
      "GUI development",
      "Software architecture",
      "OOP design",
      "Problem solving",
      "Team collaboration",
      "User experience design",
    ],
    futureEnhancements: [
      "Database integration",
      "Login system",
      "PDF report export",
      "Cloud synchronization",
      "Mobile version",
      "AI-based GPA advisor",
    ],
    team: { type: "Team", note: "Academic team project at AASTMT" },
    links: [
      { label: "Repository", url: "https://lnkd.in/dc79XDv6" },
      {
        label: "View on LinkedIn",
        url: "https://www.linkedin.com/posts/markmedhat_python-tkinter-gui-activity-7463820993921449984-dEMs",
      },
    ],
  },
  {
    slug: "smart-highway",
    name: "Smart Highway & Sustainability System",
    categories: ["IoT", "Electronics"],
    problem:
      "Highway infrastructure typically runs lighting, irrigation, and power at fixed schedules regardless of actual need, wasting energy and water.",
    solution:
      "An integrated smart-infrastructure concept combining adaptive lighting, sensor-driven irrigation, and solar power with storage — designed to respond to real conditions rather than a fixed schedule.",
    features: [
      "Adaptive smart lighting — vehicle detection sensors bring lighting to full intensity only when traffic is present, cutting energy use and light pollution",
      "Smart irrigation — soil moisture sensors deliver water according to actual soil conditions and monitor environmental/climate data",
      "Solar energy & storage — solar generation with battery storage powers lighting, sensors, and irrigation pumps continuously",
    ],
    technologies: [
      "IoT",
      "Sensor-based automation",
      "Environmental monitoring",
      "Solar power generation",
      "Battery energy storage",
    ],
    links: [
      {
        label: "View on LinkedIn",
        url: "https://www.linkedin.com/posts/markmedhat_smartinfrastructure-sustainabledevelopment-activity-7409969963400204289--ake",
      },
    ],
  },
  {
    slug: "commandcode",
    name: "CommandCode",
    categories: ["Education"],
    problem:
      "Electronics theory is often taught in a way that is hard for students to connect to practical, hands-on understanding.",
    solution:
      "A personal educational initiative that teaches electronics in a simpler, more practical way through content and mentorship.",
    features: ["Electronics education content", "C++ and embedded systems learning material"],
    technologies: ["C++", "Embedded Systems", "Electronics Education"],
    links: [{ label: "Visit CommandCode", url: "https://www.instagram.com/commandcode.hub" }],
  },
];

export const projectFilters: Array<ProjectCategory | "All"> = [
  "All",
  "Electronics",
  "Embedded",
  "IoT",
  "Software",
  "Web",
  "Education",
  "AI",
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

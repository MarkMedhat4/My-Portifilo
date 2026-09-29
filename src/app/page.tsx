import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { EngineeringStack } from "@/components/EngineeringStack";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { EducationTimeline } from "@/components/EducationTimeline";
import { Certifications } from "@/components/Certifications";
import { Initiatives } from "@/components/Initiatives";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <EngineeringStack />
      <Skills />
      <Projects />
      <ExperienceTimeline />
      <EducationTimeline />
      <Certifications />
      <Initiatives />
      <Contact />
    </>
  );
}

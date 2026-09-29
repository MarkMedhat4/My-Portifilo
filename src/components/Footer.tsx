import { Mail, MessageCircle, Cpu } from "lucide-react";
import { SiGithub, SiYoutube, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { Container } from "./ui/Container";
import { profile } from "@/data/profile";
import { professionalLinks, youtube, commandCode } from "@/data/links";

export function Footer() {
  const github = professionalLinks.find((l) => l.name === "GitHub");
  const linkedin = professionalLinks.find((l) => l.name === "LinkedIn");

  return (
    <footer className="border-t border-border bg-bg-elevated">
      <Container className="py-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-semibold text-text">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent/10 border border-accent/30 text-accent">
                <Cpu size={16} aria-hidden />
              </span>
              {profile.fullName}
            </div>
            <p className="mt-2 text-sm text-text-muted">
              {profile.university.department.split(" ").slice(0, 3).join(" ")} Student ·{" "}
              {profile.location}
            </p>
            <p className="mt-3 max-w-sm text-sm text-text-faint">{profile.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {github ? (
              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-text-muted hover:border-accent/60 hover:text-accent transition-colors"
              >
                <SiGithub size={17} aria-hidden />
              </a>
            ) : null}
            {linkedin ? (
              <a
                href={linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-text-muted hover:border-accent/60 hover:text-accent transition-colors"
              >
                <FaLinkedin size={17} aria-hidden />
              </a>
            ) : null}
            <a
              href={youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-text-muted hover:border-accent/60 hover:text-accent transition-colors"
            >
              <SiYoutube size={17} aria-hidden />
            </a>
            <a
              href={commandCode.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram — CommandCode"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-text-muted hover:border-accent/60 hover:text-accent transition-colors"
            >
              <SiInstagram size={17} aria-hidden />
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-text-muted hover:border-accent/60 hover:text-accent transition-colors"
            >
              <Mail size={17} aria-hidden />
            </a>
            <a
              href={`https://wa.me/${profile.contact.whatsapp.replace(/[^\d]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-text-muted hover:border-accent/60 hover:text-accent transition-colors"
            >
              <MessageCircle size={17} aria-hidden />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.fullName}. All rights reserved.</p>
          <p className="mono-label">SYSTEM: {profile.system.system}</p>
        </div>
      </Container>
    </footer>
  );
}

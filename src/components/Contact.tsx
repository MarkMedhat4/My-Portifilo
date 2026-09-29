import { Mail, Phone, MessageCircle } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeader } from "./ui/SectionHeader";
import { WhatsAppForm } from "./WhatsAppForm";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Get In Touch"
        title="Let's Work Together"
        description="Open to internships, collaborations, and engineering or software work. Send a message and it goes straight to WhatsApp."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="space-y-4">
          <a
            href={`mailto:${profile.contact.email}`}
            className="flex items-center gap-4 rounded-[var(--radius-lg)] border border-border bg-surface p-5 transition-colors hover:border-accent/40"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 border border-accent/30 text-accent">
              <Mail size={19} aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="mono-label text-text-faint">Email</p>
              <p className="mt-0.5 truncate text-sm text-text">{profile.contact.email}</p>
            </div>
          </a>

          <a
            href={`https://wa.me/${profile.contact.whatsapp.replace(/[^\d]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-[var(--radius-lg)] border border-border bg-surface p-5 transition-colors hover:border-accent/40"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 border border-accent/30 text-accent">
              <MessageCircle size={19} aria-hidden />
            </span>
            <div>
              <p className="mono-label text-text-faint">WhatsApp</p>
              <p className="mt-0.5 text-sm text-text">{profile.contact.whatsapp}</p>
            </div>
          </a>

          <a
            href={`tel:${profile.contact.phoneOnly}`}
            className="flex items-center gap-4 rounded-[var(--radius-lg)] border border-border bg-surface p-5 transition-colors hover:border-accent/40"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 border border-accent/30 text-accent">
              <Phone size={19} aria-hidden />
            </span>
            <div>
              <p className="mono-label text-text-faint">Phone</p>
              <p className="mt-0.5 text-sm text-text">{profile.contact.phoneOnly}</p>
            </div>
          </a>
        </div>

        <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 md:p-8">
          <WhatsAppForm />
        </div>
      </div>
    </Section>
  );
}

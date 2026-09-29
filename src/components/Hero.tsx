import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "./ui/Container";
import { EngineeringBackground } from "./EngineeringBackground";
import { profile, getAge } from "@/data/profile";

export function Hero() {
  const age = getAge();

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 scroll-mt-24"
    >
      <EngineeringBackground />

      <Container className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <div className="mono-label mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-accent">
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              SYS.STATUS: {profile.system.status}
            </span>
            <span className="text-text-faint">·</span>
            <span>NODE: {profile.system.node}</span>
            <span className="text-text-faint">·</span>
            <span>{profile.system.location}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold tracking-tight text-text text-balance leading-[1.08]">
            {profile.fullName}
          </h1>

          <p className="mt-5 max-w-xl text-lg md:text-xl text-text-muted leading-relaxed text-balance">
            {profile.heroSubtitle}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Electronics", "Embedded Systems", "Software", "IoT", "AI", "Education"].map(
              (tag) => (
                <span
                  key={tag}
                  className="mono-label rounded-full border border-border-strong px-3 py-1.5 text-text-muted"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-accent px-5 py-3 text-sm md:text-base font-medium text-[#03211d] hover:bg-accent-strong transition-colors"
            >
              Explore My Work
              <ArrowRight size={18} aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-border-strong px-5 py-3 text-sm md:text-base font-medium text-text hover:border-accent/60 hover:text-accent transition-colors"
            >
              <MessageCircle size={18} aria-hidden />
              Contact Me
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 max-w-md gap-6 border-t border-border pt-6">
            <div>
              <dt className="mono-label text-text-faint">Age</dt>
              <dd className="mt-1 font-display text-xl text-text">{age}</dd>
            </div>
            <div>
              <dt className="mono-label text-text-faint">Based in</dt>
              <dd className="mt-1 font-display text-xl text-text">Aswan, EG</dd>
            </div>
            <div>
              <dt className="mono-label text-text-faint">Grad.</dt>
              <dd className="mt-1 font-display text-xl text-text">
                {profile.university.expectedGraduation}
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-lg)] border border-border-strong bg-surface">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.fullName}`}
              fill
              priority
              sizes="(min-width: 1024px) 380px, 320px"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-[var(--radius-md)] border border-border bg-bg/70 backdrop-blur-md px-4 py-3">
              <p className="mono-label text-accent">FIELD: {profile.system.field}</p>
              <p className="mt-1 text-sm text-text-muted">
                {profile.university.department} · {profile.university.campus}
              </p>
            </div>
          </div>
          <div
            aria-hidden
            className="absolute -inset-3 -z-10 rounded-[calc(var(--radius-lg)+12px)] border border-dashed border-border"
          />
        </div>
      </Container>
    </section>
  );
}

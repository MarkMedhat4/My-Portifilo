# Mark Medhat — Engineering Portfolio

A premium, SaaS-style personal engineering portfolio for **Mark Medhat Micheal Shaker** —
Electronics & Communications Engineering student, software developer, embedded systems
and IoT engineer, and technical educator. Built as a real digital product, not a
traditional CV/resume site.

## Concept

The site combines an engineering visual language (circuit traces, signal nodes, technical
grids) with clean, modern SaaS-product UI (cards, clear hierarchy, smooth motion) to answer,
within seconds: **who Mark is, what he builds, and how to reach him.**

## Features

- Dynamic age calculation from birth date (never hardcoded)
- Filterable project showcase (Electronics / Embedded / IoT / Software / Web / Education / AI)
- Expandable, categorized technical skills
- Experience & activities timeline (internship, content creation, GDGoC, ICPC)
- Education timeline with training & certifications sub-sections
- 21 real, verified certificates — each viewable as an actual PDF, organized by category
- CommandCode, Virelo Academy, and YouTube presence sections
- WhatsApp-based contact form — no backend required
- Full SEO: metadata, Open Graph, Twitter card, JSON-LD (Person), sitemap, robots.txt
- Mobile-first, responsive, accessible (semantic HTML, keyboard nav, focus states,
  `prefers-reduced-motion` support)
- Self-hosted variable fonts (Inter, Space Grotesk, JetBrains Mono) — no runtime
  dependency on Google Fonts

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Motion** (Framer Motion successor) for project-filter transitions
- **React Hook Form + Zod** for the contact form
- **lucide-react** for UI icons, **react-icons** (Simple Icons / Font Awesome) for brand
  logos (GitHub, LinkedIn, YouTube, Instagram, Facebook, WhatsApp)

## Project Structure

```
src/
├── app/                  # Routes, layout, SEO (sitemap.ts, robots.ts)
├── components/           # UI components (one concern per file)
│   └── ui/               # Primitives: Container, Section, Button, Card, Timeline...
├── data/                 # Source-of-truth content (see "Updating content" below)
└── lib/                  # Small utilities (cn, WhatsApp URL builder)
public/
├── images/profile.jpg    # Profile photo
└── certificates/
    ├── pdf/              # One real PDF per certificate
    └── thumb/            # One JPG thumbnail per certificate
```

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve the production build
npm run lint
```

## Updating Content

All portfolio content lives in `src/data/*.ts` — edit these, no JSX changes needed:

| File                 | Controls                                            |
|----------------------|------------------------------------------------------|
| `profile.ts`         | Name, birth date (age is calculated), bio, contact    |
| `projects.ts`        | Project cards + filter categories                     |
| `skills.ts`          | Skills grouped by category                            |
| `experience.ts`      | Work experience timeline                              |
| `education.ts`       | Degree, institution, coursework                       |
| `training.ts`        | Training & development timeline                       |
| `certifications.ts`  | Certificate metadata (see below for files)             |
| `achievements.ts`    | Competition results & activities                       |
| `links.ts`           | GitHub/LinkedIn/etc, CommandCode, Virelo Academy       |
| `nav.ts`             | Navbar items                                           |

### Replacing the profile photo

Replace `public/images/profile.jpg` with a new image of the same aspect ratio
(portrait, ~4:5 works best). No code changes required.

### Adding a project

Add an entry to the `projects` array in `src/data/projects.ts`. Pick one or more
`categories` from the existing `ProjectCategory` union (or extend it) so the project
shows up correctly in the filter bar.

### Adding a certificate

1. Add the certificate PDF to `public/certificates/pdf/<slug>.pdf`.
2. Add a matching thumbnail image to `public/certificates/thumb/<slug>.jpg`
   (a rendered first page works well — keep it under ~200KB).
3. Add an entry to the `certificates` array in `src/data/certifications.ts` with a
   matching `slug`, and a `category` from `CertificateCategory`.

Never invent certificate titles, organizations, or dates — only add certificates you
can actually attach a document for.

### How the WhatsApp contact form works

`src/components/WhatsAppForm.tsx` validates the name/email/message fields with Zod,
then builds a `https://wa.me/<number>?text=<encoded message>` URL
(`src/lib/utils.ts` → `buildWhatsAppUrl`) and opens it in a new tab. No server, API
route, or database is involved — the visitor's own WhatsApp (app or web) sends the
message directly to Mark's number in `profile.ts`.

## Deployment

The project is a standard Next.js app — deploy to Vercel (recommended), or any
Node.js host that supports `next build && next start`. Before going live:

1. Update `siteUrl` in `src/app/layout.tsx`, `src/app/sitemap.ts`, and
   `src/app/robots.ts` to the real production domain.
2. Confirm the profile photo and all certificate PDFs are in place.
3. Replace the default favicon (`src/app/favicon.ico`) with real branding.

No environment variables are required — the site has no backend or third-party API
calls.

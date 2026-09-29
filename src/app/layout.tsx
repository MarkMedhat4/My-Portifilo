import type { Metadata, Viewport } from "next";
// Self-hosted variable fonts (no runtime call to Google Fonts — faster and
// works fully offline). Weights are controlled via font-variation-settings.
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/600.css";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/profile";
import { professionalLinks } from "@/data/links";

// TODO: replace with the site's real deployed URL before launch.
const siteUrl = "https://markmedhat.dev";
const title = "Mark Medhat — Electronics & Communication Engineer | Software & Embedded Systems";
const description = profile.summary;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Mark Medhat",
  },
  description,
  keywords: [
    "Mark Medhat",
    "Electronics Engineer",
    "Communications Engineering",
    "Embedded Systems",
    "IoT Engineer",
    "Software Developer",
    "AASTMT",
    "Aswan",
  ],
  authors: [{ name: profile.fullName }],
  creator: profile.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title,
    description,
    siteName: `${profile.shortName} — Engineering Portfolio`,
    images: [
      { url: "/images/og-cover.jpg", width: 1200, height: 630, alt: profile.fullName },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-cover.jpg"],
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#06080a",
  width: "device-width",
  initialScale: 1,
};

const github = professionalLinks.find((l) => l.name === "GitHub");
const linkedin = professionalLinks.find((l) => l.name === "LinkedIn");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  jobTitle: profile.titles,
  description: profile.summary,
  url: siteUrl,
  image: `${siteUrl}${profile.photo}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Aswan",
    addressCountry: "EG",
  },
  email: `mailto:${profile.contact.email}`,
  sameAs: [github?.url, linkedin?.url].filter(Boolean),
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: profile.university.name,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-bg text-text antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-[#03211d]"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

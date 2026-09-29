"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Cpu } from "lucide-react";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-border py-2.5"
          : "bg-transparent py-4 md:py-5"
      )}
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link
          href="#home"
          className="flex items-center gap-2 font-display font-semibold text-text tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent/10 border border-accent/30 text-accent">
            <Cpu size={17} aria-hidden />
          </span>
          <span className="hidden sm:inline">{profile.shortName}</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 text-sm text-text-muted hover:text-text rounded-md transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-[var(--radius-md)] bg-accent px-4 py-2.5 text-sm font-medium text-[#03211d] hover:bg-accent-strong transition-colors"
          >
            Let&apos;s Work Together
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-text border border-border-strong"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-bg border-t border-border transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full pointer-events-none"
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col p-4 gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3.5 text-base text-text border-b border-border last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-accent px-4 py-3 text-sm font-medium text-[#03211d]"
          >
            Let&apos;s Work Together
          </a>
        </nav>
      </div>
    </header>
  );
}

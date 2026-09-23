"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "What we do", href: "#pillars" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 flex justify-center px-4 pt-0 transition-[padding] duration-300 ease-out data-[scrolled=true]:pt-3" data-scrolled={scrolled}>
      <div
        className={`flex w-full items-center justify-between transition-all duration-300 ease-out ${
          scrolled
            ? "max-w-2xl rounded-full border border-border/60 bg-background/60 px-5 py-2.5 shadow-lg shadow-foreground/5 backdrop-blur-xl"
            : "max-w-6xl border-b border-border bg-background/90 px-6 py-4 backdrop-blur"
        }`}
      >
        {/* Desktop logo — real mark */}
        <Link
          href="/"
          className="hidden items-center gap-2 md:flex"
          onClick={() => setOpen(false)}
        >
          <Image
            src={!scrolled ? "/aerith-icon.png" : "/aerith-icon-wordmark.png"}
            alt="Aerith Global"
            width={scrolled ? 32 : 128}
            height={scrolled ? 32 : 128}
            className="transition-all duration-300"
            priority
          />
        </Link>

        {/* Mobile logo — placeholder until the mobile mark is provided */}
        <Link
          href="/"
          className="flex items-center gap-2 md:hidden"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/aerith-icon-wordmark.png"
            alt="Aerith Global"
            width={32}
            height={32}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Request a quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-full bg-foreground transition-transform ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-foreground transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-[1.5px] w-full bg-foreground transition-transform ${
                open ? "translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu panel — anchored under the capsule/bar, not inside it */}
      {open && (
        <nav
          className={`absolute left-4 right-4 top-full mt-2 flex flex-col gap-1 rounded-2xl border border-border bg-background/95 px-6 py-4 shadow-lg backdrop-blur-xl md:hidden ${
            scrolled ? "max-w-2xl" : "max-w-6xl"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-2 rounded-full bg-primary px-5 py-2 text-center text-sm font-medium text-primary-foreground"
            onClick={() => setOpen(false)}
          >
            Request a quote
          </Link>
        </nav>
      )}
    </header>
  );
}
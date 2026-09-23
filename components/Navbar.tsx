"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "What we do", href: "#pillars" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Desktop logo — real mark */}
        <Link
          href="/"
          className="hidden items-center gap-2 md:flex"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/aerith-icon.png"
            alt="Aerith Global"
            width={128}
            height={128}
            // className="h-16 w-16"
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
            className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Request a quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
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

      {/* Mobile menu panel */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden">
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
            className="mt-2 rounded-md bg-primary px-5 py-2 text-center text-sm font-medium text-primary-foreground"
            onClick={() => setOpen(false)}
          >
            Request a quote
          </Link>
        </nav>
      )}
    </header>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "What we do", href: "#pillars" },
  { label: "Process", href: "#process" },
  { label: "Industries", href: "#industries" },
  { label: "Products", href: "#products" },
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
            width={200}
            height={200}
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
            width={40}
            height={40}
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
            href="/quote"
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
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-5 w-5">
            <Menu
              aria-hidden="true"
              className={`absolute inset-0 transition-all duration-200 ${
                open
                  ? "rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
              size={20}
              strokeWidth={2}
            />
            <X
              aria-hidden="true"
              className={`absolute inset-0 transition-all duration-200 ${
                open
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-0 opacity-0"
              }`}
              size={20}
              strokeWidth={2}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu panel */}
      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={`flex w-full flex-col gap-1 overflow-hidden bg-background transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          open
            ? "max-h-96 border-t border-border px-6 py-4 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            tabIndex={open ? 0 : -1}
            className="py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/quote"
          tabIndex={open ? 0 : -1}
          className="mt-2 rounded-md bg-primary px-5 py-2 text-center text-sm font-medium text-primary-foreground"
          onClick={() => setOpen(false)}
        >
          Request a quote
        </Link>
      </nav>
    </header>
  );
}

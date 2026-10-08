"use client";

import React from "react";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-20 border-t border-background/15 bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/70">
              Verified aerospace and industrial parts, sourced and delivered
              with the traceability and speed that keep fleets moving.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer navigation">
            <h2 className="font-heading text-lg">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm text-background/70">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#pillars"
                  className="transition-colors hover:text-primary"
                >
                  What we do
                </Link>
              </li>
              <li>
                <Link
                  href="/#process"
                  className="transition-colors hover:text-primary"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="/#industries"
                  className="transition-colors hover:text-primary"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  className="transition-colors hover:text-primary"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="transition-colors hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="font-heading text-lg">Talk to our team</h2>
            <ul className="mt-5 space-y-4 text-sm text-background/70">
              <li>
                <a
                  href="mailto:hamza@aerithglobal.com"
                  className="flex items-center gap-3 transition-colors hover:text-primary"
                >
                  <Mail size={16} className="text-primary" aria-hidden="true" />
                  hamza@aerithglobal.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923032354439"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Aerith Global on WhatsApp"
                  className="flex items-center gap-3 transition-colors hover:text-primary"
                >
                  <Image
                    src="/whatsapp.png"
                    alt=""
                    width={16}
                    height={16}
                    className="rounded-sm"
                  />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>411, Balad Trade Centre, Block-3 BMCHS, Karachi</span>
              </li>
            </ul>
            <Link
              href="/quote"
              className="mt-7 inline-block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Request a quote
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-background/15 pt-6 text-sm text-background/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} Aerith Global. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-background/20 text-background/70 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

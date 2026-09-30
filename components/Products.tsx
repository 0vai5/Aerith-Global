"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

// PLACEHOLDER CONTENT — categories and descriptions need client confirmation.
const categories = [
  {
    slug: "airframe-structural",
    title: "Airframe & structural",
    body: "Panels, fittings, fasteners and structural hardware with full documentation.",
  },
  {
    slug: "avionics-instruments",
    title: "Avionics & instruments",
    body: "Cockpit instruments, navigation and communication units, sourced and verified.",
  },
  {
    slug: "engine-apu",
    title: "Engine & APU components",
    body: "Rotables and consumables for engines and auxiliary power units.",
  },
  {
    slug: "landing-gear-hydraulics",
    title: "Landing gear & hydraulics",
    body: "Actuators, seals, valves and hydraulic components for fleet maintenance.",
  },
  {
    slug: "ground-support",
    title: "Ground support equipment",
    body: "Tooling and GSE for MROs and ground operations.",
  },
  {
    slug: "industrial-parts",
    title: "Industrial parts",
    body: "Bearings, valves, electrical and mechanical parts for industrial buyers.",
  },
];

export function Products() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const [reduceMotion] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect(); // play once, never repeat
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-sm text-muted-foreground">Products</p>
            <h2 className="mt-4 font-heading text-3xl leading-[1.1] tracking-tight text-foreground md:text-4xl">
              What we source.
            </h2>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Can&apos;t see the part you need? Send us the part number. We
              source beyond this list.
            </p>
            <Link
              href="/quote"
              className="mt-8 inline-block text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
            >
              Request a quote
            </Link>
          </div>

          <div ref={ref} className="md:col-span-8">
            <ul>
              {categories.map((item, i) => (
                <li
                  key={item.slug}
                  className="border-t border-border last:border-b"
                  style={
                    reduceMotion
                      ? undefined
                      : shown
                        ? { animation: `rise-in 0.6s ease-out ${i * 0.08}s both` }
                        : { opacity: 0 }
                  }
                >
                  <Link
                    href={`/quote?category=${encodeURIComponent(item.slug)}`}
                    className="group grid grid-cols-[2.5rem_1fr_auto] items-start gap-4 py-6"
                  >
                    <span className="pt-1 text-xs tabular-nums text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block font-heading text-xl text-foreground transition-colors group-hover:text-primary">
                        {item.title}
                      </span>
                      <span className="mt-1.5 block max-w-md text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="mt-1 h-5 w-5 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
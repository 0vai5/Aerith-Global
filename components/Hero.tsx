import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-20 md:pt-28">
        <div className="max-w-2xl">
          <p
            className="text-sm text-muted-foreground"
            style={{ animation: "rise-in 0.6s ease-out 0.1s both" }}
          >
            Aerith Global
          </p>
          <h1
            className="mt-4 font-heading text-4xl leading-[1.1] tracking-tight text-foreground md:text-5xl"
            style={{ animation: "rise-in 0.6s ease-out 0.25s both" }}
          >
            Perspective so fresh, it soars.
          </h1>
          <p
            className="mt-6 max-w-lg text-lg text-muted-foreground"
            style={{ animation: "rise-in 0.6s ease-out 0.4s both" }}
          >
            Verified aerospace and industrial parts, sourced and delivered
            with the traceability and speed that keep fleets moving.
          </p>
          <div
            className="mt-9 flex flex-wrap items-center gap-4"
            style={{ animation: "rise-in 0.6s ease-out 0.55s both" }}
          >
            <Link
              href="#contact"
              className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Request a quote
            </Link>
            <Link
              href="#pillars"
              className="text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
            >
              What we do
            </Link>
          </div>
        </div>
      </div>

      <svg
        viewBox="0 0 1200 400"
        className="pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M -50 350 C 250 380, 550 60, 850 120 S 1150 40, 1260 -20"
          fill="none"
          stroke="var(--color-primary)"
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeDasharray="1400"
          strokeDashoffset="1400"
          style={{ animation: "flight-path-draw 1.8s ease-out 0.3s forwards" }}
        />
      </svg>
    </section>
  );
}
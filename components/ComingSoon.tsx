import Image from "next/image";

export default function ComingSoon() {
  return (
    <>
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-background text-foreground">
      {/* Minimal header — logo only, no section links since this is the only page live */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center px-6 py-8">
        <Image
          src="/aerith-icon.png"
          alt="Aerith Global"
          width={128}
          height={128}
          priority
        />
      </header>

      {/* Centered content */}
      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-6 text-center">
        <p
          className="text-sm font-medium tracking-wide text-muted-foreground"
          style={{ animation: "rise-in 0.6s ease-out 0.1s both" }}
        >
          Aerith Global
        </p>
        <h1
          className="mt-4 font-heading text-4xl leading-[1.15] tracking-tight text-foreground md:text-5xl"
          style={{ animation: "rise-in 0.6s ease-out 0.25s both" }}
        >
          Something new is taking off.
        </h1>
        <p
          className="mt-6 max-w-md text-lg text-muted-foreground"
          style={{ animation: "rise-in 0.6s ease-out 0.4s both" }}
        >
          We&apos;re building a new home for Aerith Global&apos;s aerospace
          and industrial parts sourcing. Perspective so fresh, it soars —
          landing soon.
        </p>
        <div
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
          style={{ animation: "rise-in 0.6s ease-out 0.55s both" }}
        >
          <a
            href="mailto:hamza@aerithglobal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Get in touch
          </a>
          <a
            href="tel:+923032354439"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
          >
            +92-303-2354439
          </a>
        </div>
      </div>

      <footer className="relative z-10 mx-auto w-full max-w-6xl px-6 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Aerith Global. All rights reserved.
      </footer>

      {/* Flight path — single draw-in on load, then a beam loops along it once revealed */}
      <svg
        viewBox="0 0 1200 800"
        className="pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M -50 650 C 250 700, 550 300, 850 380 S 1150 200, 1260 100"
          fill="none"
          stroke="var(--color-primary)"
          strokeOpacity="0.15"
          strokeWidth="2"
        />
        <path
          d="M -50 650 C 250 700, 550 300, 850 380 S 1150 200, 1260 100"
          fill="none"
          stroke="var(--color-primary)"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeDasharray="1400"
          strokeDashoffset="1400"
          style={{ animation: "flight-path-draw 1.8s ease-out 0.3s forwards" }}
        />
        <path
          d="M -50 650 C 250 700, 550 300, 850 380 S 1150 200, 1260 100"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="60 1340"
          style={{
            opacity: 0,
            animation:
              "beam-fade-in 0.4s ease-out 2.1s forwards, beam-move 4.5s linear 2.1s infinite",
          }}
        />
      </svg>
    </main>

    </>
  );
}
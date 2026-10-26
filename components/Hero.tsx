import Link from "next/link";
import { HeroVideo } from "@/components/HeroVideo";

type HeroMedia = { mp4: string };

// PLACEHOLDER: no video yet. When the client's footage is ready, replace
// `null` with:
// { mp4: "/video/hero.mp4", webm: "/video/hero.webm", poster: "/video/hero-poster.jpg" }
const HERO_MEDIA = { mp4: "/video.mp4" } as HeroMedia | null;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      {/* Background media layer */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {HERO_MEDIA ? (
          <>
            <HeroVideo mp4={HERO_MEDIA.mp4} />
          </>
        ) : (
          <>
            {/* Placeholder: soft brand-blue glow where the video will sit */}
            <div className="absolute inset-0 bg-[radial-gradient(60%_90%_at_78%_35%,color-mix(in_srgb,var(--primary)_16%,transparent),transparent)]" />
            {process.env.NODE_ENV !== "production" && (
              <div className="absolute bottom-6 right-6 hidden rounded-md border border-dashed border-primary/40 bg-background/70 px-4 py-3 text-xs text-muted-foreground backdrop-blur md:block">
                Hero video placeholder · 1920×1080 · 8–12s seamless loop
              </div>
            )}
          </>
        )}

        {/* Legibility overlay: solid wash on mobile, left-to-right fade on desktop */}
        <div className="absolute inset-0 bg-background/80 md:bg-transparent md:bg-linear-to-r md:from-background md:via-background/80 md:to-background/10" />

        {/* Blend into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent" />
      </div>

      <div className="relative z-20 mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-20 md:min-h-150 md:justify-center md:pt-28">
        <div className="max-w-2xl">
          <p
            className="text-md text-muted-foreground"
            style={{ animation: "rise-in 0.6s ease-out 0.1s both" }}
          >
            aerith global LLC.
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
              href="/quote"
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

      {/* Flight path: draws once, sits above the video and below the text */}
      {/* <svg
        viewBox="0 0 1200 400"
        className="pointer-events-none absolute inset-0 z-10 h-full w-full"
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
      </svg> */}
    </section>
  );
}
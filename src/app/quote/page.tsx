import { Suspense } from "react";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata = {
  title: "Request a Quote — Aerith Global",
  description:
    "Send Aerith Global your part number, quantity and timeline and we'll get back to you with sourcing options.",
};

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-sm text-muted-foreground">Request a quote</p>
              <h1 className="mt-4 font-heading text-4xl leading-[1.1] tracking-tight text-foreground md:text-5xl">
                Tell us what you need.
              </h1>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Send us a part number, a description, or a photo reference
                and we&apos;ll come back with sourcing options and lead
                time.
              </p>

              <div className="mt-10 space-y-1 text-sm">
                <p className="text-foreground">Prefer to talk directly?</p>
                <p>
                  <a
                    className="text-muted-foreground hover:text-primary"
                    href="mailto:hamza@aerithglobal.com"
                  >
                    hamza@aerithglobal.com
                  </a>
                </p>
                <p>
                  <a
                    className="text-muted-foreground hover:text-primary"
                    href="tel:+923032354439"
                  >
                    +92-303-2354439
                  </a>
                </p>
              </div>
            </div>

            <div className="md:col-span-8">
              <Suspense fallback={null}>
                <QuoteForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
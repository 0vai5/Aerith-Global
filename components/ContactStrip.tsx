export function ContactStrip() {
  return (
    <section id="contact" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-foreground px-8 py-14 text-background md:px-16 md:py-16">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-medium text-primary">Get started</p>
              <h2 className="mt-3 font-heading text-3xl tracking-tight md:text-4xl">
                Ready to source with confidence?
              </h2>
              <p className="mt-4 text-background/70">
                Reach Muhammad Hamza, Sales Director, for sourcing and quote
                requests.
              </p>
              <a
                href="mailto:hamza@aerithglobal.com"
                className="mt-8 inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Request a quote
              </a>
            </div>
            <div className="space-y-1 text-sm">
              <p>
                <a
                  className="hover:text-primary"
                  href="mailto:hamza@aerithglobal.com"
                >
                  hamza@aerithglobal.com
                </a>
              </p>
              <p>
                <a className="hover:text-primary" href="tel:+923032354439">
                  +92-303-2354439
                </a>
              </p>
              <p className="text-background/70">
                411, Balad Trade Centre, Block-3 BMCHS, Karachi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
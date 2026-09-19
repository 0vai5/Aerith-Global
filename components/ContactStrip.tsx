export function ContactStrip() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-foreground text-background"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-heading text-2xl md:text-3xl">
            Talk to our team.
          </h2>
          <p className="mt-2 max-w-md text-sm text-background/70">
            Reach Muhammad Hamza, Sales Director, for sourcing and quote
            requests.
          </p>
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
    </section>
  );
}
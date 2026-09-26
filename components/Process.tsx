const steps = [
  {
    number: "01",
    title: "Inquiry",
    body: "Share your part number or spec sheet. We confirm availability and lead time before anything else moves forward.",
  },
  {
    number: "02",
    title: "Sourcing & verification",
    body: "We trace the part to a verified source and confirm certification, batch, and condition against your requirement.",
  },
  {
    number: "03",
    title: "Quality assurance",
    body: "Every part is inspected against spec before it ships — not discovered as a problem after it lands.",
  },
  {
    number: "04",
    title: "Delivery & logistics",
    body: "Customs and freight are handled as one continuous chain, from Karachi to wherever your fleet operates.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="border-t border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">How we work</p>
          <h2 className="mt-3 font-heading text-3xl tracking-tight text-foreground md:text-4xl">
            A process built around accountability at every step.
          </h2>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="font-heading text-sm text-muted-foreground">
                {step.number}
              </span>
              <h3 className="mt-2 font-heading text-lg text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
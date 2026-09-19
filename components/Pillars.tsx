const pillars = [
  {
    title: "Sourcing",
    body: "We trace parts back to verified origin, so every shipment arrives with paperwork that holds up to scrutiny.",
  },
  {
    title: "Quality assurance",
    body: "Every part is inspected against spec before it leaves our hands, not after a customer flags a problem.",
  },
  {
    title: "Global logistics",
    body: "From Karachi to wherever your fleet operates, we handle customs and freight as one continuous chain.",
  },
];

export function Pillars() {
  return (
    <section id="pillars" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="border-t border-border pt-6">
            <h3 className="font-heading text-xl text-foreground">
              {pillar.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {pillar.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
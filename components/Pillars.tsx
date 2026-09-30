import { Search, ShieldCheck, Globe } from "lucide-react";

const pillars = [
  {
    icon: Search,
    title: "Sourcing",
    body: "Every part is traced back to a verified origin — so what arrives has the paperwork to back it up, not just the label.",
  },
  {
    icon: ShieldCheck,
    title: "Quality assurance",
    body: "Parts are inspected against spec before they leave our hands, not after a customer flags a problem downstream.",
  },
  {
    icon: Globe,
    title: "Global logistics",
    body: "From Karachi to wherever your fleet operates, customs and freight move as one continuous, tracked chain.",
  },
];

export function Pillars() {
  return (
    <section id="pillars" className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-primary">What we do</p>
        <h2 className="mt-3 font-heading text-3xl tracking-tight text-foreground md:text-4xl">
          Built for procurement teams who can&apos;t afford surprises.
        </h2>
      </div>
      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, body }) => (
          <div key={title} className="border-t border-border pt-6">
            <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
            <h3 className="mt-4 font-heading text-xl text-foreground">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
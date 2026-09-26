import { Plane, Wrench, Shield, Factory } from "lucide-react";

// NOTE: This list is a placeholder. The PRD flags an open question —
// whether "Industries" (per the client's business card) means broader
// scope than aerospace/avionics specifically. Confirm with Hamza before
// treating this section as final.
const industries = [
  {
    icon: Plane,
    title: "Commercial Aviation",
    body: "Airline operators sourcing verified parts to keep aircraft flying on schedule.",
  },
  {
    icon: Wrench,
    title: "MRO Providers",
    body: "Maintenance, repair, and overhaul shops needing traceable parts on tight turnaround.",
  },
  {
    icon: Shield,
    title: "Defense & Government",
    body: "Institutional buyers with strict documentation and compliance requirements.",
  },
  {
    icon: Factory,
    title: "Industrial Manufacturing",
    body: "Manufacturers sourcing precision components beyond aerospace applications.",
  },
];

export function Industries() {
  return (
    <section id="industries" className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-primary">Who we serve</p>
        <h2 className="mt-3 font-heading text-3xl tracking-tight text-foreground md:text-4xl">
          Industries that depend on getting it right the first time.
        </h2>
      </div>
      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        {industries.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="rounded-lg border border-border bg-card p-6"
          >
            <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
            <h3 className="mt-4 font-heading text-lg text-foreground">
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
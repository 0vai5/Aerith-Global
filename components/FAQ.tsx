import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// PLACEHOLDER CONTENT: every answer needs client confirmation (TODO: Hamza).
const faqs = [
  {
    q: "How do I request a quote?",
    a: "Use the quote form and send us the part number, description and quantity. If you only have a photo or a drawing, include that in your message and we will identify the part for you.",
  },
  {
    q: "How quickly will I hear back?",
    // TODO: confirm real response time
    a: "We aim to respond to every quote request within one business day. Urgent AOG requests can be flagged in the form so they are handled first.",
  },
  {
    q: "Do you supply parts with traceability documentation?",
    // TODO: confirm which documents Aerith can actually provide (certificates of conformity, release certificates, etc.)
    a: "Yes. We source from verified origins and each shipment is supported by the paperwork your quality team needs. Tell us your documentation requirements when you request a quote.",
  },
  {
    q: "Can you source parts that are hard to find or obsolete?",
    a: "Often, yes. Our sourcing network spans multiple regions, so send us the part number and we will tell you what is available before you commit to anything.",
  },
  {
    q: "Which industries do you serve?",
    // TODO: confirm scope. The business card says "Industries" (plural).
    a: "We work with airlines, MROs and industrial buyers. If your sector is not listed, get in touch and we will let you know if we can help.",
  },
  {
    q: "Do you ship internationally?",
    // TODO: confirm shipping regions and who handles customs
    a: "Yes. We ship from Karachi and manage customs and freight as one continuous chain, so you deal with a single point of contact from order to delivery.",
  },
  {
    q: "Is there a minimum order quantity?",
    // TODO: confirm MOQ policy
    a: "It depends on the part and the supplier. Include your quantity in the quote request and we will confirm what is possible.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function FAQ() {
  return (
    <section id="faq" className="border-t border-border">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-sm text-muted-foreground">FAQ</p>
            <h2 className="mt-4 font-heading text-3xl leading-[1.1] tracking-tight text-foreground md:text-4xl">
              Good questions.
            </h2>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Don&apos;t see yours? Ask us directly and we&apos;ll get back to
              you.
            </p>
            <Link
              href="/quote"
              className="mt-8 inline-block text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
            >
              Request a quote
            </Link>
          </div>

          <div className="md:col-span-8">
            <Accordion className="border-b border-border">
              {faqs.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`item-${i}`}
                  className="border-t border-border"
                >
                  <AccordionTrigger className="py-6 text-left font-heading text-lg text-foreground hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
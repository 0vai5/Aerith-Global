"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// Keep in sync with the slugs used in components/Products.tsx
const categories = [
  { slug: "airframe-structural", label: "Airframe & structural" },
  { slug: "avionics-instruments", label: "Avionics & instruments" },
  { slug: "engine-apu", label: "Engine & APU components" },
  { slug: "landing-gear-hydraulics", label: "Landing gear & hydraulics" },
  { slug: "ground-support", label: "Ground support equipment" },
  { slug: "industrial-parts", label: "Industrial parts" },
  { slug: "other", label: "Other / not sure" },
];

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteForm() {
  const searchParams = useSearchParams();
  const initialCategory = categories.some(
    (c) => c.slug === searchParams.get("category"),
  )
    ? searchParams.get("category")!
    : "";

  const [status, setStatus] = useState<Status>("idle");
  const [category, setCategory] = useState(initialCategory);
  const [urgency, setUrgency] = useState("standard");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    data.category = category;
    data.urgency = urgency;

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setCategory("");
      setUrgency("standard");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-md border border-border bg-card p-8">
        <p className="font-heading text-xl text-foreground">
          Thanks — we&apos;ve got it.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          We&apos;ll be in touch shortly. If it&apos;s urgent, call{" "}
          <a
            href="tel:+923032354439"
            className="text-foreground underline decoration-border underline-offset-4 hover:decoration-primary"
          >
            +92-303-2354439
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((c) => (
                <SelectItem key={c.slug} value={c.slug}>
                  {c.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="urgency">Timeline</Label>
          <Select value={urgency} onValueChange={setUrgency}>
            <SelectTrigger id="urgency">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard</SelectItem>
              <SelectItem value="urgent">Urgent / AOG</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="quantity">Quantity</Label>
        <Input id="quantity" name="quantity" placeholder="e.g. 4 units" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Part number, description, or details</Label>
        <Textarea id="message" name="message" required rows={5} />
      </div>

      <div className="flex items-center gap-4">
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send request"}
        </Button>
        {status === "error" && (
          <p className="text-sm text-destructive">
            Something went wrong — please try again or email us directly.
          </p>
        )}
      </div>
    </form>
  );
}
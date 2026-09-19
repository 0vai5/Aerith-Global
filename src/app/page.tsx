import { ContactStrip } from "@/components/ContactStrip";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Pillars />
      <ContactStrip />
    </main>
  );
}
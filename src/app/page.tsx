import { ContactStrip } from "@/components/ContactStrip";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { Pillars } from "@/components/Pillars";
import { Process } from "@/components/Process";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Pillars />
      <Process />
      <Industries />
      <ContactStrip />
    </main>
  );
}
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-background/70 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/aerith-icon.png"
            alt="Aerith Global"
            width={128}
            height={128}
          />
        </div>
        <p>
          © {new Date().getFullYear()} Aerith Global. Perspective so fresh,
          it soars.
        </p>
      </div>
    </footer>
  );
}
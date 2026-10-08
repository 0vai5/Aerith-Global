import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "What we do", href: "#pillars" },
  { label: "Process", href: "#process" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Image
            src="/aerith-icon.png"
            alt="Aerith Global"
            width={200}
            height={200}
          />
          <nav className="flex flex-wrap gap-6 text-sm text-foreground/70">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-sm text-foreground/50">
          © {new Date().getFullYear()} aerith global. Perspective so fresh,
          it soars.
        </p>
      </div>
    </footer>
  );
}
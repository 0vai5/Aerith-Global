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
    <footer className="border-t border-border/20 bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Image
            src="/aerith-icon-wordmark.png"
            alt="Aerith Global"
            width={40}
            height={40}
          />
          <nav className="flex flex-wrap gap-6 text-sm text-background/70">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-background"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-sm text-background/50">
          © {new Date().getFullYear()} Aerith Global. Perspective so fresh,
          it soars.
        </p>
      </div>
    </footer>
  );
}
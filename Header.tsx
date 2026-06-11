import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/content";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/monitoring-tools", label: "Monitoring Tools" },
  { href: "/parent-child-camp", label: "Parent-Child Camp" },
  { href: "/ai-voice-questions", label: "AI Voice" },
  { href: "/templates", label: "Templates" },
  { href: "/checking-schedule", label: "Schedule" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Go to homepage">
          <Image src="/dadi-placeholder-logo.svg" alt="Dadi Staff Guide Portal" width={180} height={59} priority />
          <span className="brand-text">{site.shortName}</span>
        </Link>
        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

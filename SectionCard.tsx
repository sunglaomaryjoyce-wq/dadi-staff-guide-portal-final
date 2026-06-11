import Link from "next/link";

type SectionCardProps = {
  href: string;
  eyebrow: string;
  title: string;
  summary: string;
};

export default function SectionCard({ href, eyebrow, title, summary }: SectionCardProps) {
  return (
    <Link href={href} className="section-card">
      <span>{eyebrow}</span>
      <h3>{title}</h3>
      <p>{summary}</p>
    </Link>
  );
}

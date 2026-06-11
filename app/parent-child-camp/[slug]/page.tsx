import Link from "next/link";
import { notFound } from "next/navigation";
import ListBlock from "@/components/ListBlock";
import { campGuides, getCampGuide } from "@/lib/content";

export function generateStaticParams() {
  return campGuides.map((item) => ({ slug: item.slug }));
}

export default async function CampDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getCampGuide(slug);
  if (!guide) notFound();

  return (
    <>
      <section className="page-title">
        <div className="container">
          <span className="kicker">{guide.eyebrow}</span>
          <h1>{guide.title}</h1>
          <p className="lead">{guide.summary}</p>
        </div>
      </section>
      <section className="container content-grid">
        <aside className="sidebar">
          <Link href="/parent-child-camp">← Back to Camp Guide</Link>
          {campGuides.map((item) => (
            <Link key={item.slug} href={`/parent-child-camp/${item.slug}`}>{item.title}</Link>
          ))}
        </aside>
        <div className="content-stack">
          <section className="content-block">
            <h2>Purpose</h2>
            <p>{guide.purpose}</p>
          </section>
          <ListBlock title="Staff Checklist" items={guide.checklist} />
          <ListBlock title="Required Standards" items={guide.standards} />
          <section className="content-block">
            <h2>Staff Reminder</h2>
            <p>{guide.staffReminder}</p>
          </section>
        </div>
      </section>
    </>
  );
}

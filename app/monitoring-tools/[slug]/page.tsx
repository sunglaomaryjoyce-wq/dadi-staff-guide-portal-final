import Link from "next/link";
import { notFound } from "next/navigation";
import ListBlock from "@/components/ListBlock";
import MetaGrid from "@/components/MetaGrid";
import { getMonitoringGuide, monitoringGuides } from "@/lib/content";

export function generateStaticParams() {
  return monitoringGuides.map((item) => ({ slug: item.slug }));
}

export default async function MonitoringDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getMonitoringGuide(slug);
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
          <Link href="/monitoring-tools">← Back to Monitoring Tools</Link>
          {monitoringGuides.map((item) => (
            <Link key={item.slug} href={`/monitoring-tools/${item.slug}`}>{item.title}</Link>
          ))}
        </aside>
        <div className="content-stack">
          <section className="content-block">
            <h2>Purpose</h2>
            <p>{guide.purpose}</p>
            <MetaGrid items={[
              { label: "Owner", value: guide.owner },
              { label: "Checker", value: guide.checker },
              { label: "Frequency", value: guide.frequency },
              { label: "Deadline", value: guide.deadline },
            ]} />
          </section>
          <ListBlock title="Checking Checklist" items={guide.checklist} />
          <ListBlock title="Required Standards" items={guide.standards} />
          <ListBlock title="Common Mistakes to Watch For" items={guide.commonMistakes} />
          <section className="content-block">
            <h2>Sample Monitoring Remark</h2>
            <p>{guide.sampleRemark}</p>
          </section>
        </div>
      </section>
    </>
  );
}

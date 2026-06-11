import SectionCard from "@/components/SectionCard";
import { monitoringGuides } from "@/lib/content";

export default function MonitoringToolsPage() {
  return (
    <>
      <section className="page-title">
        <div className="container">
          <span className="kicker">Employee Monitoring Tools</span>
          <h1>Monitoring Tools Guide</h1>
          <p className="lead">Choose the monitoring item you need to check. Each guide includes responsible person, checking schedule, standards, common mistakes, and sample remarks.</p>
        </div>
      </section>
      <section className="section">
        <div className="container card-grid">
          {monitoringGuides.map((item) => (
            <SectionCard key={item.slug} href={`/monitoring-tools/${item.slug}`} eyebrow={item.eyebrow} title={item.title} summary={item.summary} />
          ))}
        </div>
      </section>
    </>
  );
}

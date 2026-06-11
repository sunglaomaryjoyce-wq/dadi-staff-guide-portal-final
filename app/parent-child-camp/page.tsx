import SectionCard from "@/components/SectionCard";
import { campGuides } from "@/lib/content";

export default function ParentChildCampPage() {
  return (
    <>
      <section className="page-title">
        <div className="container">
          <span className="kicker">Parent-Child English Camp</span>
          <h1>Staff Coordination Guide</h1>
          <p className="lead">Use this guide to support guest preparation, airport reception, Manila-to-Clark transfer, tours, souvenir shopping, currency exchange, safety reminders, and complete camp service flow.</p>
        </div>
      </section>
      <section className="section">
        <div className="container card-grid">
          {campGuides.map((item) => (
            <SectionCard key={item.slug} href={`/parent-child-camp/${item.slug}`} eyebrow={item.eyebrow} title={item.title} summary={item.summary} />
          ))}
        </div>
      </section>
    </>
  );
}

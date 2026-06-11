import Link from "next/link";
import SectionCard from "@/components/SectionCard";
import { campGuides, monitoringGuides, quickStats, site } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="kicker">Internal Staff Guide Website</span>
            <h1>{site.name}</h1>
            <p className="lead">
              A centralized guide portal for employee monitoring tools and Parent-Child English Camp staff coordination.
              Use this website to check what must be updated, when to check it, who is responsible, and what standard should be followed.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/monitoring-tools">Open Monitoring Tools</Link>
              <Link className="button secondary" href="/parent-child-camp">Open Camp Guide</Link>
            </div>
          </div>
          <aside className="hero-panel">
            <h2>First Version Scope</h2>
            <p>
              This package is designed as a static guide website for Vercel. No database is required yet.
              Add login, reporting, and database functions later only when staff need to submit monitoring reports online.
            </p>
            <ul>
              <li>Staff guide pages</li>
              <li>Checking standards</li>
              <li>Templates and examples</li>
              <li>Parent-Child Camp operational guidance</li>
            </ul>
          </aside>
        </div>
        <div className="container stat-grid">
          {quickStats.map((item) => (
            <div className="stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <p>{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Main Guide Area 1</span>
              <h2>Employee Monitoring Tools</h2>
            </div>
            <p>Use these pages to check JR, Weekly To-Do List, Calendar, Work Plan, KPI, Reflection, Performance Evaluation, and Goal Link requirements.</p>
          </div>
          <div className="card-grid">
            {monitoringGuides.slice(0, 6).map((item) => (
              <SectionCard key={item.slug} href={`/monitoring-tools/${item.slug}`} eyebrow={item.eyebrow} title={item.title} summary={item.summary} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Main Guide Area 2</span>
              <h2>Parent-Child English Camp Staff Guide</h2>
            </div>
            <p>Use these pages for pre-arrival communication, airport pickup, transfer coordination, arrival-day decisions, shopping, currency exchange, and safety standards.</p>
          </div>
          <div className="card-grid">
            {campGuides.slice(0, 6).map((item) => (
              <SectionCard key={item.slug} href={`/parent-child-camp/${item.slug}`} eyebrow={item.eyebrow} title={item.title} summary={item.summary} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

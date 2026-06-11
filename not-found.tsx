import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-title">
      <div className="container">
        <span className="kicker">Page Not Found</span>
        <h1>This guide page does not exist.</h1>
        <p className="lead">Return to the homepage or choose another guide section.</p>
        <div className="hero-actions">
          <Link className="button" href="/">Go Home</Link>
          <Link className="button secondary" href="/monitoring-tools">Monitoring Tools</Link>
        </div>
      </div>
    </section>
  );
}

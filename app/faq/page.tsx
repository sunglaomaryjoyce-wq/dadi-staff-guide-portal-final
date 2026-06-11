import { faqs } from "@/lib/content";

export default function FaqPage() {
  return (
    <>
      <section className="page-title">
        <div className="container">
          <span className="kicker">Quick Reference</span>
          <h1>Frequently Asked Questions</h1>
          <p className="lead">Common staff questions about the monitoring guide website and checking standards.</p>
        </div>
      </section>
      <section className="section">
        <div className="container content-stack">
          {faqs.map((faq) => (
            <section className="content-block" key={faq.question}>
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}

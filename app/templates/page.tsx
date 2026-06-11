import { templates } from "@/lib/content";

export default function TemplatesPage() {
  return (
    <>
      <section className="page-title">
        <div className="container">
          <span className="kicker">Copy and Use</span>
          <h1>Templates and Checking Records</h1>
          <p className="lead">Use these templates as internal checking records. You may copy them to Smartsheet, Google Docs, Word, or WeDrive monitoring files.</p>
        </div>
      </section>
      <section className="section">
        <div className="container card-grid two">
          {templates.map((template) => (
            <article className="template-card" key={template.title}>
              <h2>{template.title}</h2>
              <pre>{template.content}</pre>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

import { scheduleItems } from "@/lib/content";

export default function CheckingSchedulePage() {
  return (
    <>
      <section className="page-title">
        <div className="container">
          <span className="kicker">Monitoring Calendar</span>
          <h1>Staff Checking Schedule</h1>
          <p className="lead">Use this page to know what must be checked daily, weekly, monthly, and quarterly.</p>
        </div>
      </section>
      <section className="section">
        <div className="container content-stack">
          {scheduleItems.map((item) => (
            <section className="content-block" key={item.timing}>
              <h2>{item.timing}</h2>
              <ul className="check-list">
                {item.tasks.map((task) => <li key={task}>{task}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}

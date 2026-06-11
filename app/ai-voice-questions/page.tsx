import { aiVoiceQuestions } from "@/lib/content";

export default function AiVoiceQuestionsPage() {
  return (
    <>
      <section className="page-title">
        <div className="container">
          <span className="kicker">AI Voice Support</span>
          <h1>Parent-Child Traveler AI Voice Questions</h1>
          <p className="lead">Use these English and Traditional Chinese questions as references for AI voice clips during travel, shopping, camp participation, and departure.</p>
        </div>
      </section>
      <section className="section">
        <div className="container content-stack">
          {aiVoiceQuestions.map((group) => (
            <section className="content-block" key={group.category}>
              <h2>{group.category}</h2>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>English AI Voice Question</th>
                      <th>Traditional Chinese Voice Question</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.questions.map(([english, chinese]) => (
                      <tr key={english}>
                        <td>{english}</td>
                        <td>{chinese}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}

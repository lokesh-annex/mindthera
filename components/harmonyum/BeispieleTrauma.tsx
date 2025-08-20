import React from "react";

export default function BeispieleTrauma() {
  const traumaExamples = [
    { icon: '🧗', text: 'Höhenangst, Angststörungen' },
    { icon: '💔', text: 'Verlust geliebter Menschen' },
    { icon: '🚑', text: 'Schwere Unfälle oder Umweltkatastrophen' },
    { icon: '⚡', text: 'Erlebnisse von Gewalt, Isolation und Machtmissbrauch' },
    { icon: '🌍', text: 'Kollektive Erlebnisse wie z.B. Krieg, Wildfeuer, Corona etc.' },
  ];

  return (
    <section className="py-5" style={{ background: '#f8fafc' }}>
      <div className="container">
        <h2 className="fw-bold mb-4">Beispiele für ein Trauma</h2>
        <div className="row g-4">
          {traumaExamples.map((item, idx) => (
            <div className="col-md-4 col-sm-6" key={idx}>
              <div
                className="card h-100 shadow-sm border-0"
                style={{ borderRadius: '1rem', background: '#fff', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
              >
                <span style={{ fontSize: '2.2rem', color: '#6366f1', marginRight: '0.7rem' }}>{item.icon}</span>
                <span style={{ fontSize: '1.1rem', textAlign:'center', color: '#334155' }}>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

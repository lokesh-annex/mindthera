import React from "react";

export default function BeispieleTrauma() {
  const traumaExamples = [
    { icon: <i className="bi bi-person-walking"></i>, text: 'Höhenangst, Angststörungen' },
    { icon: <i className="bi bi-heartbreak"></i>, text: 'Verlust geliebter Menschen' },
    { icon: <i className="bi bi-truck"></i>, text: 'Schwere Unfälle oder Umweltkatastrophen' },
    { icon: <i className="bi bi-lightning"></i>, text: 'Erlebnisse von Gewalt, Isolation und Machtmissbrauch' },
    { icon: <i className="bi bi-globe"></i>, text: 'Kollektive Erlebnisse wie z.B. Krieg, Wildfeuer, Corona etc.' },
  ];

  return (
    <section className="py-8" style={{ background: '#f8fafc' }}>
      <div className="container">
        <h2 className="fw-bold mb-4">Beispiele für ein Trauma</h2>
        <div className="row g-4">
          {traumaExamples.map((item, idx) => (
            <div className="col-md-4 col-sm-6" key={idx}>
              <div
                className="card h-100 shadow-sm border-0"
                style={{ borderRadius: '1rem', background: '#fff', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
              >
                <span style={{ fontSize: '2.2rem', color: '#7a566b', marginRight: '0.7rem' }}>{item.icon}</span>
                <span style={{ fontSize: '1.1rem', textAlign:'center', color: '#202020' }}>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

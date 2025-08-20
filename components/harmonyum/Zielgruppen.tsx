import React from "react";

export default function Zielgruppen() {
  const zielgruppen = [
    { icon: '🧑‍💼', text: 'Erwachsene: Überwinden tiefsitzender Traumata und Blockaden' },
    { icon: '🤰', text: 'Schwangere: Lösen von Traumata für Mutter und Kind, ab dem 2. Schwangerschafts-Trimester' },
    { icon: '🧒', text: 'Kinder: Förderung einer gesunden, emotionalen Entwicklung und Lösen von frühkindlichen Traumata' },
  ];

  return (
    <section className="py-5" style={{ background: '#f8fafc' }}>
      <div className="container">
        <h2 className="fw-bold mb-4" >Für wen ist HTR geeignet?</h2>
        <div className="row g-4">
          {zielgruppen.map((item, idx) => (
            <div className="col-md-4 col-sm-6" key={idx}>
              <div
                className="card h-100 shadow-sm border-0"
                style={{ borderRadius: '1rem', background: '#fff', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
              >
                <span style={{ fontSize: '2.2rem', color: '#000000', marginRight: '0.7rem' }}>{item.icon}</span>
                <span style={{ fontSize: '1.1rem', textAlign:'center', color: '#334155' }}>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

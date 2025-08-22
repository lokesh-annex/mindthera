import React from "react";

export default function Zielgruppen() {
  const zielgruppen = [
    'Erwachsene: Überwinden tiefsitzender Traumata und Blockaden',
    'Schwangere: Lösen von Traumata für Mutter und Kind, ab dem 2. Schwangerschafts-Trimester',
    'Kinder: Förderung einer gesunden, emotionalen Entwicklung und Lösen von frühkindlichen Traumata',
  ];

  return (
    <section className="py-5" >
      <div className="container">
        <h2 className="fw-bold mb-4" >Für wen ist HTR geeignet?</h2>
        <ul className="mb-3" style={{ listStyle: 'disc',color: '#5c377d',  paddingLeft: '1.5rem',fontSize:'1.2rem', lineHeight:'1.4rem' }}>
          {zielgruppen.map((text, idx) => (
            <li key={idx} className="mb-4  text-lg text-gray-800">
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

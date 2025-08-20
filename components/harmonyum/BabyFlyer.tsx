import React from "react";

export default function BabyFlyer() {
  return (
    <section className="py-5 babyflyer-sec  position-relative" style={{ overflow: 'hidden' }}>
      {/* Blurred background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: `url('/images/c-img.jpg') center/cover no-repeat`,
          filter: 'blur(12px)',
          opacity: 0.6,
        }}
        aria-hidden="true"
      />
      {/* Overlay for better text contrast */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: '#ffffff9d',
        }}
        aria-hidden="true"
      />
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/images/c-img.jpg"
              alt="Sanfte Hilfe für dein Baby"
              width={150}
              height={150}
              className="img-fluid rounded  mb-3"
              style={{ objectFit: "cover", width: 200, height: 200 }}
            />
            <p className="mb-2 mt-4 "><strong>Berührung, die verbindet – Impulse, die beruhigen.<br />Für Dein Baby. Für Dich.</strong></p>
            <p>Manche Babys weinen viel, trinken schlecht oder schlafen unruhig – Für Eltern ist das oft zermürbend und verunsichernd.<br />
              Ich biete eine innovative, tief entspannende Methode zur Unterstützung der Regulation Deines Babys:<br />
              <strong>Harmonyum Trauma Release</strong> – eine sanfte, energetische Behandlung, die Spannungen löst, das Nervensystem beruhigt und Bindung stärkt.</p>
            <p className="mb-0"><a href="https://www.traumafrei.ch" className="link-success fw-bold" target="_blank" rel="noopener">www.traumafrei.ch</a></p>
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Ein guter Start ins Leben – Sanfte Hilfe für dein Baby</h2>
            <p className="mb-2"><strong>Kerstin R. Stoll</strong><br />
              <a href="mailto:info@traumafrei.ch" className="link-success">info@traumafrei.ch</a> <br />
              <span className="fw-bold">0041 76 560 70 56</span>
            </p>
            <h5 className="mt-3 mb-3">Besonders hilfreich bei:</h5>
            <div className="row g-3 mb-3">
              {[ 
                { icon: '👶', text: 'unruhigen Babys, Schreibabys' },
                { icon: '🍼', text: 'Trink- oder Schlafproblemen' },
                { icon: '🏥', text: 'Geburtstraumata, wie Kaiserschnitt, Zangengeburt oder Nabelschnurkomplikationen' },
                { icon: '🤱', text: 'Geburt mit viel Stress für Mutter und Kind' }
              ].map((item, idx) => (
                <div className="col-md-6" key={idx}>
                  <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '1rem', background: '#fff', padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '2rem', color: '#6366f1', marginRight: '0.7rem' }}>{item.icon}</span>
                    <span style={{ fontSize: '1rem', color: '#334155',textAlign:'center' }}>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function BabyFlyer() {
  return (
    <section className="py-8 babyflyer-sec  position-relative" style={{ overflow: 'hidden' }}>
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
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <img
              src="/images/c-img.jpg"
              alt="Sanfte Hilfe für dein Baby"
              width={150}
              height={150}
              className="img-fluid rounded  mb-3"
              style={{ objectFit: "cover", width: 200, height: 200 }}
            />
            <p className="mb-2 mt-4 " style={{fontSize:'1.2rem'}}><strong>Berührung, die verbindet – Impulse, die beruhigen.<br />Für Dein Baby. Für Dich.</strong></p>
            <p style={{fontSize:'1.2rem'}}>Manche Babys weinen viel, trinken schlecht oder schlafen unruhig – Für Eltern ist das oft zermürbend und verunsichernd.<br />
              Ich biete eine innovative, tief entspannende Methode zur Unterstützung der Regulation Deines Babys:<br />
              <strong className="mt-4 d-block">Harmonyum Trauma Release</strong> – eine sanfte, energetische Behandlung, die Spannungen löst, das Nervensystem beruhigt und Bindung stärkt.</p>
            <p className="mb-0" style={{fontSize:'1.2rem'}}><a href="https://www.traumafrei.ch" className="link-success fw-bold" target="_blank" rel="noopener">www.traumafrei.ch</a></p>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="px-4">
            <h2 className="fw-bold mb-3">Ein guter Start ins Leben – Sanfte Hilfe für dein Baby</h2>
            <p className="mb-2"><strong>Kerstin R. Stoll</strong><br />
              <a href="mailto:info@traumafrei.ch" className="link-success" style={{fontSize:'1.2rem'}}>info@traumafrei.ch</a> <br />
              <span className="fw-bold">0041 76 560 70 56</span>
            </p>
            <h5 className="mt-3 mb-3">Besonders hilfreich bei:</h5>
            <ul className="mb-3 ps-3" style={{fontSize: '1.2rem', color: '#202020'}}>
              <li className="mb-2">Unruhigen Babys, Schreibabys</li>
              <li className="mb-2">Trink- oder Schlafproblemen</li>
              <li className="mb-2">Geburtstraumata, wie Kaiserschnitt, Zangengeburt oder Nabelschnurkomplikationen</li>
              <li className="mb-2">Geburt mit viel Stress für Mutter &amp; Kind</li>
            </ul>
            <a
              href="images/pdfs/flyer-babys.pdf"
              download
              className="btn btn-main px-4 py-2 fw-bold mt-5"
              style={{ fontSize: '1.1rem' }}
            >
              Flyer Herunterladen
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

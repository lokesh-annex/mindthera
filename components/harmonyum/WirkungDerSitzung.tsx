
import React from "react";

export default function WirkungDerSitzung() {
  return (
    <section className="py-5 position-relative bg-light" >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-7 mb-4 mb-md-0">
            <div className="p-5 bg-white bg-opacity-90" style={{ position: 'relative' }}>
            
              <h2 className="fw-bold mb-3 " style={{ color: '#000000', fontSize: '2.2rem', letterSpacing: '1px' }}>Anwendungsbereiche von HTR:</h2>
              <div className="mb-3 dark-color">
                <ul className="mb-3" style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
                  <li>Traumata aus früheren Leben (z.B. unerklärliche Ängste, Blockaden)</li>
                  <li>Vererbte Familienmuster und karmische Belastungen</li>
                  <li>Geburtstraumata und pränatale Erfahrungen</li>
                  <li>Emotionale Blockaden, die den Alltag beeinträchtigen</li>
                </ul>
                <p className="mb-2">Eine Harmonyum Trauma Release®-Sitzung schenkt dir einen geschützten Raum zur Regeneration, inneren Ruhe und Neuausrichtung. Mit sanften, oft kaum spürbaren oder berührungslosen Bewegungen entlang deiner Wirbelsäule wird dein System eingeladen, in einen tiefen Theta-Zustand einzutauchen. In dieser besonderen Form der Entspannung beginnt dein Körper, seine natürlichen Selbstheilungskräfte zu aktivieren.</p>
                <p className="mb-0">Viele Menschen berichten nach der Sitzung von einem Gefühl innerer Klarheit, Leichtigkeit und einem tiefen Frieden – als hätten Körper, Geist und Seele sich neu verbunden.</p>
              </div>
            </div>
          </div>
          <div className="col-md-5 text-center">
            <div className=" p-3" style={{ background: '#5c377d', display: 'inline-block' }}>
              <img
                src="/images/side-Harmonyum.jpg"
                alt="Harmonyum"
                className="img-fluid rounded"
                style={{ background: '#fff', padding: '10px', boxShadow: '0 4px 24px rgba(140, 197, 252, 0.15)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

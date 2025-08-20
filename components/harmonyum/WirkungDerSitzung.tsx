
import React from "react";
import { FaStar } from "react-icons/fa";

export default function WirkungDerSitzung() {
  return (
    <section className="py-5 position-relative bg-light" >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-7 mb-4 mb-md-0">
            <div className="p-5 bg-white bg-opacity-90" style={{ position: 'relative' }}>
              <div className=" mb-3">
                <FaStar style={{ color: '#5c377d', fontSize: '2rem' }} />
              </div>
              <h2 className="fw-bold mb-3 " style={{ color: '#000000', fontSize: '2.2rem', letterSpacing: '1px' }}>Wirkung der Sitzung</h2>
              <hr style={{ border: 'none', borderTop: '2px solid #e0c3fc', width: '60px', margin: '0 auto 24px auto' }} />
              <p className="mb-3 dark-color">Eine Harmonyum Trauma Release®-Sitzung schenkt dir einen geschützten Raum zur Regeneration, inneren Ruhe und Neuausrichtung. Mit sanften, oft kaum spürbaren oder berührungslosen Bewegungen entlang deiner Wirbelsäule wird dein System eingeladen, in einen tiefen Theta-Zustand einzutauchen. In dieser besonderen Form der Entspannung beginnt dein Körper, seine natürlichen Selbstheilungskräfte zu aktivieren.</p>
              <p className=" dark-color">Viele Menschen berichten nach der Sitzung von einem Gefühl innerer Klarheit, Leichtigkeit und einem tiefen Frieden – als hätten Körper, Geist und Seele sich neu verbunden.</p>
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

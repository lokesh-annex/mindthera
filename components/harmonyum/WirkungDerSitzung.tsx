
import React from "react";
import Image from "next/image";
export default function WirkungDerSitzung() {
  return (
    <section className="py-6 position-relative  two-sec" >
      <span className="absolute top-20 start-0">
        <Image
                                  src="/images/bg-2-copyright.webp"
                                  width={343}
                                  height={635}
                                   
                                  alt="Background Copyright"
                                  priority
                                />
                                </span>
      <div className="container">
        <div className="row ">
          
          <div className="col-lg-7 col-md-12 mb-4 mb-md-0">
            <div className="p-3 bg-white " style={{ position: 'relative' }}>
            
              <h2 className="fw-bold mb-4 " style={{ color: '#000000',fontSize: '2.2rem', letterSpacing: '1px' }}>Anwendungsbereiche Von HTR</h2>
              <div className="mb-3 dark-color">
                <ul className="mb-3" style={{ listStyle: 'none',color: '#5c377d',paddingLeft: '0rem',  fontSize:'1.14rem'}}>
                  <li className="mb-3 d-flex">
                    <span className="me-2" style={{ color: '#5c377d', fontSize: '1.75rem' }}>
                      <i className="bi bi-check"></i>
                    </span>
                    Traumata aus früheren Leben (Z.B. unerklärliche Ängste, Blockaden)
                  </li>
                    <li className="mb-3 d-flex">
                    <span className="me-2" style={{ color: '#5c377d', fontSize: '1.75rem' }}>
                      <i className="bi bi-check"></i>
                    </span>
                    Vererbte Familienmuster und karmische Belastungen
                  </li>
                   <li className="mb-3 d-flex">
                    <span className="me-2" style={{ color: '#5c377d', fontSize: '1.75rem' }}>
                      <i className="bi bi-check"></i>
                    </span>
                    Geburtstraumata und pränatale Erfahrungen
                  </li>
                   <li className="mb-3 d-flex">
                    <span className="me-2" style={{ color: '#5c377d', fontSize: '1.75rem' }}>
                      <i className="bi bi-check"></i>
                    </span>
                    Emotionale Blockaden, die den Alltag beeinträchtigen
                  </li>
                </ul>
                <p className="mb-2" style={{fontSize:'1.14rem', }}>Eine Harmonyum Trauma Release®-Sitzung schenkt dir einen geschützten Raum zur Regeneration, inneren Ruhe und Neuausrichtung. Mit sanften, oft kaum spürbaren oder berührungslosen Bewegungen entlang deiner Wirbelsäule wird dein System eingeladen, in einen tiefen Theta-Zustand einzutauchen. In dieser besonderen Form der Entspannung beginnt dein Körper, seine natürlichen Selbstheilungskräfte zu aktivieren.</p>
                <p className="mb-0" style={{fontSize:'1.14rem', }}>Viele Menschen berichten nach der Sitzung von einem Gefühl innerer Klarheit, Leichtigkeit und einem tiefen Frieden – als hätten Körper, Geist und Seele sich neu verbunden.</p>
              </div>
            </div>
          </div>
           <div className="col-lg-5 col-md-5 ">
            <div className=" p-1 mt-2" style={{ background: '#FFF', display: 'inline-block',overflow:'hidden' }}>
              <Image
                src="/images/side-Harmonyum.jpeg"
                alt="Harmonyum"
                width={370}
                height={320}
                className="img-fluid rounded"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
}

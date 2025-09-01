
import React from "react";

export default function WirkungDerSitzung() {
  return (
    <section className="py-6 position-relative  two-sec" >
       <img
        src="/images/bg-2-copyright.webp"
        className="w-20 absolute top-20 start-0 sw-anim"
        alt=""
      />
      <div className="container">
        <div className="row ">
          
          <div className="col-lg-7 col-md-12 mb-4 mb-md-0">
            <div className="p-3 bg-white " style={{ position: 'relative' }}>
            
              <h2 className="fw-bold mb-3 " style={{ color: '#000000', fontSize: '2.2rem', letterSpacing: '1px' }}>Anwendungsbereiche Von HTR</h2>
              <div className="mb-3 dark-color">
                <ul className="mb-3" style={{ listStyle: 'disc',color: '#5c377d',  paddingLeft: '1.5rem',fontSize:'1.2rem', lineHeight:'2.5rem' }}>
                  <li> <span className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gray-800 text-white">
                </span> Traumata aus früheren Leben (z.B. unerklärliche Ängste, Blockaden)</li>
                  <li><span className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gray-800 text-white">
                </span> Vererbte Familienmuster und karmische Belastungen</li>
                  <li> <span className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gray-800 text-white">
                </span> Geburtstraumata und pränatale Erfahrungen</li>
                  <li> <span className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gray-800 text-white">
                </span> Emotionale Blockaden, die den Alltag beeinträchtigen</li>
                </ul>
                <p className="mb-2" style={{fontSize:'1.2rem', lineHeight:'2.5rem'}}>Eine Harmonyum Trauma Release®-Sitzung schenkt dir einen geschützten Raum zur Regeneration, inneren Ruhe und Neuausrichtung. Mit sanften, oft kaum spürbaren oder berührungslosen Bewegungen entlang deiner Wirbelsäule wird dein System eingeladen, in einen tiefen Theta-Zustand einzutauchen. In dieser besonderen Form der Entspannung beginnt dein Körper, seine natürlichen Selbstheilungskräfte zu aktivieren.</p>
                <p className="mb-0" style={{fontSize:'1.2rem', lineHeight:'2.5rem'}}>Viele Menschen berichten nach der Sitzung von einem Gefühl innerer Klarheit, Leichtigkeit und einem tiefen Frieden – als hätten Körper, Geist und Seele sich neu verbunden.</p>
              </div>
            </div>
          </div>
           <div className="col-lg-5 col-md-5 ">
            <div className=" p-1 mt-2" style={{ background: '#FFF', display: 'inline-block',overflow:'hidden' }}>
              <img
                src="/images/side-Harmonyum.jpeg"
                alt="Harmonyum"
                className="img-fluid rounded"
                style={{objectFit: 'cover',width:'100%', height:'100%'}}
              />
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
}

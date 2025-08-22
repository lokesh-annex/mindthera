import React from "react";

export default function WasIstTrauma() {
  return (
    <section
      className="py-5"
      style={{
        borderRadius: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <img
        src="/images/bg-2-copyright-r.png"
        className="w-20 absolute top-20 end-0 sw-anim"
        alt=""
        style={{width: '300px'}}
      />

      <div className="container">
          <h2
            className="fw-bold mb-3"          >
            Was ist ein Trauma?
          </h2>
         <p className="mb-4 dark-color" style={{ fontSize: '1.2rem' }}>
            Trauma entsteht durch unsere individuellen Wahrnehmungsfilter. Eine äußere Situation oder Begegnung kann tief gehende Verletzungen hinterlassen, die sich in Form von Ängsten, Blockaden und emotionalen bis hin zu physischen Schmerzen manifestieren. Traumatische Erlebnisse können durch verschiedene Faktoren ausgelöst werden:
          </p>
        <ul className="mb-3" style={{ listStyle: 'disc',color: '#5c377d',  paddingLeft: '1.5rem',fontSize:'1.2rem', lineHeight:'1.4rem' }}>
            <li className="mb-2">Eigene Lebenserfahrungen (z.B. Angst, Missbrauch, Unfall)</li>
            <li className="mb-2">Vererbte Traumata aus der Ahnenlinie</li>
            <li className="mb-2">Prägungen aus früheren Inkarnationen</li>
            <li className="mb-2">Ungelöste, emotionale oder familiäre Muster</li>
          </ul>

 <div className="my-5">
          <h2
            className="fw-bold mb-3">
           Beispiele für ein Trauma
          </h2>
          <ul className="mb-3" style={{ listStyle: 'disc',color: '#5c377d',  paddingLeft: '1.5rem',fontSize:'1.2rem', lineHeight:'1.4rem' }}>
            <li className="mb-2">Höhenangst, Angststörungen</li>
            <li className="mb-2">Verlust geliebter Menschen</li>
            <li className="mb-2">Schwere Unfälle oder Umweltkatastrophen</li>
            <li className="mb-2">Erlebnisse von Gewalt, Isolation und Machtmissbrauch</li>
            <li className="mb-2">Kollektive Erlebnisse wie z.B. Krieg, Wildfeuer, Corona etc.</li>
          </ul>
         </div>
         </div>
    </section>
  );
}

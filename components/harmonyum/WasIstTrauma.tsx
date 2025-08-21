import React from "react";

export default function WasIstTrauma() {
  return (
    <section
      className="py-8"
      style={{
        borderRadius: '1.5rem',
        marginTop: '2rem',
        marginBottom: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
         <img
        src="/images/bg-2-copyright.png"
        className="w-10 absolute top-20 start-0 sw-anim"
        alt=""
      />
        <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 col-md-12 text-center mb-4 mb-md-0">
          <img
            src="/images/r-img.png"
            alt="Trauma Illustration"
            className="img-fluid "
            style={{borderRadius: '1rem',}}
          />
        </div>
        <div className="col-md-1 d-none d-lg-block d-md-none">
          <div style={{ height: '120px', borderLeft: '2px solid #7a566b', margin: '0 auto' }}></div>
        </div>
        <div className="col-lg-6 col-md-12">
          <h2
            className="fw-bold mb-3"          >
            Was ist ein Trauma?
          </h2>
          <p className="mb-4 dark-color" style={{ fontSize: '1.1rem', color: '#7a566b' }}>
            Trauma entsteht durch unsere individuellen Wahrnehmungsfilter. Eine äußere Situation oder Begegnung kann tief gehende Verletzungen hinterlassen, die sich in Form von Ängsten, Blockaden und emotionalen bis hin zu physischen Schmerzen manifestieren. Traumatische Erlebnisse können durch verschiedene Faktoren ausgelöst werden:
          </p>
          <ul className="list-group list-group-flush mb-3" style={{ fontSize: '1.05rem' }}>
            <li className="list-group-item d-flex align-items-center" style={{ border: 'none', background: 'transparent' }}>
              <span style={{ color: '#7a566b', fontSize: '1.3em', marginRight: '0.7em' }}>
                <i className="bi bi-person-lines-fill"></i>
              </span>
              Eigene Lebenserfahrungen (z.B. Angst, Missbrauch, Unfall)
            </li>
            <li className="list-group-item d-flex align-items-center" style={{ border: 'none', background: 'transparent' }}>
              <span style={{ color: '#7a566b', fontSize: '1.3em', marginRight: '0.7em' }}>
                <i className="bi bi-diagram-3"></i>
              </span>
              Vererbte Traumata aus der Ahnenlinie
            </li>
            <li className="list-group-item d-flex align-items-center" style={{ border: 'none', background: 'transparent' }}>
              <span style={{ color: '#7a566b', fontSize: '1.3em', marginRight: '0.7em' }}>
                <i className="bi bi-stars"></i>
              </span>
              Prägungen aus früheren Inkarnationen
            </li>
            <li className="list-group-item d-flex align-items-center" style={{ border: 'none', background: 'transparent' }}>
              <span style={{ color: '#7a566b', fontSize: '1.3em', marginRight: '0.7em' }}>
                <i className="bi bi-chat-left-text"></i>
              </span>
              Ungelöste, emotionale oder familiäre Muster
            </li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
}

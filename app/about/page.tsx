import React from "react";

const AboutUS = () => (
  <>
  
    <section id="de-subheader" className="mt-sm-60 pt20 pb20 bg-gradient-45-deg text-light">
      <div className="container relative z-index-1000">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h3 className="mb-0">About Us</h3>
          </div>
          <div className="col-lg-6 text-lg-end">
            <ul className="crumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="active">About Us</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  
    <section className="bg-white py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Text Content */}
          <div className="col-lg-7 mb-4 mb-lg-0">
            <span className="text-uppercase text-muted fw-semibold small mb-2 d-block">
              Über Mich
            </span>
            <h2 className="display-5 fw-bold mb-4">
              Bewusstseins-Architektin & Harmonyum Trauma Release® Practitioner
            </h2>
            <p className="lead mb-4" style={{ whiteSpace: "pre-line" }}>
              Liebe Seele,
              Ich arbeite mit positiven Menschen im Erwachen, die tief in sich selbst wissen oder spüren:
              So wie bisher geht es nicht weiter.
              Aber auch:
              So wie ich wirklich bin – darf es jetzt in der Tiefe weitergehen.
              Ich begleite Menschen, die sich selbst wieder bewohnen wollen – durch Präsenz, Frequenz & tiefe energetische Arbeit auf Zellebene.
              Meine Arbeit ist kein „Coaching im Kopf“ –
              sondern eine Erinnerung an das, was du längst weisst. Ich arbeite intuitiv, hellsichtig, körperorientiert und seelengeführt. Ich arbeite auf energetischer & zellulärer Ebene – ich verwandle Bewusstsein. Ich führe Dich zurück - und lasse Dich erinnern.
            </p>
            <a href="#about" className="btn btn-main px-4 py-2 mb-4">
              ERFAHRE MEHR …
            </a>
            <div className="mb-4">
              <h4 className="fw-bold mb-2">Meine Qualifikationen</h4>
              <ul className="list-unstyled">
                <li>✨ Visionärin der inneren Räume für neue Realitäten</li>
                <li>Zertifiziert in alternativer Medizin, Energiearbeit und Quantenheilung:</li>
                <li>Altchinesische Medizin & Kräuterheilkunde, 2001-2003</li>
                <li>Schüssler Salze & Antlitzdiagnostik, 2004</li>
                <li>Heilerin Russische Volksheilkunde, 2004-2006</li>
                <li>Grundlagen Ayurveda & Marmamassage, Indien, 2005</li>
                <li>Naam Yoga Teacher Trainer, 2008</li>
                <li>Energy Medicine Master 1.0, 2016</li>
                <li>Master der Neuen Homöopathie, 2017</li>
                <li>Informationsmedizin & Alphasynapsen-Programmierung, 2018</li>
                <li>Energy Medicine Master 2.0, 2024</li>
                <li>Neuro-Energetic-Programming-Master, 2024</li>
                <li>Harmonyum Trauma Release®, 2025</li>
              </ul>
            </div>
            <div>
              <h4 className="fw-bold mb-2">Autorin folgender Bücher:</h4>
              <ul className="list-unstyled">
                <li>1. Die Kraft des Gebetes im Alltag erleben: Stärke Dich mit Gebeten - sie geben Deinem Leben die optimale Richtung und schenken Dir Heilung, Fülle und Licht!</li>
                <li>2. Spiritualität im Reisegepäck - Wie du beim reisen fürs Leben lernst</li>
                <li>3. Schule mal anders - Brücken bauen zwischen altem und neuem Schulsystem</li>
                <li>4. MIR REICHTS! TOP 12 Lerntechniken für Homeschooling und Lernbegleitung</li>
                <li>5. Hörst Du den Ruf Deiner Seele? Handbuch für Deine Heldenreise</li>
              </ul>
            </div>
          </div>
          {/* Right Side: Decorative Image or Illustration */}
          <div className="col-lg-5 d-flex justify-content-center">
            <img
              src="/images/pic.png"
              alt="Kerstin R. Stoll Portrait"
              className="rounded-4 shadow-lg img-fluid"
              style={{ maxWidth: "340px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AboutUS;

import React from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
const AboutUS = () => (
  <>
  
   <Breadcrumbs
      title="About Us"
      items={[
        { label: "Home", href: "/" },
        { label: "About Us" }
      ]}
    />

  
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
            </div>
             <div className="col-lg-5 d-flex justify-content-center">
            <Image
              src="/images/pic.png"
              width={500}
              height={500}
              alt="Kerstin R. Stoll Portrait"
              className="rounded-4 shadow-lg img-fluid"
             
            />
          </div>
           <div className="row mt-5 g-4">
          <div className="col-lg-6">
            <div className="mb-4 p-4 rounded-4 shadow-sm bg-light h-100">
              <h4 className="fw-bold mb-3 text-primary">
                <i className="bi bi-award me-2"></i>Meine Qualifikationen
              </h4>
              <ul className="list-unstyled mb-0" style={{ fontSize: "1.08rem" }}>
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
          </div>
          <div className="col-lg-6">
            <div className="mb-4 p-4 rounded-4 shadow-sm bg-light h-100">
              <h4 className="fw-bold mb-3 text-primary">
                <i className="bi bi-book me-2"></i>Autorin folgender Bücher:
              </h4>
              <ul className="list-unstyled mb-0" style={{ fontSize: "1.08rem" }}>
                <li>1. Die Kraft des Gebetes im Alltag erleben: Stärke Dich mit Gebeten - sie geben Deinem Leben die optimale Richtung und schenken Dir Heilung, Fülle und Licht!</li>
                <li>2. Spiritualität im Reisegepäck - Wie du beim reisen fürs Leben lernst</li>
                <li>3. Schule mal anders - Brücken bauen zwischen altem und neuem Schulsystem</li>
                <li>4. MIR REICHTS! TOP 12 Lerntechniken für Homeschooling und Lernbegleitung</li>
                <li>5. Hörst Du den Ruf Deiner Seele? Handbuch für Deine Heldenreise</li>
              </ul>
            </div>
          </div>
        </div>
        
         </div>
        </div>
     
    </section>
  </>
);

export default AboutUS;

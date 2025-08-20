"use client";
import React from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
const AboutUS = () => (
  <>
    <Breadcrumbs
      title="Über mich"
      items={[{ label: "Home", href: "/" }, { label: "Über mich" }]}
    />
    <section className="bg-white py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h2 className="display-5 fw-bold mb-4 text-primary">Über Kerstin R. Stoll</h2>
            <blockquote className="fs-4 fst-italic mb-4 text-secondary border-start border-3 ps-3">
              „Ich möchte nicht mehr dauernd erklären, dass ich anders arbeite – ich möchte, dass man es spürt.“
            </blockquote>
            <p className="mb-3">
              Und genau das passiert, wenn man <strong>Kerstin R. Stoll</strong> begegnet.<br />
              Ihre Arbeit beginnt dort, wo Sprache endet. In einem Raum, den viele nie betreten haben:<br />
              <span className="fw-semibold">würdevoll, unbestechlich klar und auf den Punkt.</span>
            </p>
            <p className="mb-3">
              Kerstin hat sehr früh gelernt zu funktionieren, zu tragen, zu wirken – doch ihr tiefster Antrieb war nie die Leistung. Es war die Erinnerung:
            </p>
            <ul className="mb-3 ps-4">
              <li>Menschen wollen nicht therapiert, sondern erinnert werden</li>
              <li>Wahrheit muss nicht weh tun, um tief zu wirken</li>
              <li>Würde ist kein Konzept, sondern ein Zustand</li>
            </ul>
            <p className="mb-3">
              <strong>Kerstin R. Stoll</strong> ist nicht laut. Aber unübersehbar.<br />
              Weil ihre Frequenz heilt – ohne dass sie etwas erklären muss.<br />
              Mit <span className="fw-semibold">Harmonyum Trauma Release®</span> verkörpert sie eine neue Art von Heilraum: frei von Überforderung, aber voller Resonanz.<br />
              Sie öffnet keine Methoden – sondern Türen. Nicht in die Vergangenheit, sondern in die Urform des eigenen Seins.
            </p>
            <div className="mb-4">
              <span className="badge bg-primary fs-6 mb-2">Leitsatz</span><br />
              <span className="fs-5 fw-bold text-dark">„Heilung ist kein Prozess des Reparierens – sondern des Erinnerns.“</span>
            </div>
           
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
<div className="col-lg-12">
  <div className="card border-0 shadow-lg mb-5 bg-light">
    <div className="card-body p-5">
      <h3 className="h4 mb-4 text-primary text-center">
        <i className="bi bi-heart-fill me-2 text-danger"></i>Liebe Seele
      </h3>
      <div className="row">
        <div className="col-md-6 mb-4 mb-md-0">
          <p className="mb-3">
            Ich arbeite mit positiven Menschen im Erwachen, die tief in sich selbst wissen oder spüren:<br />
            <span className="fw-semibold text-success">So wie bisher geht es nicht weiter.</span><br />
            Aber auch:<br />
            <span className="fw-semibold text-success">So wie ich wirklich bin – darf es jetzt in der Tiefe weitergehen.</span>
          </p>
          <p className="mb-3">
            Ich begleite Menschen, die sich selbst wieder bewohnen wollen – durch Präsenz, Frequenz &amp; tiefe energetische Arbeit auf Zellebene.<br />
            Meine Arbeit ist kein „Coaching im Kopf“ – sondern eine Erinnerung an das, was du längst weisst.<br />
            Ich arbeite intuitiv, hellsichtig, körperorientiert und seelengeführt.<br />
            Ich arbeite auf energetischer &amp; zellulärer Ebene – ich verwandle Bewusstsein.<br />
            Ich führe Dich zurück – und lasse Dich erinnern.
          </p>
        </div>
        <div className="col-md-6">
          <p className="mb-3">
            Als Bewusstseins-Architektin baue ich keine Häuser.<br />
            Ich baue Räume – in dir.<br />
            Räume, in denen du endlich atmen kannst.<br />
            In denen du deine Wahrheit nicht erklären musst.<br />
            In denen du nicht funktionieren musst, um wertvoll zu sein.<br />
            Ich begleite Menschen, die innerlich längst wissen:<br />
            <span className="fw-semibold text-success">„Ich bin mehr als das hier.“</span><br />
            Aber noch nicht wissen, wie sie dahin kommen.
          </p>
          <p className="mb-3">
            Als Bewusstseins-Architektin arbeite ich mit Struktur und Frequenz.<br />
            Ich sehe, wo du dich klein gemacht hast – und zeige dir, wie du dich neu bauen kannst:<br />
            ehrlich, stabil, spirituell angebunden.<br />
            Meine Werkzeuge sind energetische Trauma-Arbeit, intuitive Klarheit und ein unbestechlicher Blick auf das, was du wirklich bist – unter all den Rollen.<br />
            Ich bin nicht hier, um dich zu coachen.<br />
            Ich bin hier, um dir deine inneren Räume zurückzugeben.<br />
            Damit du dich nicht mehr verbiegen musst – sondern dich selbst wieder bewohnen kannst.
          </p>
        </div>
      </div>
      <div className="alert alert-info mt-4 mb-3 text-center">
        <strong>Ich verbinde Wissenschaft &amp; Weisheit, Körper &amp; Frequenz</strong><br />
        Kerstin R. Stoll<br />
        Bewusstseins-Architektin &amp; Harmonyum Trauma Release® Practitioner<br />
        ✨ Visionärin der inneren Räume für neue Realitäten
      </div>
    </div>
  </div>
</div>
        </div>
        <div className="row mt-2 g-4">
          <div className="col-lg-6">
            <div className="mb-4 p-4 rounded-4 shadow-sm bg-light h-100">
              <h4 className="fw-bold mb-3 text-primary">
                <i className="bi bi-award me-2"></i>Zertifiziert in alternativer Medizin, Energiearbeit und Quantenheilung
              </h4>
              <ul className="list-unstyled mb-0" style={{ fontSize: "1.08rem" }}>
              
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
                <li>2. Spiritualität im Reisegepäck - Wie du beim Reisen fürs Leben lernst</li>
                <li>3. Schule mal anders - Brücken bauen zwischen altem und neuem Schulsystem</li>
                <li>4. MIR REICHTS! TOP 12 Lerntechniken für Homeschooling und Lernbegleitung</li>
                <li>5. Hörst Du den Ruf Deiner Seele? Handbuch für Deine Heldenreise</li>
                <li>6. Die Urform der Menschlichkeit ist das befreite Trauma</li>
                <li>7. Da wo sich der rote Stein und die grüne Wiese treffen; Kinderbuch im Hosentaschen-format: eine Murmeltiergeschichte aus dem UNESCO Welterbe Sardona, Schweiz, erschienen im Eigenverlag (bei Interesse bitte eine email an info@traumafrei.ch)</li>
              </ul>
              <p className="mt-3">Die Bücher 1-6 sind erhältlich bei amazon.de.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AboutUS;

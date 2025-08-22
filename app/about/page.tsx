"use client";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
const AboutUS = () => (
  <>
    <Breadcrumbs
      title="Über mich"
      items={[{ label: "Home", href: "/" }, { label: "Über mich" }]}
    />
    <section className="bg-white py-5">
      <div className="container about-gradient rounded-4 about-shadow py-4">
        <div className="row gx-5 align-items-center">
          <div className="col-lg-6">
            <div className="relative rounded-20px overflow-hidden shadow-soft">
              <Image
                src="/images/pic.png"
                width={600}
                height={500}
                alt="Kerstin R. Stoll Portrait"
                className="rounded-4 about-image-left img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6 text-dark">
            <div className="subtitle about-us-text fadeInUp mb-3 ">Über Kerstin R. Stoll</div>

            <blockquote className="fs-4 fst-italic mb-4 text-dark border-start border-3 ps-3">
              „Ich möchte nicht mehr dauernd erklären, dass ich anders arbeite –
              ich möchte, dass man es spürt.“
            </blockquote>

            <p className="mb-3">
              Und genau das passiert, wenn man <strong>Kerstin R. Stoll</strong>{" "}
              begegnet.
              <br />
              Ihre Arbeit beginnt dort, wo Sprache endet. In einem Raum, den
              viele nie betreten haben:
              <br />
              <span className="fw-semibold">
                würdevoll, unbestechlich klar und auf den Punkt.
              </span>
            </p>
            <p className="mb-3">
              Kerstin hat sehr früh gelernt zu funktionieren, zu tragen, zu
              wirken – doch ihr tiefster Antrieb war nie die Leistung. Es war
              die Erinnerung:
            </p>
            <ul className="mb-3 ps-4">
              <li>Menschen wollen nicht therapiert, sondern erinnert werden</li>
              <li>Wahrheit muss nicht weh tun, um tief zu wirken</li>
              <li>Würde ist kein Konzept, sondern ein Zustand</li>
            </ul>
            <p className="mb-3">
              <strong>Kerstin R. Stoll</strong> ist nicht laut. Aber
              unübersehbar.
              <br />
              Weil ihre Frequenz heilt – ohne dass sie etwas erklären muss.
              <br />
              Mit <span className="fw-semibold">
                Harmonyum Trauma Release®
              </span>{" "}
              verkörpert sie eine neue Art von Heilraum: frei von Überforderung,
              aber voller Resonanz.
              <br />
              Sie öffnet keine Methoden – sondern Türen. Nicht in die
              Vergangenheit, sondern in die Urform des eigenen Seins.
            </p>
            <a className="btn-main  fadeInUp" href="about.html">
              Leitsatz
            </a>
          </div>
        </div>
      </div>
</section>
      <section className="py-5 mt-5 work-section" style={{ background: "#fdf6fa" }}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 mb-4 mb-lg-0 d-flex justify-content-center">
              <div
                style={{
                  maxWidth: 400,
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(92,55,125,0.12)",
                }}
              >
                <Image
                  src="/images/image-16.jpg"
                  width={400}
                  height={500}
                  alt="Gita"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="mb-2 text-uppercase fw-bold"
                style={{ letterSpacing: 1, color: "#5c377d" }}
              >
                Liebe Seele
              </div>
              <h2
                className="fw-bold mb-4"
                style={{ color: "#2d1a3a", fontSize: "2.5rem" }}
              >
                {" "}
                Ich arbeite mit positiven Menschen im Erwachen, die tief in sich
                selbst wissen oder spüren
              </h2>
              <p className="mb-3">
                <span
                  className="fw-semibold"
                  style={{ fontSize: "1.15rem", color: "#3d2c4a" }}
                >
                  So wie bisher geht es nicht weiter.
                </span>
              </p>
              <div
                className="fw-semibold"
                style={{ fontSize: "1.15rem", color: "#3d2c4a", marginBottom: '1rem' }}
              >
                Aber auch:
                <br />
                So wie ich wirklich bin – darf es jetzt in der Tiefe
                weitergehen.
              </div>
              <ul
                className="list-unstyled"
                style={{ fontSize: "1.15rem", color: "#3d2c4a" }}
              >
                <li className="mb-3 d-flex align-items-start">
                  <span
                    className="me-2"
                    style={{ color: "#5c377d", fontSize: "1.3rem" }}
                  >
                    &#10003;
                  </span>{" "}
                  Ich begleite Menschen, die sich selbst wieder bewohnen wollen
                  – durch Präsenz, Frequenz &amp; tiefe energetische Arbeit auf
                  Zellebene.
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span
                    className="me-2"
                    style={{ color: "#5c377d", fontSize: "1.3rem" }}
                  >
                    &#10003;
                  </span>{" "}
                  Meine Arbeit ist kein „Coaching im Kopf“ – sondern eine
                  Erinnerung an das, was du längst weisst.
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span
                    className="me-2"
                    style={{ color: "#5c377d", fontSize: "1.3rem" }}
                  >
                    &#10003;
                  </span>{" "}
                  Ich arbeite intuitiv, hellsichtig, körperorientiert und
                  seelengeführt.
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span
                    className="me-2"
                    style={{ color: "#5c377d", fontSize: "1.3rem" }}
                  >
                    &#10003;
                  </span>{" "}
                  Ich arbeite auf energetischer &amp; zellulärer Ebene – ich
                  verwandle Bewusstsein.
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span
                    className="me-2"
                    style={{ color: "#5c377d", fontSize: "1.3rem" }}
                  >
                    &#10003;
                  </span>{" "}
                  I Ich führe Dich zurück – und lasse Dich erinnern.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="build-spaces" style={{ background: "#7a566b", padding: "64px 0" }}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div
                className="text-uppercase fw-bold mb-3"
                style={{ color: "#fff", letterSpacing: 1 }}
              >
                Als Bewusstseins-Architektin baue
                <br />
                ich auch keine Häuser.
              </div>
              <h2
                className="fw-bold mb-4"
                style={{ color: "#fff", fontSize: "2.8rem", lineHeight: 1.1 }}
              >
                Ich baue Räume
                <br />– in dir.
              </h2>
              
                <div className="build-portrait" style={{ height: '320px', overflow: 'hidden', borderRadius: '16px', background: '#7a566b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    src="/images/image-15.jpg"
                    width={580}
                    height={250}
                    alt="Kerstin R. Stoll Portrait"
                    className="img-fluid"
                  />
                </div>
            </div>
            <div className="col-lg-6">
              <div
                style={{ color: "#e2dbe2", fontSize: "1.15rem", maxWidth: 600 }}
              >
                <p className="mb-3">
                  Räume, in denen du endlich atmen kannst.
                  <br />
                  In denen du deine Wahrheit nicht erklären musst.
                  <br />
                  In denen du nicht funktionieren musst, um wertvoll zu sein.
                  <br />
                  Ich begleite Menschen, die innerlich längst wissen:
                  <br />
                  <span className="fw-semibold" style={{ color: "#fff" }}>
                    „Ich bin mehr als das hier.“
                  </span>
                  <br />
                  Aber noch nicht wissen, wie sie dahin kommen.
                </p>
                <p className="mb-3">
                  Als Bewusstseins-Architektin arbeite ich mit Struktur und
                  Frequenz.
                  <br />
                  Ich sehe, wo du dich klein gemacht hast – und zeige dir, wie
                  du dich neu bauen kannst:
                  <br />
                  ehrlich, stabil, spirituell angebunden.
                  <br />
                </p>
                <p className="mb-3">
                  Meine Werkzeuge sind energetische Trauma-Arbeit, intuitive
                  Klarheit und ein unbestechlicher Blick auf das, was du
                  wirklich bist – unter all den Rollen.
                  <br />
                  Ich bin nicht hier, um dich zu coachen.
                  <br />
                </p>
                <p className="mb-3">
                  Ich bin hier, um dir deine inneren Räume zurückzugeben.
                  <br />
                  Damit du dich nicht mehr verbiegen musst – sondern dich selbst
                  wieder bewohnen kannst.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 mb-3 text-center">
            <div
              style={{
                background: "rgb(113, 77, 98)",
                color: "#fff",
                borderRadius: "12px",
                padding: "24px 16px",
                
                
              }}
            >
              <strong style={{ fontSize: "1.15rem", letterSpacing: 1 }}>
                Ich verbinde Wissenschaft &amp; Weisheit, Körper &amp; Frequenz
              </strong>
              <br />
              <span style={{ fontWeight: 500, fontSize: "1.08rem" }}>
                Kerstin R. Stoll
              </span>
              <br />
              <span style={{ fontWeight: 400, fontSize: "1.08rem" }}>
                Bewusstseins-Architektin &amp; Harmonyum Trauma Release®
                Practitioner
              </span>
              <br />
              <span style={{ fontSize: "1.2rem" }}>
                ✨ Visionärin der inneren Räume für neue Realitäten
              </span>
            </div>
          </div>
        </div>
      </section>
<div className="container mt-5 mb-5">
      <div className="row mt-2 g-4">
        <div className="col-lg-6 fade-in" style={{ animationDelay: "0.9s" }}>
          <div className="mb-4 p-4 rounded-4 text-dark bg-light h-100">
             <h4 className="fw-bold mb-3 text-primary">
              <span className="d-inline-flex align-items-center flex-wrap" style={{ gap: '10px' }}>
                <span style={{ background: '#5c377d', color: '#fff', borderRadius: '50%', width: '38px', height: '38px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="bi bi-award" style={{ fontSize: '1.5rem' }}></i>
                </span>
                <span>Zertifiziert in alternativer Medizin,<br /> Energiearbeit und Quantenheilung</span>
              </span>
            </h4>
         
            <ul className="list-unstyled mb-0" style={{ fontSize: "1.08rem" }}>
              <li className="mb-2 d-flex align-items-center">
                <span style={{ color: '#5c377d', fontSize: '1.8rem', marginRight: '10px' }}>
                  <i className="bi bi-check"></i>
                </span>
                Altchinesische Medizin & Kräuterheilkunde, 2001-2003
              </li>
              <li className="mb-2 d-flex align-items-center">
               <span style={{ color: '#5c377d', fontSize: '1.8rem', marginRight: '10px' }}>
                  <i className="bi bi-check"></i>
                </span>
                Schüssler Salze & Antlitzdiagnostik, 2004
              </li>
              <li className="mb-2 d-flex align-items-center">
               <span style={{ color: '#5c377d', fontSize: '1.8rem', marginRight: '10px' }}>
                  <i className="bi bi-check"></i>
                </span>
                Heilerin Russische Volksheilkunde, 2004-2006
              </li>
              <li className="mb-2 d-flex align-items-center">
               <span style={{ color: '#5c377d', fontSize: '1.8rem', marginRight: '10px' }}>
                  <i className="bi bi-check"></i>
                </span>
                Grundlagen Ayurveda & Marmamassage, Indien, 2005
              </li>
              <li className="mb-2 d-flex align-items-center">
               <span style={{ color: '#5c377d', fontSize: '1.8rem', marginRight: '10px' }}>
                  <i className="bi bi-check"></i>
                </span>
                Naam Yoga Teacher Trainer, 2008
              </li>
              <li className="mb-2 d-flex align-items-center">
              <span style={{ color: '#5c377d', fontSize: '1.8rem', marginRight: '10px' }}>
                  <i className="bi bi-check"></i>
                </span>
                Energy Medicine Master 1.0, 2016
              </li>
              <li className="mb-2 d-flex align-items-center">
               <span style={{ color: '#5c377d', fontSize: '1.8rem', marginRight: '10px' }}>
                  <i className="bi bi-check"></i>
                </span>
                Master der Neuen Homöopathie, 2017
              </li>
              <li className="mb-2 d-flex align-items-center">
                <span style={{ color: '#5c377d', fontSize: '1.8rem', marginRight: '10px' }}>
                  <i className="bi bi-check"></i>
                </span>
                Informationsmedizin & Alphasynapsen-Programmierung, 2018
              </li>
              <li className="mb-2 d-flex align-items-center">
               <span style={{ color: '#5c377d', fontSize: '1.8rem', marginRight: '10px' }}>
                  <i className="bi bi-check"></i>
                </span>
                Energy Medicine Master 2.0, 2024
              </li>
              <li className="mb-2 d-flex align-items-center">
                <span style={{ color: '#5c377d', fontSize: '1.8rem', marginRight: '10px' }}>
                  <i className="bi bi-check"></i>
                </span>
                Neuro-Energetic-Programming-Master, 2024
              </li>
              <li className="mb-2 d-flex align-items-center">
               <span style={{ color: '#5c377d', fontSize: '1.8rem', marginRight: '10px' }}>
                  <i className="bi bi-check"></i>
                </span>
                Harmonyum Trauma Release®, 2025
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="mb-4 p-4 rounded-4 text-dark  bg-light h-100 fade-in"
           
          >
            <h4 className="fw-bold mb-3 text-primary">
              <span className="d-flex align-items-center flex-wrap" style={{ gap: '10px' }}>
                <span style={{ background: '#5c377d', color: '#fff', borderRadius: '50%', width: '38px', height: '38px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="bi bi-book" style={{ fontSize: '1.5rem' }}></i>
                </span>
                 <span>Autorin folgender Bücher</span>
              </span>
            </h4>
            <ul className="list-unstyled mb-0" style={{ fontSize: "1.08rem" }}>
              <li className="mb-2 d-flex align-items-start">
                <span style={{ color: '#5c377d', fontSize: '1.3rem', marginRight: '10px', marginTop: '2px' }}>
                  <i className="bi bi-book"></i>
                </span>
                Die Kraft des Gebetes im Alltag erleben: Stärke Dich mit Gebeten - sie geben Deinem Leben die optimale Richtung und schenken Dir Heilung, Fülle und Licht!
              </li>
              <li className="mb-2 d-flex align-items-start">
                <span style={{ color: '#5c377d', fontSize: '1.3rem', marginRight: '10px', marginTop: '2px' }}>
                  <i className="bi bi-book"></i>
                </span>
                Spiritualität im Reisegepäck - Wie du beim Reisen fürs Leben lernst
              </li>
              <li className="mb-2 d-flex align-items-start">
                <span style={{ color: '#5c377d', fontSize: '1.3rem', marginRight: '10px', marginTop: '2px' }}>
                  <i className="bi bi-book"></i>
                </span>
                Schule mal anders - Brücken bauen zwischen altem und neuem Schulsystem
              </li>
              <li className="mb-2 d-flex align-items-start">
                <span style={{ color: '#5c377d', fontSize: '1.3rem', marginRight: '10px', marginTop: '2px' }}>
                  <i className="bi bi-book"></i>
                </span>
                MIR REICHTS! TOP 12 Lerntechniken für Homeschooling und Lernbegleitung
              </li>
              <li className="mb-2 d-flex align-items-start">
                <span style={{ color: '#5c377d', fontSize: '1.3rem', marginRight: '10px', marginTop: '2px' }}>
                  <i className="bi bi-book"></i>
                </span>
                Hörst Du den Ruf Deiner Seele? Handbuch für Deine Heldenreise
              </li>
              <li className="mb-2 d-flex align-items-start">
                <span style={{ color: '#5c377d', fontSize: '1.3rem', marginRight: '10px', marginTop: '2px' }}>
                  <i className="bi bi-book"></i>
                </span>
                Die Urform der Menschlichkeit ist das befreite Trauma
              </li>
              <li className="mb-2 d-flex align-items-start">
                <span style={{ color: '#5c377d', fontSize: '1.3rem', marginRight: '10px', marginTop: '2px' }}>
                  <i className="bi bi-book"></i>
                </span>
                Da wo sich der rote Stein und die grüne Wiese treffen; Kinderbuch im Hosentaschen-format: eine Murmeltiergeschichte aus dem UNESCO Welterbe Sardona, Schweiz, erschienen im Eigenverlag (bei Interesse bitte eine email an info@traumafrei.ch)
              </li>
            </ul>
            <p className="mt-3 mb-0">
              Die Bücher 1-6 sind erhältlich bei amazon.de.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AboutUS;

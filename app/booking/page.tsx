"use client";

import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
const faqs = [
  {
    q: "Wie buche ich einen Termin?",
    a: "Wählen Sie einfach einen verfügbaren Slot im Kalender oben und folgen Sie den Anweisungen von Calendly.",
  },
  {
    q: "Kann ich meinen Termin verschieben?",
    a: "Ja, Sie können Ihren Termin über den Link in Ihrer Bestätigungs-E-Mail verschieben oder stornieren.",
  },
  {
    q: "Ist die Buchung kostenlos?",
    a: "Die Buchung ist kostenlos. Eventuelle Kosten für die Dienstleistung werden separat kommuniziert.",
  },
  {
    q: "Bekomme ich eine Bestätigung?",
    a: "Nach der Buchung erhalten Sie eine Bestätigungs-E-Mail mit allen Details.",
  },
];

// ...existing code...

const BookingPage = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };
  return (
    <>
      <Breadcrumbs
        title="Buche hier deinen Termin"
        items={[
          { label: "Home", href: "/" },
          { label: "Buche hier deinen Termin" },
        ]}
      />
      <section className="py-5">
        <span className="absolute top-20 start-0">
          <Image
            src="/images/bg-2-copyright.webp"
            width={393}
            height={625}
            alt="Background Copyright"
            priority
          />
        </span>
        <span className="absolute top-40  end-0">
          <Image
            src="/images/shape-bg-f.png"
            width={350}
            height={525}
            alt="Background Copyright"
            priority
          />
        </span>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h2 className="fw-bold mb-3" style={{ color: "#5c377d" }}>
                Buchen Sie Ihren Termin
              </h2>
              <p className="lead text-muted mb-0">
                Wählen Sie einen passenden Zeitpunkt und sichern Sie sich Ihren
                Platz für eine Harmonyum Trauma Release® Sitzung.
              </p>
            </div>
          </div>
          <div className="row justify-content-center ">
            <div className="col-lg-12">
              <InlineWidget
                url="https://calendly.com/lokesh-annexlogics/30min"
                styles={{ height: "700px", minWidth: "100%", borderRadius: 24 }}
              />
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <span className="text-uppercase text-primary fw-semibold small mb-2 d-block letter-spacing">
                Q&amp;A – Häufig gestellte Fragen
              </span>
              <h2 className="display-5 fw-bold mb-4">
                Harmonyum Trauma Release &amp; Buchung
              </h2>
              <p className="lead text-muted">
                Die wichtigsten Antworten rund um HTR, Ablauf, Buchung und mehr.
              </p>
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div className="accordion" id="faqAccordion">
                {faqs.map((item, idx) => (
                  <div
                    className="accordion-item mb-3 rounded-4 shadow-sm border-0"
                    key={idx}
                  >
                    <h3 className="accordion-header" id={`heading${idx}`}>
                      <button
                        className={`accordion-button fw-bold px-4 py-3 ${
                          openIdx === idx ? "" : "collapsed"
                        }`}
                        type="button"
                        aria-expanded={openIdx === idx ? "true" : "false"}
                        aria-controls={`collapse${idx}`}
                        style={{
                          fontSize: "1.15rem",
                          background: "#f7f5fa",
                          color: "#5c377d",
                          borderRadius: "16px",
                          boxShadow:
                            openIdx === idx
                              ? "0 2px 8px rgba(92,55,125,0.08)"
                              : "none",
                          transition: "box-shadow 0.2s",
                        }}
                        onClick={() => handleToggle(idx)}
                      >
                        {item.q}
                      </button>
                    </h3>
                    <div
                      id={`collapse${idx}`}
                      className={`accordion-collapse collapse${
                        openIdx === idx ? " show" : ""
                      }`}
                      aria-labelledby={`heading${idx}`}
                    >
                      <div
                        className="accordion-body px-4 py-3"
                        style={{
                          fontSize: "1.08rem",
                          background: "#fff",
                          borderRadius: "0 0 16px 16px",
                        }}
                      >
                        {item.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const serviceData: Record<
  string,
  {
    title: string;
    image: string;
    subtitle: string;
    description: ReactNode;
  }
> = {
  "harmonyum-trauma-release": {
    title: "",
    image: "/images/services/1.webp",
    subtitle: "",
    description: (
      <>
        <div className="container py-5">
          <div className=" d-flex flex-column flex-md-row align-items-center justify-content-center">
            <div className="mb-4 mb-md-0 me-md-4 ">
              <img
                src="/images/services/1.webp"
                alt="Harmonyum Trauma Release"
                style={{
                  maxWidth: "320px",
                  width: "100%",
                  borderRadius: "12px",
                }}
              />
            </div>
            <div className="flex-grow-1">
              <h2
                className="text-right fw-bold mb-2"
                style={{ color: "#1a2a6c" }}
              >
                Harmonyum Trauma Release
              </h2>
              <h4 className="text-right mb-3" style={{ color: "#4f8a8b" }}>
                Frequenzform zur Rückverbindung
              </h4>
              <p className="mt-3 text-right">
                Du hast schon viel ausprobiert – Gespräche, Methoden, Übungen.
                Doch etwas in dir sucht nach mehr: nach einem Raum, der dich
                nicht analysiert, sondern erinnert.
                <br />
                Die URFORM-Sessions sind 1:1 Begleitungen, die dich in deine
                tiefste innere Ordnung zurückführen. Still, würdevoll und ohne
                Überforderung.
              </p>
              <div className="d-flex gap-3 mt-4">
                <a
                  className="btn btn-main px-4 py-2 fw-bold mb-2"
                  href="#anfrage"
                >
                  <i className="bi bi-calendar-check"></i> Hier kannst du deine
                  URFORM-Session anfragen
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Was URFORM-Sessions einzigartig macht Section */}
        <section className="py-5 session-sec-bg-fe" >
          <div className="container">
            <div className="row justify-content-center mb-4">
              <div className="col-lg-12 text-center">
                <h2
                  className="fw-bold mb-3"
                  style={{
                    color: "#5C377D",
                    fontSize: "2.1rem",
                    letterSpacing: "1px",
                  }}
                >
                  Was URFORM-Sessions einzigartig macht
                </h2>
                <p
                  className="lead"
                  style={{ color: "#3D2C4A", fontWeight: 500 }}
                >
                  Die wichtigsten Merkmale für deine Heilreise
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <ul
                  className="list-unstyled"
                  style={{
                    fontSize: "1.18rem",
                    color: "#2D1A3A",
                    fontWeight: 500,
                  }}
                >
                  <li className="mb-4 d-flex align-items-start">
                    <span
                      style={{
                        color: "#7A566B",
                        fontSize: "1.7rem",
                        marginRight: "16px",
                        marginTop: "2px",
                      }}
                    >
                      <i className="bi bi-stars"></i>
                    </span>
                    Keine Retraumatisierung – Heilung ohne den Schmerz immer
                    wieder durchleben zu müssen.
                  </li>
                  <li className="mb-4 d-flex align-items-start">
                    <span
                      style={{
                        color: "#7A566B",
                        fontSize: "1.7rem",
                        marginRight: "16px",
                        marginTop: "2px",
                      }}
                    >
                      <i className="bi bi-stars"></i>
                    </span>
                    Tiefe Ruhe – dein Nervensystem darf loslassen und neu
                    regulieren.
                  </li>
                  <li className="mb-4 d-flex align-items-start">
                    <span
                      style={{
                        color: "#7A566B",
                        fontSize: "1.7rem",
                        marginRight: "16px",
                        marginTop: "2px",
                      }}
                    >
                      <i className="bi bi-stars"></i>
                    </span>
                    Erinnerung statt Technik – es geht nicht um „Machen“,
                    sondern um Resonanz.
                  </li>
                  <li className="mb-4 d-flex align-items-start">
                    <span
                      style={{
                        color: "#7A566B",
                        fontSize: "1.7rem",
                        marginRight: "16px",
                        marginTop: "2px",
                      }}
                    >
                      <i className="bi bi-stars"></i>
                    </span>
                    Würde & Ursprünglichkeit – du begegnest dem Teil in dir, der
                    nie zerbrochen ist.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Für wen sind URFORM-Sessions gedacht Section */}
        <section className="py-5 urfrom-sessions" style={{ background: "#fff" }}>
          <div className="container">
            <div className="row justify-content-center mb-4">
              <div className="col-lg-12 text-center">
                <h2
                  className="fw-bold mb-3"
                  style={{
                    color: "#5C377D",
                    fontSize: "2.1rem",
                    letterSpacing: "1px",
                  }}
                >
                  Für wen sind URFORM-Sessions gedacht?
                </h2>
                <p
                  className="lead"
                  style={{ color: "#3D2C4A", fontWeight: 500 }}
                >
                  Wer von URFORM-Sessions besonders profitiert
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <ul
                  className="list-unstyled"
                  style={{
                    fontSize: "1.18rem",
                    color: "#2D1A3A",
                    fontWeight: 500,
                  }}
                >
                  <li className="mb-4 d-flex align-items-center">
                   <span
                      style={{                      
                        color: "#7A566B",
                        fontSize: "1.5rem",
                        borderRadius: "4px",
                        marginRight: "18px",
                      }}
                    >
                      <i className="bi bi-chevron-double-left"></i>
                    </span>
                    Menschen, die spüren, dass Worte nicht ausreichen.
                  </li>
                  <li className="mb-4 d-flex align-items-center">
                   <span
                      style={{                      
                        color: "#7A566B",
                        fontSize: "1.5rem",
                        borderRadius: "4px",
                        marginRight: "18px",
                      }}
                    >
                         <i className="bi bi-chevron-double-left"></i>
                    </span>
                    Frauen & Männer, die viel gehalten haben – und nun selbst
                    gehalten werden wollen.
                  </li>
                  <li className="mb-4 d-flex align-items-center">
                   <span
                      style={{                      
                        color: "#7A566B",
                        fontSize: "1.5rem",
                        borderRadius: "4px",
                        marginRight: "18px",
                      }}
                    >
                         <i className="bi bi-chevron-double-left"></i>
                    </span>
                    Hochsensible, die einen sicheren Raum ohne Überforderung
                    suchen.
                  </li>
                  <li className="mb-4 d-flex align-items-center">
                    <span
                      style={{                      
                        color: "#7A566B",
                        fontSize: "1.5rem",
                        borderRadius: "4px",
                        marginRight: "18px",
                      }}
                    >
                         <i className="bi bi-chevron-double-left"></i>
                    </span>
                    Alle, die tiefe Transformation ohne Drama erleben möchten.
                  </li>
                </ul>
                <div className="mt-4 ">
                  <span
                    style={{
                      fontSize: "1.25rem",
                      color: "#5C377D",
                      fontWeight: 600,
                    }}
                  >
                    <i className="bi bi-arrow-right-circle me-3"></i>
                    Wenn du dich nach innerer Ruhe, Klarheit und Rückverbindung
                    sehnst, bist du hier richtig.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-light session-sec-bg">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#143774] mb-6">
              Wie läuft eine Session ab?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Du liegst entspannt, während durch sanfte Impulse, Frequenzen und
              energetische Berührungspunkte dein Nervensystem in Sicherheit
              geführt wird.
              <br />
              Dein Körper übernimmt den Prozess – du musst nichts tun.
              <br />
              Oft zeigen sich tiefe Stille, klare Emotionen oder ein Gefühl von
              Weite, als würdest du dich selbst zum ersten Mal wieder berühren.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-6">
              <div className="d-flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gray-800 text-white">
                  <i
                    className="bi bi-x-diamond"
                    style={{ fontSize: "1.5rem", color: "#7A566B" }}
                  ></i>
                </span>
                <span className="text-left text-lg text-gray-800">
                  Sanfte Impulse, Frequenzen und energetische Berührungspunkte
                  führen dein Nervensystem in Sicherheit.
                </span>
              </div>
              <div className="d-flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gray-800 text-white">
                  <i
                    className="bi bi-x-diamond"
                    style={{ fontSize: "1.5rem", color: "#7A566B" }}
                  ></i>
                </span>
                <span className="text-left text-lg text-gray-800">
                  Dein Körper übernimmt den Prozess – du musst nichts tun.
                </span>
              </div>
              <div className="d-flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gray-800 text-white">
                  <i
                    className="bi bi-x-diamond"
                    style={{ fontSize: "1.5rem", color: "#7A566B" }}
                  ></i>
                </span>
                <span className="text-left text-lg text-gray-800">
                  Tiefe Stille, klare Emotionen oder ein Gefühl von Weite – als
                  würdest du dich selbst zum ersten Mal wieder berühren.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 price-sec">
            <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: `url('/images/c-img.jpg') center `,
          filter: 'blur(10px)',
          opacity: 0.6,
        }}
        aria-hidden="true"
      />
      {/* Overlay for better text contrast */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: '#ffffff88',
        }}  
        aria-hidden="true"
      />
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="new-session-box">
            <div className="row">
                <div className="col-lg-5 col-md-12">
                <div className="flex-1 d-flex flex-column justify-content-center align-items-center">
                  <img
                    src="/images/services/session-img.png"
                    alt="Session Booking"
                    className="w-100 max-w-xs rounded-lg shadow-md"
                    
                  />
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="p-4 flex-1 d-flex flex-column justify-content-center align-items-center">
                  <h2 className="h2 fw-bold text-dark mb-4 text-left w-100">
                    Session Preise
                  </h2>
                  <ul className="fs-5 text-dark mb-0 w-100 list-unstyled">
                    <li className="mb-3 d-flex align-items-center gap-3">
                      {" "}
                      <i
                        className="bi bi-calendar4-range"
                        style={{ fontSize: "0.8rem", color: "#000000ff" }}
                      ></i>
                      Einzel-Session:{" "}
                      <span className="fw-semibold">
                        120{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="14"
                          height="14"
                          viewBox="0 0 432.763 432.762"
                        >
                          <g>
                            <path
                              d="M374.363 342.635c-25.563 26.889-58.292 41.7-92.16 41.7-55.509 0-103.572-38.981-126.192-95.329h154.186c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.21-24.21-24.21H143.708a202.583 202.583 0 0 1-1.472-24.211c0-9.274.653-18.365 1.871-27.237h166.09c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.211-24.21-24.211H157.299c23.105-54.698 70.4-92.302 124.904-92.302 33.868 0 66.597 14.812 92.16 41.698 9.203 9.685 24.518 10.083 34.224.872 9.693-9.215 10.077-24.539.875-34.229C374.671 20.156 329.478 0 282.209 0c-80.712 0-149.705 58.62-176.478 140.724H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h54.503c-.981 8.934-1.542 18.007-1.542 27.237 0 8.192.428 16.255 1.211 24.211H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h63.916c26.043 83.691 95.733 143.75 177.433 143.75 47.274 0 92.456-20.161 127.247-56.755 9.208-9.693 8.83-25.015-.869-34.229-9.687-9.215-25.015-8.83-34.218.857z"
                              fill="#5c377d"
                            />
                          </g>
                        </svg>
                      </span>
                    </li>

                    <li className="mb-3 d-flex align-items-center gap-3">
                        <i
                        className="bi bi-calendar4-range"
                        style={{ fontSize: "0.8rem", color: "#000000ff" }}
                      ></i>  5er-Paket:{" "}
                      <span className="fw-semibold">
                        555{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="14"
                          height="14"
                          viewBox="0 0 432.763 432.762"
                        >
                          <g>
                            <path
                              d="M374.363 342.635c-25.563 26.889-58.292 41.7-92.16 41.7-55.509 0-103.572-38.981-126.192-95.329h154.186c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.21-24.21-24.21H143.708a202.583 202.583 0 0 1-1.472-24.211c0-9.274.653-18.365 1.871-27.237h166.09c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.211-24.21-24.211H157.299c23.105-54.698 70.4-92.302 124.904-92.302 33.868 0 66.597 14.812 92.16 41.698 9.203 9.685 24.518 10.083 34.224.872 9.693-9.215 10.077-24.539.875-34.229C374.671 20.156 329.478 0 282.209 0c-80.712 0-149.705 58.62-176.478 140.724H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h54.503c-.981 8.934-1.542 18.007-1.542 27.237 0 8.192.428 16.255 1.211 24.211H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h63.916c26.043 83.691 95.733 143.75 177.433 143.75 47.274 0 92.456-20.161 127.247-56.755 9.208-9.693 8.83-25.015-.869-34.229-9.687-9.215-25.015-8.83-34.218.857z"
                              fill="#5c377d"
                            />
                          </g>
                        </svg>
                      </span>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-3">
                       <i
                        className="bi bi-calendar4-range"
                        style={{ fontSize: "0.8rem", color: "#000000ff" }}
                      ></i> 7er-Paket:{" "}
                      <span className="fw-semibold">
                        700{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="14"
                          height="14"
                          viewBox="0 0 432.763 432.762"
                        >
                          <g>
                            <path
                              d="M374.363 342.635c-25.563 26.889-58.292 41.7-92.16 41.7-55.509 0-103.572-38.981-126.192-95.329h154.186c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.21-24.21-24.21H143.708a202.583 202.583 0 0 1-1.472-24.211c0-9.274.653-18.365 1.871-27.237h166.09c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.211-24.21-24.211H157.299c23.105-54.698 70.4-92.302 124.904-92.302 33.868 0 66.597 14.812 92.16 41.698 9.203 9.685 24.518 10.083 34.224.872 9.693-9.215 10.077-24.539.875-34.229C374.671 20.156 329.478 0 282.209 0c-80.712 0-149.705 58.62-176.478 140.724H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h54.503c-.981 8.934-1.542 18.007-1.542 27.237 0 8.192.428 16.255 1.211 24.211H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h63.916c26.043 83.691 95.733 143.75 177.433 143.75 47.274 0 92.456-20.161 127.247-56.755 9.208-9.693 8.83-25.015-.869-34.229-9.687-9.215-25.015-8.83-34.218.857z"
                              fill="#5c377d"
                            />
                          </g>
                        </svg>
                      </span>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-2">
                      <span className="text-pink-600 fs-4"><i className="bi bi-hourglass-split text-primary"></i> </span> Dauer:{" "}
                      <span className="fw-semibold">45 Minuten</span>
                    </li>
                  </ul>
                </div>
              </div>
            
            </div>
            </div>
          </div>
        </section>

        {/* Stimmen aus den Sessions Section */}
        <section
          className="py-8 bg-light stimmen-sec "
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
             
              <div className="col-lg-12">
                <h2
                  className="fw-bold mb-3"
                  style={{
                    color: "#2D1A3A",
                    fontSize: "1.7rem",
                    letterSpacing: "1px",
                  }}
                >
                  Stimmen aus den Sessions
                </h2>
                <div
                  className="mb-3"
                  style={{
                    fontSize: "1.15rem",
                    color: "#5C377D",
                    fontWeight: 500,
                  }}
                >
                  <blockquote
                    className="mb-2"
                    style={{
                      borderLeft: "4px solid #7A566B",
                      paddingLeft: "16px",
                      marginBottom: "12px",
                    }}
                  >
                    „Ich habe zum ersten Mal seit Jahren das Gefühl, wirklich
                    geatmet zu haben.“
                  </blockquote>
                  <blockquote
                    className="mb-2"
                    style={{
                      borderLeft: "4px solid #7A566B",
                      paddingLeft: "16px",
                      marginBottom: "12px",
                    }}
                  >
                    „Es ist, als hätte sich mein Nervensystem neu sortiert –
                    ohne dass ich etwas erklären musste.“
                  </blockquote>
                  <blockquote
                    className="mb-2"
                    style={{
                      borderLeft: "4px solid #7A566B",
                      paddingLeft: "16px",
                      marginBottom: "12px",
                    }}
                  >
                    „Tiefe Ruhe und tiefer Schlaf. Ein Gefühl, wieder ganz zu
                    sein.“
                  </blockquote>
                </div>
                <div
                  className="mb-3"
                  style={{ color: "#3D2C4A", fontSize: "1.08rem" }}
                >
                  <span role="img" aria-label="mail">
                    :envelope_with_arrow:
                  </span>{" "}
                  Dein nächster Schritt
                  <br />
                  Wenn dich diese Worte erreichen, ist es kein Zufall.
                  <br />
                  Dann ruft dein System nach Rückverbindung.
                </div>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="btn btn-main px-4 py-2 fw-bold mb-2"
                  >
                    Hier kannst du deine URFORM-Session anfragen{" "}
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    ),
  },
  "traumata-aus-der-kindheit": {
    title: "Traumata aus der Kindheit",
    image: "/images/services/8.webp",
    subtitle:
      "die ersten Jahre prägen alles – auch das, was wir längst vergessen haben",
    description: (
      <>
        <h3 className="mb-2">TRAUMATA AUS DER KINDHEIT</h3>
        <h5>
          die ersten Jahre prägen alles – auch das, was wir längst vergessen
          haben
        </h5>
        <p className="mt-3">
          Erlebnisse aus der frühen Kindheit hinterlassen Spuren im Nervensystem
          – selbst wenn sie ohne Worte geschahen.
          <br />
          Ob emotionale Vernachlässigung, Überforderung, Kontrollverlust oder
          subtiler Bindungsabbruch:
          <br />
          Der Körper erinnert sich – durch Enge, Angst, Anspannung oder
          wiederkehrende Gefühle von Nicht-genug-sein und dem Gefühl des
          Nicht-geliebt-werdens.
          <br />
          In dieser HTR-Begleitung werden gespeicherte Kindheitsprägungen sanft
          gelöst, ohne sie erneut durchlebt werden zu müssen.
          <br />
          Es entsteht Raum, in dem dein inneres Kind sicher wird – und du in
          deinem heutigen Körper ganz ankommen kannst.
          <br />
          Du musst nichts erzählen.
          <br />
          Dein System weiß, wo die Heilung beginnt.
        </p>
        <p>
          <strong>Ablauf:</strong>
        </p>
        <ul>
          <li>
            das Kind entscheidet, ob es mit der Mutter gemeinsam im Raum ist
          </li>
          <li>Sanfte energetische Behandlung für dein Kind</li>
          <li>
            Die Sitzung richtet sich ganz nach dem natürlichen Rhythmus des
            Kindes; je nach Alter braucht es etwas mehr zeit, um Vertrauen
            aufzubauen. Diese Zeit nehmen wir uns!
          </li>
        </ul>
        <p>
          <strong>Dauer:</strong> ca. 60 Minuten
        </p>
        <p>
          <strong>Preise:</strong>
        </p>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>
            💎 <strong>Einzelsession:</strong> 80.- CHF
          </li>
          <li>
            💎 <strong>Dreierpaket:</strong> 222.- CHF (flexibel einlösbar
            innerhalb drei Monaten)
          </li>
        </ul>
      </>
    ),
  },
  "paar-special-mit-kinderwunsch": {
    title: "Paar-special Mit Kinderwunsch",
    image: "/images/services/2.webp",
    subtitle:
      "ein heilender Raum für Empfängnis – körperlich, energetisch, seelisch",
    description: (
      <>
        <h3 className="mb-2">PAAR-SPECIAL MIT KINDERWUNSCH</h3>
        <h5>
          ein heilender Raum für Empfängnis – körperlich, energetisch, seelisch
        </h5>
        <p className="mt-3">
          <strong>Beschreibung:</strong>
        </p>
        <p>
          Ein Kind zu empfangen ist mehr als ein körperlicher Prozess.
          <br />
          Es ist ein inneres JA. Eine Einladung. Ein Raum, der entstehen darf –
          in Stille, in Vertrauen, in Frequenz.
          <br />
          Dieses Paar-Special ist ein hochsensibler, würdevoller Raum für euch
          als Paar.
          <br />
          Ein Raum, der nicht „funktionieren“ will – sondern euch dabei
          unterstützt, euch selbst, euren Körper und eure Verbindung neu zu
          spüren.
          <br />
          Still. Sanft. Offen. Und frei von Druck.
        </p>
        <p>
          <strong>Dieses Paket enthält:</strong>
        </p>
        <ul>
          <li>
            3 HTR-Einzelsitzungen für beide Partner:innen (6 Sessions insgesamt)
          </li>
          <li>1 schamanisches Ritual zur Einladung der Kinderseele</li>
          <li>
            individuell abgestimmte SchüsslerSalze zur Begleitung der
            natürlichen Empfängnis
          </li>
          <li>energetische Begleitung, keine medizinische Diagnostik</li>
        </ul>
        <p>
          <strong>Was dieser Raum ermöglicht:</strong>
        </p>
        <ul>
          <li>Entlastung von emotionalem Druck &amp; Erwartung</li>
          <li>Harmonisierung des Nervensystems</li>
          <li>
            Auflösung feinstofflicher Blockaden (traumatisch, systemisch,
            unbewusst)
          </li>
          <li>
            Öffnung für eine neue Form von Verbindung – mit euch selbst &amp;
            miteinander
          </li>
          <li>
            Einladung an die Seele, die kommen möchte – ohne Zwang, aber mit
            Liebe
          </li>
        </ul>
        <p>
          <strong>Preis für das Gesamtpaket:</strong>
          <br />
          💎 1111.- CHF
          <br />
          (inkl. aller Sessions, Ritual &amp; SchüsslerSalze)
          <br />
          Termine flexibel einlösbar innerhalb drei Monaten.
        </p>
        <p>
          <strong>Dauer:</strong> 90 Minuten
          <br />
          Ritual nach gemeinsamer Terminabsprache / auch am Abend möglich
        </p>
        <p>
          <strong>Hinweis:</strong>
          <br />
          Das Angebot richtet sich an Paare mit offenem Herzen –<br />
          Empfohlen bei Wunsch nach natürlicher Empfängnis, nach Fehlgeburt oder
          wenn &quot nichts mehr helfen konnte, aber innerlich noch Hoffnung
          lebt“.
          <br />
          Der/ die PartnerIn kann während der Behandlung jeweils selbst
          entscheiden, ob er/sie im Raum mit dabei ist oder sich zur Meditation
          oder zu einem Spaziergang zurückzieht.
        </p>
      </>
    ),
  },
  "ahnenfrieden-energetische-loeschung": {
    title: "Ahnenfrieden – Energetische Löschung Von Übernommenem Trauma",
    image: "/images/services/3.webp",
    subtitle:
      "du trägst, was du fühlst. Aber Manches ist alt, gehört nicht zu dir und wartet auf Erlösung.",
    description: (
      <>
        <h3 className="mb-2">
          AHNENFRIEDEN – energetische Löschung von übernommenem Trauma
        </h3>
        <p>
          du trägst, was du fühlst. Aber Manches ist alt, gehört nicht zu dir
          und wartet auf Erlösung.
        </p>
        <p>
          Was du trägst, ist nicht immer deins.
          <br />
          Viele Gefühle, Ängste, Wiederholungen und körperliche Spannungen sind
          energetische Speicher aus deiner Familienlinie –<br />
          manchmal Generationen alt.
          <br />
          Familien geben nicht nur Gene weiter – sondern auch ungelöste
          Emotionen, Überlebensmuster, Schuld, Tabus.
          <br />
          Sucht, Essstörungen, emotionale Leere, Bindungsangst – vieles davon
          ist nicht „deins“, aber wirkt in dir als unbewusst übernommenes
          Überlebensmuster.
        </p>
        <p>
          In dieser Frequenzarbeit darf zurückgehen,
          <br />
          was durch dich hindurch gegangen ist –<br />
          aber nie wirklich zu dir gehört hat.
          <br />
          Du gibst nicht deine Familie zurück.
          <br />
          Du gibst den Schmerz zurück,
          <br />
          der nicht mehr weitergegeben werden muss.
          <br />
          Für dich. Für deine Kinder. Für das Feld.
          <br />
          In Würde. In Frequenz. In Dankbarkeit.
          <br />
          Damit du nicht weiterträgst, was längst gesehen werden will.
          <br />
          Und dich selbst wieder spürst – ohne die Last derer vor dir.
          <br />
          Du heilst für das gesamte Kollektiv deiner Ahnenlinie.
        </p>
        <p>
          <strong>Preis:</strong>
          <br />
          💎 555.- CHF für 5 Behandlungen
        </p>
        <p>
          <strong>Dauer pro Session:</strong> 45 Minuten
        </p>
        <p>Alle Termine flexibel einlösbar innerhalb drei Monaten.</p>
      </>
    ),
  },
  "gemeinsame-familienzeit": {
    title: "Gemeinsame Familienzeit",
    image: "/images/services/4.webp",
    subtitle:
      "ein heilender Raum für Eltern – in Rückverbindung mit sich selbst und ihren Kindern",
    description: (
      <>
        <h3 className="mb-2">GEMEINSAME FAMILIENZEIT</h3>
        <h5>
          ein heilender Raum für Eltern – in Rückverbindung mit sich selbst und
          ihren Kindern
        </h5>
        <p className="mt-3">
          <strong>Beschreibung:</strong>
        </p>
        <p>
          Familien tragen viel – oft mehr, als Worte fassen können.
          <br />
          Dieses Angebot schafft einen Raum, in dem nicht nur ein Mensch,
          sondern ein ganzes Familiensystem entlastet und neu verbunden wird.
          <br />
          Stück für Stück. In Ruhe. In Würde. In Frequenz.
          <br />
          Bei der „Gemeinsamen Familienzeit“ stehen die Eltern im Zentrum der
          Behandlung – denn wenn ihr gehalten seid, kann auch euer Kind tiefer
          atmen.
          <br />
          Die Kinder werden in kurzen, sanften Sequenzen zusätzlich energetisch
          mit behandelt – kostenfrei, liebevoll und ohne Druck.
          <br />
          Das Ziel: ein feines energetisches Nachnähren für alle, ohne
          Überforderung oder Fixierung auf „Themen“.
        </p>
        <p>
          <strong>So funktioniert es:</strong>
        </p>
        <ul>
          <li>
            Pro Session wird ein Elternteil behandelt, das andere begleitet das
            Kind
          </li>
          <li>
            Für die Behandlung benötigen wir Ruhe – Spielsachen bitte selbst
            mitbringen
          </li>
          <li>
            Die energetische Begleitung der Kinder erfolgt individuell und
            intuitiv
          </li>
        </ul>
        <p>
          Ich biete euch maximale Flexibilität – damit ihr euch nicht noch mehr
          „organisieren müsst“, sondern einfach kommen könnt, wie es gerade für
          euch passt.
        </p>
        <p>
          <strong>Dauer pro Session:</strong> 45 Minuten
        </p>
        <p>
          <strong>Wichtig:</strong> Bitte jeweils bei der Buchung die ZEIT je
          nach Anzahl Teilnehmer selbst dazu buchen
        </p>
        <p>
          <strong>Preise:</strong>
        </p>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>
            💎 <strong>Einzelsession:</strong> 250 CHF
          </li>
          <li>
            💎 <strong>Dreierpaket:</strong> 777 CHF (flexibel einlösbar
            innerhalb 3 Monaten)
          </li>
        </ul>
        <p>
          <strong>Hinweis:</strong>
          <br />
          Ideal für Familien mit feinsinnigen Kindern (bis einschl. 11 Jahre)
        </p>
        <p>
          Nach emotional herausfordernden Zeiten, Übergängen (z.B. Umzug,
          Trennung, Todesfall) oder einfach als gemeinsame energetische
          Stärkung.
          <br />
          Ein Raum, in dem niemand funktionieren muss – sondern alle sein
          dürfen.
        </p>
      </>
    ),
  },
  schwangerschaft: {
    title: "Schwangerschaft",
    image: "/images/services/6.webp",
    subtitle: "Nervensystem-Beruhigung & Rückverbindung",
    description: (
      <>
        <h3 className="mb-2">SCHWANGERSCHAFT</h3>
        <h5>Nervensystem-Beruhigung &amp; Rückverbindung</h5>
        <p className="mt-3">
          Eine Schwangerschaft ist ein sensibler Übergang – körperlich,
          seelisch, energetisch.
          <br />
          Und manchmal geraten wir in Situationen, die uns erschüttern:
          <br />
          Ein medizinischer Eingriff, eine Diagnose, ein plötzlicher Schreck,
          emotionale Überforderung.
          <br />
          Oder einfach das Gefühl: Mein System ist unruhig, und ich weiß nicht
          warum.
          <br />
          Dieses HTR-Angebot ist ein sanfter, nicht-invasiver Raum zur
          Stabilisierung deines Nervensystems – speziell ab dem 2. Trimester.
          <br />
          Du musst nichts erzählen. Dein Körper spricht, deine Frequenz erinnert
          sich.
          <br />
          Es ist da für dich, wenn etwas passiert ist – und genauso, wenn du
          einfach vorbeugen möchtest, um klar, ruhig und liebevoll mit dir und
          deinem Baby verbunden zu bleiben.
          <br />
          Auf Wunsch integrieren wir eine geführte Meditation zur
          Kontaktaufnahme mit der Kinderseele – intuitiv, zart, verbindend.
        </p>
        <p>
          <strong>Was dieses Angebot bewirkt:</strong>
        </p>
        <ul>
          <li>Harmonisierung deines autonomen Nervensystems</li>
          <li>sanftes Lösen von Schreckenergie oder Ängsten</li>
          <li>
            energetische Stabilisierung deines Körpers als „Nest“ für das Baby
          </li>
          <li>Rückverbindung mit deinem inneren JA zur Schwangerschaft</li>
          <li>emotionale Beruhigung – ohne viele Worte</li>
        </ul>
        <p>
          <strong>Geeignet für:</strong>
        </p>
        <ul>
          <li>alle Schwangeren ab dem 2. Trimester</li>
          <li>nach emotionalen oder medizinischen Schreckmomenten</li>
          <li>bei innerer Unruhe, Angst, Überforderung</li>
          <li>
            für bewusst werdende Mütter, die Raum für sich &amp; ihr Kind
            schaffen möchten
          </li>
        </ul>
        <p>
          <strong>Preis:</strong>
          <br />
          💎 6er-Paket: 666 CHF
          <br />• 6 Sessions à ca. 60–75 Minuten
          <br />• auf Wunsch inkl. Meditation zur Kontaktaufnahme mit der
          Kinderseele
        </p>
        <p>
          <strong>Hinweis:</strong>
          <br />
          Dieses Angebot ersetzt keine Hebammen- oder ärztliche Betreuung – es
          wirkt ergänzend, energetisch stabilisierend und tief verbindend.
        </p>
      </>
    ),
  },
  "mutter-und-kind-geburts-special": {
    title: "Mutter & Kind – Geburts-Special",
    image: "/images/services/7.webp",
    subtitle:
      "die Geburt verändert alles – auch das, was oft unsichtbar bleibt",
    description: (
      <>
        <h3 className="mb-2">MUTTER &amp; KIND – Geburts-Special</h3>
        <h5>
          die Geburt verändert alles – auch das, was oft unsichtbar bleibt
        </h5>
        <p className="mt-3">
          <strong>Beschreibung:</strong>
        </p>
        <p>
          Dieses HTR-Special ist ein heilender Raum für Mutter und Kind –
          gemeinsam, verbunden, würdevoll.
          <br />
          Es geht nicht um Nachbearbeitung, sondern um Rückverbindung: zur
          Kraft, zur Stille, zur ursprünglichen Bindung, die jenseits der Worte
          liegt.
          <br />
          Ob nach sanfter oder schwieriger Geburt – viele Babys tragen
          Spannungen, die sich nicht zeigen, aber spürbar sind.
          <br />
          Auch du als Mutter trägst oft mehr, als du zeigst – körperlich,
          emotional, seelisch.
          <br />
          Diese Behandlung wirkt auf Zellebene: still, tief, sanft. Ohne
          Re-Traumatisierung.
          <br />
          Energetische Rückverbindung nach der Geburt
          <br />
          Für dich. Für dein Baby. Für eure gemeinsame Verbindung.
        </p>
        <p>
          <strong>Ablauf:</strong>
        </p>
        <ul>
          <li>Mutter &amp; Kind sind gemeinsam im Raum</li>
          <li>Sanfte energetische Behandlung für dich &amp; dein Kind</li>
          <li>Stillen, Tragen oder Kuscheln ist jederzeit möglich</li>
          <li>Die Sitzung richtet sich ganz nach eurem natürlichen Rhythmus</li>
        </ul>
        <p>
          <strong>Dauer:</strong> ca. 75 Minuten
        </p>
        <p>
          <strong>Preise:</strong>
        </p>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>
            💎 <strong>Einzelsession:</strong> 120 CHF
          </li>
          <li>
            💎 <strong>Dreierpaket:</strong> 333 CHF (flexibel einlösbar
            innerhalb drei Monaten)
          </li>
        </ul>
        <p>Auf Wunsch auch Hausbesuche möglich (zzgl. Wegpauschale).</p>
        <p>
          <strong>Hinweis:</strong>
          <br />
          Auch bei Neugeborenen (ab 3 Wochen) möglich.
          <br />
          Ideal innerhalb der ersten 6 Lebensmonate – aber auch für größere
          Babys und Mütter in späterer Rückverbindung sehr kraftvoll.
        </p>
      </>
    ),
  },
  "wochenbett-begleitung": {
    title: "Ergänzende Begleitung Im Wochenbett",
    image: "/images/services/5.webp",
    subtitle: "weil Rückverbindung nicht mit der Geburt deines Kindes endet",
    description: (
      <>
        <h3 className="mb-2">ERGÄNZENDE BEGLEITUNG IM WOCHENBETT</h3>
        <h5>weil Rückverbindung nicht mit der Geburt deines Kindes endet</h5>
        <p className="mt-3">
          Wenn du bereits während der Schwangerschaft mit HTR begleitet wurdest,
          kannst du dieses Feld auch im Wochenbett sanft weiterführen.
          <br />
          Denn oft zeigt sich erst nach der Geburt, was du wirklich gehalten
          hast – körperlich, emotional und seelisch!
        </p>
        <p>
          <strong>Die Sessions im Wochenbett dienen:</strong>
        </p>
        <ul>
          <li>deiner Regeneration</li>
          <li>dem Nachnähren deiner Wurzel</li>
          <li>
            der energetischen Klärung des Geburtsprozesses (auch bei
            Kaiserschnitt, Interventionen, emotionaler Überforderung)
          </li>
          <li>
            der tiefen Rückverbindung mit dir selbst – nicht nur als Mutter,
            sondern als Frau
          </li>
        </ul>
        <p>
          <strong>Wie funktioniert die Kombination?</strong>
        </p>
        <ul>
          <li>Du kannst dein Schwangerschafts-Paket einfach „verlängern“</li>
          <li>oder nach der Geburt in ein neues Wochenbett-Paket übergehen</li>
          <li>
            die Übergänge gestalten wir gemeinsam – in deinem Rhythmus, ohne
            Druck
          </li>
        </ul>
        <p>
          Für die erste Zeit nach der Geburt biete ich auch Hausbesuche (zzgl.
          Wegpauschale) an; sprich mich gerne an, was für dich möglich ist.
        </p>
        <p>
          <strong>Dauer:</strong> 45 Minuten
        </p>
        <p>
          <strong>Preis:</strong>
          <br />
          💎 6er-Paket: 666 CHF
        </p>
      </>
    ),
  },

  "trauma-durch-stress-burnout": {
    title:
      "Trauma Durch Chronischen Stress, Burnout, Depression & Überforderung",
    image: "/images/services/11.webp",
    subtitle: "wenn nichts mehr geht – ist es Zeit, wieder bei dir anzukommen",
    description: (
      <>
        <h3 className="mb-2">
          TRAUMA DURCH CHRONISCHEN STRESS, BURNOUT, DEPRESSION &amp;
          ÜBERFORDERUNG
        </h3>
        <h5>wenn nichts mehr geht – ist es Zeit, wieder bei dir anzukommen</h5>
        <p className="mt-3">
          Chronischer Stress trennt dich vom Körper.
          <br />
          Burnout trennt dich vom Leben.
          <br />
          Überforderung und Depression machen oft hilflos.
          <br />
          Und manchmal liegt unter der Erschöpfung eine stille
          Überlebensleistung, die nie anerkannt wurde.
          <br />
          Diese HTR-Begleitung ist kein „Energiestart“ – sondern eine tiefe,
          energetische Rückverbindung in dein Zellgedächtnis: zur Lebenskraft,
          zur Freude, zur Würde deines Systems.
          <br />
          Sanft. Still. Ohne Druck.
          <br />
          Für Frieden in deinem Nervensystem.
          <br />
          Für deine Seele. Für dein echtes JA zum Leben.
        </p>
        <p>
          <strong>Für wen:</strong>
        </p>
        <ul>
          <li>Menschen mit Burnout und/ oder Depression</li>
          <li>bei Stress-Symptomen und Überforderung</li>
          <li>
            für Seelen, die offen sind für tiefe Erinnerung &amp; innovative,
            integrative und ganzheitliche Heilungsmöglichkeiten
          </li>
        </ul>
        <p>
          <strong>Preis:</strong>
        </p>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>
            💎 <strong>1111.- CHF</strong> für 10 Behandlungen
          </li>
        </ul>
        <p>
          <strong>Dauer pro Session:</strong> 45 Minuten
        </p>
        <p>
          <strong>Empfehlung:</strong> Für ein erfolgreiches Resultat ist es
          empfehlenswert, die Sessions zeitnah abzuhalten: 2x täglich, 1x
          täglich oder mindestens 3x in der Woche.
        </p>
        <p>
          <strong>Hinweis:</strong> Dieses Angebot ersetzt keine medizinische
          oder psychotherapeutische Behandlung – es wirkt klärend und
          freisetzend. KundInnen berichten von wichtigen, positiven Impulsen
          während der Begleitung einer ambulanten, psychologischen Behandlung.
        </p>
        <p>Alle Termine flexibel einlösbar innerhalb drei Monaten.</p>
      </>
    ),
  },
  "trauma-nach-unfall": {
    title: "Trauma Nach Unfall",
    image: "/images/services/10.webp",
    subtitle: "Erste-Hilfe-Special mit BlueBody-Aktivierung",
    description: (
      <>
        <h3 className="mb-2">TRAUMA NACH UNFALL</h3>
        <h5>Erste-Hilfe-Special mit BlueBody-Aktivierung</h5>
        <p className="mt-3">
          <strong>Beschreibung:</strong>
        </p>
        <p>
          Ein Unfall hinterlässt mehr als Spuren im und am Körper.
          <br />
          Manchmal bleibt etwas zurück – in den Zellen, im Nervensystem, im
          Energiefeld.
          <br />
          Unbenannt, aber spürbar: Schreck, Spannung, Entkopplung.
          <br />
          Dieses Special ist ein hochfrequenter Raum für Menschen, die nach
          einem Unfall wieder ganz im eigenen Körper ankommen wollen – ruhig,
          energetisch, tief verbunden.
        </p>
        <p>
          <strong>Was dieses Paket besonders macht:</strong>
        </p>
        <p>
          Neben der klassischen HTR-Traumaheilung arbeite ich hier mit der
          Aktivierung deines BlueBody – deiner besten, gesündesten, vollkommenen
          energetischen Version.
          <br />
          Der BlueBody ist wie dein äusserer Schutzengel – eine lichtvolle
          Schutzhülle um deinen physischen Körper.
          <br />
          Über ihn lässt sich heilende Energie gezielt in Körperbereiche lenken,
          die nach einem Unfall Unterstützung brauchen.
          <br />
          Besonders der Bereich um das Rectum (untere Wirbelsäule, Beckenboden,
          unteres Nervensystem) ist energetisch verbunden mit diesem Körper.
          Dort liegt oft der Ursprung von Blockaden nach Sturz, Schleudertrauma
          oder Operation.
          <br />
          In der Aktivierung wird gezielt Licht, Frequenz und Präsenz an die
          Stellen gesendet, die nach Heilung rufen – ohne Druck, nur durch die
          Erinnerung an dein GanzSein.
        </p>
        <p>
          <strong>Für wen:</strong>
        </p>
        <ul>
          <li>Nach Unfällen, Operationen, Stürzen, Erschütterungen</li>
          <li>Bei diffusen Körpersymptomen ohne klare Ursache</li>
          <li>Wenn du spürst: „Etwas ist noch nicht ganz zurückgekommen“</li>
          <li>Auch ergänzend zu einer physiologischen Behandlung möglich</li>
        </ul>
        <p>
          <strong>Wichtig:</strong> Der/ die PatientIn muss in der Lage sein,
          auf dem Bauch oder in beiden Seitenlagen zu liegen.
        </p>
        <p>
          <strong>Zwei mögliche Pakete:</strong>
        </p>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>
            💎 <strong>5er-Paket:</strong> 888 CHF
            <br />– 5 tiefgehende HTR-Sessions mit BlueBody-Aktivierung
            <br />– ideal für körperliche Integration nach schweren
            Unfall-Erlebnissen
          </li>
          <li>
            💎 <strong>7er-Paket:</strong> 1111.- CHF (Erste-Hilfe-Special)
            <br />– kompakterer Rhythmus, ein-, bis zweimal täglich; empfohlen
            direkt nach Unfall oder akuter Erfahrung
            <br />– gezielte Stabilisierung von Körper, Nervensystem und
            Energiefeld
            <br />– inklusive gezielter Aktivierung deines BlueBody
          </li>
        </ul>
        <p>
          <strong>Dauer pro Session:</strong> 45 Minuten
        </p>
        <p>
          <strong>Hinweis:</strong> Dieses Angebot ersetzt keine medizinische
          oder physiotherapeutische Betreuung – es wirkt ergänzend, energetisch
          & seelisch stabilisierend.
          <br />
          Auf Wunsch auch Klinik,- oder Hausbesuche möglich (zzgl.
          Wegpauschale).
        </p>
        <p>Alle Termine flexibel einlösbar innerhalb drei Monaten.</p>
      </>
    ),
  },
  "trauma-durch-emotionale-und-koerperliche-blockaden": {
    title: "Trauma Durch Emotionale & Körperliche Blockaden",
    image: "/images/services/9.webp",
    subtitle:
      "wenn etwas zu gross war, um verarbeitet zu werden – wird es vom Körper getragen",
    description: (
      <>
        <h3 className="mb-2">
          TRAUMA DURCH EMOTIONALE &amp; KÖRPERLICHE BLOCKADEN
        </h3>
        <h5>
          wenn etwas zu gross war, um verarbeitet zu werden – wird es vom Körper
          getragen
        </h5>
        <p className="mt-3">
          Gewalt, Missbrauch, Verlust, Isolation, Panik, Ohnmacht –<br />
          diese Erfahrungen hinterlassen nicht nur Erinnerung, sondern Resonanz.
          <br />
          Der Körper „friert ein“, um zu schützen – aber irgendwann willst du
          wieder atmen.
          <br />
          HTR öffnet einen geschützten Raum, in dem du nicht reden musst, um
          gehört zu werden.
          <br />
          Dein Körper darf loslassen, was nicht mehr zu dir gehört.
          <br />
          Und du darfst dich erinnern, wie sich Sicherheit anfühlt.
        </p>
        <p>
          <strong>Preis:</strong>
        </p>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>
            💎 <strong>1111.- CHF</strong> für 10 Behandlungen
          </li>
        </ul>
        <p>
          <strong>Dauer pro Session:</strong> 45 Minuten
        </p>
        <p>
          <strong>Empfehlung:</strong> Für ein erfolgreiches Resultat ist es
          empfehlenswert, die Sessions zeitnah abzuhalten: mindestens 3x in der
          Woche oder täglich je eine Behandlung.
        </p>
        <p>
          <strong>Hinweis:</strong> Dieses Angebot ersetzt keine medizinische
          oder psychotherapeutische Behandlung – es wirkt klärend und
          freisetzend. KundInnen berichten von wichtigen, positiven Impulsen
          während der Begleitung einer ambulanten, psychologischen Behandlung.
        </p>
        <p>Alle Termine flexibel einlösbar innerhalb drei Monaten.</p>
      </>
    ),
  },
  "trauma-durch-berufliche-belastung": {
    title:
      "Trauma Durch Berufliche Belastung (z.B. Notfallmedizin, Polizei, Rettungskräfte)",
    image: "/images/services/12.webp",
    subtitle:
      "wenn Helfen traumatisch wird – braucht auch die Stärke einen Raum",
    description: (
      <>
        <h3 className="mb-2">
          TRAUMA DURCH BERUFLICHE BELASTUNG (z.B. Notfallmedizin, Polizei,
          Rettungskräfte)
        </h3>
        <h5>
          wenn Helfen traumatisch wird – braucht auch die Stärke einen Raum
        </h5>
        <p className="mt-3">
          Du trägst Verantwortung, triffst Entscheidungen unter Druck oder
          siehst Dinge, die sich vermeintlich nicht aus dem Kopf löschen lassen.
          <br />
          Diese HTR-Begleitung ist ein sicherer Raum für Menschen in
          systemrelevanten oder belastenden Berufen – wo Schweigen zur Pflicht
          wird, und „funktionieren“ oft wichtiger ist als fühlen.
          <br />
          Hier musst du nicht stark sein – sondern du selbst.
          <br />
          Und dein System darf loslassen, was es nie allein tragen sollte.
          <br />
          Bilder werden gelöscht, das Nervensystem entspannt und das
          Zellgedächtnis freut sich auf ein Reset.
        </p>
        <p>
          <strong>Preis:</strong>
        </p>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>
            💎 <strong>1111.- CHF</strong> für 10 Behandlungen
          </li>
        </ul>
        <p>
          <strong>Dauer pro Session:</strong> 45 Minuten
        </p>
        <p>
          <strong>Empfehlung:</strong> Für ein erfolgreiches Resultat ist es
          empfehlenswert, die Sessions zeitnah abzuhalten: mindestens 3x in der
          Woche oder täglich je eine Behandlung.
        </p>
        <p>
          <strong>Hinweis:</strong> Dieses Angebot ersetzt keine medizinische
          oder psychotherapeutische Behandlung – es wirkt klärend und
          freisetzend.
        </p>
        <p>Alle Termine flexibel einlösbar innerhalb drei Monaten.</p>
      </>
    ),
  },
  "seelenentbindung-rueckgabe-traumafrequenzen": {
    title: "Seelenentbindung – Rückgabe Inkarnierter Traumafrequenzen",
    image: "/images/services/15.webp",
    subtitle:
      "manchmal reagiert der Körper auf Dinge, die der Verstand nicht kennt",
    description: (
      <>
        <h3 className="mb-2">
          SEELENENTBINDUNG – Rückgabe inkarnierter Traumafrequenzen
        </h3>
        <h5>
          manchmal reagiert der Körper auf Dinge, die der Verstand nicht kennt
        </h5>
        <p className="mt-3">
          In dieser Arbeit geht es nicht um Aufarbeitung.
          <br />
          Sondern um Auflösung.
          <br />
          Du musst nicht wissen, was war.
          <br />
          Du darfst nur spüren, was nicht mehr zu dir gehört.
          <br />
          Was du aus anderen Zeiten, Linien, Leben übernommen hast – darf heute
          in Licht zurückgegeben werden.
          <br />
          In Würde. In Frequenz.
          <br />
          In tiefer Erinnerung an das, was du eigentlich bist.
          <br />
          Wiederkehrende Muster, unerklärliche Ängste, energetische Enge – nicht
          alles beginnt in diesem Leben.
          <br />
          Harmonyum Trauma Release öffnet einen Raum, in dem tiefsitzende
          Erfahrungen aus vergangenen Inkarnationen gelöst werden können – ohne
          Geschichten, ohne Hypnose: nur durch Frequenz, Energie und
          Zell-Erinnerung.
          <br />
          Was nicht in diesem Leben begann, darf trotzdem hier enden.
          <br />
          Für mehr FREIHEIT – in deinem jetzigen SEIN.
        </p>
        <p>
          <strong>Preis:</strong>
        </p>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>
            💎 <strong>555.- CHF</strong> für 5 Behandlungen
          </li>
        </ul>
        <p>
          <strong>Dauer pro Session:</strong> 45 Minuten
        </p>
        <p>Alle Termine flexibel einlösbar innerhalb drei Monaten.</p>
      </>
    ),
  },
  "kollektive-erlebnisse": {
    title: "Kollektive Erlebnisse (Krieg, Pandemie, Flucht, Gewalt etc.)",
    image: "/images/services/16.webp",
    subtitle:
      "manche Erfahrungen prägen nicht nur dich – sondern ganze Felder, Gesellschaften und Kulturen",
    description: (
      <>
        <h3 className="mb-2">
          KOLLEKTIVE ERLEBNISSE (Krieg, Pandemie, Flucht, Gewalt etc.)
        </h3>
        <h5>
          manche Erfahrungen prägen nicht nur dich – sondern ganze Felder,
          Gesellschaften und Kulturen
        </h5>
        <p className="mt-3">
          Manchmal ist es nicht „dein“ Trauma – und doch spürst du die
          Erschütterung.
          <br />
          Harmonyum Trauma Release hilft dir, kollektive Belastung aus deinem
          System zu entlassen.
          <br />
          Ob durch Kriegsgeschichten in der Familie, Isolation in der Pandemie,
          Flucht oder Naturkatastrophen:
          <br />
          Du darfst dich wieder entkoppeln – liebevoll, energetisch, stabil.
          <br />
          Du bist Teil eines Feldes, einer Gemeinschaft – aber du darfst zurück
          in deinen eigenen Körper. In deine eigene Wahrheit.
        </p>
        <p>
          <strong>Preis:</strong>
        </p>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>
            💎 <strong>1111.- CHF</strong> für 10 Behandlungen
          </li>
        </ul>
        <p>
          <strong>Dauer:</strong> 45 Minuten
        </p>
        <p>Alle Termine flexibel einlösbar innerhalb drei Monaten.</p>
        <p>
          <strong>Hinweis:</strong>
          <br />
          Das Angebot richtet sich an Menschen mit offenem Herzen und dem
          Wunsch, nicht nur sich selbst, sondern dem Kollektiv unserer
          Gesellschaft etwas Gutes zu tun.
        </p>
      </>
    ),
  },
  "stille-heilt-retreat": {
    title: "Stille Heilt",
    image: "/images/services/13.webp",
    subtitle: "Retreat zur Rückverbindung mit deiner Urform",
    description: (
      <>
        <h3 className="mb-2">
          STILLE HEILT – Retreat zur Rückverbindung mit deiner Urform
        </h3>
        <h5>Beschreibung:</h5>
        <p className="mt-3">
          Ein intensiver Raum für Transformation jenseits des Lauten.
          <br />
          Gemeinsam tauchen wir ein in Frequenz, Stille und energetische
          Tiefenheilung.
          <br />
          Für Menschen, die getragen haben – und nun gehalten werden wollen.
          <br />
          Auch für alte Seelen, die sich erinnern wollen, wie es sich anfühlt,
          ganz sie selbst zu sein.
        </p>
        <p>
          <strong>5 Tage Präsenz-Retreat, max. 6 Teilnehmer</strong>
          <br />
          Dieser Raum ist für dich, wenn du offen bist für tiefe Wirkung und
          Rückverbindung.
          <br />
          Täglich Meditation, Yoga, HTR-Behandlung sowie Ausflüge, Journaling
          und kreatives Verarbeiten des Prozesses.
        </p>
        <p>
          <strong>Preis:</strong>
        </p>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>
            💎 <strong>2222.- CHF</strong>
          </li>
        </ul>
        <p>
          <strong>Nächste Termine siehe hier:</strong>{" "}
          <a
            href="https://www.traumafrei.ch/retreats"
            target="_blank"
            rel="noopener"
          >
            www.traumafrei.ch/retreats
          </a>
        </p>
        <p>
          <strong>Hinweis:</strong> Dieses Angebot ersetzt keine medizinische
          oder psychotherapeutische Behandlung – es wirkt laut Kunden-Feedback
          klärend und freisetzend.
        </p>
      </>
    ),
  },
};
export { serviceData };

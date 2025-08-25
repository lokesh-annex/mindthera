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
        <section className="py-5 session-sec-bg-fe">
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
        <section
          className="py-5 urfrom-sessions"
          style={{ background: "#fff" }}
        >
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
              position: "absolute",
              inset: 0,
              zIndex: 0,
              background: `url('/images/c-img.jpg') center `,
              filter: "blur(10px)",
              opacity: 0.6,
            }}
            aria-hidden="true"
          />
          {/* Overlay for better text contrast */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: "#ffffff88",
            }}
            aria-hidden="true"
          />
          <div
            className="container"
            style={{ position: "relative", zIndex: 2 }}
          >
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
                        ></i>{" "}
                        5er-Paket:{" "}
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
                        ></i>{" "}
                        7er-Paket:{" "}
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
                        <span className="text-pink-600 fs-4">
                          <i className="bi bi-hourglass-split text-primary"></i>{" "}
                        </span>{" "}
                        Dauer: <span className="fw-semibold">45 Minuten</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stimmen aus den Sessions Section */}
        <section className="py-8 bg-light stimmen-sec ">
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
  "paar-special-mit-kinderwunsch": {
    title: "",
    image: "/images/services/2.webp",
    subtitle: "",
    description: (
      <>
        <div className="container py-5">
          <div className=" d-flex flex-column flex-md-row align-items-center justify-content-center">
            <div className="mb-4 mb-md-0 me-md-4 ">
              <img
                src="/images/services/2.webp"
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
                Paar-special Mit Kinderwunsch
              </h2>
              <h4 className="text-right mb-3" style={{ color: "#4f8a8b" }}>
                ein heilender Raum für Empfängnis – körperlich, energetisch,
                seelisch
              </h4>
              <p className="mt-3 text-right">
                Beschreibung: Ein Kind zu empfangen ist mehr als ein
                körperlicher Prozess. Es ist ein inneres JA. Eine Einladung. Ein
                Raum, der entstehen darf – in Stille, in Vertrauen, in Frequenz.
                <br />
                Dieses Paar-Special ist ein hochsensibler, würdevoller Raum für
                euch als Paar. Ein Raum, der nicht „funktionieren“ will –
                sondern euch dabei unterstützt, euch selbst, euren Körper und
                eure Verbindung neu zu spüren. Still. Sanft. Offen. Und frei von
                Druck.
              </p>
            </div>
          </div>
        </div>

        <section className="py-5 session-sec-bg-fe">
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
                  Dieses Paket enthält
                </h2>
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
                    3 HTR-Einzelsitzungen für beide Partner:innen (6 Sessions
                    insgesamt)
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
                    1 schamanisches Ritual zur Einladung der Kinderseele
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
                    individuell abgestimmte SchüsslerSalze zur Begleitung der
                    natürlichen Empfängnis
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
                    energetische Begleitung, keine medizinische Diagnostik
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 price-sec">
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              background: `url('/images/c-img.jpg') center `,
              filter: "blur(10px)",
              opacity: 0.6,
            }}
            aria-hidden="true"
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: "#ffffff88",
            }}
            aria-hidden="true"
          />
          <div
            className="container"
            style={{ position: "relative", zIndex: 2 }}
          >
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
                  <div className="p-4 flex-1 d-flex flex-column justify-content-center ">
                    <h2 className="h2 fw-bold text-dark mb-4 text-left w-100">
                      Session Preise:
                    </h2>
                    <ul className="fs-5 text-dark mb-0 w-100 list-unstyled">
                      <li className="mb-3 d-flex align-items-center gap-3">
                        <i
                          className="bi bi-calendar4-range"
                          style={{ fontSize: "0.8rem", color: "#000000ff" }}
                        ></i>{" "}
                        Preis für das Gesamtpaket:{" "}
                        <span className="fw-semibold">
                          1111
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
                      <p style={{ fontSize: "1.1rem" }}>
                        (inkl. aller Sessions, Ritual & SchüsslerSalze) Termine
                        flexibel einlösbar innerhalb drei Monaten.
                      </p>
                      <li className="mb-3 d-flex align-items-center gap-2">
                        <span className="text-pink-600 fs-4">
                          <i className="bi bi-hourglass-split text-primary"></i>{" "}
                        </span>{" "}
                        Dauer: <span className="fw-semibold">90 Minuten</span>
                      </li>
                    </ul>
                    <p style={{ fontSize: "1.1rem" }}>
                      Ritual nach gemeinsamer Terminabsprache / auch am Abend
                      möglich
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-light stimmen-sec ">
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
                  Hinweis:
                </h2>
                <div
                  className="mb-3"
                  style={{
                    fontSize: "1.15rem",

                    fontWeight: 500,
                  }}
                >
                  Das Angebot richtet sich an Paare mit offenem Herzen –
                  Empfohlen bei Wunsch nach natürlicher Empfängnis, nach
                  Fehlgeburt oder wenn &ldquo;nichts mehr helfen konnte, aber
                  innerlich noch Hoffnung lebt“. Der/ die PartnerIn kann während
                  der Behandlung jeweils selbst entscheiden, ob er/sie im Raum
                  mit dabei ist oder sich zur Meditation oder zu einem
                  Spaziergang zurückzieht.
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    ),
  },
  "ahnenfrieden-energetische-loeschung": {
    title: "",
    image: "/images/services/3.webp",
    subtitle: "",
    description: (
      <>
        <div className="container py-5">
          <div className=" d-flex flex-column flex-md-row align-items-center justify-content-center">
            <div className="mb-4 mb-md-0 me-md-4 ">
              <img
                src="/images/services/3.webp"
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
                Ahnenfrieden – energetische Löschung von übernommenem Trauma
              </h2>
              <h4 className="text-right mb-3" style={{ color: "#4f8a8b" }}>
                du trägst, was du fühlst. Aber Manches ist alt, gehört nicht zu
                dir und wartet auf Erlösung.
              </h4>
              <p className="mt-3 text-right">
                Was du trägst, ist nicht immer deins. Viele Gefühle, Ängste,
                Wiederholungen und körperliche Spannungen sind energetische
                Speicher aus deiner Familienlinie – manchmal Generationen alt.
                <br />
                Familien geben nicht nur Gene weiter – sondern auch ungelöste
                Emotionen, Überlebensmuster, Schuld, Tabus. Sucht, Essstörungen,
                emotionale Leere, Bindungsangst – vieles davon ist nicht
                „deins“, aber wirkt in dir als unbewusst übernommenes
                Überlebensmuster.
              </p>
            </div>
          </div>
        </div>

        <section className="py-10 bg-light session-sec-bg">
          <div className="container mx-auto">
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              In dieser Frequenzarbeit darf zurückgehen, was durch dich hindurch
              gegangen ist –aber nie wirklich zu dir gehört hat. Du gibst nicht
              deine Familie zurück. Du gibst den Schmerz zurück,der nicht mehr
              weitergegeben werden muss. Für dich. Für deine Kinder. Für das
              Feld.
              <br />
              In Würde. In Frequenz. In Dankbarkeit.
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
                  Damit du nicht weiterträgst, was längst gesehen werden will.
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
                  Und dich selbst wieder spürst – ohne die Last derer vor dir.
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
                  Du heilst für das gesamte Kollektiv deiner Ahnenlinie.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 price-sec">
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              background: `url('/images/c-img.jpg') center `,
              filter: "blur(10px)",
              opacity: 0.6,
            }}
            aria-hidden="true"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: "#ffffff88",
            }}
            aria-hidden="true"
          />
          <div
            className="container"
            style={{ position: "relative", zIndex: 2 }}
          >
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
                  <div className="p-4 flex-1 d-flex flex-column justify-content-center ">
                    <h2 className="h2 fw-bold text-dark mb-4 text-left w-100">
                      Session Preise:
                    </h2>
                    <ul className="fs-5 text-dark mb-0 w-100 list-unstyled">
                      <li className="mb-3 d-flex align-items-center gap-3">
                        <i
                          className="bi bi-calendar4-range"
                          style={{ fontSize: "0.8rem", color: "#000000ff" }}
                        ></i>{" "}
                        5 Behandlungen:
                        <span className="fw-semibold">
                          1111
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
                        <span className="text-pink-600 fs-4">
                          <i className="bi bi-hourglass-split text-primary"></i>{" "}
                        </span>
                        Dauer: <span className="fw-semibold">45 Minuten</span>
                      </li>
                    </ul>
                    <p style={{ fontSize: "1.1rem" }}>
                      Alle Termine flexibel einlösbar innerhalb drei Monaten.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    ),
  },
  "gemeinsame-familienzeit": {
    title: "",
    image: "/images/services/4.webp",
    subtitle: "",
    description: (
      <>
        <div className="container py-5">
          <div className=" d-flex flex-column flex-md-row align-items-center justify-content-center">
            <div className="mb-4 mb-md-0 me-md-4 ">
              <img
                src="/images/services/4.webp"
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
                Gemeinsame Familienzeit
              </h2>
              <h4 className="text-right mb-3" style={{ color: "#4f8a8b" }}>
                ein heilender Raum für Eltern – in Rückverbindung mit sich
                selbst und ihren Kindern
              </h4>
              <p className="mt-3 text-right">
                Beschreibung: Familien tragen viel – oft mehr, als Worte fassen
                können. Dieses Angebot schafft einen Raum, in dem nicht nur ein
                Mensch, sondern ein ganzes Familiensystem entlastet und neu
                verbunden wird. Stück für Stück. In Ruhe. In Würde. In Frequenz.
                <br />
                Bei der „Gemeinsamen Familienzeit“ stehen die Eltern im Zentrum
                der Behandlung – denn wenn ihr gehalten seid, kann auch euer
                Kind tiefer atmen. Die Kinder werden in kurzen, sanften
                Sequenzen zusätzlich energetisch mit behandelt – kostenfrei,
                liebevoll und ohne Druck.
              </p>
              <p>
                Das Ziel: ein feines energetisches Nachnähren für alle, ohne
                Überforderung oder Fixierung auf „Themen“.
              </p>
            </div>
          </div>
        </div>
        <section className="py-5 session-sec-bg-fe">
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
                  So funktioniert es:
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
                    Pro Session wird ein Elternteil behandelt, das andere
                    begleitet das Kind
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
                    Für die Behandlung benötigen wir Ruhe – Spielsachen bitte
                    selbst mitbringen
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
                    Die energetische Begleitung der Kinder erfolgt individuell
                    und intuitiv
                  </li>
                </ul>
                <p>
                  Ich biete euch maximale Flexibilität – damit ihr euch nicht
                  noch mehr „organisieren müsst“, sondern einfach kommen könnt,
                  wie es gerade für euch passt.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 price-sec">
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              background: `url('/images/c-img.jpg') center `,
              filter: "blur(10px)",
              opacity: 0.6,
            }}
            aria-hidden="true"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: "#ffffff88",
            }}
            aria-hidden="true"
          />
          <div
            className="container"
            style={{ position: "relative", zIndex: 2 }}
          >
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
                  <div className="p-4 flex-1 d-flex flex-column justify-content-center ">
                    <h2 className="h2 fw-bold text-dark mb-4 text-left w-100">
                      Session Preise:
                    </h2>
                    <ul className="fs-5 text-dark mb-0 w-100 list-unstyled">
                      <li className="mb-3 d-flex align-items-center gap-3">
                        <i
                          className="bi bi-calendar4-range"
                          style={{ fontSize: "0.8rem", color: "#000000ff" }}
                        ></i>{" "}
                        Einzelsession
                        <span className="fw-semibold">
                          250
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
                        ></i>{" "}
                        Dreierpaket
                        <span className="fw-semibold">
                          777
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
                        <span className="text-pink-600 fs-4">
                          <i className="bi bi-hourglass-split text-primary"></i>{" "}
                        </span>{" "}
                        Dauer: <span className="fw-semibold">45 Minuten</span>
                      </li>
                    </ul>
                    <p style={{ fontSize: "1.1rem" }}>
                      Wichtig: Bitte jeweils bei der Buchung die ZEIT je nach
                      Anzahl Teilnehmer selbst dazu buchen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8 bg-light stimmen-sec ">
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
                  Hinweis:
                </h2>

                <div
                  className="mb-3"
                  style={{ color: "#3D2C4A", fontSize: "1.08rem" }}
                >
                  Nach emotional herausfordernden Zeiten, Übergängen (z.B.
                  Umzug, Trennung, Todesfall) oder einfach als gemeinsame
                  energetische Stärkung.
                  <br />
                  Ein Raum, in dem niemand funktionieren muss – sondern alle
                  sein dürfen.
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    ),
  },
  "schwangerschaft": {
    title: "",
    image: "/images/services/6.webp",
    subtitle: "",
    description: (
      <>
        <div className="container py-5">
          <div className=" d-flex flex-column flex-md-row align-items-center justify-content-center">
            <div className="mb-4 mb-md-0 me-md-4 ">
              <img
                src="/images/services/5.webp"
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
                Schwangerschaft
              </h2>
              <h4 className="text-right mb-3" style={{ color: "#4f8a8b" }}>
                Nervensystem-Beruhigung & Rückverbindung
              </h4>
              <p className="mt-3 text-right">
                Eine Schwangerschaft ist ein sensibler Übergang – körperlich,
                seelisch, energetisch. Und manchmal geraten wir in Situationen,
                die uns erschüttern: Ein medizinischer Eingriff, eine Diagnose,
                ein plötzlicher Schreck, emotionale
                <br />
                Überforderung. Oder einfach das Gefühl: Mein System ist unruhig,
                und ich weiß nicht warum. Dieses HTR-Angebot ist ein sanfter,
                nicht-invasiver Raum zur Stabilisierung deines Nervensystems –
                speziell ab dem 2. Trimester. Du musst nichts erzählen. Dein
                Körper spricht, deine Frequenz erinnert sich.
              </p>
              <p>
                Es ist da für dich, wenn etwas passiert ist – und genauso, wenn
                du einfach vorbeugen möchtest, um klar, ruhig und liebevoll mit
                dir und deinem Baby verbunden zu bleiben.
              </p>
              <p>
                Auf Wunsch integrieren wir eine geführte Meditation zur
                Kontaktaufnahme mit der Kinderseele – intuitiv, zart,
                verbindend.
              </p>
            </div>
          </div>
        </div>
        <section className="py-5 session-sec-bg-fe">
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
                  Was dieses Angebot bewirkt:
                </h2>
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
                    Harmonisierung deines autonomen Nervensystems
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
                    sanftes Lösen von Schreckenergie oder Ängsten
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
                    energetische Stabilisierung deines Körpers als „Nest“ für
                    das Baby
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
                    Rückverbindung mit deinem inneren JA zur Schwangerschaft
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
                    emotionale Beruhigung – ohne viele Worte
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-5 urfrom-sessions"
          style={{ background: "#fff" }}
        >
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
                  Geeignet für:
                </h2>
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
                    alle Schwangeren ab dem 2. Trimester
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
                    nach emotionalen oder medizinischen Schreckmomenten
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
                    bei innerer Unruhe, Angst, Überforderung
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
                    für bewusst werdende Mütter, die Raum für sich & ihr Kind
                    schaffen möchten
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 price-sec">
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              background: `url('/images/c-img.jpg') center `,
              filter: "blur(10px)",
              opacity: 0.6,
            }}
            aria-hidden="true"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: "#ffffff88",
            }}
            aria-hidden="true"
          />
          <div
            className="container"
            style={{ position: "relative", zIndex: 2 }}
          >
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
                  <div className="p-4 flex-1 d-flex flex-column justify-content-center ">
                    <h2 className="h2 fw-bold text-dark mb-4 text-left w-100">
                      Session Preise:
                    </h2>
                    <ul className="fs-5 text-dark mb-0 w-100 list-unstyled">
                      <li className="mb-3 d-flex align-items-center gap-3">
                        <i
                          className="bi bi-calendar4-range"
                          style={{ fontSize: "0.8rem", color: "#000000ff" }}
                        ></i>{" "}
                        6er-Paket:
                        <span className="fw-semibold">
                          666
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
                        <span className="text-pink-600 fs-4">
                          <i className="bi bi-hourglass-split text-primary"></i>{" "}
                        </span>{" "}
                        6 Sessions à ca:{" "}
                        <span className="fw-semibold">60–75 Minuten</span>
                      </li>
                    </ul>
                    <p style={{ fontSize: "1.1rem" }}>
                      auf Wunsch inkl. Meditation zur Kontaktaufnahme mit der
                      Kinderseele
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8 bg-light stimmen-sec ">
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
                  Hinweis:
                </h2>
                <div
                  className="mb-3"
                  style={{ color: "#3D2C4A", fontSize: "1.08rem" }}
                >
                  Dieses Angebot ersetzt keine Hebammen- oder ärztliche
                  Betreuung – es wirkt ergänzend, energetisch stabilisierend und
                  tief verbindend.
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    ),
  },
  "mutter-und-kind-geburts-special": {
    title: "",
    image: "/images/services/7.webp",
    subtitle: "",
    description: (
      <>
        <div className="container py-5">
          <div className=" d-flex flex-column flex-md-row align-items-center justify-content-center">
            <div className="mb-4 mb-md-0 me-md-4 ">
              <img
                src="/images/services/6.webp"
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
                Mutter & Kind – Geburts-special
              </h2>
              <h4 className="text-right mb-3" style={{ color: "#4f8a8b" }}>
                die Geburt verändert alles – auch das, was oft unsichtbar bleibt
              </h4>
              <p className="mt-3 text-right">
                Beschreibung: Dieses HTR-Special ist ein heilender Raum für
                Mutter und Kind – gemeinsam, verbunden, würdevoll.
                <br />
                Es geht nicht um Nachbearbeitung, sondern um Rückverbindung: zur
                Kraft, zur Stille, zur ursprünglichen Bindung, die jenseits der
                Worte liegt. Ob nach sanfter oder schwieriger Geburt – viele
                Babys tragen Spannungen, die sich nicht zeigen, aber spürbar
                sind.
              </p>
              <p>
                Auch du als Mutter trägst oft mehr, als du zeigst – körperlich,
                emotional, seelisch.
              </p>
            </div>
          </div>
        </div>
        <section className="py-5 session-sec-bg-fe">
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
                  Diese Behandlung wirkt auf Zellebene:
                </h2>
                <p>
                  still, tief, sanft. Ohne Re-Traumatisierung. Energetische
                  Rückverbindung nach der Geburt Für dich. Für dein Baby. Für
                  eure gemeinsame Verbindung.
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
                    Mutter & Kind sind gemeinsam im Raum
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
                    Sanfte energetische Behandlung für dich & dein Kind
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
                    Stillen, Tragen oder Kuscheln ist jederzeit möglich
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
                    Die Sitzung richtet sich ganz nach eurem natürlichen
                    Rhythmus
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 price-sec">
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              background: `url('/images/c-img.jpg') center `,
              filter: "blur(10px)",
              opacity: 0.6,
            }}
            aria-hidden="true"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: "#ffffff88",
            }}
            aria-hidden="true"
          />
          <div
            className="container"
            style={{ position: "relative", zIndex: 2 }}
          >
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
                  <div className="p-4 flex-1 d-flex flex-column justify-content-center ">
                    <h2 className="h2 fw-bold text-dark mb-4 text-left w-100">
                      Session Preise:
                    </h2>
                    <ul className="fs-5 text-dark mb-0 w-100 list-unstyled">
                      <li className="mb-3 d-flex align-items-center gap-3">
                        <i
                          className="bi bi-calendar4-range"
                          style={{ fontSize: "0.8rem", color: "#000000ff" }}
                        ></i>{" "}
                        Einzelsession:
                        <span className="fw-semibold">
                          120
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
                        <i
                          className="bi bi-calendar4-range"
                          style={{ fontSize: "0.8rem", color: "#000000ff" }}
                        ></i>{" "}
                        Dreierpaket:
                        <span className="fw-semibold">
                          333
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
                        <span className="text-pink-600 fs-4">
                          <i className="bi bi-hourglass-split text-primary"></i>{" "}
                        </span>{" "}
                        Dauer: <span className="fw-semibold">75 Minuten</span>
                      </li>
                    </ul>
                    <p style={{ fontSize: "1.1rem" }}>
                      auf Wunsch inkl. Meditation zur Kontaktaufnahme mit der
                      Kinderseele
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8 bg-light stimmen-sec ">
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
                  Hinweis:
                </h2>
                <div
                  className="mb-3"
                  style={{ color: "#3D2C4A", fontSize: "1.08rem" }}
                >
                  Auch bei Neugeborenen (ab 3 Wochen) möglich.
                  <br />
                  Ideal innerhalb der ersten 6 Lebensmonate – aber auch für
                  größere Babys und Mütter in späterer Rückverbindung sehr
                  kraftvoll.
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    ),
  },
  "wochenbett-begleitung": {
    title: "",
    image: "/images/services/5.webp",
    subtitle: "",
    description: (
      <>
        <div className="container py-5">
          <div className=" d-flex flex-column flex-md-row align-items-center justify-content-center">
            <div className="mb-4 mb-md-0 me-md-4 ">
              <img
                src="/images/services/7.webp"
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
               Ergänzende Begleitung Im Wochenbett
              </h2>
              <h4 className="text-right mb-3" style={{ color: "#4f8a8b" }}>
                weil Rückverbindung nicht mit der Geburt deines Kindes endet
              </h4>
              <p className="mt-3 text-right">
                Wenn du bereits während der Schwangerschaft mit HTR begleitet
                wurdest, kannst du dieses Feld auch im Wochenbett sanft
                weiterführen. Denn oft zeigt sich erst nach der Geburt, was du
                wirklich gehalten hast – körperlich, emotional und seelisch!
              </p>
            </div>
          </div>
        </div>
        <section className="py-5 session-sec-bg-fe">
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
                  Die Sessions im Wochenbett dienen
                </h2>
                <p>
                  still, tief, sanft. Ohne Re-Traumatisierung. Energetische
                  Rückverbindung nach der Geburt Für dich. Für dein Baby. Für
                  eure gemeinsame Verbindung.
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
                    deiner Regeneration
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
                    dem Nachnähren deiner Wurzel
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
                    der energetischen Klärung des Geburtsprozesses (auch bei
                    Kaiserschnitt, Interventionen, emotionaler Überforderung)
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
                    der tiefen Rückverbindung mit dir selbst – nicht nur als
                    Mutter, sondern als Frau Wie funktioniert die Kombination?
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
                    Du kannst dein Schwangerschafts-Paket einfach „verlängern“
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
                    oder nach der Geburt in ein neues Wochenbett-Paket übergehen
                  </li>

                  <div className="mt-4">
                    <span
                      style={{
                        fontSize: "1.25rem",
                        color: "rgb(92, 55, 125)",
                        fontWeight: 600,
                      }}
                    >
                      <i className="bi bi-arrow-right-circle me-3"></i>
                      die Übergänge gestalten wir gemeinsam – in deinem
                      Rhythmus, ohne Druck Für die erste Zeit nach der Geburt
                      biete ich auch Hausbesuche (zzgl. Wegpauschale) an; sprich
                      mich gerne an, was für dich möglich ist
                    </span>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 price-sec">
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              background: `url('/images/c-img.jpg') center `,
              filter: "blur(10px)",
              opacity: 0.6,
            }}
            aria-hidden="true"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: "#ffffff88",
            }}
            aria-hidden="true"
          />
          <div
            className="container"
            style={{ position: "relative", zIndex: 2 }}
          >
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
                  <div className="p-4 flex-1 d-flex flex-column justify-content-center ">
                    <h2 className="h2 fw-bold text-dark mb-4 text-left w-100">
                      Session Preise:
                    </h2>
                    <ul className="fs-5 text-dark mb-0 w-100 list-unstyled">
                      <li className="mb-3 d-flex align-items-center gap-3">
                        <i
                          className="bi bi-calendar4-range"
                          style={{ fontSize: "0.8rem", color: "#000000ff" }}
                        ></i>{" "}
                        6er-Paket:
                        <span className="fw-semibold">
                          666
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
                        <span className="text-pink-600 fs-4">
                          <i className="bi bi-hourglass-split text-primary"></i>{" "}
                        </span>{" "}
                        Dauer: <span className="fw-semibold">45 Minuten</span>
                      </li>
                    </ul>
                    <p style={{ fontSize: "1.1rem" }}>
                      auf Wunsch inkl. Meditation zur Kontaktaufnahme mit der
                      Kinderseele
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8 bg-light stimmen-sec ">
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
                  Hinweis:
                </h2>
                <div
                  className="mb-3"
                  style={{ color: "#3D2C4A", fontSize: "1.08rem" }}
                >
                  Auch bei Neugeborenen (ab 3 Wochen) möglich.
                  <br />
                  Ideal innerhalb der ersten 6 Lebensmonate – aber auch für
                  größere Babys und Mütter in späterer Rückverbindung sehr
                  kraftvoll.
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    ),
  },
  "traumata-aus-der-kindheit": {
    title: "",
    image: "/images/services/8.webp",
    subtitle: "",
    description: (
      <>
        <div className="container py-5">
          <div className=" d-flex flex-column flex-md-row align-items-center justify-content-center">
            <div className="mb-4 mb-md-0 me-md-4 ">
              <img
                src="/images/services/8.webp"
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
              Traumata Aus Der Kindheit
              </h2>
              <h4 className="text-right mb-3" style={{ color: "#4f8a8b" }}>
                die ersten Jahre prägen alles – auch das, was wir längst
                vergessen haben
              </h4>
              <p className="mt-3 text-right">
                Erlebnisse aus der frühen Kindheit hinterlassen Spuren im
                Nervensystem – selbst wenn sie ohne Worte geschahen. Ob
                emotionale Vernachlässigung, Überforderung, Kontrollverlust oder
                subtiler
              </p>
              <p className="mt-3 text-right">
                Bindungsabbruch: Der Körper erinnert sich – durch Enge, Angst,
                Anspannung oder wiederkehrende Gefühle von Nicht-genug-sein und
                dem Gefühl des Nicht-geliebt-werdens.
              </p>
              <p>
                In dieser HTR-Begleitung werden gespeicherte Kindheitsprägungen
                sanft gelöst, ohne sie erneut durchlebt werden zu müssen. Es
                entsteht Raum, in dem dein inneres Kind sicher wird – und du in
                deinem heutigen Körper ganz ankommen kannst.
              </p>
              <p>
                Du musst nichts erzählen. Dein System weiß, wo die Heilung
                beginnt.
              </p>
            </div>
          </div>
        </div>
        <section className="py-5 session-sec-bg-fe">
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
                  Ablauf:
                </h2>
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
                    das Kind entscheidet, ob es mit der Mutter gemeinsam im Raum
                    ist
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
                    dem Nachnähren deiner Wurzel
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
                    Sanfte energetische Behandlung für dein Kind
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
                    Die Sitzung richtet sich ganz nach dem natürlichen Rhythmus
                    des Kindes; je nach Alter braucht es etwas mehr zeit, um
                    Vertrauen aufzubauen. Diese Zeit nehmen wir uns!
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
                    Du kannst dein Schwangerschafts-Paket einfach „verlängern“
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 price-sec">
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              background: `url('/images/c-img.jpg') center `,
              filter: "blur(10px)",
              opacity: 0.6,
            }}
            aria-hidden="true"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: "#ffffff88",
            }}
            aria-hidden="true"
          />
          <div
            className="container"
            style={{ position: "relative", zIndex: 2 }}
          >
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
                  <div className="p-4 flex-1 d-flex flex-column justify-content-center ">
                    <h2 className="h2 fw-bold text-dark mb-4 text-left w-100">
                      Session Preise:
                    </h2>
                    <ul className="fs-5 text-dark mb-0 w-100 list-unstyled">
                      <li className="mb-3 d-flex align-items-center gap-3">
                        <i
                          className="bi bi-calendar4-range"
                          style={{ fontSize: "0.8rem", color: "#000000ff" }}
                        ></i>{" "}
                        Einzelsession:
                        <span className="fw-semibold">
                          80
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
                        ></i>{" "}
                        Dreierpaket:
                        <span className="fw-semibold">
                          222
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
                        <span className="text-pink-600 fs-4">
                          <i className="bi bi-hourglass-split text-primary"></i>{" "}
                        </span>{" "}
                        Dauer: <span className="fw-semibold">60 Minuten</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    ),
  },
 
  "trauma-durch-emotionale-und-koerperliche-blockaden": {
    title: "",
    image: "/images/services/9.webp",
    subtitle: "",
    description: (
      <>
        <div className="container py-5">
          <div className=" d-flex flex-column flex-md-row align-items-center justify-content-center">
            <div className="mb-4 mb-md-0 me-md-4 ">
              <img
                src="/images/services/9.webp"
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
                Trauma Durch Emotionale & Körperliche Blockaden
              </h2>
              <h4 className="text-right mb-3" style={{ color: "#4f8a8b" }}>
                wenn etwas zu gross war, um verarbeitet zu werden – wird es vom
                Körper getragen
              </h4>
              <p className="mt-3 text-right">
               Gewalt, Missbrauch, Verlust, Isolation, Panik, Ohnmacht –
diese Erfahrungen hinterlassen nicht nur Erinnerung, sondern Resonanz.
<br/>
  Der Körper „friert ein“, um zu schützen – aber irgendwann willst
                du wieder atmen. HTR öffnet einen geschützten Raum, in dem du
                nicht reden musst, um gehört zu werden.
                <br/>
                Dein Körper darf loslassen, was nicht mehr zu dir gehört.
                <br/>
                Und du darfst dich erinnern, wie sich Sicherheit anfühlt.
              </p>
            
            </div>
          </div>
        </div>
        <section className="py-8 bg-light stimmen-sec ">
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
                  Empfehlung:
                </h2>

                <div
                  className="mb-3"
                  style={{ color: "#3D2C4A", fontSize: "1.08rem" }}
                >
                  Für ein erfolgreiches Resultat ist es empfehlenswert, die
                  Sessions zeitnah Für ein erfolgreiches Resultat ist es
                  empfehlenswert, die Sessions zeitnah Alle Termine flexibel
                  einlösbar innerhalb drei Monaten.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 price-sec">
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              background: `url('/images/c-img.jpg') center `,
              filter: "blur(10px)",
              opacity: 0.6,
            }}
            aria-hidden="true"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: "#ffffff88",
            }}
            aria-hidden="true"
          />
          <div
            className="container"
            style={{ position: "relative", zIndex: 2 }}
          >
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
                  <div className="p-4 flex-1 d-flex flex-column justify-content-center ">
                    <h2 className="h2 fw-bold text-dark mb-4 text-left w-100">
                      Session Preise:
                    </h2>
                    <ul className="fs-5 text-dark mb-0 w-100 list-unstyled">
                      <li className="mb-3 d-flex align-items-center gap-3">
                        <i
                          className="bi bi-calendar4-range"
                          style={{ fontSize: "0.8rem", color: "#000000ff" }}
                        ></i>{" "}
                        Einzelsession:
                        <span className="fw-semibold">
                          80
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
                        ></i>{" "}
                        Dreierpaket:
                        <span className="fw-semibold">
                          222
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
                        <span className="text-pink-600 fs-4">
                          <i className="bi bi-hourglass-split text-primary"></i>{" "}
                        </span>{" "}
                        Dauer: <span className="fw-semibold">45 Minuten</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stimmen aus den Sessions Section */}
        <section className="py-8 bg-light stimmen-sec ">
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
                  Hinweis
                </h2>

                <div
                  className="mb-3"
                  style={{ color: "#3D2C4A", fontSize: "1.08rem" }}
                >
                  Dieses Angebot ersetzt keine medizinische oder
                  psychotherapeutische Behandlung – es wirkt klärend und
                  freisetzend. KundInnen berichten von wichtigen, positiven
                  Impulsen während der Begleitung einer ambulanten,
                  psychologischen Behandlung.
                </div>
                <p>Alle Termine flexibel einlösbar innerhalb drei Monaten.</p>
              </div>
            </div>
          </div>
        </section>
      </>
    ),
  },
   "trauma-nach-unfall": {
    title: "",
    image: "/images/services/10.webp",
    subtitle: "",
    description: <>
    <div className="container py-5">
    <div className=" d-flex flex-column flex-md-row align-items-center justify-content-center">
        <div className="mb-4 mb-md-0 me-md-4 ">
            <img src="/images/services/10.webp" alt="Harmonyum Trauma Release" style={{
                  maxWidth: "320px",
                  width: "100%",
                  borderRadius: "12px",
                }} />
        </div>
        <div className="flex-grow-1">
            <h2 className="text-right fw-bold mb-2" style={{ color: "#1a2a6c" }}>
                Trauma Nach Unfall
            </h2>
            <h4 className="text-right mb-3" style={{ color: "#4f8a8b" }}>
                Erste-Hilfe-Special mit BlueBody-Aktivierung
            </h4>
            <p className="mt-3 text-right">
               Beschreibung:
Ein Unfall hinterlässt mehr als Spuren im und am Körper.
Manchmal bleibt etwas zurück – in den Zellen, im Nervensystem, im Energiefeld.
Unbenannt, aber spürbar: Schreck, Spannung, Entkopplung.
            </p>
            <p className="mt-3 text-right">
               Dieses Special ist ein hochfrequenter Raum für Menschen, die nach einem Unfall wieder
ganz im eigenen Körper ankommen wollen – ruhig, energetisch, tief verbunden.
            </p>
          
        </div>
    </div>
</div>

<section className="py-5 session-sec-bg-fe">
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
                 Was dieses Paket besonders macht
                </h2>
                <p
                  className="lead"
                  style={{ color: "#3D2C4A", fontWeight: 500 }}
                >
                 Neben der klassischen HTR-Traumaheilung arbeite ich hier mit der Aktivierung deines
BlueBody – deiner besten, gesündesten, vollkommenen energetischen Version.

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
                   Der BlueBody ist wie dein äusserer Schutzengel – eine lichtvolle Schutzhülle um deinen
physischen Körper.
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
                   Über ihn lässt sich heilende Energie gezielt in Körperbereiche lenken, die nach einem
Unfall Unterstützung brauchen.
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
                   Besonders der Bereich um das Rectum (untere Wirbelsäule, Beckenboden, unteres
Nervensystem) ist energetisch verbunden mit diesem Körper. Dort liegt oft der Ursprung
von Blockaden nach Sturz, Schleudertrauma oder Operation.
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
                   In der Aktivierung wird gezielt Licht, Frequenz und Präsenz an die Stellen gesendet, die
nach Heilung rufen – ohne Druck, nur durch die Erinnerung an dein GanzSein.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
<section
          className="py-5 urfrom-sessions"
          style={{ background: "#fff" }}
        >
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
                 Für wen:
                </h2>
               
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
                    Nach Unfällen, Operationen, Stürzen, Erschütterungen
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
                  Bei diffusen Körpersymptomen ohne klare Ursache
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
                   Wenn du spürst: „Etwas ist noch nicht ganz zurückgekommen“
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
                   Auch ergänzend zu einer physiologischen Behandlung möglich
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
                    Wichtig: Der/ die PatientIn muss in der Lage sein, auf dem Bauch oder in beiden
Seitenlagen zu liegen.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

<section className="py-5 price-sec">
    <div style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              background: `url('/images/c-img.jpg') center `,
              filter: "blur(10px)",
              opacity: 0.6,
            }} aria-hidden="true" />
    <div style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: "#ffffff88",
            }} aria-hidden="true" />
    <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="new-session-box">
            <div className="row">
                <div className="col-lg-5 col-md-12">
                    <div className="flex-1 d-flex flex-column justify-content-center align-items-center">
                        <img src="/images/services/session-img.png" alt="Session Booking" className="w-100 max-w-xs rounded-lg shadow-md" />
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="p-4 flex-1 d-flex flex-column justify-content-center ">
                        <h2 className="h2 fw-bold text-dark mb-4 text-left w-100">
                           Zwei mögliche Pakete:
                        </h2>
                        <ul className="fs-5 text-dark mb-0 w-100 list-unstyled">
                            <li className="mb-0 d-flex align-items-center gap-3">
                                <i className="bi bi-calendar4-range" style={{ fontSize: "0.8rem", color: "#000000ff" }}></i>{" "}
                                5er-Paket:
                                <span className="fw-semibold">
                                    888
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 432.763 432.762">
                                        <g>
                                            <path d="M374.363 342.635c-25.563 26.889-58.292 41.7-92.16 41.7-55.509 0-103.572-38.981-126.192-95.329h154.186c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.21-24.21-24.21H143.708a202.583 202.583 0 0 1-1.472-24.211c0-9.274.653-18.365 1.871-27.237h166.09c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.211-24.21-24.211H157.299c23.105-54.698 70.4-92.302 124.904-92.302 33.868 0 66.597 14.812 92.16 41.698 9.203 9.685 24.518 10.083 34.224.872 9.693-9.215 10.077-24.539.875-34.229C374.671 20.156 329.478 0 282.209 0c-80.712 0-149.705 58.62-176.478 140.724H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h54.503c-.981 8.934-1.542 18.007-1.542 27.237 0 8.192.428 16.255 1.211 24.211H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h63.916c26.043 83.691 95.733 143.75 177.433 143.75 47.274 0 92.456-20.161 127.247-56.755 9.208-9.693 8.83-25.015-.869-34.229-9.687-9.215-25.015-8.83-34.218.857z" fill="#5c377d" />
                                        </g>
                                    </svg>
                                </span>
                            </li>
                            <p className="mb-1" style={{ fontSize: "0.9rem" }}>5 tiefgehende HTR-Sessions mit BlueBody-Aktivierung<br/>
                            ideal für körperliche Integration nach schweren Unfall-Erlebnissen </p>

                            <li className="mb-0 d-flex align-items-center gap-3">
                                <i className="bi bi-calendar4-range" style={{ fontSize: "0.8rem", color: "#000000ff" }}></i>{" "}
                              7er-Paket:
                                <span className="fw-semibold">
                                    1111
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 432.763 432.762">
                                        <g>
                                            <path d="M374.363 342.635c-25.563 26.889-58.292 41.7-92.16 41.7-55.509 0-103.572-38.981-126.192-95.329h154.186c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.21-24.21-24.21H143.708a202.583 202.583 0 0 1-1.472-24.211c0-9.274.653-18.365 1.871-27.237h166.09c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.211-24.21-24.211H157.299c23.105-54.698 70.4-92.302 124.904-92.302 33.868 0 66.597 14.812 92.16 41.698 9.203 9.685 24.518 10.083 34.224.872 9.693-9.215 10.077-24.539.875-34.229C374.671 20.156 329.478 0 282.209 0c-80.712 0-149.705 58.62-176.478 140.724H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h54.503c-.981 8.934-1.542 18.007-1.542 27.237 0 8.192.428 16.255 1.211 24.211H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h63.916c26.043 83.691 95.733 143.75 177.433 143.75 47.274 0 92.456-20.161 127.247-56.755 9.208-9.693 8.83-25.015-.869-34.229-9.687-9.215-25.015-8.83-34.218.857z" fill="#5c377d" />
                                        </g>
                                    </svg>
                                </span>
                            </li>
                             <p className="mb-1" style={{ fontSize: "0.9rem" }}>kompakterer Rhythmus, ein-, bis zweimal täglich; empfohlen direkt nach Unfall oder
akuter Erfahrung<br/>
                            gezielte Stabilisierung von Körper, Nervensystem und Energiefeld<br/>
                            inklusive gezielter Aktivierung deines BlueBody </p>
                            <li className="mb-1 d-flex align-items-center gap-2">
                                <span className="text-pink-600 fs-4">
                                    <i className="bi bi-hourglass-split text-primary"></i>{" "}
                                </span>{" "}
                                Dauer: <span className="fw-semibold">45 Minuten</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="py-8 bg-light stimmen-sec ">
    <div className="container">
        <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
                <h2 className="fw-bold mb-3" style={{
                    color: "#2D1A3A",
                    fontSize: "1.7rem",
                    letterSpacing: "1px",
                  }}>
                    Hinweis
                </h2>
                <div className="mb-3" style={{ color: "#3D2C4A", fontSize: "1.08rem" }}>
                    Dieses Angebot ersetzt keine medizinische oder physiotherapeutische
                    Betreuung – es wirkt ergänzend, energetisch & seelisch stabilisierend.
                    Auf Wunsch auch Klinik,- oder Hausbesuche möglich (zzgl. Wegpauschale).
                </div>
                <p>Alle Termine flexibel einlösbar innerhalb drei Monaten.</p>
            </div>
        </div>
    </div>
</section>
    </>,
  },
  "trauma-durch-stress-burnout": {
    title:
      "",
    image: "/images/services/12.webp",
    subtitle:
      "",
    description: <>
    <div className="container py-5">
    <div className=" d-flex flex-column flex-md-row align-items-center justify-content-center">
        <div className="mb-4 mb-md-0 me-md-4 ">
            <img src="/images/services/11.webp" alt="Harmonyum Trauma Release" style={{
                  maxWidth: "320px",
                  width: "100%",
                  borderRadius: "12px",
                }} />
        </div>
        <div className="flex-grow-1">
            <h2 className="text-right fw-bold mb-2" style={{ color: "#1a2a6c" }}>
                Trauma Durch Chronischen Stress, Burnout, Depression & Überforderung
            </h2>
            <h4 className="text-right mb-3" style={{ color: "#4f8a8b" }}>
                wenn nichts mehr geht – ist es Zeit, wieder bei dir anzukommen
            </h4>
            <p className="mt-3 text-right">
                Chronischer Stress trennt dich vom Körper.
                Burnout trennt dich vom Leben.
                Überforderung und Depression machen oft hilflos.
                Und manchmal liegt unter der Erschöpfung eine stille Überlebensleistung, die nie
                anerkannt wurde.
            </p>
            <p className="mt-3 text-right">
                Diese HTR-Begleitung ist kein „Energiestart“ – sondern eine tiefe, energetische
                Rückverbindung in dein Zellgedächtnis: zur Lebenskraft, zur Freude, zur Würde deines
                Systems.
                Sanft. Still. Ohne Druck.
            </p>
        </div>
    </div>
</div>
<section className="py-5 session-sec-bg-fe">
    <div className="container">
        <div className="row justify-content-center mb-4">
            <div className="col-lg-12 text-center">
                <h2 className="fw-bold mb-3" style={{
                    color: "#5C377D",
                    fontSize: "2.1rem",
                    letterSpacing: "1px",
                  }}>
                    Für Frieden in deinem Nervensystem.
                </h2>
                <p className="lead" style={{ color: "#3D2C4A", fontWeight: 500 }}>
                    Für deine Seele. Für dein echtes JA zum Leben.
                    Für wen:
                </p>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-12">
                <ul className="list-unstyled" style={{
                    fontSize: "1.18rem",
                    color: "#2D1A3A",
                    fontWeight: 500,
                  }}>
                    <li className="mb-4 d-flex align-items-start">
                        <span style={{
                        color: "#7A566B",
                        fontSize: "1.7rem",
                        marginRight: "16px",
                        marginTop: "2px",
                      }}>
                            <i className="bi bi-stars"></i>
                        </span>
                        Menschen mit Burnout und/ oder Depression
                    </li>
                    <li className="mb-4 d-flex align-items-start">
                        <span style={{
                        color: "#7A566B",
                        fontSize: "1.7rem",
                        marginRight: "16px",
                        marginTop: "2px",
                      }}>
                            <i className="bi bi-stars"></i>
                        </span>
                        bei Stress-Symptomen und Überforderung
                    </li>
                    <li className="mb-4 d-flex align-items-start">
                        <span style={{
                        color: "#7A566B",
                        fontSize: "1.7rem",
                        marginRight: "16px",
                        marginTop: "2px",
                      }}>
                            <i className="bi bi-stars"></i>
                        </span>
                        für Seelen, die offen sind für tiefe Erinnerung & innovative, integrative und ganzheitliche
                        Heilungsmöglichkeiten
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
<section className="py-10 bg-light session-sec-bg">
    <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#143774] mb-6">
            Empfehlung:
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Für ein erfolgreiches Resultat ist es empfehlenswert, die Sessions zeitnah
            abzuhalten: 2x täglich, 1x täglich oder mindestens 3x in der Woche.
        </p>
    </div>
</section>
<section className="py-5 price-sec">
    <div style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              background: `url('/images/c-img.jpg') center `,
              filter: "blur(10px)",
              opacity: 0.6,
            }} aria-hidden="true" />
    <div style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: "#ffffff88",
            }} aria-hidden="true" />
    <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="new-session-box">
            <div className="row">
                <div className="col-lg-5 col-md-12">
                    <div className="flex-1 d-flex flex-column justify-content-center align-items-center">
                        <img src="/images/services/session-img.png" alt="Session Booking" className="w-100 max-w-xs rounded-lg shadow-md" />
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="p-4 flex-1 d-flex flex-column justify-content-center ">
                        <h2 className="h2 fw-bold text-dark mb-4 text-left w-100">
                            Session Preise:
                        </h2>
                        <ul className="fs-5 text-dark mb-0 w-100 list-unstyled">
                            <li className="mb-3 d-flex align-items-center gap-3">
                                <i className="bi bi-calendar4-range" style={{ fontSize: "0.8rem", color: "#000000ff" }}></i>{" "}
                                10 Behandlungen:
                                <span className="fw-semibold">
                                    1111
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 432.763 432.762">
                                        <g>
                                            <path d="M374.363 342.635c-25.563 26.889-58.292 41.7-92.16 41.7-55.509 0-103.572-38.981-126.192-95.329h154.186c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.21-24.21-24.21H143.708a202.583 202.583 0 0 1-1.472-24.211c0-9.274.653-18.365 1.871-27.237h166.09c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.211-24.21-24.211H157.299c23.105-54.698 70.4-92.302 124.904-92.302 33.868 0 66.597 14.812 92.16 41.698 9.203 9.685 24.518 10.083 34.224.872 9.693-9.215 10.077-24.539.875-34.229C374.671 20.156 329.478 0 282.209 0c-80.712 0-149.705 58.62-176.478 140.724H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h54.503c-.981 8.934-1.542 18.007-1.542 27.237 0 8.192.428 16.255 1.211 24.211H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h63.916c26.043 83.691 95.733 143.75 177.433 143.75 47.274 0 92.456-20.161 127.247-56.755 9.208-9.693 8.83-25.015-.869-34.229-9.687-9.215-25.015-8.83-34.218.857z" fill="#5c377d" />
                                        </g>
                                    </svg>
                                </span>
                            </li>
                            <li className="mb-3 d-flex align-items-center gap-2">
                                <span className="text-pink-600 fs-4">
                                    <i className="bi bi-hourglass-split text-primary"></i>{" "}
                                </span>{" "}
                                Dauer: <span className="fw-semibold">45 Minuten</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="py-8 bg-light stimmen-sec ">
    <div className="container">
        <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
                <h2 className="fw-bold mb-3" style={{
                    color: "#2D1A3A",
                    fontSize: "1.7rem",
                    letterSpacing: "1px",
                  }}>
                    Hinweis
                </h2>
                <div className="mb-3" style={{ color: "#3D2C4A", fontSize: "1.08rem" }}>
                   Dieses Angebot ersetzt keine medizinische oder psychotherapeutische
Behandlung – es wirkt klärend und freisetzend. KundInnen berichten von wichtigen,
positiven Impulsen während der Begleitung einer ambulanten, psychologischen
Behandlung.
                </div>
                <p>Alle Termine flexibel einlösbar innerhalb drei Monaten.</p>
            </div>
        </div>
    </div>
</section>
    </>,
  },
  "trauma-durch-berufliche-belastung": {
    title:
      "",
    image: "/images/services/12.webp",
    subtitle:
      "",
    description: <>
<div className="container py-5">
    <div className=" d-flex flex-column flex-md-row align-items-center justify-content-center">
        <div className="mb-4 mb-md-0 me-md-4 ">
            <img src="/images/services/12.webp" alt="Harmonyum Trauma Release" style={{
                  maxWidth: "320px",
                  width: "320px",
                  borderRadius: "12px",
                }} />
        </div>
        <div className="flex-grow-1">
            <h2 className="text-right fw-bold mb-2" style={{ color: "#1a2a6c" }}>
               Trauma Durch Berufliche Belastung<br/> (Z.b. Notfallmedizin, Polizei,
Rettungskräfte)
            </h2>
            <h4 className="text-right mb-3" style={{ color: "#4f8a8b" }}>
               wenn Helfen traumatisch wird – braucht auch die Stärke einen Raum
            </h4>
             <p className="mt-3 text-right">
               
Du trägst Verantwortung, triffst Entscheidungen unter Druck oder siehst Dinge, die sich
vermeintlich nicht aus dem Kopf löschen lassen.
            </p>
            <p className="mt-3 text-right">
              Diese HTR-Begleitung ist ein sicherer Raum für Menschen in systemrelevanten oder
belastenden Berufen –
wo Schweigen zur Pflicht wird, und „funktionieren“ oft wichtiger ist als fühlen.
Hier musst du nicht stark sein – sondern du selbst.
Und dein System darf loslassen, was es nie allein tragen sollte.
Bilder werden gelöscht, das Nervensystem entspannt und das Zellgedächtnis freut sich
auf ein Reset.
            </p>
           
        </div>
    </div>
</div>

<section className="py-5 session-sec-bg-fe">
    <div className="container">
        <div className="row justify-content-center mb-4">
            <div className="col-lg-12 text-center">
                <h2 className="fw-bold mb-3" style={{
                    color: "#5C377D",
                    fontSize: "2.1rem",
                    letterSpacing: "1px",
                  }}>
                    Für Frieden in deinem Nervensystem.
                </h2>
                <p className="lead" style={{ color: "#3D2C4A", fontWeight: 500 }}>
                    Für deine Seele. Für dein echtes JA zum Leben.
                    Für wen:
                </p>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-12">
                <ul className="list-unstyled" style={{
                    fontSize: "1.18rem",
                    color: "#2D1A3A",
                    fontWeight: 500,
                  }}>
                    <li className="mb-4 d-flex align-items-start">
                        <span style={{
                        color: "#7A566B",
                        fontSize: "1.7rem",
                        marginRight: "16px",
                        marginTop: "2px",
                      }}>
                            <i className="bi bi-stars"></i>
                        </span>
                        Menschen mit Burnout und/ oder Depression
                    </li>
                    <li className="mb-4 d-flex align-items-start">
                        <span style={{
                        color: "#7A566B",
                        fontSize: "1.7rem",
                        marginRight: "16px",
                        marginTop: "2px",
                      }}>
                            <i className="bi bi-stars"></i>
                        </span>
                        bei Stress-Symptomen und Überforderung
                    </li>
                    <li className="mb-4 d-flex align-items-start">
                        <span style={{
                        color: "#7A566B",
                        fontSize: "1.7rem",
                        marginRight: "16px",
                        marginTop: "2px",
                      }}>
                            <i className="bi bi-stars"></i>
                        </span>
                        für Seelen, die offen sind für tiefe Erinnerung & innovative, integrative und ganzheitliche
                        Heilungsmöglichkeiten
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>


<section className="py-10 bg-light session-sec-bg">
    <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#143774] mb-6">
            Empfehlung:
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Für ein erfolgreiches Resultat ist es empfehlenswert, die Sessions zeitnah
abzuhalten: mindestens 3x in der Woche oder täglich je eine Behandlung.
        </p>
    </div>
</section>

<section className="py-5 price-sec">
    <div style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              background: `url('/images/c-img.jpg') center `,
              filter: "blur(10px)",
              opacity: 0.6,
            }} aria-hidden="true" />
    <div style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: "#ffffff88",
            }} aria-hidden="true" />
    <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="new-session-box">
            <div className="row">
                <div className="col-lg-5 col-md-12">
                    <div className="flex-1 d-flex flex-column justify-content-center align-items-center">
                        <img src="/images/services/session-img.png" alt="Session Booking" className="w-100 max-w-xs rounded-lg shadow-md" />
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="p-4 flex-1 d-flex flex-column justify-content-center ">
                        <h2 className="h2 fw-bold text-dark mb-4 text-left w-100">
                            Session Preise:
                        </h2>
                        <ul className="fs-5 text-dark mb-0 w-100 list-unstyled">
                            <li className="mb-3 d-flex align-items-center gap-3">
                                <i className="bi bi-calendar4-range" style={{ fontSize: "0.8rem", color: "#000000ff" }}></i>{" "}
                                10 Behandlungen:
                                <span className="fw-semibold">
                                    1111
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 432.763 432.762">
                                        <g>
                                            <path d="M374.363 342.635c-25.563 26.889-58.292 41.7-92.16 41.7-55.509 0-103.572-38.981-126.192-95.329h154.186c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.21-24.21-24.21H143.708a202.583 202.583 0 0 1-1.472-24.211c0-9.274.653-18.365 1.871-27.237h166.09c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.211-24.21-24.211H157.299c23.105-54.698 70.4-92.302 124.904-92.302 33.868 0 66.597 14.812 92.16 41.698 9.203 9.685 24.518 10.083 34.224.872 9.693-9.215 10.077-24.539.875-34.229C374.671 20.156 329.478 0 282.209 0c-80.712 0-149.705 58.62-176.478 140.724H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h54.503c-.981 8.934-1.542 18.007-1.542 27.237 0 8.192.428 16.255 1.211 24.211H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h63.916c26.043 83.691 95.733 143.75 177.433 143.75 47.274 0 92.456-20.161 127.247-56.755 9.208-9.693 8.83-25.015-.869-34.229-9.687-9.215-25.015-8.83-34.218.857z" fill="#5c377d" />
                                        </g>
                                    </svg>
                                </span>
                            </li>
                            <li className="mb-3 d-flex align-items-center gap-2">
                                <span className="text-pink-600 fs-4">
                                    <i className="bi bi-hourglass-split text-primary"></i>{" "}
                                </span>{" "}
                                Dauer: <span className="fw-semibold">45 Minuten</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="py-8 bg-light stimmen-sec ">
    <div className="container">
        <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
                <h2 className="fw-bold mb-3" style={{
                    color: "#2D1A3A",
                    fontSize: "1.7rem",
                    letterSpacing: "1px",
                  }}>
                    Hinweis
                </h2>
                <div className="mb-3" style={{ color: "#3D2C4A", fontSize: "1.08rem" }}>
                   Dieses Angebot ersetzt keine medizinische oder psychotherapeutische
Behandlung – es wirkt klärend und freisetzend.
                </div>
                <p>Alle Termine flexibel einlösbar innerhalb drei Monaten.</p>
            </div>
        </div>
    </div>
</section>
    </>,
  },
  "seelenentbindung-rueckgabe-traumafrequenzen": {
    title: "",
    image: "/images/services/13.webp",
    subtitle:
      "",
    description: <>
    <div className="container py-5">
    <div className=" d-flex flex-column flex-md-row align-items-center justify-content-center">
        <div className="mb-4 mb-md-0 me-md-4 ">
            <img src="/images/services/13.webp" alt="Harmonyum Trauma Release" style={{
                  maxWidth: "320px",
                  width: "100%",
                  borderRadius: "12px",
                }} />
        </div>
        <div className="flex-grow-1">
            <h2 className="text-right fw-bold mb-2" style={{ color: "#1a2a6c" }}>
                Seelenentbindung – Rückgabe Inkarnierter Traumafrequenzen
            </h2>
            <h4 className="text-right mb-3" style={{ color: "#4f8a8b" }}>
                manchmal reagiert der Körper auf Dinge, die der Verstand nicht kennt
                In dieser Arbeit geht es nicht um Aufarbeitung.
            </h4>
            <p className="mt-3 text-right">
                Sondern um Auflösung.
                Du musst nicht wissen, was war.
                Du darfst nur spüren, was nicht mehr zu dir gehört.
                Was du aus anderen Zeiten, Linien, Leben übernommen hast –
                darf heute in Licht zurückgegeben werden.
                In Würde. In Frequenz.
            </p>
            <p className="mt-3 text-right">
                In tiefer Erinnerung an das, was du eigentlich bist.
                Wiederkehrende Muster, unerklärliche Ängste, energetische Enge –
                nicht alles beginnt in diesem Leben.
            </p>
        </div>
    </div>
</div>
<section className="py-10 bg-light session-sec-bg">
    <div className="container mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-[#143774] mb-6">
            Harmonyum Trauma Release öffnet einen Raum, in dem tiefsitzende Erfahrungen aus
            vergangenen Inkarnationen gelöst werden können –
        </h3>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            ohne Geschichten, ohne Hypnose: nur durch Frequenz, Energie und Zell-Erinnerung.
            Was nicht in diesem Leben begann, darf trotzdem hier enden.
            Für mehr FREIHEIT – in deinem jetzigen SEIN.
        </p>
    </div>
</section>
<section className="py-5 price-sec">
    <div style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              background: `url('/images/c-img.jpg') center `,
              filter: "blur(10px)",
              opacity: 0.6,
            }} aria-hidden="true" />
    <div style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: "#ffffff88",
            }} aria-hidden="true" />
    <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="new-session-box">
            <div className="row">
                <div className="col-lg-5 col-md-12">
                    <div className="flex-1 d-flex flex-column justify-content-center align-items-center">
                        <img src="/images/services/session-img.png" alt="Session Booking" className="w-100 max-w-xs rounded-lg shadow-md" />
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="p-4 flex-1 d-flex flex-column justify-content-center ">
                        <h2 className="h2 fw-bold text-dark mb-4 text-left w-100">
                            Session Preise:
                        </h2>
                        <ul className="fs-5 text-dark mb-0 w-100 list-unstyled">
                            <li className="mb-3 d-flex align-items-center gap-3">
                                <i className="bi bi-calendar4-range" style={{ fontSize: "0.8rem", color: "#000000ff" }}></i>{" "}
                                5 Behandlungen:
                                <span className="fw-semibold">
                                    555
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 432.763 432.762">
                                        <g>
                                            <path d="M374.363 342.635c-25.563 26.889-58.292 41.7-92.16 41.7-55.509 0-103.572-38.981-126.192-95.329h154.186c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.21-24.21-24.21H143.708a202.583 202.583 0 0 1-1.472-24.211c0-9.274.653-18.365 1.871-27.237h166.09c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.211-24.21-24.211H157.299c23.105-54.698 70.4-92.302 124.904-92.302 33.868 0 66.597 14.812 92.16 41.698 9.203 9.685 24.518 10.083 34.224.872 9.693-9.215 10.077-24.539.875-34.229C374.671 20.156 329.478 0 282.209 0c-80.712 0-149.705 58.62-176.478 140.724H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h54.503c-.981 8.934-1.542 18.007-1.542 27.237 0 8.192.428 16.255 1.211 24.211H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h63.916c26.043 83.691 95.733 143.75 177.433 143.75 47.274 0 92.456-20.161 127.247-56.755 9.208-9.693 8.83-25.015-.869-34.229-9.687-9.215-25.015-8.83-34.218.857z" fill="#5c377d" />
                                        </g>
                                    </svg>
                                </span>
                            </li>
                            <li className="mb-3 d-flex align-items-center gap-2">
                                <span className="text-pink-600 fs-4">
                                    <i className="bi bi-hourglass-split text-primary"></i>{" "}
                                </span>{" "}
                                Dauer: <span className="fw-semibold">45 Minuten</span>
                            </li>
                        </ul>
                        <p>Alle Termine flexibel einlösbar innerhalb drei Monaten.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</>,
  },
  "ueberraschung-angebot": {
    title: "",
    image: "/images/services/13.webp",
    subtitle:
      "",
    description: <>

</>,
  },
   "kollektive-erlebnisse": {
    title: "",
    image: "/images/services/15.webp",
    subtitle:
      "",
    description: <>
    <div className="container py-5">
    <div className=" d-flex flex-column flex-md-row align-items-center justify-content-center">
        <div className="mb-4 mb-md-0 me-md-4 ">
            <img src="/images/services/2.webp" alt="Harmonyum Trauma Release" style={{
                  maxWidth: "320px",
                  width: "100%",
                  borderRadius: "12px",
                }} />
        </div>
        <div className="flex-grow-1">
            <h2 className="text-right fw-bold mb-2" style={{ color: "#1a2a6c" }}>
                Kollektive Erlebnisse (Krieg, Pandemie, Flucht, Gewalt Etc.)
            </h2>
            <h4 className="text-right mb-3" style={{ color: "#4f8a8b" }}>
                manche Erfahrungen prägen nicht nur dich – sondern ganze Felder, Gesellschaften und
                Kulturen
            </h4>
            <p className="mt-3 text-right">
                Manchmal ist es nicht „dein“ Trauma – und doch spürst du die Erschütterung.
                Harmonyum Trauma Release hilft dir, kollektive Belastung aus deinem System zu
                entlassen.
            </p>
            <p className="mt-3 text-right">
                Ob durch Kriegsgeschichten in der Familie, Isolation in der Pandemie, Flucht oder
                Naturkatastrophen:<br />
                Du darfst dich wieder entkoppeln – liebevoll, energetisch, stabil.
            </p>
        </div>
    </div>
</div>
<section className="py-10 bg-light session-sec-bg">
    <div className="container mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-[#143774] mb-6">
            Du bist Teil eines Feldes, einer Gemeinschaft-
        </h3>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            aber du darfst zurück in deinen eigenen Körper. In deine eigene Wahrheit.
        </p>
    </div>
</section>
<section className="py-5 price-sec">
    <div style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              background: `url('/images/c-img.jpg') center `,
              filter: "blur(10px)",
              opacity: 0.6,
            }} aria-hidden="true" />
    <div style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: "#ffffff88",
            }} aria-hidden="true" />
    <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="new-session-box">
            <div className="row">
                <div className="col-lg-5 col-md-12">
                    <div className="flex-1 d-flex flex-column justify-content-center align-items-center">
                        <img src="/images/services/session-img.png" alt="Session Booking" className="w-100 max-w-xs rounded-lg shadow-md" />
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="p-4 flex-1 d-flex flex-column justify-content-center ">
                        <h2 className="h2 fw-bold text-dark mb-4 text-left w-100">
                            Session Preise:
                        </h2>
                        <ul className="fs-5 text-dark mb-0 w-100 list-unstyled">
                            <li className="mb-3 d-flex align-items-center gap-3">
                                <i className="bi bi-calendar4-range" style={{ fontSize: "0.8rem", color: "#000000ff" }}></i>{" "}
                                5 Behandlungen:
                                <span className="fw-semibold">
                                    1111
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 432.763 432.762">
                                        <g>
                                            <path d="M374.363 342.635c-25.563 26.889-58.292 41.7-92.16 41.7-55.509 0-103.572-38.981-126.192-95.329h154.186c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.21-24.21-24.21H143.708a202.583 202.583 0 0 1-1.472-24.211c0-9.274.653-18.365 1.871-27.237h166.09c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.211-24.21-24.211H157.299c23.105-54.698 70.4-92.302 124.904-92.302 33.868 0 66.597 14.812 92.16 41.698 9.203 9.685 24.518 10.083 34.224.872 9.693-9.215 10.077-24.539.875-34.229C374.671 20.156 329.478 0 282.209 0c-80.712 0-149.705 58.62-176.478 140.724H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h54.503c-.981 8.934-1.542 18.007-1.542 27.237 0 8.192.428 16.255 1.211 24.211H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h63.916c26.043 83.691 95.733 143.75 177.433 143.75 47.274 0 92.456-20.161 127.247-56.755 9.208-9.693 8.83-25.015-.869-34.229-9.687-9.215-25.015-8.83-34.218.857z" fill="#5c377d" />
                                        </g>
                                    </svg>
                                </span>
                            </li>
                            <li className="mb-3 d-flex align-items-center gap-2">
                                <span className="text-pink-600 fs-4">
                                    <i className="bi bi-hourglass-split text-primary"></i>{" "}
                                </span>{" "}
                                Dauer: <span className="fw-semibold">45 Minuten</span>
                            </li>
                        </ul>
                        <p>Alle Termine flexibel einlösbar innerhalb drei Monaten.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="py-8 bg-light stimmen-sec ">
    <div className="container">
        <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
                <h2 className="fw-bold mb-3" style={{
                    color: "#2D1A3A",
                    fontSize: "1.7rem",
                    letterSpacing: "1px",
                  }}>
                    Hinweis
                </h2>
                <div className="mb-3" style={{ color: "#3D2C4A", fontSize: "1.08rem" }}>
                    Das Angebot richtet sich an Menschen mit offenem Herzen und dem Wunsch, nicht nur
                    sich selbst, sondern dem Kollektiv unserer Gesellschaft etwas Gutes zu tun.
                </div>
            </div>
        </div>
    </div>
</section>

   </>,
  },
   "stille-heilt-retreat": {
    title: "",
    image: "/images/services/15.webp",
    subtitle:
      "",
    description: <>
    
<div className="container py-5">
    <div className=" d-flex flex-column flex-md-row align-items-center justify-content-center">
        <div className="mb-4 mb-md-0 me-md-4 ">
            <img src="/images/services/16.webp" alt="Harmonyum Trauma Release" style={{
                  maxWidth: "320px",
                  width: "100%",
                  borderRadius: "12px",
                }} />
        </div>
        <div className="flex-grow-1">
            <h2 className="text-right fw-bold mb-2" style={{ color: "#1a2a6c" }}>
               Stille Heilt
            </h2>
            <h4 className="text-right mb-3" style={{ color: "#4f8a8b" }}>
                Retreat zur Rückverbindung mit deiner Urform
            </h4>
            <p className="mt-3 text-right">
                Beschreibung:<br />
                Ein intensiver Raum für Transformation jenseits des Lauten.
                Gemeinsam tauchen wir ein in Frequenz, Stille und energetische Tiefenheilung.
                Für Menschen, die getragen haben – und nun gehalten werden wollen.
            </p>
            <p className="mt-3 text-right">
                Auch für alte Seelen, die sich erinnern wollen, wie es sich anfühlt, ganz sie selbst zu sein.
                5 Tage Präsenz-Retreat, max. 6 Teilnehmer
                Dieser Raum ist für dich, wenn du offen bist für
                tiefe Wirkung und Rückverbindung.Täglich
                Meditation, Yoga, HTR-Behandlung sowie
                Ausflüge, Journaling und kreatives Verarbeiten des
                Prozesses.
            </p>
        </div>
    </div>
</div>
<section className="py-5 price-sec">
    <div style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              background: `url('/images/c-img.jpg') center `,
              filter: "blur(10px)",
              opacity: 0.6,
            }} aria-hidden="true" />
    <div style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: "#ffffff88",
            }} aria-hidden="true" />
    <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="new-session-box">
            <div className="row">
                <div className="col-lg-5 col-md-12">
                    <div className="flex-1 d-flex flex-column justify-content-center align-items-center">
                        <img src="/images/services/session-img.png" alt="Session Booking" className="w-100 max-w-xs rounded-lg shadow-md" />
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="p-4 flex-1 d-flex flex-column justify-content-center ">
                        <h2 className="h2 fw-bold text-dark mb-4 text-left w-100">
                            Session Preise:
                        </h2>
                        <ul className="fs-5 text-dark mb-0 w-100 list-unstyled">
                            <li className="mb-3 d-flex align-items-center gap-3">
                                <span className="fw-semibold">
                                    2222
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 432.763 432.762">
                                        <g>
                                            <path d="M374.363 342.635c-25.563 26.889-58.292 41.7-92.16 41.7-55.509 0-103.572-38.981-126.192-95.329h154.186c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.21-24.21-24.21H143.708a202.583 202.583 0 0 1-1.472-24.211c0-9.274.653-18.365 1.871-27.237h166.09c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.211-24.21-24.211H157.299c23.105-54.698 70.4-92.302 124.904-92.302 33.868 0 66.597 14.812 92.16 41.698 9.203 9.685 24.518 10.083 34.224.872 9.693-9.215 10.077-24.539.875-34.229C374.671 20.156 329.478 0 282.209 0c-80.712 0-149.705 58.62-176.478 140.724H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h54.503c-.981 8.934-1.542 18.007-1.542 27.237 0 8.192.428 16.255 1.211 24.211H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h63.916c26.043 83.691 95.733 143.75 177.433 143.75 47.274 0 92.456-20.161 127.247-56.755 9.208-9.693 8.83-25.015-.869-34.229-9.687-9.215-25.015-8.83-34.218.857z" fill="#5c377d" />
                                        </g>
                                    </svg>
                                </span>
                            </li>
                        </ul>
                        <p>Nächste Termine siehe hier: www.traumafrei.ch/ retreats</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="py-8 bg-light stimmen-sec ">
    <div className="container">
        <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
                <h2 className="fw-bold mb-3" style={{
                    color: "#2D1A3A",
                    fontSize: "1.7rem",
                    letterSpacing: "1px",
                  }}>
                    Hinweis
                </h2>
                <div className="mb-3" style={{ color: "#3D2C4A", fontSize: "1.08rem" }}>
                    Dieses Angebot ersetzt keine
                    medizinische oder psychotherapeutische Behandlung – es wirkt laut Kunden-Feedback
                    klärend und freisetzend.
                </div>
            </div>
        </div>
    </div>
</section>
   </>,
  },
};
export { serviceData };

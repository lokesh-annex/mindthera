import React from "react";
import Link from "next/link";

const ServiceHarmonyumTraumaRelease: React.FC = () => (
  <>
    <div className="container py-5">
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
        <div className="mb-4 mb-md-0 me-md-4">
          <img
            src="/images/services/1.webp"
            alt="Harmonyum Trauma Release"
            style={{
              width: "320px",
          
              borderRadius: "12px",
            }}
          />
        </div>
        <div className="flex-grow-1">
          <h2 className="text-right fw-bold mb-2" style={{ color: "#1a2a6c" }}>
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
);

export default ServiceHarmonyumTraumaRelease;
import React from "react";
import Link from "next/link";

const ServiceGemeinsameFamilienzeit: React.FC = () => (
  <>
    <div className="container py-5">
          <div className=" d-flex flex-column flex-md-row align-items-center justify-content-center">
            <div className="mb-4 mb-md-0 me-md-4 ">
              <img
                src="/images/services/4.webp"
                alt="Harmonyum Trauma Release"
                style={{
                 width: "320px",
                
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
);

export default ServiceGemeinsameFamilienzeit;
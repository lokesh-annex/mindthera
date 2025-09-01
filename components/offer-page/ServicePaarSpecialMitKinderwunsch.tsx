import React from "react";
import Link from "next/link";

const ServicePaarSpecialMitKinderwunsch: React.FC = () => (
  <>
    <div className="container py-5">
          <div className=" d-flex flex-column flex-md-row align-items-center justify-content-center">
            <div className="mb-4 mb-md-0 me-md-4 ">
              <img
                src="/images/services/2.webp"
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
                Paar-Special mit Kinderwunsch
              </h2>
              <h4 className="text-right mb-3" style={{ color: "#4f8a8b" }}>
                Ein heilender Raum für Empfängnis – körperlich, energetisch,
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
);

export default ServicePaarSpecialMitKinderwunsch;
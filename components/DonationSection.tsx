import React from "react";
import Image from "next/image";

const DonationSection = () => {
  return (
    <section className="donation-section" style={{ background: "#ffffff", padding: "100px 0" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
            <Image
              src="/images/misc/10.jpg"
              alt="Donation"
              width={550}
              height={500}
              style={{
               
                borderRadius: "8px",
                objectFit: "cover",
                boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              }}
            />
          </div>

          <div className="col-lg-6">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="fw-bold" style={{ fontSize: "1.1rem" }}>
                Raised:
                <span
                  style={{
                    color: "#5c377d",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginLeft: "5px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="18"
                    height="18"
                    viewBox="0 0 432.763 432.762"
                  >
                    <g>
                      <path
                        d="M374.363 342.635c-25.563 26.889-58.292 41.7-92.16 41.7-55.509 0-103.572-38.981-126.192-95.329h154.186c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.21-24.21-24.21H143.708a202.583 202.583 0 0 1-1.472-24.211c0-9.274.653-18.365 1.871-27.237h166.09c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.211-24.21-24.211H157.299c23.105-54.698 70.4-92.302 124.904-92.302 33.868 0 66.597 14.812 92.16 41.698 9.203 9.685 24.518 10.083 34.224.872 9.693-9.215 10.077-24.539.875-34.229C374.671 20.156 329.478 0 282.209 0c-80.712 0-149.705 58.62-176.478 140.724H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h54.503c-.981 8.934-1.542 18.007-1.542 27.237 0 8.192.428 16.255 1.211 24.211H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h63.916c26.043 83.691 95.733 143.75 177.433 143.75 47.274 0 92.456-20.161 127.247-56.755 9.208-9.693 8.83-25.015-.869-34.229-9.687-9.215-25.015-8.83-34.218.857z"
                        fill="#5c377d"
                      />
                    </g>
                  </svg>
                  0
                </span>
              </div>
              <div className="fw-bold" style={{ fontSize: "1.1rem" }}>
                Goal:
                <span
                  style={{
                    color: "#5c377d",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginLeft: "5px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="18"
                    height="18"
                    viewBox="0 0 432.763 432.762"
                  >
                    <g>
                      <path
                        d="M374.363 342.635c-25.563 26.889-58.292 41.7-92.16 41.7-55.509 0-103.572-38.981-126.192-95.329h154.186c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.21-24.21-24.21H143.708a202.583 202.583 0 0 1-1.472-24.211c0-9.274.653-18.365 1.871-27.237h166.09c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.211-24.21-24.211H157.299c23.105-54.698 70.4-92.302 124.904-92.302 33.868 0 66.597 14.812 92.16 41.698 9.203 9.685 24.518 10.083 34.224.872 9.693-9.215 10.077-24.539.875-34.229C374.671 20.156 329.478 0 282.209 0c-80.712 0-149.705 58.62-176.478 140.724H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h54.503c-.981 8.934-1.542 18.007-1.542 27.237 0 8.192.428 16.255 1.211 24.211H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h63.916c26.043 83.691 95.733 143.75 177.433 143.75 47.274 0 92.456-20.161 127.247-56.755 9.208-9.693 8.83-25.015-.869-34.229-9.687-9.215-25.015-8.83-34.218.857z"
                        fill="#5c377d"
                      />
                    </g>
                  </svg>
                  12,000
                </span>
              </div>
            </div>

            <div
              style={{
                height: "6px",
                background: "#5c377d",
                width: "100%",
                marginBottom: "24px",
                borderRadius: "3px",
              }}
            ></div>

            <div className="text-muted mb-4" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
                 <p><strong>Liebe Seele,</strong></p>
              <div style={{ fontSize: "15px" }}>
             
                <p className="mb-1">Nicht alle Menschen können sich momentan eine Harmonyum Trauma Release-Behandlung leisten. Unser Gesundheitssystem darf dieses Angebot noch in ihr Portfolio aufnehmen.</p>
                <p className="mb-1">Deshalb sammeln wir für Menschen in körperlicher, emotionaler und/oder seelischer Not nach traumatischen Erfahrungen.</p>
                <p className="mb-1">Es gibt in der Schweiz, Österreich und Deutschland Obdachlose, Flüchtlinge, Frauenhäuser oder Babyklappen, die sehr von Harmonyum Trauma Release profitieren können.</p>
                <p className="mb-1">Hier möchten wir mit deiner Spende die finanzielle Lücke schliessen, damit so viele Menschen wie möglich von diesem Angebot profitieren können.</p>
                <p className="mb-1">Unter anderem begleiten wir Projekte in Afrika und Indien, damit traumatisierte Kinder wieder aufatmen können, um glücklich zu spielen und ihr volles Potential auszuschöpfen.</p>
              </div>
            </div>

            <form>
              <div
                className="mb-3 d-flex align-items-center border border-2 border-secondary-subtle rounded"
                style={{ maxWidth: "140px" }}
              >
                <span
                  className="bg-white px-3 py-2"
                  style={{ borderRight: "none", fontWeight: 600 }}
                >
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
                <input
                  type="number"
                  className="form-control"
                  placeholder="10"
                  style={{
                    height: "33px",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    borderLeft: "none",
                    outline: "none",
                    boxShadow: "none",
                    border: "none",
                  }}
                  min="1"
                />
              </div>

              <div className="mb-4 d-flex flex-wrap gap-2">
                {["10", "50", "100", "200"].map((val, i) => (
                  <button
                    key={i}
                    type="button"
                    className="btn btn-outline-dark  px-4 py-2 fw-bold"
                    style={{ minWidth: i === 3 ? "80px" : "80px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="13"
                      height="13"
                      viewBox="0 0 432.763 432.762"
                    >
                      <g>
                        <path
                          d="M374.363 342.635c-25.563 26.889-58.292 41.7-92.16 41.7-55.509 0-103.572-38.981-126.192-95.329h154.186c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.21-24.21-24.21H143.708a202.583 202.583 0 0 1-1.472-24.211c0-9.274.653-18.365 1.871-27.237h166.09c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.211-24.21-24.211H157.299c23.105-54.698 70.4-92.302 124.904-92.302 33.868 0 66.597 14.812 92.16 41.698 9.203 9.685 24.518 10.083 34.224.872 9.693-9.215 10.077-24.539.875-34.229C374.671 20.156 329.478 0 282.209 0c-80.712 0-149.705 58.62-176.478 140.724H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h54.503c-.981 8.934-1.542 18.007-1.542 27.237 0 8.192.428 16.255 1.211 24.211H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h63.916c26.043 83.691 95.733 143.75 177.433 143.75 47.274 0 92.456-20.161 127.247-56.755 9.208-9.693 8.83-25.015-.869-34.229-9.687-9.215-25.015-8.83-34.218.857z"
                          fill="#5c377d"
                        />
                      </g>
                    </svg> 
                    <span className="ms-2">{val} </span>
                    
                  </button>
                ))}
                <button
                  type="button"
                  className="btn btn-outline-dark px-4 py-2 fw-bold"
                  style={{ minWidth: "160px" }}
                >
                  Dein Betrag
                </button>
              </div>

              <button type="submit" className="btn-main px-3 py-2 fw-bold">
                Wir freuen uns über deine Spende
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;

import React from "react";
import Image from "next/image";

const DonationSection = () => {
  return (
    <section style={{ background: "#ffffff", padding: "100px 0" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
            <Image
              src="/images/misc/10.jpg"
              alt="Donation"
              width={500}
              height={450}
              style={{
                maxWidth: "500px",
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
                    width="18"
                    height="18"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path
                        d="M477.6 0H201.5c-13.6 0-24.6 11-24.6 24.6v271.3H34.4c-13.6.3-24.3 11.5-24.1 25.1.3 13.2 10.9 23.8 24.1 24.1h142.5v142.5c.3 13.6 11.5 24.3 25.1 24.1 13.2-.3 23.8-10.9 24.1-24.1V345h135.5c13.6-.3 24.3-11.5 24.1-25.1-.3-13.2-10.9-23.8-24.1-24.1H226v-86.6h201.7c13.6.3 24.8-10.5 25.1-24.1s-10.5-24.8-24.1-25.1H226V49h251.5c13.6.3 24.8-10.5 25.1-24.1S492.1.1 478.5-.2c-.3.2-.6.2-.9.2z"
                        fill="#5c377d"
                        opacity="1"
                        data-original="#5c377d"
                      ></path>
                    </g>
                  </svg>
                  15,572
                </span>
              </div>
              <div className="fw-bold" style={{ fontSize: "1.1rem" }}>
                Goal:{" "}
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
                    width="18"
                    height="18"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path
                        d="M477.6 0H201.5c-13.6 0-24.6 11-24.6 24.6v271.3H34.4c-13.6.3-24.3 11.5-24.1 25.1.3 13.2 10.9 23.8 24.1 24.1h142.5v142.5c.3 13.6 11.5 24.3 25.1 24.1 13.2-.3 23.8-10.9 24.1-24.1V345h135.5c13.6-.3 24.3-11.5 24.1-25.1-.3-13.2-10.9-23.8-24.1-24.1H226v-86.6h201.7c13.6.3 24.8-10.5 25.1-24.1s-10.5-24.8-24.1-25.1H226V49h251.5c13.6.3 24.8-10.5 25.1-24.1S492.1.1 478.5-.2c-.3.2-.6.2-.9.2z"
                        fill="#5c377d"
                        opacity="1"
                        data-original="#5c377d"
                      ></path>
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
            <p className="text-muted mb-4" style={{ maxWidth: "500px" }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. Lorem ipsum dolor sit amet, consectetur sadipscing elitr,
              sed diam nonumy eirmod.
            </p>
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
                    width="18"
                    height="18"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path
                        d="M477.6 0H201.5c-13.6 0-24.6 11-24.6 24.6v271.3H34.4c-13.6.3-24.3 11.5-24.1 25.1.3 13.2 10.9 23.8 24.1 24.1h142.5v142.5c.3 13.6 11.5 24.3 25.1 24.1 13.2-.3 23.8-10.9 24.1-24.1V345h135.5c13.6-.3 24.3-11.5 24.1-25.1-.3-13.2-10.9-23.8-24.1-24.1H226v-86.6h201.7c13.6.3 24.8-10.5 25.1-24.1s-10.5-24.8-24.1-25.1H226V49h251.5c13.6.3 24.8-10.5 25.1-24.1S492.1.1 478.5-.2c-.3.2-.6.2-.9.2z"
                        fill="#5c377d"
                        opacity="1"
                        data-original="#5c377d"
                      ></path>
                    </g>
                  </svg>
                </span>
                <input
                  type="number"
                  className="form-control  "
                  placeholder="10"
                  style={{
                    height: "48px",
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
                <button
                  type="button"
                  className="btn btn-outline-dark px-4 py-2 fw-bold"
                  style={{ minWidth: "100px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="18"
                    height="18"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path
                        d="M477.6 0H201.5c-13.6 0-24.6 11-24.6 24.6v271.3H34.4c-13.6.3-24.3 11.5-24.1 25.1.3 13.2 10.9 23.8 24.1 24.1h142.5v142.5c.3 13.6 11.5 24.3 25.1 24.1 13.2-.3 23.8-10.9 24.1-24.1V345h135.5c13.6-.3 24.3-11.5 24.1-25.1-.3-13.2-10.9-23.8-24.1-24.1H226v-86.6h201.7c13.6.3 24.8-10.5 25.1-24.1s-10.5-24.8-24.1-25.1H226V49h251.5c13.6.3 24.8-10.5 25.1-24.1S492.1.1 478.5-.2c-.3.2-.6.2-.9.2z"
                        fill="#5c377d"
                        opacity="1"
                        data-original="#5c377d"
                      ></path>
                    </g>
                  </svg>
                  10
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark px-4 py-2 fw-bold"
                  style={{ minWidth: "100px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="18"
                    height="18"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path
                        d="M477.6 0H201.5c-13.6 0-24.6 11-24.6 24.6v271.3H34.4c-13.6.3-24.3 11.5-24.1 25.1.3 13.2 10.9 23.8 24.1 24.1h142.5v142.5c.3 13.6 11.5 24.3 25.1 24.1 13.2-.3 23.8-10.9 24.1-24.1V345h135.5c13.6-.3 24.3-11.5 24.1-25.1-.3-13.2-10.9-23.8-24.1-24.1H226v-86.6h201.7c13.6.3 24.8-10.5 25.1-24.1s-10.5-24.8-24.1-25.1H226V49h251.5c13.6.3 24.8-10.5 25.1-24.1S492.1.1 478.5-.2c-.3.2-.6.2-.9.2z"
                        fill="#5c377d"
                        opacity="1"
                        data-original="#5c377d"
                      ></path>
                    </g>
                  </svg>
                  50
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark px-4 py-2 fw-bold"
                  style={{ minWidth: "100px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="18"
                    height="18"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path
                        d="M477.6 0H201.5c-13.6 0-24.6 11-24.6 24.6v271.3H34.4c-13.6.3-24.3 11.5-24.1 25.1.3 13.2 10.9 23.8 24.1 24.1h142.5v142.5c.3 13.6 11.5 24.3 25.1 24.1 13.2-.3 23.8-10.9 24.1-24.1V345h135.5c13.6-.3 24.3-11.5 24.1-25.1-.3-13.2-10.9-23.8-24.1-24.1H226v-86.6h201.7c13.6.3 24.8-10.5 25.1-24.1s-10.5-24.8-24.1-25.1H226V49h251.5c13.6.3 24.8-10.5 25.1-24.1S492.1.1 478.5-.2c-.3.2-.6.2-.9.2z"
                        fill="#5c377d"
                        opacity="1"
                        data-original="#5c377d"
                      ></path>
                    </g>
                  </svg>
                  100
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark px-4 py-2 fw-bold"
                  style={{ minWidth: "100px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="18"
                    height="18"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path
                        d="M477.6 0H201.5c-13.6 0-24.6 11-24.6 24.6v271.3H34.4c-13.6.3-24.3 11.5-24.1 25.1.3 13.2 10.9 23.8 24.1 24.1h142.5v142.5c.3 13.6 11.5 24.3 25.1 24.1 13.2-.3 23.8-10.9 24.1-24.1V345h135.5c13.6-.3 24.3-11.5 24.1-25.1-.3-13.2-10.9-23.8-24.1-24.1H226v-86.6h201.7c13.6.3 24.8-10.5 25.1-24.1s-10.5-24.8-24.1-25.1H226V49h251.5c13.6.3 24.8-10.5 25.1-24.1S492.1.1 478.5-.2c-.3.2-.6.2-.9.2z"
                        fill="#5c377d"
                        opacity="1"
                        data-original="#5c377d"
                      ></path>
                    </g>
                  </svg>{" "}
                  200
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark px-4 py-2 fw-bold"
                  style={{ minWidth: "160px" }}
                >
                  Custom Amount
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

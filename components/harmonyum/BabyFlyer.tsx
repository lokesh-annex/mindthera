import React from "react";
import Image from "next/image";

export default function BabyFlyer() {
  return (
    <section
      className="pt-8 babyflyer-sec position-relative"
      style={{ background: "#f8f6fa" }}
    >
      <span className="d-none d-lg-block position-absolute top-0 end-0">
        <Image
          src="/images/bg-2-copyright-right.webp"
          width={393}
          height={625}
          alt="Background Copyright"
          priority
        />
      </span>
<span className="d-none d-lg-block position-absolute top-0 strat-0">
        <Image
          src="/images/left-mandla.png"
          width={393}
          height={685}
          alt="Background Copyright"
          priority
        />
      </span>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row">
          <div className="col-sm-4">
            <Image
              src="/images/c-img.jpg"
              alt="Sanfte Hilfe für dein Baby"
              width={370}
              height={400}
              className="rounded mb-3 shadow-sm w-100"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-sm-8">
            <p
              className="mb-2 mt-2"
              style={{ fontSize: "1.95rem", fontWeight: 600 }}
            >
              <span style={{ color: "#5c377d", fontWeight: 700 }}>
                Sanfte Hilfe für dein Baby
              </span>
             
            </p>
             <p
              className="mb-2 mt-2"
              style={{ fontSize: "1.25rem", fontWeight: 600 }}
            >
            
              <span style={{ color: "#333" }}>
                Berührung, die verbindet – Impulse, die beruhigen.
              </span>
            </p>
            <ul
              className="list-unstyled  mb-3"
              style={{ fontSize: "1.13rem", color: "#333", lineHeight: 1.7 }}
            >
              <li className="mb-2">
               Weniger
                Weinen & mehr Entspannung
              </li>
              <li className="mb-2">
                Besseres
                Trinken & Schlafen
              </li>
              <li className="mb-2">
                Stärkere
                Bindung zu den Eltern
              </li>
              <li className="mb-2">
               Sanfte
                Regulation nach Geburtstrauma
              </li>
            </ul>
            <p
              className=" mb-2"
              style={{ fontSize: "1.43rem", color: "#333", lineHeight: 1.7 }}
            >
              <strong
                className="mt-2 d-block"
                style={{ color: "#5c377d", fontWeight: 700 }}
              >
                Harmonyum Trauma Release®
              </strong>
              </p>
             <p style={{ fontSize: "1.23rem",color: "#333",  }}> Sanfte, energetische Behandlung, die Spannungen löst, das
              Nervensystem beruhigt und Bindung stärkt.</p>
             
            
            <div className="d-flex  mt-3">
              <a
                href="/images/pdfs/flyer-babys.pdf"
                download
                className="btn btn-main px-4 py-2 fw-bold"
                style={{
                  fontSize: "1.1rem",
                  background: "#5c377d",
                  color: "#fff",
                  borderRadius: "2rem",
                  boxShadow: "0 2px 8px rgba(92,55,125,0.08)",
                }}
              >
                Flyer herunterladen
              </a>
            </div>
          </div>
          
          <div className="col-lg-12 mt-5">
            <div className="px-0  py-3 ">
              <h2
                className="fw-bold mb-3"
                style={{ color: "#5c377d", fontSize: "2rem" }}
              >
                Ein guter Start ins Leben – Sanfte Hilfe für dein Baby
              </h2>
              <h5 className="mt-3 mb-3 " style={{ color: "#333" }}>
                Besonders hilfreich bei:
              </h5>
              <ul
                className="mb-3 ps-3"
                style={{
                  fontSize: "1.15rem",
                  color: "#202020",
                  lineHeight: 1.7,
                }}
              >
                <li className="mb-2">Unruhigen Babys, Schreibabys</li>
                <li className="mb-2">Trink- oder Schlafproblemen</li>
                <li className="mb-2">
                  Geburtstraumata, wie Kaiserschnitt, Zangengeburt oder
                  Nabelschnurkomplikationen
                </li>
                <li className="mb-2">
                  Geburt mit viel Stress für Mutter &amp; Kind
                </li>
              </ul>
              <div className="d-flex  mt-4">
                <a
                  href="/images/pdfs/flyer-babys.pdf"
                  download
                  className="btn btn-main px-4 py-2 fw-bold"
                  style={{
                    fontSize: "1.1rem",
                    background: "#5c377d",
                    color: "#fff",
                    borderRadius: "2rem",
                    boxShadow: "0 2px 8px rgba(92,55,125,0.08)",
                  }}
                >
                  Flyer herunterladen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

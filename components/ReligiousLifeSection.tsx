import Image from "next/image";
const ReligiousLifeSection = () => {
  return (
    <section className="py-5 bg-white two-images-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Images Left */}
          <div
            className="col-lg-7 position-relative mb-4 mb-lg-0"
            style={{ minHeight: "350px" }}
          >
            <div
              style={{ position: "relative", width: "100%", height: "550px" }}
            >
              <Image
                src="/images/image-16.jpg"
                alt="Temple"
                width={800}
                height={600}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "58%",
                  height: "100%",
                  objectFit: "cover",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                }}
              />
              <Image
                src="/images/image-15.jpg"
                alt="Spiritual Life"
                width={800}
                height={600}
                className="second-image"
                style={{
                  position: "absolute",
                  right: "6%",
                  top: "40%",
                  width: "55%",
                  height: "80%",
                  objectFit: "cover",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                  zIndex: 2,
                }}
              />
            </div>
          </div>
          {/* Content Right */}
          <div className="col-lg-5">
            <div
              className="mb-2 text-uppercase fw-bold text-secondary"
              style={{ letterSpacing: "2px", fontSize: "15px" }}
            >
              MEHR ÜBER TRAUMA
            </div>
            <h2
              className="fw-bold mb-3"
              style={{ fontSize: "2rem", lineHeight: 1.2 }}
            >
              Die Urform der Menschlichkeit –<br />
              Trauma auf Zellebene lösen mit Harmonyum Trauma Release
            </h2>
            <p className="text-muted mb-4" style={{ fontSize: "1.08rem" }}>
              Trauma lösen - wenn der Körper bereit ist, loszulassen. Viele
              Menschen tragen Geschichten in sich, die längst vorbei sind – aber
              im Körper weiterwirken.
              <br />
              <br />
              In diesem Vortrag zeige ich dir, wie unser Nervensystem Trauma
              speichert – und was möglich wird, wenn wir es nicht länger
              festhalten müssen.
              <br />
              <br />
              Ich stelle dir Harmonyum Trauma Release vor: eine körperbasierte
              Methode, die ohne Worte wirkt, sanft entlädt und dich zurückbringt
              in dein ursprüngliches Gleichgewicht.
              <br />
              <br />
              Ein Raum für Alle, die spüren, dass reden nicht reicht – und
              bereit sind, sich selbst neu zu begegnen.
            </p>
            <div className="mb-3">
              <a className="btn btn-main px-4 py-2 fw-bold mb-2" href="#">
                Das interessiert mich- ich buche mir einen Termin
              </a>
              {/* <div className="fw-bold text-secondary mt-2" style={{ fontSize: '1.1rem' }}>
                Eintritt: <span className="text-dark">20.- CHF</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReligiousLifeSection;

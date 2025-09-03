import Image from "next/image";

export default function KontaktBuchung() {
  return (
    <>
      <section className="pt-7 kontakt-buchung position-relative">
        <span className="d-lg-block position-absolute top-10 start-0">
          <Image
            src="/images/bg-2-copyright.webp"
            width={293}
            height={485}
            alt="Background Copyright"
            priority
          />
        </span>
        <div className="container">
          <div className="row">
            <div className="contact-booking rounded-4 ">
              <div className="row align-items-center justify-content-center">
                <div className="col-sm-7">
                  <h2
                    className="fw-bold mb-3 fs-36 fs-xs-24"
                    style={{ color: "#5c377d" }}
                  >
                    Kontakt & Buchung
                  </h2>
                  <p
                    className="mb-3"
                    style={{
                      fontSize: "1.15rem",
                      color: "#333",
                      fontWeight: 500,
                    }}
                  >
                    Du möchtest einen Termin vereinbaren oder hast Fragen zu Harmonyum Trauma Release®?<br />
                    Ich berate dich gerne persönlich und beantworte alle offenen Fragen.
                  
                  </p>

                  <div className="d-flex flex-column flex-md-row gap-3 mt-4">
                    <a
                      href="https://www.traumafrei.ch/booking"
                      target="_blank"
                      rel="noopener"
                      className="btn btn-main"
                    >
                      Jetzt Termin buchen
                    </a>
                    <a
                      href="images/pdfs/flyer-patienten.pdf"
                      download
                      className="btn btn-main"
                    >
                      Flyer herunterladen
                    </a>
                  </div>
                </div>
                  <div className="col-sm-5">
                    <div className="image-container-sec rounded-4">
                  <Image
                    src="/images/Patienten.jpg"
                    alt="Kontakt & Buchung"
                    width={410}
                    height={120}
                    className="img-fluid w-100"
                    style={{ borderRadius: "12px", objectFit: "cover" }}
                    priority
                  />
                  </div>
                </div>
                    
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
}

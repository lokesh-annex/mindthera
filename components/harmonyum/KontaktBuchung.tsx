import Image from "next/image";
import HTRCertificate from "@/components/harmonyum/HTRCertificate";
export default function KontaktBuchung() {
  return (
    <>
      <section className="kontakt-buchung bg-light position-relative">
        <span className="d-none d-lg-block position-absolute bottom-0 end-0">
                <Image
                  src="/images/bg-2-copyright-right.webp"
                  width={293}
                  height={485}
                  alt="Background Copyright"
                  priority
                />
              </span>
        <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <div className="contact-booking rounded-4  px-4  py-5">
            <h2 className="fw-bold mb-3 fs-36 fs-xs-24" style={{ color: '#5c377d' }}>Kontakt & Buchung</h2>
              <p className="mb-3" style={{ fontSize: '1.15rem', color: '#333', fontWeight: 500 }}>
                Du möchtest einen Termin vereinbaren oder hast Fragen zu Harmonyum Trauma Release®?
               
              </p>
            <div className="d-flex">
              <Image
                src="/images/Patienten.jpg"
                alt="Kontakt & Buchung"
                width={410}
                height={120}
                className="img-fluid"
                style={{ borderRadius: "12px", objectFit: "cover" }}
                priority
              />
            </div>
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
          </div>
          <div className="col-sm-7">
            <HTRCertificate />
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

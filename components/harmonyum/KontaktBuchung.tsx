import React from "react";

export default function KontaktBuchung() {
  return (
    <section className="container py-8">
          <div className="card  rounded-4 p-2" >
      <div className="row justify-content-center align-items-center">
        <div className="col-md-5 text-center">
          <div className="d-flex justify-content-center align-items-center h-100">
            <img
              src="/images/Patienten.jpg"
              alt="Kontakt & Buchung"
              width={400}
              height={180}
              className="img-fluid"
              style={{ background: '#fff', padding: '16px', objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className="col-md-7">
            <h2 className="fw-bold mb-3">Kontakt & Buchung</h2>
           
          <div className="d-flex flex-column flex-md-row gap-3 mt-4">
           <a
              href="https://www.traumafrei.ch/booking"
              target="_blank"
              rel="noopener"
              className="btn btn-main px-4 py-2 fw-bold mt-5"
            >
              Jetzt Termin buchen
            </a>
              <a
              href="images/pdfs/flyer-patienten.pdf"
              download
              className="btn btn-main px-4 py-2 fw-bold mt-5"
              style={{ fontSize: '1.1rem' }}
            >
              Flyer herunterladen
            </a>
          </div>
          </div>

        </div>
      </div>
    </section>
  );
}

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
            <p className="mb-2">TERMINBUCHUNGEN: <a href="https://www.traumafrei.ch/booking" className=" fw-bold" style={{color:'#7a566b'}} target="_blank" rel="noopener">www.traumafrei.ch/booking</a></p>
            <p className="mb-2">Für alle weiteren Fragen: <a href="mailto:info@traumafrei.ch" className=" fw-bold" style={{color:'#7a566b'}} >info@traumafrei.ch</a></p>
            <p className="mb-0">Weitere Infos: <a href="https://www.traumafrei.ch" className=" fw-bold" style={{color:'#7a566b'}}  target="_blank" rel="noopener">www.traumafrei.ch</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

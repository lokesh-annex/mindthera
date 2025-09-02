import React from "react";
import Image from "next/image";

export default function HTRCertificate() {
  return (
  <>
   
    <div className="certificate-box px-5  py-5 bg-white rounded-4 ">
              <h2 className="fw-bold mb-3 fs-36 fs-xs-24" style={{ color: '#5c377d' }}> HTR Zertifikat</h2>
               <p className="mb-3" style={{ fontSize: '1.15rem', color: '#333', fontWeight: 500 }}>
      Du möchtest mehr über das HTR Zertifikat erfahren oder benötigst einen Nachweis?
      
    </p>
              <Image
                src="/images/HTR_certificate.jpg"
                alt="HTR Certificate Kerstin Stoll"
                width={1200}
                height={1050}
                className="img-fluid rounded "
              />
            </div>
  </>
  );
}

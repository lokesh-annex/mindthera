import React from "react";
import Image from "next/image";

export default function HTRCertificate() {
  return (
  <>
   <section
      className="pt-8 bg-light position-relative"
     
    >
       <span className="d-none d-lg-block position-absolute top-10 end-0">
              <Image
                src="/images/bg-2-copyright-right.webp"
                width={343}
                height={555}
                alt="Background Copyright"
                priority
              />
            </span>
    <div className="certificate-box text-center rounded-4 ">
              <h2 className="fw-bold mb-3 fs-36 fs-xs-24" > HTR Zertifikat</h2>
               <p className="mb-5" style={{ fontSize: '1.15rem', color: '#333', fontWeight: 500 }}>
      Du möchtest mehr über das HTR Zertifikat erfahren oder benötigst einen Nachweis?
      
    </p>
              <Image
                src="/images/HTR_certificate.jpg"
                alt="HTR Certificate Kerstin Stoll"
                width={700}
                height={1050}
                className="img-fluid rounded shadow-sm"
              />
            </div>
            </section>
  </>
  );
}

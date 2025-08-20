import React from "react";
import Image from "next/image";

export default function HTRCertificate() {
  return (
    <section className=" py-5 text-center bg-light">
        <div className="container">
      <h2 className="fw-bold mb-3">HTR Certificate</h2>
      <Image src="/images/HTR_certificate.jpg" alt="HTR Certificate Kerstin Stoll" width={600} height={850} className="img-fluid rounded shadow" />
      </div>
    </section>
  );
}

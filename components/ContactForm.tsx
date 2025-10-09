import React from "react";
import Image from "next/image";
import ContactInfo from "@/components/ContactInfo";
import ContactFormFields from "@/components/ContactFormFields";

const ContactForm = () => {
  return (
    <section>
      <span className="absolute top-20 start-0">
        <Image
          src="/images/bg-2-copyright.webp"
          width={393}
          height={625}
          className="contact-bg"
          alt="Background Copyright"
          priority
        />
      </span>
      <div className="container">
        <div className="row g-4 align-items-center">
          <ContactInfo />
          <ContactFormFields />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
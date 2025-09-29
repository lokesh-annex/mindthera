import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <>
      <Breadcrumbs
        title="Kontakt"
        items={[{ label: "Home", href: "/" }, { label: "Kontakt" }]}
      />
      <ContactForm />
    </>
  );
};

export default ContactPage;

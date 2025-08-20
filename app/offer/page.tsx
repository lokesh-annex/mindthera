import React from "react";
import TherapistServices from "@/components/TherapistServices";
import Breadcrumbs from "@/components/Breadcrumbs";
const OfferPage = () => (
  <main>
   
      <Breadcrumbs
        title="Meine Angebote"
        items={[{ label: "Home", href: "/" }, { label: "Meine Angebote" }]}
      />
    <TherapistServices />
  </main>
);

export default OfferPage;

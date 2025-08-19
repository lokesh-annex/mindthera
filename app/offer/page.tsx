import React from "react";
import TherapistServices from "@/components/TherapistServices";
import Breadcrumbs from "@/components/Breadcrumbs";
const OfferPage = () => (
  <main>
   
      <Breadcrumbs
        title="Offer"
        items={[{ label: "Home", href: "/" }, { label: "Offer" }]}
      />
    <TherapistServices />
  </main>
);

export default OfferPage;

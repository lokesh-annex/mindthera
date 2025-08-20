import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import DatenschutzPageContent from "@/components/DatenschutzContent";

const DatenschutzPage = () => (
  <>
      <Breadcrumbs
                title="Datenschutzerklärung"
                items={[{ label: "Home", href: "/" }, { label: "Datenschutzerklärung" }]}
              />
               <section className="container py-5" style={{ maxWidth: "900px", margin: "0 auto" }}>
              <DatenschutzPageContent />
  </section>
  </>
);

export default DatenschutzPage;

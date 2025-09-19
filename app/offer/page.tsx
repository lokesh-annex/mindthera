"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68b961bf0cdce0790917cc2f?depth=2&draft=false&locale=undefined&trash=false`;

// 🔧 helper function to normalize slug (same as slug page)
function normalizeSlug(str: string) {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function normalizeOffer(doc: any) {
  const layout = Array.isArray(doc?.layout) ? doc.layout : [];
  const tabs: Record<string, { label: string; services: any[] }> = {};
  for (const block of layout) {
    for (const entry of block?.locales || []) {
      const label = entry.label || "Andere Angebote";
      if (!tabs[label]) tabs[label] = { label, services: [] };
      tabs[label].services.push({
        title: entry.title || "",
        desc: entry.subtitle || "",
        slug: entry.title ? normalizeSlug(entry.title) : "",
        image: entry.image?.url
          ? `${entry.image.url}`
          : "/images/misc/placeholder.jpg",
      });
    }
  }
  return Object.values(tabs);
}


const OfferPage = () => {
  const [tabData, setTabData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        const doc = json?.doc ?? json?.docs?.[0] ?? json;
        if (!doc) throw new Error("No data found");
        const normalized = normalizeOffer(doc);
        setTabData(normalized);
      } catch (err: any) {
        setError(err.message || "Failed to load data");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <main>
      <Breadcrumbs
        title="Meine Angebote"
        items={[{ label: "Home", href: "/" }, { label: "Meine Angebote" }]}
      />
      <section className="relative pb60 pt-2 mt-5">
        <span className="absolute top-0 start-0">
                                   <Image
                                     src="/images/bg-2-copyright.webp"
                                     width={393}
                                     height={625}
                                      
                                     alt="Background Copyright"
                                     priority
                                   />
                                     </span>
        <div className="container">
          {loading && (
            <div className="row justify-content-center py-5">
              <div className="col-12 text-center">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="spinner-border text-primary me-3" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p className="m-0 fs-5">Lade Angebote...</p>
                </div>
              </div>
            </div>
          )}

          {error && !loading && (
            <div className="row justify-content-center py-5">
              <div className="col-md-8 text-center">
                <div className="alert alert-danger" role="alert">
                  <h4 className="alert-heading">Fehler beim Laden</h4>
                  <p className="mb-0">Die Angebote konnten nicht geladen werden: {error}</p>
                </div>
              </div>
            </div>
          )}

          {!loading && !error && tabData.map((tab, idx) => (
            <div key={tab.label} >
              <div className="row mb-4 mt-3">
                <div className="col-lg-12 mb-4 mt-3">
                  <h3 className="fw-bold mb-0" style={{ color: '#5c377d', }}>
                    {tab.label}
                  </h3>
                </div>
              </div>
              <div className="row g-3">
                {tab.services.map((service: { title: string; desc: string; slug: string; image: string }, i: number) => (
                  <div className="col-xl-3 col-lg-4 mb-5 col-md-6 col-sm-6 offer-inner-page" key={i}>
                      <div className="relative h-100 rounded-10px p-4 rounded-20px d-flex flex-column" style={{ background: '#f8f5fd', position: 'relative' }}>
                        <div className="alt-font absolute end-0 pe-4 fw-bold fs-24 id-color">{(i+1).toString().padStart(2, '0')}</div>
                        <Image src={service.image} width={120} height={120} className="img-fluid circle mb-4 w-30 mt-50 shadow-soft scaleIn animated" alt={service.title} />
                        <h4>{service.title}</h4>
                        <p className="no-bottom">{service.desc}</p>
                        
                        <Link className="btn-main btn-light-trans d-flex align-items-center justify-content-center" href={`/offer/${service.slug}`} style={{ position: 'absolute', right: 20, bottom: 9, margin: '0 auto', padding: '0',width: '40px', height: '40px', borderRadius: '50%', background: '#5c377d', color: '#fff', boxShadow: '0 2px 8px rgba(92,55,125,0.15)' }} aria-label="Mehr erfahren">
                          <span className="bi bi-arrow-right" style={{ fontSize: '20px', color: '#fff' }}></span>
                        </Link>
                      </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    
    </main>



    
  );
};

export default OfferPage;

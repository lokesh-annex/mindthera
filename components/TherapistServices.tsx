
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68d3cde26d8a2d983dc0df48?depth=2&draft=false&locale=undefined&trash=false`;

// 🔧 helper function to normalize slug (same as slug page)  
function normalizeSlug(str: string) {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

// 🔧 normalizeOffer function for new API - केवल locales[0] use करें
function normalizeOffer(doc: any) {
  const layout = Array.isArray(doc?.layout) ? doc.layout : [];
  const tabs: Record<string, { label: string; services: any[] }> = {};

  for (const block of layout) {
    // केवल पहला locale (locales[0]) use करें
    const entry = block?.locales?.[0];
    if (!entry) continue;
    
    const label = entry.label || "";
    
    if (!tabs[label]) tabs[label] = { label, services: [] };

    // description निकालना (ckEditorBlock)
    let desc = "";
    const ckEditorBlock = entry.content?.find((c: any) => c.blockType === "ckEditorBlock");
    if (ckEditorBlock?.content) {
      // Extract text from HTML content
      desc = ckEditorBlock.content.replace(/<[^>]*>/g, '').trim();
    }

    // image निकालना (imageBlock)
    let image = "/images/misc/placeholder.jpg";
    let imageAlt = entry.title || "Service Image";
    const imgBlock = entry.content?.find((c: any) => c.blockType === "imageBlock");
    if (imgBlock?.image?.url) {
      image = imgBlock.image.url;
      imageAlt = imgBlock.image.alt || entry.title || "Service Image";
    }

    tabs[label].services.push({
      title: entry.title || "",
      desc: entry.subtitle || desc.substring(0, 100) + "...",
      slug: entry.title ? normalizeSlug(entry.title) : "",
      image,
      imageAlt,
    });
  }

  return Object.values(tabs);
}

const TherapistServices = () => {
  const [tabData, setTabData] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
    <section className="relative pb60 tabs-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 text-center">
            <h2 className="" data-wow-delay=".2s">
              Meine{" "}
              <span className="alt-font fw-500 font-italic ml-4 fs-54 id-color-2">Angebote</span>
            </h2>
            <div className="spacer-single" />
            <div className="spacer-half" />
          </div>
        </div>

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
                <p className="mb-0">
                  Die Angebote konnten nicht geladen werden: {error}
                </p>
              </div>
            </div>
          </div>
        )}

        {!loading && !error && tabData.length > 0 && (
          <>
            {/* Tabs */}
            <div className="d-flex justify-content-center mb-5 gap-12 flex-wrap">
              {tabData.map((tab: { label: string; services: any[] }, idx: number) => (
                <button
                  key={tab.label}
                  className={`btn rounded-7 px-4 py-2  ${
                    activeTab === idx ? "bg-primary text-white" : " "
                  }  fw-bold`}
                  onClick={() => setActiveTab(idx)}
                  style={{ minWidth: 140, borderRadius: "50px" }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="row g-4">
              {tabData[activeTab]?.services?.map((service: { title: string; desc: string; slug: string; image: string; imageAlt: string }, i: number) => (
                <div key={i} className="col-lg-3 col-sm-4">
                  <div className="relative mb-3" style={{ minHeight: "470px" }}>
                    <Link href={`/offer/${service.slug}`} className="d-block hover mb-3">
                      <div className="relative overflow-hidden rounded-20px ">
                        <div className="absolute start-0 w-100 abs-middle fs-36 text-white text-center">
                          <span className="btn-main hover-scale-in-2">Read More</span>
                        </div>
                        <Image
                          src={service.image}
                          width={300}
                          height={200}
                          className="img-fluid hover-scale-1-2"
                          alt={service.imageAlt}
                        />
                      </div>
                    </Link>
                    <h4 className="text-center">
                      <Link
                        href={`/offer/${service.slug}`}
                        className="text-decoration-none text-dark"
                      >
                        {service.title}
                      </Link>
                    </h4>
                    <p className="no-bottom text-center">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <span className="absolute top-20 start-0">
        <Image
          src="/images/bg-2-copyright.webp"
          width={393}
          height={625}
          alt="Background Copyright"
          priority
        />
      </span>
    </section>
  );
};

export default TherapistServices;



import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68b961bf0cdce0790917cc2f?depth=2&draft=false&locale=undefined&trash=false`;

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
          ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${entry.image.url}`
          : "/images/misc/placeholder.jpg",
      });
    }
  }
  return Object.values(tabs);
}


const TherapistServices = () => {
  const [tabData, setTabData] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(API_URL, { cache: "no-store" });
        if (!res.ok) return;
        const json = await res.json();
        const doc = json?.doc ?? json?.docs?.[0] ?? json;
        if (!doc) return;
        const normalized = normalizeOffer(doc);
        setTabData(normalized);
      } catch {}
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
          {tabData[activeTab]?.services?.map((service: { title: string; desc: string; slug: string; image: string }, i: number) => (
            <div key={i} className="col-lg-3 col-sm-4">
              <div className="relative mb-3" style={{ minHeight: "470px" }}>
                <Link href={`/offer/${service.slug}`} className="d-block hover mb-3">
                  <div className="relative overflow-hidden rounded-20px ">
                    <div className="absolute start-0 w-100 abs-middle fs-36 text-white text-center">
                      <span className="btn-main hover-scale-in-2">Read More</span>
                    </div>
                    <img
                      src={service.image}
                      className="img-fluid hover-scale-1-2"
                      alt={service.title}
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

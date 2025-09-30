"use client";
import React, { useEffect, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";

const API_URL_FAQ = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68c01158106eb845adbadfa2?depth=2&draft=false&locale=de&trash=false`;

type FAQItem = { q: string; a: string };

// Helper: extract plain text from Lexical richText
function extractText(node: any): string {
  if (!node) return "";
  if (typeof node.text === "string") return node.text;
  if (Array.isArray(node.children))
    return node.children.map(extractText).join(" ");
  return "";
}

// Helper: find section field from sectionBlockV2 locales[0]
function findSectionField(doc: any, field: string) {
  // Try sectionBlockV2 in layout with locales[0] first
  if (Array.isArray(doc?.layout)) {
    for (const block of doc.layout) {
      if (block?.blockType === "sectionBlockV2") {
        const locale = block?.locales?.[0]; // Get locales[0] specifically
        if (locale?.[field]) return locale[field];
      }
    }
  }

  // Try root-level as fallback
  if (doc?.[field]) return doc[field];

  // Try hero object at root as final fallback
  if (doc?.hero && doc.hero[field]) return doc.hero[field];

  // Not found
  return undefined;
}

// Normalize FAQs for sectionBlock/sectionBlockV2
const normalizeFaqs = (doc: any): FAQItem[] => {  
  if (!doc || typeof doc !== "object") return [];

  if (Array.isArray(doc.layout)) {
    const items: FAQItem[] = [];

    doc.layout.forEach((block: any) => {
      if (
       
        block?.blockType === "sectionBlockV2"
      ) {
        const loc =
          block?.locales?.[0] ||
          block?.locales?.de ||
          block?.locales?.en ||
          block;

        // sectionBlock direct htmlContent/description
        if (loc?.title && (loc?.htmlContent || loc?.description)) {
          items.push({
            q: String(loc.title || "").trim(),
            a: String(
              loc.htmlContent ||
              extractText(loc?.description?.root || loc?.description) ||
              ""
            ).trim(),
          });
        }

        // sectionBlockV2 with content array
        if (Array.isArray(loc?.content)) {
          loc.content.forEach((c: any) => {
            const q = c?.title || c?.label || "";
            const a =
              c?.htmlContent ||
              c?.content ||
              extractText(c?.description?.root || c?.description) ||
              "";

            if (q && a) {
              items.push({
                q: String(q).trim(),
                a: String(a).trim(),
              });
            }
          });
        }
      }
    });

    return items.filter((it: FAQItem) => it.q && it.a);
  }

  return [];
};

const FAQClient = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pageData, setPageData] = useState<any>(null);
  const [faqs, setFaqs] = useState<FAQItem[]>([]);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch(API_URL_FAQ, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        const doc =
          json?.doc ?? (Array.isArray(json?.docs) ? json.docs[0] : json);
        if (active) {
          setPageData(doc);
          const nf = normalizeFaqs(doc);
          if (nf.length) setFaqs(nf);
        }
      } catch (e: any) {
        if (active) setError(e?.message || "Load failed");
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <>
      <Breadcrumbs
        title={pageData?.title || pageData?.hero?.title || "FAQ"}
        items={[
          { label: "Home", href: "/" },
          { label: pageData?.title || "FAQ" },
        ]}
      />

      <section className="bg-white py-5">
        <span className="absolute top-20 start-0">
          <Image
            src="/images/bg-2-copyright.webp"
            width={303}
            height={550}
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
                  <p className="m-0 fs-5">Lade FAQ...</p>
                </div>
              </div>
            </div>
          )}
          {error && (
            <div className="alert alert-danger text-center my-4">
              Fehler beim Laden: {error}
            </div>
          )}
          {!loading && !error && (
            <>
              <div className="row justify-content-center mt-5 mb-5">
                <div className="col-lg-8 text-center">
                  <span className="text-uppercase text-primary fw-semibold small mb-2 d-block letter-spacing">
                    {findSectionField(pageData, "label") || 
                     findSectionField(pageData, "label_text")}
                  </span>
                  <h2 className="display-5 fw-bold mb-4">
                    {findSectionField(pageData, "title") ||
                     findSectionField(pageData, "headline")}
                  </h2>
                  <p className="lead text-muted">
                    {findSectionField(pageData, "subtitle") ||
                     findSectionField(pageData, "description")}
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="accordion" id="faqAccordion">
                    {faqs.map((item, idx) => (
                      <div
                        className="accordion-item mb-3 rounded-4 shadow-sm border-0"
                        key={idx}
                      >
                        <h3 className="accordion-header" id={`heading${idx}`}>
                          <button
                            className={`accordion-button fw-bold px-4 py-3 ${openIdx === idx ? "" : "collapsed"
                              }`}
                            type="button"
                            aria-expanded={openIdx === idx ? "true" : "false"}
                            aria-controls={`collapse${idx}`}
                            style={{
                              fontSize: "1.15rem",
                              background: "#f7f5fa",
                              color: "#5c377d",
                              borderRadius: "16px",
                              boxShadow:
                                openIdx === idx
                                  ? "0 2px 8px rgba(92,55,125,0.08)"
                                  : "none",
                              transition: "box-shadow 0.2s",
                            }}
                            onClick={() => handleToggle(idx)}
                          >
                            {item.q}
                          </button>
                        </h3>
                        <div
                          id={`collapse${idx}`}
                          className={`accordion-collapse collapse${openIdx === idx ? " show" : ""}`}
                          aria-labelledby={`heading${idx}`}
                        >
                          <div
                            className="accordion-body px-4 py-3"
                            style={{
                              fontSize: "1.08rem",
                              background: "#fff",
                              borderRadius: "0 0 16px 16px",
                            }}
                            dangerouslySetInnerHTML={{ __html: item.a }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default FAQClient;

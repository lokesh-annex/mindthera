"use client";
import React, { useEffect, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";

const API_URL_FAQ =
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68c01158106eb845adbadfa2?depth=2&draft=false&locale=undefined&trash=false`;

type FAQItem = { q: string; a: string };

// Helper: extract plain text from Lexical richText
function extractText(node: any): string {
  if (!node) return "";
  if (typeof node.text === "string") return node.text;
  if (Array.isArray(node.children))
    return node.children.map(extractText).join(" ");
  return "";
}

// Normalize FAQs from layout (with htmlContent support)
const normalizeFaqs = (doc: any): FAQItem[] => {
  if (!doc || typeof doc !== "object") return [];

  if (Array.isArray(doc.layout)) {
    const items = doc.layout
      .filter((block: any) => block?.blockType === "sectionBlock")
      .map((block: any) => {
        const loc =
          block?.locales?.[0] ||
          block?.locales?.de ||
          block?.locales?.en ||
          block;

        const q = loc?.title || loc?.label || "";
        const a =
          loc?.htmlContent ||
          extractText(loc?.description?.root || loc?.description) ||
          "";

        return {
          q: String(q || "").trim(),
          a: String(a || "").trim(),
        } as FAQItem;
      })
      .filter((it: FAQItem) => it.q && it.a);

    if (items.length) return items;
  }

  return [];
};

const Faq = () => {
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
                 
                </div>
              </div>
            </div>
          )}
          {!loading && (
            <>
              <div className="row justify-content-center mt-5 mb-5">
                <div className="col-lg-8 text-center">
                  <span className="text-uppercase text-primary fw-semibold small mb-2 d-block letter-spacing">
                    {pageData?.label_text ||
                      pageData?.label ||
                      pageData?.hero?.label }
                  </span>
                  <h2 className="display-5 fw-bold mb-4">
                    {pageData?.headline ||
                      pageData?.hero?.headline ||
                      pageData?.title }
                  </h2>
                  <p className="lead text-muted">
                    {pageData?.subtitle ||
                      pageData?.description ||
                      pageData?.hero?.subtitle }
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
                          className={`accordion-button fw-bold px-4 py-3 ${
                            openIdx === idx ? "" : "collapsed"
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
                        className={`accordion-collapse collapse${
                          openIdx === idx ? " show" : ""
                        }`}
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
};export default Faq;

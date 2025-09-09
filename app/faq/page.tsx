"use client";
import React, { useEffect, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
const API_URL_FAQ =
  "http://localhost:3001/api/pages/68c01158106eb845adbadfa2?depth=2&draft=false&locale=undefined&trash=false";

type FAQItem = { q: string; a: string };

// Minimal fallback items to avoid empty state when API fails
const defaultFaqs: FAQItem[] = [
  {
    q: "Wie buche ich einen Termin?",
    a: "Buche online über das Tool. Bei Fragen schreibe mir gerne eine Nachricht.",
  },
  {
    q: "Wie lange dauert eine Session?",
    a: "In der Regel 60–90 Minuten, je nach Bedarf.",
  },
  {
    q: "Was soll ich mitbringen?",
    a: "Bequeme Kleidung und etwas Zeit für dich davor und danach.",
  },
];

// Helper: extract plain text from Lexical richText
function extractText(node: any): string {
  if (!node) return "";
  if (typeof node.text === "string") return node.text;
  if (Array.isArray(node.children))
    return node.children.map(extractText).join(" ");
  return "";
}

// Normalize FAQs from layout first; fallback to scanning arrays for q/a pairs
const normalizeFaqs = (doc: any): FAQItem[] => {
  if (!doc || typeof doc !== "object") return [];
  // 1) Try explicit layout blocks
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
        const a = extractText(loc?.description?.root || loc?.description) || "";
        return {
          q: String(q || "").trim(),
          a: String(a || "").trim(),
        } as FAQItem;
      })
      .filter((it: FAQItem) => it.q && it.a);
    if (items.length) return items;
  }
  // 2) Generic deep scan for arrays with question/answer-like fields
  const candidates: any[] = [];
  const visit = (obj: any) => {
    if (!obj) return;
    if (Array.isArray(obj)) {
      if (obj.length && typeof obj[0] === "object") candidates.push(obj);
      obj.forEach(visit);
      return;
    }
    if (typeof obj === "object") Object.values(obj).forEach(visit);
  };
  visit(doc);
  for (const arr of candidates) {
    const mapped = (arr as any[])
      .map((it) => {
        const q =
          it?.q || it?.question || it?.frage || it?.title || it?.label || "";
        const a =
          it?.a ||
          it?.answer ||
          it?.antwort ||
          it?.content ||
          it?.description ||
          "";
        const qq = String(q || "").trim();
        const aa = String(a || "").trim();
        return qq && aa ? ({ q: qq, a: aa } as FAQItem) : null;
      })
      .filter(Boolean) as FAQItem[];
    if (mapped.length >= 2) return mapped;
  }
  return [];
};

const Faq = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pageData, setPageData] = useState<any>(null);
  const [faqs, setFaqs] = useState<FAQItem[]>(defaultFaqs);

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
          <div className="row justify-content-center mt-5 mb-5">
            <div className="col-lg-8 text-center">
              <span className="text-uppercase text-primary fw-semibold small mb-2 d-block letter-spacing">
                {pageData?.label_text ||
                  pageData?.label ||
                  pageData?.hero?.label ||
                  "Q&A – Häufig gestellte Fragen"}
              </span>
              <h2 className="display-5 fw-bold mb-4">
                {pageData?.headline ||
                  pageData?.hero?.headline ||
                  pageData?.title ||
                  "Harmonyum Trauma Release® & Buchung"}
              </h2>
              <p className="lead text-muted">
                {pageData?.subtitle ||
                  pageData?.description ||
                  pageData?.hero?.subtitle ||
                  "Die wichtigsten Antworten rund um HTR, Ablauf, Buchung und mehr."}
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="accordion" id="faqAccordion">
                {!loading &&
                  faqs.map((item, idx) => (
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
                        >
                          {item.a}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;

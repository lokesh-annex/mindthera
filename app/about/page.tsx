"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
const API_URL_WORK_SECTION =
  "http://localhost:3001/api/pages/68bec51e2880ed52c0efdf22?depth=2&draft=false&trash=false";

const AboutUS = () => {
  const [workData, setWorkData] = useState<any>(null);
  const [workLoading, setWorkLoading] = useState(true);
  const [workError, setWorkError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch(API_URL_WORK_SECTION, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        const doc =
          json?.doc ?? (Array.isArray(json?.docs) ? json.docs[0] : json);
        if (active) setWorkData(doc);
      } catch (e: any) {
        if (active) setWorkError(e.message || "Fetch failed");
      } finally {
        if (active) setWorkLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);
  // Helpers to extract text from Lexical richText trees
  function extractText(node: any): string {
    if (!node) return "";
    if (typeof node.text === "string") return node.text;
    if (Array.isArray(node.children)) return node.children.map(extractText).join(" ");
    return "";
  }

  function collectByType(root: any, type: string): string[] {
    const out: string[] = [];
    const walk = (n: any) => {
      if (!n) return;
      if (n.type === type) out.push(extractText(n).replace(/\s+/g, ' ').trim());
      if (Array.isArray(n.children)) n.children.forEach(walk);
    };
    if (root) walk(root);
    return out.filter(Boolean);
  }

  // Minimal Lexical richText -> HTML serializer (safe text escaping, common node types)
  const escapeHtml = (s: string) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  // Heuristic: detect pasted JSX/HTML snippets that should not render as text
  const looksLikePastedMarkup = (s: string) => {
    const str = String(s || '').trim();
    if (!str) return false;
    // Common JSX/HTML artifacts
    if (/class(Name)?\s*=|style\s*=|\{[^}]*\}/i.test(str)) return true;
    // Full or partial tag starts like <span, </div, <ul without closing '>'
    if (/^<\/?[a-z][\w:-]*(\s+[^>]*)?>?$/i.test(str)) return true;
    // Lone tag tokens or bracket lines
    if (/^<\/?[a-z][\w:-]*$/i.test(str)) return true;
    if (/^[<>]\/?$/.test(str)) return true;
    return false;
  };

  function renderChildren(children: any[]): string {
    if (!Array.isArray(children)) return "";
    return children.map(renderNode).join("");
  }

  function renderTextNode(n: any): string {
    let t = escapeHtml(n.text ?? "");
    if (!t) return "";
  // Drop text nodes that look like pasted code/JSX/HTML
  if (looksLikePastedMarkup(n.text ?? "")) return "";
    if (n.code) t = `<code>${t}</code>`;
    if (n.underline) t = `<u>${t}</u>`;
    if (n.italic) t = `<em>${t}</em>`;
    if (n.strikethrough) t = `<s>${t}</s>`;
    if (n.bold) t = `<strong>${t}</strong>`;
    return t;
  }

  function renderNode(n: any): string {
    if (!n) return "";
    switch (n.type) {
      case "text":
        return renderTextNode(n);
      case "paragraph":
        {
          const inner = renderChildren(n.children || []);
          // Skip empty paragraphs after filtering
          if (!inner || !inner.replace(/<br\s*\/?>/gi, '').trim()) return "";
          // Also skip paragraphs that are only pasted markup tokens
          const raw = extractText(n).trim();
          if (looksLikePastedMarkup(raw)) return "";
          return `<p>${inner}</p>`;
        }
      case "heading": {
        const tag = /^(h[1-6])$/.test(n.tag) ? n.tag : "h3";
        return `<${tag}>${renderChildren(n.children || [])}</${tag}>`;
      }
      case "linebreak":
        return "<br />";
      case "quote":
        return `<blockquote>${renderChildren(n.children || [])}</blockquote>`;
      case "list": {
        const isOrdered = (n.listType || n.tag) === "numbered" || n.tag === "ol";
        const tag = isOrdered ? "ol" : "ul";
        return `<${tag}>${renderChildren(n.children || [])}</${tag}>`;
      }
      case "listitem":
      case "list-item":
        return `<li>${renderChildren(n.children || [])}</li>`;
      case "link": {
        const href = n.url || n.fields?.url || "#";
        const rel = n.rel || "noopener noreferrer";
        const target = n.target || (n.newTab ? "_blank" : undefined);
        const targetAttr = target ? ` target="${escapeHtml(target)}"` : "";
        return `<a href="${escapeHtml(href)}" rel="${escapeHtml(rel)}"${targetAttr}>${renderChildren(n.children || [])}</a>`;
      }
      default:
        // Fallback: render children only
        return renderChildren(n.children || []);
    }
  }

  function lexicalToHtml(root: any): string {
    if (!root) return "";
    const nodes = Array.isArray(root?.children) ? root.children : [];
    return nodes.map(renderNode).join("");
  }

  // Sanitize final HTML by removing artifact text nodes and empty wrappers
  function sanitizeRenderedHtml(html: string): string {
    try {
      if (!html) return "";
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT);
      const toRemove: Text[] = [];
      // Collect artifact-like text nodes (e.g., "<span", "</div>")
      while (walker.nextNode()) {
        const tn = walker.currentNode as Text;
        const val = (tn.nodeValue || '').trim();
        if (!val) continue;
        if (looksLikePastedMarkup(val)) toRemove.push(tn);
      }
      toRemove.forEach((t) => t.parentNode?.removeChild(t));
      // Drop empty elements after cleanup
      doc.body.querySelectorAll('p, li, div').forEach((el) => {
        const text = (el.textContent || '').replace(/[\u200B\n\r\t]+/g, ' ').trim();
        if (!text) el.remove();
      });
      return doc.body.innerHTML;
    } catch {
      return html;
    }
  }

  // Extract list items either directly from Lexical tree or from generated HTML as a fallback
  function extractListItemsFromLexical(root: any): string[] {
    const items: string[] = [];
    const walk = (n: any) => {
      if (!n) return;
      if (n.type === 'list' && Array.isArray(n.children)) {
        n.children.forEach((li: any) => {
          if (li && (li.type === 'listitem' || li.type === 'list-item')) {
            const t = extractText(li).replace(/\s+/g, ' ').trim();
            if (t && !looksLikePastedMarkup(t)) items.push(t);
          }
        });
      }
      if (Array.isArray(n.children)) n.children.forEach(walk);
    };
    if (root) walk(root);
    return items;
  }

  function extractListItemsFromHtml(html: string): string[] {
    try {
      if (!html) return [];
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      return Array.from(doc.querySelectorAll('li'))
        .map((li) => (li.textContent || '').replace(/\s+/g, ' ').trim())
        .filter((t) => t && !looksLikePastedMarkup(t));
    } catch {
      return [];
    }
  }

  // Accept either Lexical {root:{children}} or an array of nodes
  const rawRich = workData?.hero?.richText;
  const heroRoot = Array.isArray(rawRich) ? { children: rawRich } : rawRich?.root;
  const paraTexts = collectByType(heroRoot, 'paragraph');
  const headingTexts = collectByType(heroRoot, 'heading');
  // Remove markup-like lines coming from pasted HTML into richText
  const cleanParas = paraTexts
    .map((t) => t.replace(/<[^>]*>/g, '').trim())
    .filter((t) => t && !/(className\s*=|style\s*=|^<|^>|^\{|^\}|^\/)/i.test(t));

  // Prepare raw HTML from richText if available
  const rawHtml: string = (() => {
    // Prefer an explicit rawHtml field if CMS provides it
    const explicit = workData?.hero?.rawHtml || workData?.rawHtml;
    if (typeof explicit === "string" && explicit.trim()) return sanitizeRenderedHtml(explicit);
    // Otherwise serialize Lexical richText
    if (heroRoot) return sanitizeRenderedHtml(lexicalToHtml(heroRoot));
    return "";
  })();

  // Public: list items derived from richText
  const listItems: string[] = (() => {
    const fromLexical = heroRoot ? extractListItemsFromLexical(heroRoot) : [];
    if (fromLexical.length) return fromLexical;
    return extractListItemsFromHtml(rawHtml);
  })();

  // Prefer explicit fields, then hero fields, then derived from richText
  const labelText = (
    workData?.label_text ||
    workData?.label ||
    workData?.hero?.label ||
    cleanParas[0] ||
    ""
  ).toString();
  const title = (
    workData?.title ||
    workData?.hero?.title ||
    headingTexts[0] ||
    ""
  ).toString();
  const isTitleFragment = (p: string) => {
    const t = String(title || '').toLowerCase();
    const s = String(p || '').toLowerCase();
    if (!t || !s) return false;
    // if paragraph is contained in title or starts with a long chunk of title
    return t.includes(s) || s.includes(t.slice(0, Math.min(15, t.length)));
  };

  const sentenceParas = cleanParas.filter((p) => {
    const t = (p || '').trim();
    return t && !isTitleFragment(t) && t !== labelText && /[.!?]$/.test(t) && t.length > 8;
  });

  const description = (
    workData?.highlight ||
    workData?.description ||
    workData?.subtitle ||
    sentenceParas[0] ||
    cleanParas.find((p) => p !== labelText && !isTitleFragment(p)) ||
    cleanParas[1] ||
    ""
  ).toString();

  // Image: prefer hero.image, then image1, then image
  const heroImage = workData?.hero?.image || workData?.image1 || workData?.image || null;
  const rawImageUrl = heroImage?.url || heroImage?.sizes?.large?.url || heroImage?.sizes?.og?.url || heroImage?.sizes?.thumbnail?.url || "";
  const imageUrl = rawImageUrl
    ? (rawImageUrl.startsWith("http") ? rawImageUrl : `http://localhost:3001${rawImageUrl}`)
    : "";
  const imageAlt = heroImage?.alt || "Hero image";
  const imageWidth = heroImage?.width || 800;
  const imageHeight = heroImage?.height || 400;

  return (
    <>
      <Breadcrumbs
        title="Über mich"
        items={[{ label: "Home", href: "/" }, { label: "Über mich" }]}
      />

      <section className="py-5  work-section">
        <span className="absolute top-20 start-0">
          <Image
            src="/images/bg-2-copyright.webp"
            width={393}
            height={625}
            alt="Background Copyright"
            priority
          />
        </span>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 mb-4 mb-lg-0 d-flex justify-content-center">
              {workLoading && <p>Loading…</p>}
              {workError && <p className="text-danger">{workError}</p>}
              {!workLoading && !workError && (
                <div
                  style={{
                    maxWidth: 400,
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 8px 32px rgba(92,55,125,0.12)",
                  }}
                >
                  <Image
                    src={imageUrl || '/images/image-16.jpg'}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    className="img-fluid"
                    priority
                  />
                </div>
              )}
            </div>
            <div className="col-lg-7">
              <div className="mb-2 text-uppercase fw-bold"
                style={{ letterSpacing: 1, color: "#5c377d" }}
              >
                {labelText}
              </div>
              <h2
                className="fw-bold mb-4"
                style={{ color: "#2d1a3a", fontSize: "2.5rem" }}
              >
                {title}
              </h2>
              <div
                className="richtext-content"
                dangerouslySetInnerHTML={{ __html: rawHtml }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="build-spaces"
        style={{ background: "#7a566b", padding: "64px 0" }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div
                className="text-uppercase fw-bold mb-3"
                style={{ color: "#fff", letterSpacing: 1 }}
              >
                Als Bewusstseins-Architektin baue
                <br />
                ich auch keine Häuser.
              </div>
              <h2
                className="fw-bold mb-4"
                style={{ color: "#fff", fontSize: "2.8rem", lineHeight: 1.1 }}
              >
                Ich baue Räume
                <br />– in dir.
              </h2>

              <div className="build-portrait">
                <Image
                  src="/images/image-15.jpg"
                  width={580}
                  height={250}
                  alt="Kerstin R. Stoll Portrait"
                  className="img-fluid build-portrait-img"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                style={{ color: "#e2dbe2", fontSize: "1.15rem", maxWidth: 600 }}
              >
                <p className="mb-3">
                  Räume, in denen du endlich atmen kannst.
                  <br />
                  In denen du deine Wahrheit nicht erklären musst.
                  <br />
                  In denen du nicht funktionieren musst, um wertvoll zu sein.
                  <br />
                  Ich begleite Menschen, die innerlich längst wissen:
                  <br />
                  <span className="fw-semibold" style={{ color: "#fff" }}>
                    „Ich bin mehr als das hier.“
                  </span>
                  <br />
                  Aber noch nicht wissen, wie sie dahin kommen.
                </p>
                <p className="mb-3">
                  Als Bewusstseins-Architektin arbeite ich mit Struktur und
                  Frequenz.
                  <br />
                  Ich sehe, wo du dich klein gemacht hast – und zeige dir, wie
                  du dich neu bauen kannst:
                  <br />
                  ehrlich, stabil, spirituell angebunden.
                  <br />
                </p>
                <p className="mb-3">
                  Meine Werkzeuge sind energetische Trauma-Arbeit, intuitive
                  Klarheit und ein unbestechlicher Blick auf das, was du
                  wirklich bist – unter all den Rollen.
                  <br />
                  Ich bin nicht hier, um dich zu coachen.
                  <br />
                </p>
                <p className="mb-3">
                  Ich bin hier, um dir deine inneren Räume zurückzugeben.
                  <br />
                  Damit du dich nicht mehr verbiegen musst – sondern dich selbst
                  wieder bewohnen kannst.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 mb-3 text-center">
            <div
              style={{
                background: "rgb(113, 77, 98)",
                color: "#fff",
                borderRadius: "12px",
                padding: "24px 16px",
              }}
            >
              <strong style={{ fontSize: "1.15rem", letterSpacing: 1 }}>
                Ich verbinde Wissenschaft &amp; Weisheit, Körper &amp; Frequenz
              </strong>
              <br />
              <span style={{ fontWeight: 500, fontSize: "1.08rem" }}>
                Kerstin R. Stoll
              </span>
              <br />
              <span style={{ fontWeight: 400, fontSize: "1.08rem" }}>
                Bewusstseins-Architektin &amp; Harmonyum Trauma Release®
                Practitioner
              </span>
              <br />
              <span style={{ fontSize: "1.2rem" }}>
                ✨ Visionärin der inneren Räume für neue Realitäten
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-5 mb-5">
        <div className="row mt-2 g-4">
          <div className="col-lg-6 fade-in" style={{ animationDelay: "0.9s" }}>
            <div className="mb-4 p-4 rounded-4 text-dark bg-light h-100">
              <h4 className="fw-bold mb-3 text-primary">
                <span
                  className="d-inline-flex align-items-center flex-wrap"
                  style={{ gap: "10px" }}
                >
                  <span
                    style={{
                      background: "#5c377d",
                      color: "#fff",
                      borderRadius: "50%",
                      width: "38px",
                      height: "38px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i
                      className="bi bi-award"
                      style={{ fontSize: "1.5rem" }}
                    ></i>
                  </span>
                  <span>
                    Zertifiziert in alternativer Medizin,
                    <br /> Energiearbeit und Quantenheilung
                  </span>
                </span>
              </h4>

              <ul
                className="list-unstyled mb-0"
                style={{ fontSize: "1.08rem" }}
              >
                <li className="mb-2 d-flex align-items-center">
                  <span
                    style={{
                      color: "#5c377d",
                      fontSize: "1.8rem",
                      marginRight: "10px",
                    }}
                  >
                    <i className="bi bi-check"></i>
                  </span>
                  Altchinesische Medizin & Kräuterheilkunde, 2001-2003
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <span
                    style={{
                      color: "#5c377d",
                      fontSize: "1.8rem",
                      marginRight: "10px",
                    }}
                  >
                    <i className="bi bi-check"></i>
                  </span>
                  Schüssler Salze & Antlitzdiagnostik, 2004
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <span
                    style={{
                      color: "#5c377d",
                      fontSize: "1.8rem",
                      marginRight: "10px",
                    }}
                  >
                    <i className="bi bi-check"></i>
                  </span>
                  Heilerin Russische Volksheilkunde, 2004-2006
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <span
                    style={{
                      color: "#5c377d",
                      fontSize: "1.8rem",
                      marginRight: "10px",
                    }}
                  >
                    <i className="bi bi-check"></i>
                  </span>
                  Grundlagen Ayurveda & Marmamassage, Indien, 2005
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <span
                    style={{
                      color: "#5c377d",
                      fontSize: "1.8rem",
                      marginRight: "10px",
                    }}
                  >
                    <i className="bi bi-check"></i>
                  </span>
                  Naam Yoga Teacher Trainer, 2008
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <span
                    style={{
                      color: "#5c377d",
                      fontSize: "1.8rem",
                      marginRight: "10px",
                    }}
                  >
                    <i className="bi bi-check"></i>
                  </span>
                  Energy Medicine Master 1.0, 2016
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <span
                    style={{
                      color: "#5c377d",
                      fontSize: "1.8rem",
                      marginRight: "10px",
                    }}
                  >
                    <i className="bi bi-check"></i>
                  </span>
                  Master der Neuen Homöopathie, 2017
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <span
                    style={{
                      color: "#5c377d",
                      fontSize: "1.8rem",
                      marginRight: "10px",
                    }}
                  >
                    <i className="bi bi-check"></i>
                  </span>
                  Informationsmedizin & Alphasynapsen-Programmierung, 2018
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <span
                    style={{
                      color: "#5c377d",
                      fontSize: "1.8rem",
                      marginRight: "10px",
                    }}
                  >
                    <i className="bi bi-check"></i>
                  </span>
                  Energy Medicine Master 2.0, 2024
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <span
                    style={{
                      color: "#5c377d",
                      fontSize: "1.8rem",
                      marginRight: "10px",
                    }}
                  >
                    <i className="bi bi-check"></i>
                  </span>
                  Neuro-Energetic-Programming-Master, 2024
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <span
                    style={{
                      color: "#5c377d",
                      fontSize: "1.8rem",
                      marginRight: "10px",
                    }}
                  >
                    <i className="bi bi-check"></i>
                  </span>
                  Harmonyum Trauma Release®, 2025
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-4 p-4 rounded-4 text-dark  bg-light h-100 fade-in">
              <h4 className="fw-bold mb-3 text-primary">
                <span
                  className="d-flex align-items-center flex-wrap"
                  style={{ gap: "10px" }}
                >
                  <span
                    style={{
                      background: "#5c377d",
                      color: "#fff",
                      borderRadius: "50%",
                      width: "38px",
                      height: "38px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i
                      className="bi bi-book"
                      style={{ fontSize: "1.5rem" }}
                    ></i>
                  </span>
                  <span>Autorin folgender Bücher</span>
                </span>
              </h4>
              <ul
                className="list-unstyled mb-0"
                style={{ fontSize: "1.08rem" }}
              >
                <li className="mb-2 d-flex align-items-start">
                  <span
                    style={{
                      color: "#5c377d",
                      fontSize: "1.3rem",
                      marginRight: "10px",
                      marginTop: "2px",
                    }}
                  >
                    <i className="bi bi-book"></i>
                  </span>
                  Die Kraft des Gebetes im Alltag erleben: Stärke Dich mit
                  Gebeten - sie geben Deinem Leben die optimale Richtung und
                  schenken Dir Heilung, Fülle und Licht!
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <span
                    style={{
                      color: "#5c377d",
                      fontSize: "1.3rem",
                      marginRight: "10px",
                      marginTop: "2px",
                    }}
                  >
                    <i className="bi bi-book"></i>
                  </span>
                  Spiritualität im Reisegepäck - Wie du beim Reisen fürs Leben
                  lernst
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <span
                    style={{
                      color: "#5c377d",
                      fontSize: "1.3rem",
                      marginRight: "10px",
                      marginTop: "2px",
                    }}
                  >
                    <i className="bi bi-book"></i>
                  </span>
                  Schule mal anders - Brücken bauen zwischen altem und neuem
                  Schulsystem
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <span
                    style={{
                      color: "#5c377d",
                      fontSize: "1.3rem",
                      marginRight: "10px",
                      marginTop: "2px",
                    }}
                  >
                    <i className="bi bi-book"></i>
                  </span>
                  MIR REICHTS! TOP 12 Lerntechniken für Homeschooling und
                  Lernbegleitung
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <span
                    style={{
                      color: "#5c377d",
                      fontSize: "1.3rem",
                      marginRight: "10px",
                      marginTop: "2px",
                    }}
                  >
                    <i className="bi bi-book"></i>
                  </span>
                  Hörst Du den Ruf Deiner Seele? Handbuch für Deine Heldenreise
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <span
                    style={{
                      color: "#5c377d",
                      fontSize: "1.3rem",
                      marginRight: "10px",
                      marginTop: "2px",
                    }}
                  >
                    <i className="bi bi-book"></i>
                  </span>
                  Die Urform der Menschlichkeit ist das befreite Trauma
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <span
                    style={{
                      color: "#5c377d",
                      fontSize: "1.3rem",
                      marginRight: "10px",
                      marginTop: "2px",
                    }}
                  >
                    <i className="bi bi-book"></i>
                  </span>
                  Da wo sich der rote Stein und die grüne Wiese treffen;
                  Kinderbuch im Hosentaschen-format: eine Murmeltiergeschichte
                  aus dem UNESCO Welterbe Sardona, Schweiz, erschienen im
                  Eigenverlag (bei Interesse bitte eine email an
                  info@traumafrei.ch)
                </li>
              </ul>
              <p className="mt-3 mb-0">
                Die Bücher 1-6 sind erhältlich bei amazon.de.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUS;

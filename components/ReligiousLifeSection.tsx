"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";


const CMS_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_URL = `${CMS_BASE}/api/pages/68be83bbbf64c36803556e91?depth=2&draft=false&trash=false`;

interface MediaObj { url?: string; sizes?: any; }

const ReligiousLifeSection = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      
      try {
        const res = await fetch(API_URL, { cache: "no-store" });
        if (!res.ok) {
          let body = '';
          try { body = await res.text(); } catch {}
          throw new Error(`Fetch failed (${res.status}) ${res.statusText} ${body?.slice(0,120)}`);
        }
        const json = await res.json();
        setData(json);
      } catch (e: any) {
        console.error('ReligiousLifeSection fetch error:', e);
        setError(e.message || 'Fetch failed');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  // Accept object with url OR raw string; return absolute or ''
  const absUrl = (img?: MediaObj | string | null) => {
    if (!img) return "";
    if (typeof img === 'string') {
      if (!img) return "";
      if (img.startsWith('http')) return img;
      return `${CMS_BASE}${img}`;
    }
    if (!img.url) return "";
    if (img.url.startsWith('http')) return img.url;
    return `${CMS_BASE}${img.url}`;
  };

  // Images (keep full object; try several fallbacks)
  const imgPrimary: any = data?.image1 || data?.hero?.image1 || data?.image || null;
  const imgSecondary: any = data?.image2 || data?.hero?.image2 || data?.secondaryImage || null;

  const primaryUrl = absUrl(imgPrimary);
  const secondaryUrl = absUrl(imgSecondary);

  // Basic fields
  const label = data?.label || data?.sectionLabel || data?.['Label Text'] || '';
  const title = data?.title || data?.hero?.title || '';
  const richNodes = data?.richText?.root?.children || data?.hero?.richText?.root?.children || [];
  const buttonText = data?.button_text || data?.buttonText || data?.ctaLabel;
  const buttonLink = data?.button_link || data?.buttonLink || data?.ctaLink || '#';

  // Build paragraphs from description + deep-walk of rich text, removing <br /> artifacts
  const walkTexts: string[] = [];
  const walk = (node: any) => {
    if (!node) return;
    if (node.text) walkTexts.push(node.text);
    if (Array.isArray(node.children)) node.children.forEach(walk);
  };
  richNodes.forEach(walk);
  const combined = walkTexts.join('\n');
  const cleaned = combined
    .replace(/<br\s*\/?>/gi, '\n') // convert br tags to newlines
    .replace(/\r/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  let paragraphs = cleaned
    .split(/\n{2,}/)
    .map(p => p.replace(/<br\s*\/?>/gi, ' ').replace(/\s+/g, ' ').trim())
    .filter(p => p && p !== '<br />');
  if (data?.description) {
    const desc = data.description.trim();
    if (!paragraphs[0] || paragraphs[0] !== desc) paragraphs.unshift(desc);
  }

  return (
    <section className="py-5 bg-white two-images-section">
      <div className="container">
        {loading && (
          <div className="py-5 text-center d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary me-2" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="m-0">Lade Inhalte...</p>
          </div>
        )}
        {error && !loading && <p className="m-0 py-5 text-center text-danger">Error: {error}</p>}
        {!loading && !error && (
          <div className="row align-items-center">
            {/* Images Left */}
            <div className="col-lg-7 position-relative mb-4 mb-lg-0" style={{ minHeight: "350px" }}>
              <div style={{ position: "relative", width: "100%", height: "550px" }}>
                {/* Primary Image */}
                {primaryUrl && (
                  <Image
                    src={primaryUrl}
                    alt={title || 'Primary image'}
                    width={800}
                    height={600}
                    style={{ position: "absolute", left: 0, top: 0, width: "58%", height: "100%", objectFit: "cover" }}
                  />
                )}
                {/* Secondary Image */}
                {secondaryUrl && (
                  <Image
                    src={secondaryUrl}
                    alt={title || 'Secondary image'}
                    width={800}
                    height={600}
                    className="second-image"
                    style={{ position: "absolute", right: "6%", top: "40%", width: "55%", height: "80%", objectFit: "cover", zIndex: 2 }}
                  />
                )}
              </div>
            </div>
            {/* Content Right */}
            <div className="col-lg-5">
              <div className="mb-2 text-uppercase fw-bold text-secondary" style={{ letterSpacing: "2px", fontSize: "15px" }}>
                {label}
              </div>
              <h2 className="fw-bold mb-3" style={{ fontSize: "2rem", lineHeight: 1.2 }}>
                {title}
              </h2>
              {paragraphs.length > 0 && (
                <div className="text-muted mb-4" style={{ fontSize: "1.08rem" }}>
                  {paragraphs.map((p, i) => (
                    <p key={i} className="mb-3" style={{ fontSize: "1.08rem" }}>
                      {p}
                    </p>
                  ))}
                </div>
              )}
              {buttonText && (
                <div className="mb-3">
                  <a className="btn btn-main px-4 py-2 fw-bold mb-2" href={buttonLink}>
                    {buttonText}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReligiousLifeSection;

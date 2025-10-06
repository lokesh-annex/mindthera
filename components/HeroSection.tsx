"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68be7cf2bf64c36803556acb?depth=2&draft=false&trash=false`;

const HeroSection = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch hero content");
        const json = await res.json();
        setData(json);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // ✅ layout से buttonBlock निकालना
  const getButtonBlock = (layout: any[]) => {
    if (!layout) return null;
    const block = layout.find((b) => b.blockType === "buttonBlock");
    if (!block) return null;
    const btn = block.locales?.[0];
    return {
      text: btn?.buttonText || null,
      url: btn?.buttonUrl || "#",
      newTab: btn?.openInNewTab || false,
    };
  };

  // ✅ layout से mediaBlock निकालना
  const getMediaBlock = (layout: any[]) => {
    if (!layout) return "";
    const block = layout.find((b) => b.blockType === "mediaBlock");
    const media = block?.locales?.[0]?.media;
    if (!media) return "";

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const possibleUrls = [
      media?.sizes?.xlarge?.url,
      media?.sizes?.large?.url,
      media?.sizes?.medium?.url,
      media?.sizes?.small?.url,
      media?.sizes?.thumbnail?.url,
      media?.url,
    ].filter(Boolean);

    if (possibleUrls.length) {
      const u = possibleUrls[0];
      return u.startsWith("http") ? u : `${baseUrl}${u}`;
    }
    return "";
  };

  const title = data?.title;
  const subtitle = data?.description;
  const button = getButtonBlock(data?.layout);
  const bgimg = getMediaBlock(data?.layout);

  return (
    <section className="section-dark text-light hero-section-slider  position-relative overflow-hidden">
        <span className="absolute top-15 start-0">
              <Image
                src="/images/bg-2-copyright.webp"
                width={343}
                height={625}
                alt="Background Copyright"
                priority
              />
            </span>
             <span className="absolute top-30 end-0">
              <Image
                src="/images/bg-2-copyright-right.webp"
                width={343}
                height={625}
                alt="Background Copyright"
                priority
              />
            </span>
      {loading && (
        <div className="container py-5">
          <div className="d-flex align-items-center justify-content-center">
            <div
              className="spinner-border spinner-border-sm text-light me-2"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="m-0 text-light">Lade Hero-Inhalte...</p>
          </div>
        </div>
      )}
      {error && !loading && (
        <div className="container py-5 text-danger">
          <p className="m-0">Error: {error}</p>
        </div>
      )}
      {!loading && !error && (
       
          <div className="container">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6 p-0">
                <img src="/images/slider/slide.jpg" className="img-fluid" />
              </div>
              <div className="col-lg-6 p-0">
               
                <div className="sw-text-wrapper">
                  <h2 className="slider-title mb-3">
                    {title}
                    {subtitle && (
                      <span className="d-block alt-font fw-500  fs-36 fs-xs-24 mt-2">
                        {subtitle}
                      </span>
                    )}
                  </h2>
                  {button?.text && (
                    <Link
                      className="btn-main mb10 mb-3"
                      href={button.url}
                      target={button.newTab ? "_blank" : "_self"}
                    >
                      {button.text}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
     
      )}
    </section>
  );
};

export default HeroSection;

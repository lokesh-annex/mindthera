"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"}/api/pages/68be7cf2bf64c36803556acb?depth=2&draft=false&trash=false`;

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


  // Resolve background image from multiple possible fields
  const resolveBgImage = (d: any) => {
    if (!d) return '';
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";
    const candidates = [
      d?.backgroundImage,
      d?.hero?.backgroundImage,
      d?.hero?.image,
      d?.image,
      d?.image1,
    ];
    for (const c of candidates) {
      if (!c) continue;
      // consider sizes
      const possibleUrls = [
        c?.url,
        c?.sizes?.large?.url,
        c?.sizes?.medium?.url,
        c?.sizes?.small?.url,
        c?.sizes?.thumbnail?.url,
      ].filter(Boolean);
      if (possibleUrls.length) {
        const u = possibleUrls[0];
        return u.startsWith('http') ? u : `${baseUrl}${u}`;
      }
    }
    return '';
  };

  const bgimg = resolveBgImage(data);

  const title = data?.title ;
  const subtitle = data?.description;
  const ctaText = data?.button_text  ;
  const ctaLink = data?.ctaLink;

  return (
    <section className="section-dark text-light hero-section-slider no-top no-bottom position-relative overflow-hidden z-1000">
      {loading && (
        <div className="container py-5"><p className="m-0">Loading...</p></div>
      )}
      {error && !loading && (
        <div className="container py-5 text-danger"><p className="m-0">Error: {error}</p></div>
      )}
      {!loading && !error && (
        <div
          className="swiper-inner two"
          style={{
            backgroundImage: bgimg ? `url(${bgimg})` : 'url(/images/slider/2.jpg)',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6 offset-lg-6">
                <div className="spacer-single"></div>
                <div className="sw-text-wrapper">
                  <h2 className="slider-title mb-3">
                    {title}
                    {subtitle && (
                      <span className="d-block alt-font fw-500 id-color-2 fs-36 fs-xs-24 mt-2">
                        {subtitle}
                      </span>
                    )}
                  </h2>
                  {ctaText && (
                    <Link className="btn-main mb10 mb-3" href="/harmonyum">
                      {ctaText}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;

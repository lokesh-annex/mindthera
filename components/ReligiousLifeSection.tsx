"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BookingWidgetModal from "@/components/BookingWidgetModal";
import Link from "next/link";

const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68be83bbbf64c36803556e91?depth=2&draft=false&trash=false`;


const ReligiousLifeSection = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(API_URL, { cache: "no-store" });
        if (!res.ok) throw new Error(`Fetch failed (${res.status})`);
        const json = await res.json();
        setData(json?.doc ?? json);
      } catch (e: any) {
        console.error("ReligiousLifeSection fetch error:", e);
        setError(e.message || "Fetch failed");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const absUrl = (u?: string) =>
    !u
      ? ""
      : u.startsWith("http")
      ? u
      : `${process.env.NEXT_PUBLIC_API_BASE_URL}${u}`;

  if (loading) {
    return (
      <section className="py-5">
        <div className="container text-center">
          <div className="spinner-border text-primary me-2" role="status" />
          <span>Lade Inhalte...</span>
        </div>
      </section>
    );
  }

  if (error) return <p className="text-center text-danger py-5">Error: {error}</p>;
  if (!data) return null;

  // ✅ content block
  const contentBlock = data.layout?.find((b: any) => b.blockType === "content");
  const html = contentBlock?.locales?.[0]?.html || "";

  // ✅ media blocks
  const mediaBlocks =
    data.layout?.filter((b: any) => b.blockType === "mediaBlock") || [];
  const images = mediaBlocks.map((b: any, index: number) => ({
    url: absUrl(b.locales?.[0]?.media?.url),
    alt: b.locales?.[0]?.media?.alt || data.title || `Image ${index + 1}`
  }));

  // ✅ button block
  const buttonBlock = data.layout?.find((b: any) => b.blockType === "buttonBlock");
  const buttonText = buttonBlock?.locales?.[0]?.buttonText || "";
  const buttonLink = buttonBlock?.locales?.[0]?.buttonUrl || "#";
  const openInNewTab = buttonBlock?.locales?.[0]?.openInNewTab || false;

  return (
    <section className="py-5 bg-white two-images-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Images Left */}
          <div
            className="col-lg-7 position-relative mb-4 mb-lg-0"
            style={{ minHeight: "350px" }}
          >
            <div style={{ position: "relative", width: "100%", height: "550px" }}>
              {images[0]?.url && (
                <Image
                  src={images[0].url}
                  alt={images[0].alt}
                  width={800}
                  height={600}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "58%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
              {images[1]?.url && (
                <Image
                  src={images[1].url}
                  alt={images[1].alt}
                  width={800}
                  height={600}
                  className="second-image-why"
                  style={{
                    position: "absolute",
                    right: "6%",
                    top: "40%",
                    width: "55%",
                    height: "80%",
                    objectFit: "cover",
                    zIndex: 2,
                  }}
                />
              )}
            </div>
          </div>

          {/* Content Right */}
          <div className="col-lg-5">
            {data.label_text && (
              <div
                className="mb-2 text-uppercase fw-bold text-secondary"
                style={{ letterSpacing: "2px", fontSize: "15px" }}
              >
                {data.label_text}
              </div>
            )}

            <h2 className="fw-bold mb-3" style={{ fontSize: "2rem", lineHeight: 1.2 }}>
              {data.title}
            </h2>

            {html && (
              <div
                className="text-muted mb-4"
                style={{ fontSize: "1.08rem" }}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            )}

            {/* ✅ Button from buttonBlock */}
            {buttonText && (
              <>
               
                  <Link
                    href={buttonLink || "#"}
                    className="btn btn-main px-4 py-2 fw-bold"
                    target={openInNewTab ? "_blank" : undefined}
                    rel={openInNewTab ? "noopener noreferrer" : undefined}
                  >
                    {buttonText}
                  </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReligiousLifeSection;

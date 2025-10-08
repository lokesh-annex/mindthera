"use client";
import React, { useEffect, useState } from "react";
import BookingWidgetModal from "@/components/BookingWidgetModal";
import Image from "next/image";
import Link from "next/link";

const API_URL =
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68ba8bd18b6ef54bfa7a2c50?depth=2&draft=false&trash=false`;

const AboutUS = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(API_URL, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch data");
        const json = await res.json();
        setData(json?.doc ?? json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <section className="py-5">
        <div className="container d-flex align-items-center justify-content-center py-5">
          <div className="spinner-border text-primary me-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </section>
    );
  }
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  const absUrl = (u?: string) =>
    u?.startsWith("http")
      ? u
      : u
      ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${u}`
      : "";


  // Filter out empty sections (no title, description, html, or images)
  const layout = Array.isArray(data.layout)
    ? data.layout.filter((b: any) => {
        const locale = b.locales?.[0] || {};
        const hasContent =
          (locale.title && locale.title.trim() !== "") ||
          (locale.description && locale.description.trim() !== "") ||
          (locale.html && locale.html.trim() !== "") ||
          (b.blockType === "mediaBlock" && locale.media?.url) ||
          (b.blockType === "buttonBlock" && locale.buttonText && locale.buttonText.trim() !== "");
        return hasContent;
      })
    : [];

  
  const contentBlock = layout.find((b: any) => b.blockType === "content");
  const html = contentBlock?.locales?.[0]?.html || "";

  
  const mediaBlocks = layout.filter((b: any) => b.blockType === "mediaBlock") || [];
  const images = mediaBlocks.map((b: any) =>
    absUrl(b.locales?.[0]?.media?.url)
  );


  const buttonBlocks = layout.filter((b: any) => b.blockType === "buttonBlock") || [];

  return (
    <>
    <section className="relative about-home">
      <span className="absolute top-15 start-0">
        <Image
          src="/images/bg-2-copyright.webp"
          width={393}
          height={625}
          alt="Background Copyright"
          priority
        />
      </span>
      <div className="leaf-bg d-none">
        <Image
          src="/images/misc/leaf-1.png"
          width={140}
          height={148}
          className="absolute top-10 end-10 anim-up-down sm-hide"
          alt="Leaf"
        />
      </div>

      <div className="container">
        <div className="row g-4 gx-5 align-items-center">
          
         

          {/* Right Column: Text + HTML + Buttons */}
          <div className="col-lg-6">
            <div className="subtitle mb-3">{data.label_text || ""}</div>
            <h2>{data.title}</h2>
            <p>{data.description}</p>

            {html && (
              <div
                className="ul-style-2 text-dark fw-600"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            )}

            <div className="spacer-10"></div>

            {/* Existing mapped buttons */}
           {buttonBlocks.map((btn: any, idx: number) => {
              const locale = btn.locales?.[0];
              if (!locale) return null;
              return (
                <>
                 <button
              type="button"
              className="btn-main me-2"
              onClick={() => setBookingOpen(true)}
            >
              {locale.buttonText}
            </button>
            
              </>
              );
            })}

            {/* Booking modal trigger button */}
          </div>
          {/* Left Column: API Images */}
          <div className="col-lg-6">
         
              {images.map(
                (img: string, idx: number) =>
                  img && (
                    <div className="image-wrapper-about" key={idx}>
                      <Image
                        src={img}
                        className="img-fluid rounded-10px mb-4 about-image-70"
                        width={500}
                        height={500}
                        alt={`Image ${idx + 1}`}
                      />
                    </div>
                  )
              )}
            </div>
        </div>
      </div>
    </section>
     <BookingWidgetModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      </>
  );
};

export default AboutUS;

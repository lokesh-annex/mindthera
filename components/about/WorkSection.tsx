"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const API_URL =
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68bec51e2880ed52c0efdf22?depth=2&draft=false&locale=undefined&trash=false`;

interface PageContent {
  title?: string;
  label_text?: string;
  image1?: {
    url: string;
    width: number;
    height: number;
  };
  html?: string;
}

const WorkSection = () => {
  const [content, setContent] = useState<PageContent>({});

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(API_URL, { cache: "no-store" });
        if (!res.ok) return;
        const json = await res.json();
        const doc = json?.doc ?? json?.docs?.[0] ?? json;
        if (!doc) return;

        console.log("Full API response:", json);
        console.log("Doc object:", doc);
        console.log("Doc title:", doc.title);
        console.log("Doc image1:", doc.image1);
        console.log("Doc layout:", doc.layout);
        console.log("Doc html:", doc.html);

        const next: PageContent = {
          title: doc.title,
          label_text: doc.label_text,
          image1: doc.image1
            ? {
                url: doc.image1.url,
                width: doc.image1.width || 400,
                height: doc.image1.height || 500,
              }
            : undefined,
          html:
            doc.layout?.[0]?.locales?.[0]?.html ||
            doc.layout?.[0]?.html ||
            doc.html ||
            undefined,
        };

        console.log("Processed content:", next);

        if (!cancelled) setContent(next);
      } catch (err) {
        console.error(err);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="py-5 work-section position-relative">
      {/* Background Decoration */}
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
          {/* Left Image */}
          <div className="col-lg-5 mb-4 mb-lg-0 d-flex justify-content-center">
            <div
              style={{
                maxWidth: 400,
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(92,55,125,0.12)",
              }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${content.image1?.url}`}
                width={content.image1?.width || 400}
                height={content.image1?.height || 500}
                alt={content.title || "Work Image"}
                className="img-fluid"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-7">
            {content.label_text && (
              <div
                className="mb-2 text-uppercase fw-bold"
                style={{ letterSpacing: 1, color: "#5c377d" }}
              >
                {content.label_text}
              </div>
            )}

            {content.title && (
              <h2
                className="fw-bold mb-4"
                style={{ color: "#2d1a3a", fontSize: "2.5rem" }}
              >
                {content.title}
              </h2>
            )}

            {/* Rich HTML block from Payload */}
            {content.html ? (
              <div
                dangerouslySetInnerHTML={{ __html: content.html }}
              />
            ) : (
              <div
                className="fw-semibold"
                style={{
                  fontSize: "1.15rem",
                  color: "#3d2c4a",
                  marginBottom: "1rem",
                }}
              >
                <p>Content is loading from API...</p>
                <small>Debug: No HTML content found in API response</small>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

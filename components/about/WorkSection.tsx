"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68db928a32bade52d81dfc3d?depth=2&draft=false&locale=undefined&trash=false`;

interface PageContent {
  title?: string;
  label_text?: string;
  image1?: {
    url: string;
    width: number;
    height: number;
    thumbnailURL?: string;
  };
  html?: string;
  description?: string;
}

const WorkSection = () => {
  const [content, setContent] = useState<PageContent>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL, { cache: "no-store" });
        if (!res.ok) return;
        const json = await res.json();
        const doc = json?.doc ?? json?.docs?.[0] ?? json;
        if (!doc) return;

        // Find the about-sec-one contentBlock
        let aboutBlock: any = undefined;
        let title = doc.title;
        let label_text = doc.label_text;

        if (Array.isArray(doc.layout)) {
          for (const layoutBlock of doc.layout) {
            if (Array.isArray(layoutBlock.locales)) {
              for (const locale of layoutBlock.locales) {
                if (Array.isArray(locale.content)) {
                  for (const c of locale.content) {
                    if (c.blockName === "about-sec-one") {
                      aboutBlock = c;
                      // Optionally get sectionBlock-level title etc as fallback:
                      title = locale.title || title;
                      label_text = locale.label || label_text;
                      break;
                    }
                  }
                  if (aboutBlock) break;
                }
              }
              if (aboutBlock) break;
            }
          }
        }

        // Process image
        let image1;
        if (aboutBlock?.image) {
          image1 = {
            url: aboutBlock.image.url,
            width: aboutBlock.image.width || 400,
            height: aboutBlock.image.height || 500,
            thumbnailURL: aboutBlock.image.thumbnailURL,
          };
        }

        // Compose final content
        const next: PageContent = {
          title: aboutBlock?.title || title, // block or sectionBlock or root
          label_text,
          image1,
          description: aboutBlock?.description,
          html: aboutBlock?.content,
        };

        if (!cancelled) setContent(next);
      } catch (err) {
        console.error(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <section className="py-5 work-section position-relative d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
        <div className="text-center">
          <div className="spinner-border text-primary" role="status" style={{ color: '#5c377d !important' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading content...</p>
        </div>
      </section>
    );
  }

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
            {content.image1 && (
              <div
                style={{
                  maxWidth: 400,
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(92,55,125,0.12)",
                }}
              >
                <Image
                  src={content.image1.url}
                  width={content.image1.width}
                  height={content.image1.height}
                  alt={content.title || "Work Image"}
                  className="img-fluid"
                />
              </div>
            )}
          </div>

          {/* Right Content */}
          <div className="col-lg-7">
            {content.title && (
              <div
                className="mb-2 text-uppercase fw-bold"
                style={{ letterSpacing: 1, color: "#5c377d" }}
              >
                {content.title}
              </div>
            )}

            {content.description && (
              <h2
                className="fw-bold mb-4"
                style={{ color: "#2d1a3a", fontSize: "2.5rem" }}
              >
                {content.description}
              </h2>
            )}

            {content.html && (
              <div
                className="mb-3 text-muted"
                dangerouslySetInnerHTML={{ __html: content.html }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

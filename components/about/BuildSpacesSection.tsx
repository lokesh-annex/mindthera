"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const API_URL =
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68c3f1f1bfc21719f3ab805a?depth=2&draft=false&locale=undefined&trash=false`;

// --- Helper to safely join base + path
const buildUrl = (base: string, path: string) => {
  if (!base) return path;
  return `${base.replace(/\/$/, "")}${path}`;
};

interface MediaImage {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

interface BuildSpacesData {
  title?: string;
  label_text?: string;
  image?: MediaImage;
  layout?: Array<{
    blockType: string;
    locales?: Array<{
      locale: string;
      html?: string;
      title?: string;
      htmlContent?: string;
      media?: MediaImage;
    }>;
  }>;
}

const BuildSpacesSection = () => {
  const [data, setData] = useState<BuildSpacesData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = API_URL + "&timestamp=" + Date.now();
        const response = await fetch(apiUrl, { cache: "no-store" });

        if (response.ok) {
          const result = await response.json();
          console.log("✅ BuildSpaces API Response:", result);

          const doc = result?.doc ?? result?.docs?.[0] ?? result;

          // केवल mediaBlock से image
          const mediaBlock = doc.layout?.find(
            (block: any) => block.blockType === "mediaBlock"
          );
          const media = mediaBlock?.locales?.[0]?.media;

          if (media) {
            console.log("🖼 Media URL:", media.url);
          }

          setData({
            ...doc,
            image: media
              ? {
                  url: media.url,
                  alt: media.alt || "BuildSpaces Image",
                  width: media.width || 565,
                  height: media.height || 692,
                }
              : undefined,
          });
        } else {
          console.error("❌ API error:", response.status);
        }
      } catch (error) {
        console.error("❌ Error fetching BuildSpaces data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section style={{ background: "rgb(247, 245, 250)", padding: "64px 0" }}>
        <div className="container text-center text-white">
          <div className="d-flex align-items-center justify-content-center">
            <div
              className="spinner-border spinner-border-sm text-light me-2"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            <span>Wird geladen...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: "rgb(247, 245, 250)", padding: "64px 0" }}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            {/* label_text */}
            <div
              className="text-uppercase fw-bold mb-3"
              style={{ color: "rgb(92, 55, 125)", letterSpacing: 1 }}
            >
              {data?.label_text}
            </div>

            {/* title */}
            <h2
              className="fw-bold mb-4"
              style={{ color: "rgb(92, 55, 125)", fontSize: "2.8rem", lineHeight: 1.1 }}
            >
              {data?.title}
            </h2>

            {/* केवल mediaBlock image */}
            {data?.image && (
              <div className="build-portrait">
                <Image
                  src={data.image.url}
                  width={data.image.width || 580}
                  height={data.image.height || 250}
                  alt={data.image.alt || "Portrait"}
                  className="img-fluid build-portrait-img"
                />
              </div>
            )}
          </div>

          {/* content from layout[0].locales[0].html */}
          <div className="col-lg-6">
            {data?.layout?.[0]?.locales?.[0]?.html && (
              <div
                style={{ color: "#202020", fontSize: "1.15rem", maxWidth: 600 }}
                dangerouslySetInnerHTML={{
                  __html: data.layout[0].locales[0].html,
                }}
              />
            )}
          </div>
        </div>

        {/* extra htmlContent from layout[1].locales[0].htmlContent */}
        {data?.layout?.[1]?.locales?.[0]?.htmlContent && (
          <div
            className="mt-4 mb-3 text-center"
           
          >
            <div style={{ color: "#202020", fontSize: "1.15rem", background: "rgb(243, 239, 249)", padding: "30px 10px", borderRadius: "12px" }}>
            <div className=""  dangerouslySetInnerHTML={{
              __html: data.layout[1].locales[0].htmlContent,
            }}/>
            </div>
            </div>
        )}
      </div>
    </section>
  );
};

export default BuildSpacesSection;

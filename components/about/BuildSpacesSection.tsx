"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const API_URL =
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68c3f1f1bfc21719f3ab805a?depth=2&draft=false&locale=undefined&trash=false`;

interface BuildSpacesData {
  title?: string;
  label_text?: string;
  image?: {
    url: string;
    alt?: string;
  };
  layout?: Array<{
    blockType: string;
    locales?: Array<{
      locale: string;
      html?: string;
      title?: string;
      htmlContent?: string;
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
          setData(result);
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
      <section style={{ background: "#7a566b", padding: "64px 0" }}>
        <div className="container text-center text-white">Loading...</div>
      </section>
    );
  }

  return (
    <section style={{ background: "#7a566b", padding: "64px 0" }}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            {/* label_text */}
            <div
              className="text-uppercase fw-bold mb-3"
              style={{ color: "#fff", letterSpacing: 1 }}
            >
              {data?.label_text}
            </div>

            {/* title */}
            <h2
              className="fw-bold mb-4"
              style={{ color: "#fff", fontSize: "2.8rem", lineHeight: 1.1 }}
            >
              {data?.title}
            </h2>

            {/* image */}
            <div className="build-portrait">
              <Image
                src={data?.image?.url || "/images/image-15.jpg"}
                width={580}
                height={250}
                alt={data?.image?.alt || "Portrait"}
                className="img-fluid build-portrait-img"
              />
            </div>
          </div>

          {/* content from layout[0].locales[0].html */}
          <div className="col-lg-6">
            {data?.layout?.[0]?.locales?.[0]?.html && (
              <div
                style={{ color: "#e2dbe2", fontSize: "1.15rem", maxWidth: 600 }}
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
            dangerouslySetInnerHTML={{
              __html: data.layout[1].locales[0].htmlContent,
            }}
          />
        )}
      </div>
    </section>
  );
};

export default BuildSpacesSection;

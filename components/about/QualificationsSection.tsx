"use client";

import { useEffect, useState } from "react";

const API_URL =
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68c3fc53bfc21719f3ab8434?depth=2&draft=false&locale=undefined&trash=false`;

interface SectionBlock {
  blockType: string;
  locales?: Array<{
    locale: string;
    title?: string;
    htmlContent?: string;
  }>;
}

interface QualificationsData {
  title?: string;
  layout?: SectionBlock[];
}

const QualificationsSection = () => {
  const [data, setData] = useState<QualificationsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = API_URL + "&timestamp=" + Date.now();
        const response = await fetch(apiUrl, { cache: "no-store" });

        if (response.ok) {
          const result = await response.json();
          console.log("✅ Qualifications API Response:", result);
          setData(result);
        } else {
          console.error("❌ API error:", response.status);
        }
      } catch (error) {
        console.error("❌ Error fetching qualifications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container text-center mt-5 mb-5">
        <p>Loading qualifications...</p>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row mt-2 g-4">
        {/* Left Column = Qualifications */}
        <div className="col-lg-6 fade-in" style={{ animationDelay: "0.9s" }}>
          <div className="mb-4 p-4 rounded-4 text-dark bg-light h-100">
            <h4 className="fw-bold mb-3 text-primary">
              <span className="d-inline-flex gap-2 align-items-center">
               <span
                  style={{
                    background: "#5c377d",
                    color: "#fff",
                    borderRadius: "50%",
                    minWidth: "38px",
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
                </span><span> {data?.layout?.[0]?.locales?.[0]?.title}</span>
                </span>
            </h4>
            {data?.layout?.[0]?.locales?.[0]?.htmlContent && (
              <div
                dangerouslySetInnerHTML={{
                  __html: data.layout[0].locales[0].htmlContent,
                }}
              />
            )}
          </div>
        </div>

        {/* Right Column = Books */}
        <div className="col-lg-6">
          <div className="mb-4 p-4 rounded-4 text-dark bg-light h-100 fade-in">
            <h4 className="fw-bold mb-3 text-primary">
              <span className="d-inline-flex gap-2 align-items-center flex-wrap">
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
                </span><span>{data?.layout?.[1]?.locales?.[0]?.title}</span>  </span>
            </h4>
            {data?.layout?.[1]?.locales?.[0]?.htmlContent && (
              <div
                dangerouslySetInnerHTML={{
                  __html: data.layout[1].locales[0].htmlContent,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationsSection;

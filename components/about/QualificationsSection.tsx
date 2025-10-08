"use client";

import { useEffect, useState } from "react";

const API_URL =
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68db928a32bade52d81dfc3d?depth=2&draft=false&locale=undefined&trash=false`;

interface TextContentBlock {
  blockType: string;
  blockName: string;
  title?: string;
  description?: string;
  content?: string;
}

interface QualificationsData {
  title?: string;

  aboutSecFour?: TextContentBlock;
    aboutSecFive?: TextContentBlock;
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
          
          const doc = result?.doc ?? result?.docs?.[0] ?? result;
          
          // Find about-sec-three and about-sec-four from layout
          let aboutSecFive: TextContentBlock | undefined;
          let aboutSecFour: TextContentBlock | undefined;

          if (Array.isArray(doc.layout)) {
            for (const layoutBlock of doc.layout) {
              if (Array.isArray(layoutBlock.locales)) {
                for (const locale of layoutBlock.locales) {
                  if (Array.isArray(locale.content)) {
                    for (const contentBlock of locale.content) {
                      if (contentBlock.blockName === "about-sec-five") {
                        aboutSecFive = {
                          blockType: contentBlock.blockType,
                          blockName: contentBlock.blockName,
                          title: contentBlock.title,
                          description: contentBlock.description,
                          content: contentBlock.content,
                        };
                      } else if (contentBlock.blockName === "about-sec-four") {
                        aboutSecFour = {
                          blockType: contentBlock.blockType,
                          blockName: contentBlock.blockName,
                          title: contentBlock.title,
                          description: contentBlock.description,
                          content: contentBlock.content,
                        };
                      }
                    }
                  }
                }
              }
            }
          }

          setData({
            title: doc.title,
           
            aboutSecFour,
            aboutSecFive,
          });
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
      <section className="py-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-center py-5">
            <div className="spinner-border text-primary me-2" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <span>Lade Qualifikationen...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="container about-part-3 mt-5 mb-5">
      <div className="row mt-2 g-4">
        {/* Left Column = Qualifications (about-sec-three) */}
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
                </span><span> {data?.aboutSecFour?.title}</span>
                </span>
            </h4>
            {data?.aboutSecFour?.content && (
              <div
                dangerouslySetInnerHTML={{
                  __html: data.aboutSecFour.content,
                }}
              />
            )}
          </div>
        </div>

        {/* Right Column = Books (about-sec-four) */}
        <div className="col-lg-6">
          <div className="mb-4 p-4 rounded-4 text-dark bg-light h-100 fade-in">
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
                    className="bi bi-book"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </span>
                <span>{data?.aboutSecFive?.title}</span>  </span>
            </h4>
            {data?.aboutSecFive?.content && (
              <div
                dangerouslySetInnerHTML={{
                  __html: data.aboutSecFive.content,
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

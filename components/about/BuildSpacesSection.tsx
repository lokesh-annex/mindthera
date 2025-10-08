"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const API_URL =
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68db928a32bade52d81dfc3d?depth=2&draft=false&locale=undefined&trash=false`;

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

interface ContentShowcaseBlock {
  blockType: string;
  blockName: string;
  title?: string;
  description?: string;
  content?: string;
  image?: MediaImage;
}

interface TextContentBlock {
  blockType: string;
  blockName: string;
  title?: string;
  description?: string;
  content?: string;
}

interface BuildSpacesData {
  title?: string;
  label_text?: string;
  aboutSecTwo?: ContentShowcaseBlock;
  aboutSecThree?: TextContentBlock;
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
          console.log("✅ About API Response:", result);

          const doc = result?.doc ?? result?.docs?.[0] ?? result;

          // Find about-sec-two and about-sec-three from layout
          let aboutSecTwo: ContentShowcaseBlock | undefined;
          let aboutSecThree: TextContentBlock | undefined;

          if (Array.isArray(doc.layout)) {
            for (const layoutBlock of doc.layout) {
              if (Array.isArray(layoutBlock.locales)) {
                for (const locale of layoutBlock.locales) {
                  if (Array.isArray(locale.content)) {
                    for (const contentBlock of locale.content) {
                      if (contentBlock.blockName === "about-sec-two") {
                        aboutSecTwo = {
                          blockType: contentBlock.blockType,
                          blockName: contentBlock.blockName,
                          title: contentBlock.title,
                          description: contentBlock.description,
                          content: contentBlock.content,
                          image: contentBlock.image ? {
                            url: contentBlock.image.url,
                            alt: contentBlock.title || "About Section Two",
                            width: contentBlock.image.width || 576,
                            height: contentBlock.image.height || 330,
                          } : undefined,
                        };
                      } else if (contentBlock.blockName === "about-sec-three") {
                        aboutSecThree = {
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
            label_text: doc.label_text,
            aboutSecTwo,
            aboutSecThree,
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
    <section className="about_second" style={{ background: "rgb(247, 245, 250)", padding: "64px 0" }}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
       

          {/* content from about-sec-two */}
          <div className="col-lg-6">
            {data?.aboutSecTwo?.content && (
              <div
                style={{ color: "#202020", fontSize: "1.15rem", maxWidth: 600 }}
                dangerouslySetInnerHTML={{
                  __html: data.aboutSecTwo.content,
                }}
              />
            )}
          </div>
             <div className="col-lg-6 mb-4 mb-lg-0">
            {/* label_text */}
            <div
              className="text-uppercase fw-bold mb-3"
              style={{ color: "rgb(92, 55, 125)", letterSpacing: 1 }}
            >
             {data?.aboutSecTwo?.title}
            </div>

            {/* title from about-sec-two */}
            <h2
              className="fw-bold mb-4"
              style={{ color: "rgb(92, 55, 125)", fontSize: "2.8rem", lineHeight: 1.1 }}
            >
              {data?.aboutSecTwo?.description}
            </h2>

            {/* image from about-sec-two */}
            {data?.aboutSecTwo?.image && (
              <div className="build-portrait">
                <Image
                  src={data.aboutSecTwo.image.url}
                  width={data.aboutSecTwo.image.width || 580}
                  height={data.aboutSecTwo.image.height || 250}
                  alt={data.aboutSecTwo.image.alt || "Portrait"}
                  className="img-fluid build-portrait-img"
                />
              </div>
            )}
          </div>
        </div>

        {/* about-sec-three content */}
        {data?.aboutSecThree?.content && (
          <div
            className="mt-4 mb-3 text-center"
           
          >
            <div style={{ color: "#202020", fontSize: "1.15rem", background: "rgb(243, 239, 249)", padding: "30px 10px", borderRadius: "12px" }}>
            <div className=""  dangerouslySetInnerHTML={{
              __html: data.aboutSecThree.content,
            }}/>
            </div>
            </div>
        )}
      </div>
    </section>
  );
};

export default BuildSpacesSection;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const API_URL =
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68ba8bd18b6ef54bfa7a2c50?depth=2&draft=false&trash=false`;

const AboutUS = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch data");
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  const getImageUrl = (img: any) => {
    if (!img?.url) return "";
    if (img.url.startsWith("http")) return img.url;
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    return `${baseUrl}${img.url}`;
  };

  // Simpler list extraction: pull all <li>...</li> across richText
  const extractListItems = () => {
    const nodes = data.hero?.richText?.root?.children || [];
    const html = nodes
      .map((node: any) => (node.children || []).map((c: any) => c.text || "").join(""))
      .join("");
    const matches = html.match(/<li>(.*?)<\/li>/g) || [];
    return matches
      .map((m: string) => m.replace(/<li>|<\/li>/g, "").trim())
      .filter(Boolean);
  };

  const liItems = extractListItems();

  return (
    <section className="relative">
      <span className="absolute top-15 start-0">
        <Image
          src="/images/bg-2-copyright.webp"
          width={393}
          height={625}
          alt="Background Copyright"
          priority
        />
      </span>
      <div className="leaf-bg">
        <Image
          src="/images/misc/leaf-1.png"
          width={140}
          height={148}
          className="absolute top-10 end-10 anim-up-down sm-hide"
          alt="Leaf"
        />
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="row g-4 gx-5 align-items-center">
          {/* Left Column: Images */}
          <div className="col-lg-6">
            <div className="relative">
              <div className="row g-4 z-1000">
                <div className="col-6">
                  <div className="spacer-single sm-hide"></div>
                  {data.image1 && (
                    <Image
                      src={getImageUrl(data.image1)}
                      className="img-fluid rounded-10px mb-4 w-70 ms-30"
                      width={500}
                      height={500}
                      alt="Image 1"
                    />
                  )}
                  {data.image3 && (
                    <Image
                      src={getImageUrl(data.image3)}
                      className="img-fluid rounded-10px"
                      width={500}
                      height={500}
                      alt="Image 3"
                    />
                  )}
                </div>
                <div className="col-6">
                  {data.image2 && (
                    <Image
                      src={getImageUrl(data.image2)}
                      className="img-fluid rounded-10px mb-4"
                      width={500}
                      height={500}
                      alt="Image 2"
                    />
                  )}
                  {data.image4 && (
                    <Image
                      src={getImageUrl(data.image4)}
                      className="img-fluid rounded-10px w-70"
                      width={500}
                      height={500}
                      alt="Image 4"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="subtitle mb-3">{data?.label_text || ""}</div>
            <h2>{data.hero?.title || data.title}</h2>
            <p>{data.description}</p>

            <div className="row g-4">
              <div className="col-xl-12">
                {liItems.length > 0 && (
                  <ul className="ul-style-2 text-dark fw-600">
                    {liItems.map((item: any, idx: any) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="spacer-10"></div>
            <a className="btn-main" href="#">
              Bist du bereit?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUS;

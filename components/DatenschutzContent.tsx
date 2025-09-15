"use client";
import React, { useEffect, useState } from "react";

const API_URL =
  `${process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"}/api/pages/68c131b5cb79fffc279458d0?depth=2&draft=false&locale=undefined&trash=false`;

export default function DatenschutzPage() {
  const [htmlContent, setHtmlContent] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch(API_URL, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch Datenschutzerklärung");
        }

        const data = await res.json();

        // ✅ Title from API
        if (data.title) {
          setTitle(data.title);
        }

        // ✅ HTML from layout -> locales -> html
        if (
          data.layout &&
          data.layout.length > 0 &&
          data.layout[0].locales &&
          data.layout[0].locales.length > 0
        ) {
          setHtmlContent(data.layout[0].locales[0].html);
        }
      } catch (error: any) {
        console.error("Datenschutz API Error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return (
      <div className="container py-5">
        <div>Lade Datenschutzerklärung...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="text-danger">Error loading content: {error}</div>
      </div>
    );
  }

  return (
    <div className="container">
     

      {htmlContent ? (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      ) : (
        <div className="text-danger">Content not available.</div>
      )}
    </div>
  );
}

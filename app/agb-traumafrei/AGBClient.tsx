"use client";
import React, { useEffect, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68c15aedcb79fffc27945f95?depth=2&draft=false&locale=undefined&trash=false`;

interface ContentData {
  title?: string;
  htmlContent?: string;
}

export default function AGBClient() {
  const [content, setContent] = useState<ContentData>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch API data
  const fetchContent = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const res = await fetch(API_URL, { cache: "no-store" });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const json = await res.json();
      const doc = json?.doc ?? json?.docs?.[0] ?? json;
      
      if (!doc) {
        throw new Error("No document found in API response");
      }

      // Get title and HTML content from layout
      const processedContent: ContentData = {
        title: doc?.title ? String(doc.title) : undefined,
        htmlContent: doc?.layout?.[0]?.locales?.[0]?.html || "",
      };

      setContent(processedContent);
    } catch (err) {
      console.error("Error fetching content:", err);
      setError(err instanceof Error ? err.message : "Unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  // Loading state
  if (loading) {
    return (
      <>
        <Breadcrumbs
          title="AGB"
          items={[{ label: "Home", href: "/" }, { label: "AGB" }]}
        />
        <div className="container py-5">
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Error state
  if (error) {
    return (
      <>
        <Breadcrumbs
          title="AGB"
          items={[{ label: "Home", href: "/" }, { label: "AGB" }]}
        />
        <div className="container py-5">
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Fehler beim Laden</h4>
            <p>{error}</p>
            <button 
              className="btn btn-outline-danger btn-sm" 
              onClick={fetchContent}
            >
              Erneut versuchen
            </button>
          </div>
        </div>
      </>
    );
  }

  // Main content
  return (
    <>
      <Breadcrumbs
        title={content.title || "AGB"}
        items={[{ label: "Home", href: "/" }, { label: "AGB" }]}
      />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="p-4 p-md-5 d-flex flex-column static-page">
          <div className="mb-3" style={{ fontSize: '2.5rem', color: 'rgb(122, 86, 107)' }}>
                <i className="bi bi-file-earmark-text" aria-label="Terms and Conditions Icon"></i>
              </div>

            {/* HTML content from layout */}
            {content.htmlContent && (
              <div 
                className="mb-4 user-content"
                style={{ 
                  color: "#333", 
                  lineHeight: "1.6",
                  fontSize: "16px"
                }}
                dangerouslySetInnerHTML={{ __html: content.htmlContent }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
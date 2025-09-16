"use client";
import React, { useEffect, useState, useCallback } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

const API_URL =
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68c131b5cb79fffc279458d0?depth=2&draft=false&locale=undefined&trash=false`;

// Content type definition
interface ContentData {
  title?: string;
  bodyHtml?: string;
  htmlContent?: string[];
}

// Escape helper - optimized with regex caching
const escapeHtml = (s: string): string => {
  if (!s) return "";
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
};

// Convert Payload RichText → HTML - optimized with proper typing
const descriptionToHtml = (input: any): string => {
  if (!input) return "";
  if (typeof input === "string") return `<p>${escapeHtml(input)}</p>`;

  const root = input?.root || input;
  const nodes = Array.isArray(root?.children) ? root.children : [];

  const renderNode = (node: any): string => {
    if (!node) return "";

    const { type, children, tag, text, fields } = node;
    const childrenHtml = children?.map(renderNode).join("") || "";

    switch (type) {
      case "heading":
        const headingTag = tag || "h3";
        return `<${headingTag}>${childrenHtml}</${headingTag}>`;
      case "paragraph":
        return `<p>${childrenHtml}</p>`;
      case "text":
        return escapeHtml(text || "");
      case "link":
        const url = fields?.url || "#";
        const target = fields?.newTab ? "_blank" : "_self";
        return `<a href="${escapeHtml(url)}" target="${target}">${childrenHtml}</a>`;
      case "linebreak":
        return "<br/>";
      default:
        return childrenHtml;
    }
  };

  return nodes.map(renderNode).join("");
};

const Datenschutzbestimmung = () => {
  const [content, setContent] = useState<ContentData>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch API data with proper error handling
  const fetchContent = useCallback(async () => {
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

      const processedContent: ContentData = {
        title: doc?.title ? String(doc.title) : undefined,
      };

      // Process hero richText
      if (doc?.hero?.richText) {
        processedContent.bodyHtml = descriptionToHtml(doc.hero.richText);
      }

      // Process layout blocks efficiently
      if (Array.isArray(doc?.layout)) {
        processedContent.htmlContent = doc.layout
          .flatMap((block: any) => 
            block?.locales?.map((loc: any) => loc?.html || loc?.content || "") || []
          )
          .filter((html: string) => html.trim() !== "");
      }

      setContent(processedContent);
    } catch (err) {
      console.error("Error fetching content:", err);
      setError(err instanceof Error ? err.message : "Unknown error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  // Loading state
  if (loading) {
    return (
      <>
        <Breadcrumbs
          title="Datenschutzbestimmung"
          items={[
            { label: "Home", href: "/" },
            { label: "Datenschutzbestimmung" },
          ]}
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
          title="Datenschutzbestimmung"
          items={[
            { label: "Home", href: "/" },
            { label: "Datenschutzbestimmung" },
          ]}
        />
        <div className="container py-5">
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Error loading content</h4>
            <p>{error}</p>
            <button 
              className="btn btn-outline-danger" 
              onClick={fetchContent}
            >
              Try Again
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumbs
        title={content.title || "Datenschutzbestimmung"}
        items={[
          { label: "Home", href: "/" },
          { label: "Datenschutzbestimmung" },
        ]}
      />

      <div
        style={{
          background: "none",
          minHeight: "100vh",
          position: "relative",
          paddingTop: "40px",
        }}
      >
        <div className="container py-5">
          <div className="mx-auto" style={{ maxWidth: "100%" }}>
            <div className="p-4 p-md-5 d-flex flex-column static-page">
              <div className="mb-3" style={{ fontSize: "2.5rem", color: "rgb(122, 86, 107)" }}>
                <i className="bi bi-shield-lock" aria-label="Privacy Policy Icon"></i>
              </div>

             

              {/* Layout content - optimized rendering */}
              {content.htmlContent && content.htmlContent.length > 0 && (
                <div className="mb-4">
                  {content.htmlContent.map((htmlItem, index) => (
                    <div
                      key={`content-${index}`}
                      className="mb-3"
                      style={{ fontSize: "1.1rem", lineHeight: 1.7 }}
                      dangerouslySetInnerHTML={{ __html: htmlItem }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Datenschutzbestimmung;

"use client";
import React, { useEffect, useState, useCallback } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

const API_URL =
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68c406e4bfc21719f3ab8b7a?depth=2&draft=false&locale=undefined&trash=false`;

// Content type definition
interface ContentData {
  title?: string;
  bodyHtml?: string;
  htmlContent?: string[];
}

// Escape helper
const escapeHtml = (s: string): string => {
  if (!s) return "";
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
};

// Convert Payload RichText → HTML
const richTextToHtml = (input: any): string => {
  if (!input) return "";
  if (typeof input === "string") return `<p>${escapeHtml(input)}</p>`;

  const root = input?.root || input;
  const nodes = Array.isArray(root?.children) ? root.children : [];

  const renderNode = (node: any): string => {
    if (!node) return "";

    const { type, children, tag, text, fields, format } = node;
    const childrenHtml = children?.map(renderNode).join("") || "";

    // Text nodes with formatting
    if (typeof text === "string") {
      let formattedText = escapeHtml(text);
      if (format === 1) formattedText = `<strong>${formattedText}</strong>`; // bold
      if (format === 2) formattedText = `<em>${formattedText}</em>`; // italic
      if (format === 4) formattedText = `<u>${formattedText}</u>`; // underline
      return formattedText;
    }

    // Handle different node types
    switch (type) {
      case "heading":
        const headingTag = tag || "h3";
        return `<${headingTag}>${childrenHtml}</${headingTag}>`;
      case "paragraph":
        return `<p>${childrenHtml}</p>`;
      case "link":
        const url = fields?.url || "#";
        const target = fields?.newTab ? "_blank" : "_self";
        return `<a href="${escapeHtml(
          url
        )}" target="${target}" rel="noopener noreferrer" style="color:rgb(92,55,125)">${childrenHtml}</a>`;
      case "linebreak":
        return "<br/>";
      default:
        // Use tag if provided (ul, li, etc.)
        if (tag) {
          return `<${tag}>${childrenHtml}</${tag}>`;
        }
        return childrenHtml;
    }
  };

  return nodes.map(renderNode).join("");
};

export default function HarmonyumPage() {
  const [content, setContent] = useState<ContentData>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch API data
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

      // Process hero richText or description
      if (doc?.hero?.richText) {
        processedContent.bodyHtml = richTextToHtml(doc.hero.richText);
      } else if (doc?.description) {
        processedContent.bodyHtml = richTextToHtml(doc.description);
      }

      // Process layout blocks efficiently
      if (Array.isArray(doc?.layout)) {
        processedContent.htmlContent = doc.layout
          .flatMap(
            (block: any) =>
              block?.locales?.map((loc: any) => loc?.html || loc?.content || "") ||
              []
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
          title="Harmonyum"
          items={[{ label: "Home", href: "/" }, { label: "Harmonyum" }]}
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
          title="Harmonyum"
          items={[{ label: "Home", href: "/" }, { label: "Harmonyum" }]}
        />
        <div className="container py-5">
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Error loading content</h4>
            <p>{error}</p>
            <button className="btn btn-outline-danger" onClick={fetchContent}>
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
        title="Harmonyum"
        items={[{ label: "Home", href: "/" }, { label: "Harmonyum" }]}
      />
    
        


            

              {/* Body HTML if exists */}
              {content.bodyHtml && (
                <div
                  className="mb-4"
                  style={{ fontSize: "1.1rem", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: content.bodyHtml }}
                />
              )}

              {/* Layout content */}
              {content.htmlContent && content.htmlContent.length > 0 && (
                <>
                 <div className="" style={{ fontSize: '1.15rem', lineHeight: 1.7 }}>
                  {content.htmlContent.map((htmlItem, index) => (
                    <div
                      key={`content-${index}`}
                     
                     
                      dangerouslySetInnerHTML={{ __html: htmlItem }}
                    />
                  ))}
                   </div>
                </>
                
              )}
           
      
      
    
    </>
  );
}

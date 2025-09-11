"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

const API_URL =
  "http://localhost:3001/api/pages/68c131b5cb79fffc279458d0?depth=2&draft=false&locale=undefined&trash=false";

// Escape helper
const escapeHtml = (s: string) =>
  (s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Convert Payload RichText → HTML
const descriptionToHtml = (input: any): string => {
  if (!input) return "";
  if (typeof input === "string") return `<p>${escapeHtml(input)}</p>`;

  const root = input?.root || input;
  const nodes = Array.isArray(root?.children) ? root.children : [];

  const renderNode = (node: any): string => {
    if (!node) return "";

    // Text with formatting
    if (node.type === "text") {
      let text = escapeHtml(node.text || "");
      if (node.format === 1) text = `<strong>${text}</strong>`; // bold
      if (node.format === 2) text = `<em>${text}</em>`; // italic
      return text;
    }

    // Line break
    // if (node.type === "linebreak") return "<br />";

    // // Links
    // if (node.type === "link" || node.type === "autolink") {
    //   const url = node?.fields?.url || "#";
    //   const inner = (node.children || []).map(renderNode).join("");
    //   return `<a href="${escapeHtml(
    //     url
    //   )}" target="_blank" rel="noopener noreferrer" style="color:rgb(92,55,125)">${inner}</a>`;
    // }

    // // Paragraph
    // if (node.type === "paragraph") {
    //   const inner = (node.children || []).map(renderNode).join("");
    //   return inner ? `<p>${inner}</p>` : "";
    // }

    // // Headings
    // if (node.type === "heading") {
    //   const tag = node.tag || "h2";
    //   const inner = (node.children || []).map(renderNode).join("");
    //   return `<${tag}>${inner}</${tag}>`;
    // }

    // Default recursion
    if (Array.isArray(node.children)) {
      return node.children.map(renderNode).join("");
    }

    return "";
  };

  return nodes.map(renderNode).join("");
};

const Datenschutzbestimmung = () => {
  const [content, setContent] = useState<{ title?: string; bodyHtml?: string }>(
    {}
  );

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(API_URL, { cache: "no-store" });
        if (!res.ok) return;
        const json = await res.json();
        const doc = json?.doc ?? json?.docs?.[0] ?? json;
        if (!doc) return;

        const next: { title?: string; bodyHtml?: string } = {};
        next.title = doc?.title ? String(doc.title) : undefined;

        // ✅ Use hero.richText from API
        if (doc?.hero?.richText) {
          next.bodyHtml = descriptionToHtml(doc.hero.richText);
        } else if (doc?.description) {
          next.bodyHtml = descriptionToHtml(doc.description);
        }

        if (!cancelled) setContent(next);
      } catch {}
    })();
    return () => {
      cancelled = true;
    };
  }, []);

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
              {/* API content */}
              {content.bodyHtml && (
                <div
                  className="mb-4"
                  style={{ fontSize: "1.1rem", lineHeight: 1.7 }}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: content.bodyHtml }}
                  />
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

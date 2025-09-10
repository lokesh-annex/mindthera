
"use client"
import React, { useEffect, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

const API_URL = "http://localhost:3001/api/pages/68c15aedcb79fffc27945f95?depth=2&draft=false&locale=undefined&trash=false";

const escapeHtml = (s: string) => (s || "")
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#39;");

const descriptionToHtml = (input: any): string => {
  if (!input) return "";
  if (typeof input === "string") return `<p>${escapeHtml(input)}</p>`;
  const root = input?.root || input;
  const children = Array.isArray(root?.children) ? root.children : [];
  return children.map((p: any) => {
    if (!Array.isArray(p?.children)) return "";
    const t = p.children.map((c: any) => c?.type === 'linebreak' ? '<br />' : escapeHtml(c?.text || '')).join("");
    return t ? `<p>${t}</p>` : "";
  }).join("");
};

export default function AgbTraumafreiPage() {
  const [content, setContent] = useState<{ title?: string; bodyHtml?: string }>({});

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(API_URL, { cache: 'no-store' });
        if (!res.ok) return;
        const json = await res.json();
        const doc = json?.doc ?? json?.docs?.[0] ?? json;
        if (!doc) return;
        const next: { title?: string; bodyHtml?: string } = {};
        next.title = doc?.title ? String(doc.title) : undefined;
        if (doc?.description) next.bodyHtml = descriptionToHtml(doc.description);
        if (!cancelled) setContent(next);
        if (doc?.hero?.richText) {
  next.bodyHtml = richTextToHtml(doc.hero.richText);
} else if (doc?.description) {
  next.bodyHtml = richTextToHtml(doc.description);
}
      } catch {}
    })();
    return () => { cancelled = true; };
  }, []);
const richTextToHtml = (input: any): string => {
  if (!input) return "";
  const root = input?.root || input;
  const nodes = Array.isArray(root?.children) ? root.children : [];

  const renderNode = (node: any): string => {
    if (!node) return "";

    // Text nodes
    if (typeof node.text === "string") {
      let text = node.text;
      if (node.format === 1) text = `<strong>${text}</strong>`; // bold
      if (node.format === 2) text = `<em>${text}</em>`; // italic
      if (node.format === 4) text = `<u>${text}</u>`; // underline
      return text;
    }

    // Children nodes
    if (Array.isArray(node.children)) {
      const inner = node.children.map(renderNode).join("");

      // Use tag if provided (p, h1, h2, ul, li, etc.)
      if (node.tag) {
        return `<${node.tag}>${inner}</${node.tag}>`;
      }

      // Links
      if (node.fields?.url) {
        return `<a href="${node.fields.url}" target="_blank" rel="noopener noreferrer" style="color:rgb(92,55,125)">${inner}</a>`;
      }

      return inner;
    }

    return "";
  };

  return nodes.map(renderNode).join("");
};

  return (
    <>
      <Breadcrumbs
        title={content.title || "AGB"}
        items={[{ label: "Home", href: "/" }, { label: "AGB" }]}
      />
      <div style={{
        background: 'none',
        minHeight: '100vh',
        position: 'relative',
        paddingTop: '40px',
      }}>
        <div className="container py-5">
          <div className="mx-auto" style={{ maxWidth: '100%' }}>
            <div className="p-4 p-md-5 d-flex flex-column">
              {/* API content if available */}
              {content.bodyHtml && (
                <div className="mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                  <div dangerouslySetInnerHTML={{ __html: content.bodyHtml }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

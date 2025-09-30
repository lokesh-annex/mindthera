"use client";
import { useState, useEffect } from 'react';
import Breadcrumbs from "@/components/Breadcrumbs";

interface ContentData {
  title?: string;
  htmlContent?: string;
}

export default function AGBClient() {
  const [content, setContent] = useState<ContentData>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContent = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      const response = await fetch(`${baseUrl}/api/pages/68c3b715d8f4df9f964d3f70?depth=2&draft=false&locale=undefined&trash=false`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      const doc = data?.doc ?? data?.docs?.[0] ?? data;
      
      // Get title and HTML content from layout
      const processedContent: ContentData = {
        title: doc?.title ? String(doc.title) : undefined,
        htmlContent: doc?.layout?.[0]?.locales?.[0]?.html || "",
      };

      setContent(processedContent);
    } catch (err) {
      console.error('Error fetching AGB content:', err);
      setError(err instanceof Error ? err.message : 'Failed to load content');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

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
            <p className="mt-3 text-muted">Inhalt wird geladen...</p>
          </div>
        </div>
      </>
    );
  }

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

  return (
    <>
      <Breadcrumbs
        title={content?.title || "AGB"}
        items={[{ label: "Home", href: "/" }, { label: "AGB" }]}
      />
      <div className="container py-5">
        <div className="mx-auto">
          <div className="p-4 static-page p-md-5 d-flex flex-column">
          <div className="mb-3" style={{ fontSize: '2.5rem', color: '#7a566b' }}>
            <i className="bi bi-shield-exclamation"></i>
          </div>


            {/* HTML content from layout */}
            {content.htmlContent && (
              <div 
                className="mb-5 user-content"
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
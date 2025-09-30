"use client";
import { useState, useEffect } from 'react';
import Breadcrumbs from "@/components/Breadcrumbs";

interface ContentData {
  title?: string;
  htmlContent?: string;
}

export default function DisclaimerClient() {
  const [content, setContent] = useState<ContentData>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContent = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68c3b30fd8f4df9f964d3d45?depth=2&draft=false&locale=undefined&trash=false`);

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
      console.error('Error fetching disclaimer content:', err);
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
          title="Disclaimer"
          items={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]}
        />
        <div style={{
          background: 'none',
          minHeight: '100vh',
          position: 'relative',
          paddingTop: '40px',
        }}>
          <div className="container py-5">
            <div className="mx-auto" style={{ maxWidth: '100%' }}>
              <div className="p-4 p-md-5 d-flex flex-column justify-content-center align-items-center" style={{ background: '#fff', width: '100%', minHeight: '200px' }}>
                <div className="spinner-border text-primary mb-3" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="text-muted">Inhalt wird geladen...</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Breadcrumbs
          title="Disclaimer"
          items={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]}
        />
        <div style={{
          background: 'none',
          minHeight: '100vh',
          position: 'relative',
          paddingTop: '40px',
        }}>
          <div className="container py-5">
            <div className="mx-auto" style={{ maxWidth: '100%' }}>
              <div className="p-4 p-md-5 d-flex flex-column justify-content-center align-items-center" style={{ background: '#fff', width: '100%', minHeight: '200px' }}>
                <div className="mb-3" style={{ fontSize: '2.5rem', color: '#dc3545' }}>
                  <i className="bi bi-exclamation-triangle"></i>
                </div>
                <h3 className="h5 mb-3 text-danger">Fehler beim Laden</h3>
                <p className="text-muted mb-3 text-center">
                  Der Inhalt konnte nicht geladen werden: {error}
                </p>
                <button 
                  className="btn btn-primary"
                  onClick={fetchContent}
                  disabled={loading}
                >
                  {loading ? 'Wird geladen...' : 'Erneut versuchen'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumbs
        title={content?.title || "Disclaimer"}
        items={[{ label: "Home", href: "/" }, { label: content?.title || "Disclaimer" }]}
      />
      <div style={{
        background: 'none',
        minHeight: '100vh',
        position: 'relative',
        paddingTop: '40px',
      }}>
        <div className="container py-5">
          <div className="mx-auto" style={{ maxWidth: '100%' }}>
            <div className="p-4 p-md-5 d-flex flex-column static-page" style={{ background: '#fff', width: '100%' }}>
              <div className="mb-3" style={{ fontSize: '2.5rem', color: '#7a566b' }}>
                <i className="bi bi-shield-exclamation"></i>
              </div>
              
              {/* HTML content from layout */}
              {content.htmlContent && (
                <div 
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
      </div>
    </>
  );
}
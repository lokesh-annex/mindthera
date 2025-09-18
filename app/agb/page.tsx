"use client";
import { useState, useEffect, useCallback } from 'react';
import Breadcrumbs from "@/components/Breadcrumbs";

interface ContentData {
  id: string;
  title: string;
  slug: string;
  layout: Array<{
    blockType: string;
    locales: Array<{
      locale: string;
      html: string;
      id: string;
    }>;
    id: string;
  }>;
}

export default function AgbImpressumPage() {
  const [contentData, setContentData] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContent = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      const response = await fetch(`${baseUrl}/api/pages/68c3b715d8f4df9f964d3f70?depth=2&draft=false&locale=undefined&trash=false`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setContentData(data);
    } catch (err) {
      console.error('Error fetching AGB content:', err);
      setError(err instanceof Error ? err.message : 'Failed to load content');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  const renderContent = () => {
    if (!contentData?.layout) {
      return null;
    }

    // Use only the first content block
    const firstContentBlock = contentData.layout.find(block => block.blockType === 'content');
    if (!firstContentBlock) {
      return null;
    }

    const deLocale = firstContentBlock.locales?.find(locale => locale.locale === 'de');
    if (!deLocale?.html) {
      return null;
    }

    return (
      <div className="mx-auto" style={{ maxWidth: '100%' }}>
        <div className="p-4 static-page p-md-5 d-flex flex-column" style={{ background: '#fff', width: '100%' }}>
          <div className="mb-3" style={{ fontSize: '2.5rem', color: '#7a566b' }}>
            <i className="bi bi-file-earmark-text"></i>
          </div>
          <div 
            dangerouslySetInnerHTML={{ 
              __html: deLocale.html 
            }} 
          />
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <>
        <Breadcrumbs
          title="Impressum"
          items={[{ label: "Home", href: "/" }, { label: "Impressum" }]}
        />
        <div style={{
          background: 'none',
          minHeight: '100vh',
          position: 'relative',
          paddingTop: '40px',
        }}>
          {/* Decorative top shape */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '80px',
            background: 'url(/images/bg-2-copyright.png) repeat-x',
            opacity: 0.12,
            zIndex: 1,
          }} />
          <div className="container py-5">
            <div className="mx-auto" style={{ maxWidth: '100%' }}>
              <div className="p-4 p-md-5  static-page d-flex flex-column justify-content-center align-items-center" style={{ background: '#fff', width: '100%', minHeight: '200px' }}>
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




  return (
    <>
      <Breadcrumbs
        title={contentData?.title || "Impressum"}
        items={[{ label: "Home", href: "/" }, { label: contentData?.title || "Impressum" }]}
      />
      <div style={{
        background: 'none',
        minHeight: '100vh',
        position: 'relative',
        paddingTop: '40px',
      }}>
        {/* Decorative top shape */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '80px',
          background: 'url(/images/bg-2-copyright.png) repeat-x',
          opacity: 0.12,
          zIndex: 1,
        }} />
        <div className="container py-5">
          {renderContent()}
        </div>
      </div>
    </>
  );
}

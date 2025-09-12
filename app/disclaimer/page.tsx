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

export default function DisclaimerPage() {
  const [contentData, setContentData] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Enhanced rich text to HTML converter
  const richTextToHtml = useCallback((content: any): string => {
    if (typeof content === 'string') {
      return content;
    }
    
    if (!content || !Array.isArray(content)) {
      return '';
    }

    return content.map((node: any) => {
      if (!node) return '';
      
      if (typeof node === 'string') {
        return node;
      }

      if (node.type === 'paragraph') {
        const text = node.children?.map((child: any) => 
          typeof child === 'string' ? child : child.text || ''
        ).join('') || '';
        return `<p>${text}</p>`;
      }

      if (node.type === 'heading') {
        const level = node.level || 2;
        const text = node.children?.map((child: any) => 
          typeof child === 'string' ? child : child.text || ''
        ).join('') || '';
        return `<h${level}>${text}</h${level}>`;
      }

      if (node.children && Array.isArray(node.children)) {
        return richTextToHtml(node.children);
      }

      return node.text || '';
    }).join('');
  }, []);

  const fetchContent = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('http://localhost:3001/api/pages/68c3b30fd8f4df9f964d3d45?depth=2&draft=false&locale=undefined&trash=false');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setContentData(data);
    } catch (err) {
      console.error('Error fetching disclaimer content:', err);
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

    return (
      <div className="mx-auto" style={{ maxWidth: '100%' }}>
        <div className="p-4 p-md-5 d-flex flex-column" style={{ background: '#fff', width: '100%' }}>
          <div className="mb-3" style={{ fontSize: '2.5rem', color: '#7a566b' }}>
            <i className="bi bi-shield-exclamation"></i>
          </div>
          {contentData.layout.map((block, blockIndex) => {
            if (block.blockType === 'content') {
              const deLocale = block.locales?.find(locale => locale.locale === 'de');
              if (deLocale?.html) {
                return (
                  <div 
                    key={block.id || blockIndex}
                    dangerouslySetInnerHTML={{ 
                      __html: deLocale.html 
                    }} 
                  />
                );
              }
            }
            return null;
          })}
        </div>
      </div>
    );
  };

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
        title={contentData?.title || "Disclaimer"}
        items={[{ label: "Home", href: "/" }, { label: contentData?.title || "Disclaimer" }]}
      />
      <div style={{
        background: 'none',
        minHeight: '100vh',
        position: 'relative',
        paddingTop: '40px',
      }}>
        <div className="container py-5">
          
            {renderContent()}
         
        </div>
      </div>
    </>
  );
}

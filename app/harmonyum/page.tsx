"use client";
import Breadcrumbs from "@/components/Breadcrumbs";
import React, { useEffect, useState } from "react";

interface PageData {
  title?: string;
  layout?: Array<{
    blockType: string;
    locales?: Array<{
      locale: string;
      html?: string;
    }>;
  }>;
  [key: string]: any;
}

export default function HarmonyumPage() {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const timestamp = Date.now();
        const apiUrl = `http://localhost:3001/api/pages/68c406e4bfc21719f3ab8b7a?depth=2&draft=false&locale=de&trash=false&timestamp=${timestamp}`;
        
        const response = await fetch(apiUrl, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: PageData = await response.json();
        console.log("Harmonyum API Response:", data);
        setPageData(data);

        // Process the layout to get HTML content
        if (data.layout) {
          const allHtml = data.layout.flatMap(block => 
            block.locales ? block.locales.map(locale => locale.html || '') : []
          ).join('');
          setHtmlContent(allHtml);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
        setError(errorMessage);
        console.error("Error fetching Harmonyum data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="container">
        <div className="alert alert-danger mt-5" role="alert">
          Error loading page: {error}
        </div>
      </div>
    );
  }

  return (
    <>
      <Breadcrumbs
        title={pageData?.title || "Harmonyum"}
        items={[{ label: "Home", href: "/" }, { label: "Harmonyum" }]}
      />
      
      {/* Render the HTML content from the layout */}
      {htmlContent && (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      )}
    </>
  );
}
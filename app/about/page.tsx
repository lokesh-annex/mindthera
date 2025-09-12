"use client";
import { useState, useEffect, useCallback } from 'react';
import Breadcrumbs from "@/components/Breadcrumbs";
import WorkSection from "@/components/about/WorkSection";
import BuildSpacesSection from "@/components/about/BuildSpacesSection";
import QualificationsSection from "@/components/about/QualificationsSection";

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

const AboutUS = () => {
  const [contentData, setContentData] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContent = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('http://localhost:3001/api/pages/68bec51e2880ed52c0efdf22?depth=2&draft=false&trash=false');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setContentData(data);
    } catch (err) {
      console.error('Error fetching about content:', err);
      setError(err instanceof Error ? err.message : 'Failed to load content');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  return (
    <>
      <Breadcrumbs
        title={contentData?.title || "Über mich"}
        items={[{ label: "Home", href: "/" }, { label: contentData?.title || "Über mich" }]}
      />
      
      {/* Section 1: API Content */}
      <WorkSection 
        apiData={contentData} 
        loading={loading} 
        error={error} 
      />
      
      {/* Section 2: Build Spaces */}
      <BuildSpacesSection />
      
      {/* Section 3: Qualifications */}
      <QualificationsSection />
    </>
  );
};

export default AboutUS;

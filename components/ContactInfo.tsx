"use client";
import React, { useState, useEffect, useCallback } from "react";

// API endpoints
const FOOTER_API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/globals/footer?depth=2&draft=false&locale=undefined&trash=false`;
const PAGE_API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68d635db4692d950d52c516a?depth=2&draft=false&locale=undefined&trash=false`;

// TypeScript interfaces
interface ContactData {
  showContact?: boolean;
  contactHeading?: string;
  email?: string;
  phone?: string;
  socialMedia?: Array<{
    platform: string;
    url: string;
    id: string;
  }>;
}

interface FooterData {
  contact?: ContactData;
}

interface PageLocale {
  locale: string;
  title?: string;
  content?: Array<{
    blockType: string;
    content?: string;
    id: string;
  }>;
  id: string;
}

interface PageLayout {
  blockType: string;
  locales?: PageLocale[];
  id: string;
}

interface PageData {
  layout?: PageLayout[];
  title?: string;
}

const ContactInfo = () => {
  const [footerData, setFooterData] = useState<FooterData | null>(null);
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      
      // Fetch footer data
      const footerRes = await fetch(FOOTER_API_URL, { cache: "no-store" });
      if (footerRes.ok) {
        const footerJson = await footerRes.json();
        const footerDoc = footerJson?.doc ?? footerJson;
        setFooterData(footerDoc);
      }
      
      // Fetch page data
      const pageRes = await fetch(PAGE_API_URL, { cache: "no-store" });
      if (pageRes.ok) {
        const pageJson = await pageRes.json();
        const pageDoc = pageJson?.doc ?? pageJson;
        setPageData(pageDoc);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="col-lg-6">
      <div className="subtitle fadeInUp mb-3">Kontakt</div>
      <h2 className="fadeInUp">
        {loading ? "Loading..." : (pageData?.layout?.[0]?.locales?.[0]?.title)}
      </h2>
      <div className="text-dark">
        {loading ? (
          <p>Loading...</p>
        ) : (
          pageData?.layout?.[0]?.locales?.[0]?.content?.[0]?.content ? (
            <div dangerouslySetInnerHTML={{ 
              __html: pageData.layout[0].locales[0].content[0].content 
            }} />
          ) : (
            <>
             
            </>
          )
        )}
      </div>
      <div className="contact-info-divider">
      <div className="row">
        <div className="col-lg-12">
          <div className="fw-bold text-dark mt-2">
            <i className="bi bi-envelope-fill me-2" style={{ color: 'rgb(45, 26, 58)' }}></i>
            Schicke Deine Nachricht
          </div>
          {loading ? "Loading..." : (
            <a href={`mailto:${footerData?.contact?.email}`} className="text-decoration-none">
              {footerData?.contact?.email}
            </a>
          )}

          <div className="fw-bold text-dark mt-2">
            <i className="bi bi-telephone-fill me-2" style={{ color: 'rgb(45, 26, 58)' }}></i>
            Ruf uns an
          </div>
          {loading ? "Loading..." : (
            <a href={`tel:${footerData?.contact?.phone}`} className="text-decoration-none">
              {footerData?.contact?.phone}
            </a>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
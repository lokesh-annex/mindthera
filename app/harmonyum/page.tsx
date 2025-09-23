"use client";
import React, { useEffect, useState, useCallback } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";

// API endpoint
const API_URL =
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68c406e4bfc21719f3ab8b7a?depth=2&draft=false&locale=undefined&trash=false`;

// TypeScript interfaces
interface ImageData {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  thumbnailURL?: string;
}

interface ContentShowcaseBlock {
  id: string;
  blockType: "contentShowcase";
  title: string;
  description?: string;
  content?: {
    paragraph?: string;
  };
  image?: ImageData;
  buttons?: Array<{
    label: string;
    url: string;
    openInNewTab?: boolean;
  }>;
}

interface TextContentBlock {
  id: string;
  blockType: "textContent";
  title: string;
  description?: string;
  content?: {
    paragraph?: string;
  };
  button?: {
    showButton: boolean;
    label?: string;
    link?: {
      type: string;
      url?: string;
      newTab?: boolean;
    };
  };
}

type LayoutBlock = ContentShowcaseBlock | TextContentBlock;

export default function HarmonyumPage() {
  const [layoutBlocks, setLayoutBlocks] = useState<LayoutBlock[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchContent = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL, { cache: "no-store" });
      if (!res.ok) return;
      const json = await res.json();
      const doc = json?.doc ?? json;
      
      // Get layout blocks from API
      setLayoutBlocks(doc.layout || []);
    } catch (err) {
      console.error('Error fetching content:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  // Helper function to get image URL
  const getImageUrl = (image?: ImageData) => {
    return image?.url || '/images/placeholder.jpg';
  };

  // Render component functions
  const renderHeroSection = (block: ContentShowcaseBlock) => (
    <section 
      key={block.id}
      className="container-fluid py-8 position-relative harmonyum-hero-section"
      style={{
        backgroundImage: `url(${getImageUrl(block.image)})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        minHeight: "600px",
        overflow: "hidden",
      }}
    >
      <div className="harmonyum-hero-overlay"></div>
      <div
        className="row justify-content-center align-items-center"
        style={{ minHeight: "400px", marginTop: "4rem", zIndex: 2, position: "relative" }}
      >
        <div className="col-md-6 animated fadeInUp"></div>
        <div className="col-md-6 animated fadeInUp">
          <div className="px-4">
            <h1 className="display-4 fw-bold harmonyum-title mb-3 animated-text-gradient">
              {block.title}
            </h1>
            {block.description && (
              <p className="lead dark-color alt-font id-color-2">{block.description}</p>
            )}
            {block.content?.paragraph && (
              <div
                className="mb-0 dark-color harmonyum-hero-desc"
                dangerouslySetInnerHTML={{ __html: block.content.paragraph }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );

  const renderContentShowcase = (block: ContentShowcaseBlock) => {
    // Special handling for different sections
    if (block.title.includes("Anwendungsbereiche")) {
      return (
        <section key={block.id} className="py-6 application-areas position-relative pb-5 two-sec">
          <span className="position-absolute top-20 start-0">
            <Image
              src="/images/bg-2-copyright.webp"
              width={343}
              height={635}
              alt="Background Copyright"
            />
          </span>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div className="p-3 bg-white" style={{ position: "relative" }}>
                  <h2 className="fw-bold mb-4" style={{ color: "#000", fontSize: "2.2rem", letterSpacing: "1px" }}>
                    {block.title}
                  </h2>
                  {block.content?.paragraph && (
                    <div
                      className="mb-3 dark-color"
                      style={{ fontSize: "1.14rem" }}
                      dangerouslySetInnerHTML={{ __html: block.content.paragraph }}
                    />
                  )}
                </div>
              </div>
              {block.image && (
                <div className="col-lg-5 col-md-5">
                  <div className="p-1 mt-2" style={{ background: "#fff", display: "inline-block", overflow: "hidden" }}>
                    <Image
                      src={getImageUrl(block.image)}
                      alt={block.title}
                      width={370}
                      height={320}
                      className="img-fluid rounded"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      );
    }

    if (block.title.includes("Warum bleibt Trauma")) {
      return (
        <section key={block.id} className="py-4 why-does-trauma position-relative">
          <span className="position-absolute top-20 end-0">
            <Image
              src="/images/bg-2-copyright-right.webp"
              width={343}
              height={635}
              alt="Background Copyright"
            />
          </span>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4 text-center">
                {block.image && (
                  <Image
                    src={getImageUrl(block.image)}
                    alt={block.title}
                    width={300}
                    height={300}
                    className="img-fluid"
                    style={{ background: "#fff" }}
                  />
                )}
              </div>
              <div className="col-md-8">
                <h2 className="fw-bold mb-3" style={{ fontSize: "2.2rem" }}>
                  {block.title}
                </h2>
                {block.description && (
                  <p className="dark-color" style={{ fontSize: "1.14rem" }}>
                    {block.description}
                  </p>
                )}
                {block.content?.paragraph && (
                  <div 
                    className="mb-3 dark-color" 
                    style={{ fontSize: "1.14rem" }}
                    dangerouslySetInnerHTML={{ __html: block.content.paragraph }}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      );
    }

    // Special handling for baby section
    if (block.title.includes("Sanfte Hilfe für dein Baby")) {
      return (
        <section key={block.id} className="pt-8 babyflyer-sec bg-light position-relative">
          <span className="d-none d-lg-block position-absolute top-0 end-0">
            <Image
              src="/images/bg-2-copyright-right.webp"
              width={393}
              height={625}
              alt="Background Copyright"
            />
          </span>

          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="row">
              <div className="col-sm-4">
                {block.image && (
                  <Image
                    src={getImageUrl(block.image)}
                    alt={block.title}
                    width={370}
                    height={400}
                    className="rounded mb-3 shadow-sm w-100"
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
              <div className="col-sm-8">
                <p className="mb-2 mt-2" style={{ fontSize: "1.95rem", fontWeight: 600 }}>
                  <span style={{ color: "#5c377d", fontWeight: 700 }}>
                    {block.title}
                  </span>
                </p>
                {block.description && (
                  <p className="mb-2 mt-2" style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                    <span style={{ color: "#333" }}>
                      {block.description}
                    </span>
                  </p>
                )}
                
                {/* Parse and display the content as list items */}
                {block.content?.paragraph && (
                  <div 
                    className="list-unstyled mb-3"
                    style={{ fontSize: "1.13rem", color: "#333", lineHeight: "1.7" }}
                    dangerouslySetInnerHTML={{ __html: block.content.paragraph }}
                  />
                )}

               
              

                <div className="d-flex mt-3">
                  {block.buttons && block.buttons.length > 0 && block.buttons.map((button, idx) => (
                    <a
                      key={idx}
                      href={button.url}
                      className="btn btn-main px-4 py-2 fw-bold"
                      style={{
                        fontSize: "1.1rem",
                        background: "#5c377d",
                        color: "#fff",
                        borderRadius: "2rem",
                        boxShadow: "0 2px 8px rgba(92,55,125,0.08)"
                      }}
                      target={button.openInNewTab ? "_blank" : undefined}
                      rel={button.openInNewTab ? "noopener noreferrer" : undefined}
                    >
                      {button.label}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Render Ein guter Start ins Leben block if it exists */}
              {(() => {
                const einGuterStartBlock = layoutBlocks.find(b => 
                  b.title && b.title.includes("Ein guter Start ins Leben")
                );
                
                if (!einGuterStartBlock) return null;
                
                return (
                  <div className="col-lg-12 mt-5">
                    <div className="px-0 py-3">
                      <h2
                        className="fw-bold mb-3"
                        style={{ color: "#5c377d", fontSize: "2rem" }}
                      >
                        {einGuterStartBlock.title}
                      </h2>
                      {einGuterStartBlock.description && (
                        <h5 className="mt-3 mb-3" style={{ color: "#333" }}>
                          {einGuterStartBlock.description}
                        </h5>
                      )}
                      
                      {/* Render content from API */}
                      {einGuterStartBlock.content && (
                        <div 
                          className="mb-3"
                          style={{ fontSize: "1.15rem", color: "#202020", lineHeight: "1.7" }}
                          dangerouslySetInnerHTML={{ __html: einGuterStartBlock.content }}
                        />
                      )}
                      
                      <div className="d-flex mt-4">
                        {/* Handle different button types for einGuterStartBlock */}
                        {einGuterStartBlock.blockType === 'contentShowcase' && 
                         (einGuterStartBlock as ContentShowcaseBlock).buttons && 
                         (einGuterStartBlock as ContentShowcaseBlock).buttons!.map((button, idx) => (
                          <a
                            key={idx}
                            href={button.url}
                            className="btn btn-main px-4 py-2 fw-bold"
                            style={{
                              fontSize: "1.1rem",
                              background: "#5c377d",
                              color: "#fff",
                              borderRadius: "2rem",
                              boxShadow: "0 2px 8px rgba(92,55,125,0.08)"
                            }}
                            target={button.openInNewTab ? "_blank" : undefined}
                            rel={button.openInNewTab ? "noopener noreferrer" : undefined}
                            download={button.url.includes('.pdf') ? true : undefined}
                          >
                            {button.label}
                          </a>
                        ))}
                        
                        {einGuterStartBlock.blockType === 'textContent' && 
                         (einGuterStartBlock as TextContentBlock).button?.showButton && 
                         (einGuterStartBlock as TextContentBlock).button!.link && (
                          <a
                            href={(einGuterStartBlock as TextContentBlock).button!.link!.url}
                            className="btn btn-main px-4 py-2 fw-bold"
                            style={{
                              fontSize: "1.1rem",
                              background: "#5c377d",
                              color: "#fff",
                              borderRadius: "2rem",
                              boxShadow: "0 2px 8px rgba(92,55,125,0.08)"
                            }}
                            target={(einGuterStartBlock as TextContentBlock).button!.link!.newTab ? "_blank" : undefined}
                            rel={(einGuterStartBlock as TextContentBlock).button!.link!.newTab ? "noopener noreferrer" : undefined}
                            download={(einGuterStartBlock as TextContentBlock).button!.link!.url?.includes('.pdf') ? true : undefined}
                          >
                            {(einGuterStartBlock as TextContentBlock).button!.label}
                          </a>
                        )}
                      </div>
                     
                      
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </section>
      );
    }

    // Special handling for Kontakt & Buchung section
    if (block.title.includes("Kontakt & Buchung")) {
      return (
        <section key={block.id} className="pt-7 kontakt-buchung position-relative">
          <span className="d-lg-block position-absolute top-10 start-0">
            <Image
              src="/images/bg-2-copyright.webp"
              width={293}
              height={485}
              alt="Background Copyright"
            />
          </span>
          <div className="container">
            <div className="row">
              <div className="contact-booking rounded-4">
                <div className="row align-items-center justify-content-center">
                  <div className="col-sm-7">
                    <h2 className="fw-bold mb-3 fs-36 fs-xs-24" style={{ color: "#5c377d" }}>
                      {block.title}
                    </h2>
                  
                    {block.content?.paragraph && (
                      <div
                        className="mb-3"
                        style={{ fontSize: "1.15rem", color: "#333", fontWeight: 500 }}
                        dangerouslySetInnerHTML={{ __html: block.content.paragraph }}
                      />
                    )}
                    <div className="d-flex flex-column flex-md-row gap-3 mt-4">
                      {block.buttons && block.buttons.length > 0 && block.buttons.map((button, idx) => (
                        <a
                          key={idx}
                          href={button.url}
                          className="btn btn-main"
                          target={button.openInNewTab ? "_blank" : undefined}
                          rel={button.openInNewTab ? "noopener noreferrer" : undefined}
                          download={button.url.includes('.pdf') ? true : undefined}
                        >
                          {button.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="image-container-sec rounded-4">
                      {block.image && (
                        <Image
                          src={getImageUrl(block.image)}
                          alt={block.title}
                          width={410}
                          height={120}
                          className="img-fluid w-100"
                          style={{ borderRadius: "12px", objectFit: "cover" }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    // Special handling for HTR Zertifikat section
    if (block.title.includes("HTR Zertifikat")) {
      return (
        <section key={block.id} className="pt-8 bg-light position-relative">
          <span className="d-none d-lg-block position-absolute top-10 end-0">
            <Image
              src="/images/bg-2-copyright-right.webp"
              width={343}
              height={555}
              alt="Background Copyright"
            />
          </span>
          <div className="certificate-box text-center rounded-4">
            <h2 className="fw-bold mb-3 fs-36 fs-xs-24">
              {block.title}
            </h2>
            {block.description && (
              <p
                className="mb-5"
                style={{ fontSize: "1.15rem", color: "#333", fontWeight: 500 }}
              >
                {block.description}
              </p>
            )}
            {block.content?.paragraph && (
              <div
                className="mb-5"
                style={{ fontSize: "1.15rem", color: "#333", fontWeight: 500 }}
                dangerouslySetInnerHTML={{ __html: block.content.paragraph }}
              />
            )}
            {block.image && (
              <Image
                src={getImageUrl(block.image)}
                alt={block.title}
                width={700}
                height={1050}
                className="img-fluid rounded shadow-sm"
              />
            )}
          </div>
        </section>
      );
    }

   
  };

  const renderTextContent = (block: TextContentBlock) => {
    // Special styling for trauma-related sections
    if (block.title.includes("Was ist ein Trauma") || block.title.includes("Beispiele für ein Trauma") || block.title.includes("Für wen ist HTR geeignet?") || block.title.includes("Für wen ist HTR geeignet?")  || block.title.includes("Ablauf der Behandlung") ) {
      return (
        <section key={block.id} className="py-3 position-relative static">
          <span className="position-absolute top-20 start-0">
            <Image
              src="/images/bg-2-copyright.webp"
              width={343}
              height={625}
              alt="Background Copyright"
            />
          </span>
          <div className="container">
            <h3 className="mb-3">{block.title}</h3>
            {block.description && (
              <p className="mb-4 dark-color" style={{ fontSize: '1.14rem' }}>
                {block.description}
              </p>
            )}
            
            {block.content && (
              <div dangerouslySetInnerHTML={{ __html: block.content }} />
            )}
            
            {block.button?.showButton && block.button.link && (
              <a
                href={block.button.link.url}
                className="btn btn-main"
                target={block.button.link.newTab ? "_blank" : undefined}
                rel={block.button.link.newTab ? "noopener noreferrer" : undefined}
              >
                {block.button.label}
              </a>
            )}
           
          </div>
        </section>
      );
    }


    // Default text content layout
    return (
      <section key={block.id} className="py-4">
        
      </section>
    );
  };

  if (loading)
    return (
      <>
        <Breadcrumbs title="Harmonyum" items={[{ label: "Home", href: "/" }, { label: "Harmonyum" }]} />
        <div className="container py-5 text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Lädt...</span>
          </div>
        </div>
      </>
    );

  return (
    <>
      <Breadcrumbs title="Harmonyum" items={[{ label: "Home", href: "/" }, { label: "Harmonyum" }]} />
      <main>
        {layoutBlocks.map((block, idx) => {
          if (block.blockType === "contentShowcase") {
            const contentBlock = block as ContentShowcaseBlock;
            // First block is hero
            if (idx === 0) {
              return renderHeroSection(contentBlock);
            }
            return renderContentShowcase(contentBlock);
          }
          
          if (block.blockType === "textContent") {
            return renderTextContent(block as TextContentBlock);
          }
          
          return null;
        })}
      </main>
    </>
  );
}

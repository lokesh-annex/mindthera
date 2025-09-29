import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

// Types
interface KeyValuePair {
  key: string;
  value: string;
  id: string;
}

interface AdditionalSection {
  title: string;
  description: string;
  benefits: string[];
  blockName: string;
  content?: string;
  image?: string;
  keyValuePairs?: KeyValuePair[];
  showButton?: boolean;
  buttonText?: string;
  buttonUrl?: string;
}

interface Offer {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  benefits: string[];
  benefitsTitle: string;
  benefitsSubtitle?: string;
  buttonText?: string;
  buttonUrl?: string;
  buttonStyle?: string;
  hasButton?: boolean;
  additionalSections?: AdditionalSection[];
  // SEO fields
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: string;
  seoKeywords?: string;
}

interface ApiBlock {
  blockType: string;
  blockName?: string;
  title?: string;
  description?: string;
  content?: string;
  text?: string;
  url?: string;
  style?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonUrl?: string;
  image?: { url: string };
  keyValuePairs?: KeyValuePair[];
}

interface ApiEntry {
  title?: string;
  subtitle?: string;
  content?: ApiBlock[];
  // SEO fields from API
  meta?: {
    title?: string;
    description?: string;
    image?: { url?: string };
    keywords?: string;
  };
}

// Constants
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const PAGE_ID = "68d3cde26d8a2d983dc0df48";
const API_PARAMS = "depth=2&draft=false&locale=undefined&trash=false";
const API_URL = `${API_BASE_URL}/api/pages/${PAGE_ID}?${API_PARAMS}`;
const DEFAULT_IMAGE = "/images/misc/placeholder.jpg";

// Block type constants
const BLOCK_TYPES = {
  CK_EDITOR: "ckEditorBlock",
  IMAGE: "imageBlock",
  BUTTON: "buttonContentBlock",
  TEXT_CONTENT: "textContentContentBlock",
  CONTENT_SHOWCASE: "contentShowcaseContentBlock"
} as const;

// Block name constants
const BLOCK_NAMES = {
  SESSION_PREISE: "SessionPreise",
  SESSION_AB: "sessionAb",
  HINWEIS: "Hinweis",
  IMAGE_CONTENT: "image-content"
} as const;

// Utility functions
const normalizeSlug = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

const extractBenefitsFromHTML = (htmlContent: string): string[] => {
  const liMatches = htmlContent.match(/<li[^>]*>(.*?)<\/li>/g);
  return liMatches ? liMatches.map((li: string) => 
    li.replace(/<[^>]*>/g, '')
      .replace(/&amp;/g, '&')
      .trim()
  ).filter((text: string) => text.length > 0) : [];
};

const findBlockByType = (content: ApiBlock[] | undefined, blockType: string): ApiBlock | undefined => {
  return content?.find((c: ApiBlock) => c.blockType === blockType);
};

const findBlocksByType = (content: ApiBlock[] | undefined, blockType: string): ApiBlock[] => {
  return content?.filter((c: ApiBlock) => c.blockType === blockType) || [];
};

const extractSeoData = (entry: ApiEntry) => {
  // Extract SEO data from API meta field or use fallbacks
  const meta = entry.meta;
  
  return {
    seoTitle: meta?.title || entry.title || "",
    seoDescription: meta?.description || entry.subtitle || "",
    seoImage: meta?.image?.url || "",
    seoKeywords: meta?.keywords || ""
  };
};

async function getOfferBySlug(slug: string): Promise<Offer | null> {
  if (!API_BASE_URL) {
    console.error('API_BASE_URL is not defined');
    return null;
  }

  if (!slug?.trim()) {
    console.error('Invalid slug provided');
    return null;
  }

  try {
    const timestamp = Date.now();
    const apiUrl = `${API_URL}&timestamp=${timestamp}`;
    
    if (process.env.NODE_ENV === 'development') {
      console.log("Fetching offer from:", apiUrl);
    }
    
    const res = await fetch(apiUrl, { 
      cache: "no-store",
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });
    
    if (!res.ok) {
      console.error(`API request failed with status: ${res.status}`);
      return null;
    }

    const json = await res.json();
    
    if (process.env.NODE_ENV === 'development') {
      console.log("Offer API Response:", json);
    }
    
    const doc = json?.doc ?? json?.docs?.[0] ?? json;
    const layout = Array.isArray(doc?.layout) ? doc.layout : [];

    const normalizedSlug = normalizeSlug(slug);

    for (const block of layout) {
      const entry: ApiEntry = block?.locales?.[0];
      if (!entry?.title) continue;

      const generatedSlug = normalizeSlug(entry.title);
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`Comparing: "${generatedSlug}" === "${normalizedSlug}"`);
      }
      
      if (generatedSlug === normalizedSlug) {
        return createOfferFromEntry(entry);
      }
    }

    return null;
  } catch (err) {
    console.error("Error in getOfferBySlug:", err);
    return null;
  }
}

// Helper function to create offer from API entry
function createOfferFromEntry(entry: ApiEntry): Offer {
  const content = entry.content || [];
  
  if (process.env.NODE_ENV === 'development') {
    console.log("All content blocks:", content);
  }

  // Extract description
  const description = extractDescription(content);
  
  // Extract image
  const image = extractImage(content);
  
  // Extract button info
  const buttonInfo = extractButtonInfo(content);
  
  // Extract additional sections
  const additionalSections = extractAdditionalSections(content);
  
  // Extract SEO data
  const seoData = extractSeoData(entry);

  return {
    title: entry.title || "",
    subtitle: entry.subtitle || "",
    description,
    image,
    benefits: [], // Empty for compatibility
    benefitsTitle: "",
    benefitsSubtitle: "",
    ...buttonInfo,
    additionalSections,
    ...seoData,
  };
}

// Helper functions for data extraction
function extractDescription(content: ApiBlock[]): string {
  const ckEditorBlock = findBlockByType(content, BLOCK_TYPES.CK_EDITOR);
  const imageContentBlock = content.find((c: ApiBlock) => 
    c.blockType === BLOCK_TYPES.CK_EDITOR && c.blockName === BLOCK_NAMES.IMAGE_CONTENT
  );
  
  if (imageContentBlock?.content) {
    return imageContentBlock.content.trim();
  }
  
  if (ckEditorBlock?.content) {
    return ckEditorBlock.content.trim();
  }
  
  return "";
}

function extractImage(content: ApiBlock[]): string {
  const imgBlock = findBlockByType(content, BLOCK_TYPES.IMAGE);
  return imgBlock?.image?.url || DEFAULT_IMAGE;
}

function extractButtonInfo(content: ApiBlock[]) {
  const buttonBlock = findBlockByType(content, BLOCK_TYPES.BUTTON);
  
  return {
    hasButton: !!buttonBlock,
    buttonText: buttonBlock?.text?.trim() || "",
    buttonUrl: buttonBlock?.url || "",
    buttonStyle: buttonBlock?.style || "",
  };
}

function extractAdditionalSections(content: ApiBlock[]): AdditionalSection[] {
  const textContentBlocks = findBlocksByType(content, BLOCK_TYPES.TEXT_CONTENT);
  const contentShowcaseBlocks = findBlocksByType(content, BLOCK_TYPES.CONTENT_SHOWCASE);
  
  const sections: AdditionalSection[] = [];
  
  // Process text content blocks
  textContentBlocks.forEach((block) => {
    sections.push(createSectionFromBlock(block));
  });
  
  // Process content showcase blocks
  contentShowcaseBlocks.forEach((block) => {
    sections.push({
      ...createSectionFromBlock(block),
      image: block.image?.url || "",
      keyValuePairs: block.keyValuePairs || []
    });
  });
  
  return sections;
}

function createSectionFromBlock(block: ApiBlock): AdditionalSection {
  const benefits = block.content ? extractBenefitsFromHTML(block.content) : [];
  
  return {
    title: block.title?.trim() || "",
    description: block.description?.trim() || "",
    benefits,
    blockName: block.blockName || "",
    content: block.content || "",
    showButton: block.showButton || false,
    buttonText: block.buttonText?.trim() || "",
    buttonUrl: block.buttonUrl || ""
  };
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const offer = await getOfferBySlug(params.slug);
    
    if (!offer) {
      return {
        title: "Offer Not Found | MindThera",
        description: "The requested offer could not be found.",
      };
    }

    // Use SEO fields from API or fallback to offer data
    const title = offer.seoTitle || offer.title || "MindThera Offer";
    const description = offer.seoDescription || offer.subtitle || offer.description?.replace(/<[^>]*>/g, "").substring(0, 160) || "Discover our healing and therapy services";
    const image = offer.seoImage || offer.image || "/images/misc/placeholder.jpg";

    return {
      title: `${title} | MindThera`,
      description,
      keywords: offer.seoKeywords || `${offer.title}, therapy, healing, mindfulness, meditation`,
      openGraph: {
        title: `${title} | MindThera`,
        description,
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: title,
          }
        ],
        type: "website",
        locale: "de_DE",
      },
      twitter: {
        card: "summary_large_image",
        title: `${title} | MindThera`,
        description,
        images: [image],
      },
      alternates: {
        canonical: `/offer/${params.slug}`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "MindThera Offer",
      description: "Discover our healing and therapy services",
    };
  }
}

// Generate static params for all offer slugs
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  if (!API_BASE_URL) {
    console.error('API_BASE_URL is not defined in generateStaticParams');
    return [];
  }

  try {
    const res = await fetch(API_URL, { 
      cache: "no-store",
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!res.ok) {
      console.error(`Failed to fetch static params: ${res.status}`);
      return [];
    }

    const json = await res.json();
    const doc = json?.doc ?? json?.docs?.[0] ?? json;
    const layout = Array.isArray(doc?.layout) ? doc.layout : [];

    const slugs = new Set<string>(); // Use Set to avoid duplicates

    for (const block of layout) {
      const entry: ApiEntry = block?.locales?.[0];
      if (!entry?.title) continue;

      const slug = normalizeSlug(entry.title);
      if (slug && slug.length > 0) {
        slugs.add(slug);
      }
    }

    const result = Array.from(slugs).map(slug => ({ slug }));
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`Generated ${result.length} static params:`, result.map(r => r.slug));
    }

    return result;
  } catch (err) {
    console.error("Error in generateStaticParams:", err);
    return [];
  }
}

// Section rendering components
const SessionPreiseSection = ({ section, sectionIndex }: { section: AdditionalSection; sectionIndex: number }) => (
  <section key={sectionIndex} className="pt-0 pb-8 price-sec">
    <div className="container" style={{ position: "relative", zIndex: 2 }}>
      <div className="new-session-box">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div className="flex-1 d-flex flex-column justify-content-center align-items-center">
              <Image 
                src={section.image || "/images/services/session-img.png"} 
                alt="Session Booking" 
                width={400}
                height={300}
                className="w-100 max-w-xs rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="p-4 flex-1 d-flex flex-column justify-content-center">
              <h2 className="h2 fw-bold text-dark mb-4 text-left w-100">
                {section.title}:
              </h2>
              <ul className="fs-5 text-dark mb-0 w-100 list-unstyled">
                {section.keyValuePairs?.map((item, index) => (
                  <li key={item.id || index} className="mb-3 d-flex align-items-center gap-3">
                    <i className="bi bi-calendar4-range" style={{ fontSize: "0.8rem", color: "#000" }}></i>
                    <strong>{item.key}:</strong> {item.value}
                  </li>
                ))}
              </ul>
              {section.content && (
                <div className="mb-4 text-dark" style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                  <div dangerouslySetInnerHTML={{ __html: section.content }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SessionAbSection = ({ section, sectionIndex }: { section: AdditionalSection; sectionIndex: number }) => (
  <section key={sectionIndex} className="py-10 session-sec-bg position-relative text-dark" style={{ fontSize: "1.15rem", lineHeight: "1.7" }}>
    <span className="position-absolute top-20 start-0">
      <Image src="/images/bg-2-copyright.webp" width={393} height={625} alt="Background Copyright" />
    </span>
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#143774" }}>
        {section.title.replace(":", "")}
      </h2>
      {section.description && (
        <div className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
          <p>{section.description}</p>
        </div>
      )}
      <div className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
        {section.content ? (
          <div dangerouslySetInnerHTML={{ 
            __html: section.content
              .replace(/<ul[^>]*>[\s\S]*?<\/ul>/g, '')
              .replace(/<li[^>]*>[\s\S]*?<\/li>/g, '')
              .trim()
          }} />
        ) : (
          <p>Content coming soon...</p>
        )}
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-6">
        {section.benefits.map((benefit, index) => (
          <div key={index} className="d-flex align-items-center gap-3">
            <span className="d-inline-flex align-items-center justify-content-center w-14 h-14 rounded-lg bg-gray-800 text-white">
              <i className="bi bi-x-diamond" style={{ fontSize: "1.5rem", color: "#7A566B" }}></i>
            </span>
            <span className="text-left text-lg text-gray-800">
              {benefit}
            </span>
          </div>
        ))}
      </div>
      {section.showButton && section.buttonText && (
        <div className="text-center mt-8">
          <a 
            href={section.buttonUrl || "/contact"} 
            className="btn btn-main px-6 py-3 fw-bold"
            style={{ fontSize: "1.1rem" }}
          >
            {section.buttonText}
            <i className="bi bi-arrow-right ms-2"></i>
          </a>
        </div>
      )}
    </div>
  </section>
);

const DefaultSection = ({ section, sectionIndex }: { section: AdditionalSection; sectionIndex: number }) => {
  if (!section.benefits?.length && !section.content) return null;
  
  return (
    <section key={sectionIndex} className="py-5 session-sec-bg-fe">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-12 text-center">
            <h2 className="fw-bold mb-3" style={{ color: "#5C377D", fontSize: "2.1rem", letterSpacing: "1px" }}>
              {section.title.replace(":", "")}
            </h2>
            {section.description && (
              <p className="lead" style={{ color: "#3D2C4A", fontWeight: "500" }}>
                {section.description}
              </p>
            )}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            {section.content ? (
              <div 
                className="content-section" 
                style={{ fontSize: "1.18rem", color: "#2D1A3A", fontWeight: "500" }}
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            ) : (
              "<p>Content coming soon...</p>"
            )}
            {section.showButton && section.buttonText && (
              <div className="mt-4">
                <div className="mt-3">
                  <a 
                    href={section.buttonUrl || "/contact"} 
                    className="btn btn-main px-4 py-2 fw-bold"
                    style={{ fontSize: "1.1rem" }}
                  >
                    {section.buttonText}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const HinweisSection = ({ section, sectionIndex }: { section: AdditionalSection; sectionIndex: number }) => (
  <section key={`hinweis-${sectionIndex}`} className="py-8 bg-light stimmen-sec">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-12">
          <h2 className="fw-bold mb-3" style={{ color: "#2D1A3A", fontSize: "1.7rem", letterSpacing: "1px" }}>
            {section.title}
          </h2>
          <div className="mb-3" style={{ fontSize: "1.15rem", color: "#5C377D", fontWeight: "500" }}>
            {section.content && (
              <div dangerouslySetInnerHTML={{ 
                __html: section.content.replace(/<blockquote>/g, '<blockquote class="mb-2" style="border-left: 4px solid #7A566B; padding-left: 16px; margin-bottom: 12px;">')
              }} />
            )}
          </div>
          {section.showButton && section.buttonText && (
            <div className="mt-4">
              <a href={section.buttonUrl || "/contact"} className="btn btn-main px-4 py-2 fw-bold mb-2">
                {section.buttonText}
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
);

const OfferSlugPage = async ({ params }: { params: { slug: string } }) => {
  const offer: Offer | null = await getOfferBySlug(params.slug);

  if (!offer) {
    return (
      <>
        <Breadcrumbs
          title="Offer Not Found"
          items={[{ label: "Home", href: "/" }, { label: "Offers", href: "/offer" }, { label: "Not Found" }]}
        />
        <main className="max-w-2xl mx-auto py-10 px-4">
          <h1 className="text-3xl font-bold mb-4 text-red-600">
            404 | No matching offer found
          </h1>
          <p className="mb-4">
            Requested slug: <strong>{params.slug}</strong>
          </p>
          <p className="mb-4">Check your API data and slug normalization.</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Breadcrumbs
        title={offer.title}
        items={[{ label: "Home", href: "/" }, { label: "Offers", href: "/offer" }, { label: offer.title }]}
      />
     

      {/* Content Section */}
      <div className="container py-5 top-sec-offer-inner dark-color">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
          <div className="mb-4 mb-md-0 me-md-4">
            <Image 
              src={offer.image} 
              alt={offer.title} 
              width={320}
              height={320}
              style={{ borderRadius: "12px" }}
            
            />
          </div>
          <div className="flex-grow-1">
            <h2 className="text-right fw-bold mb-2" style={{ color: "#1a2a6c" }}>
              {offer.title}
            </h2>
            <h4 className="text-right mb-3" style={{ color: "#4f8a8b" }}>
              {offer.subtitle}
            </h4>
            <div className="mt-3 text-right">
              {offer.description ? (
                <div dangerouslySetInnerHTML={{ __html: offer.description }} />
              ) : (
                <p >Description coming soon...</p>
              )}
            </div>
            {offer.hasButton && offer.buttonText && (
              <div className="d-flex gap-3 mt-4">
                <a 
                  className={`btn ${offer.buttonStyle === 'primary' ? 'btn-main' : 'btn-secondary'} px-4 py-2 fw-bold mb-2`} 
                  href={offer.buttonUrl}
                >
                  <i className="bi bi-calendar-check"></i> {offer.buttonText}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Render all sections */}
      {offer.additionalSections && (
        <>
          {/* Render non-Hinweis sections first */}
          {offer.additionalSections
            .filter(section => section.blockName !== BLOCK_NAMES.HINWEIS)
            .map((section, sectionIndex) => {
              // Use appropriate component based on blockName
              switch (section.blockName) {
                case BLOCK_NAMES.SESSION_PREISE:
                  return <SessionPreiseSection key={sectionIndex} section={section} sectionIndex={sectionIndex} />;
                case BLOCK_NAMES.SESSION_AB:
                  return <SessionAbSection key={sectionIndex} section={section} sectionIndex={sectionIndex} />;
                default:
                  return <DefaultSection key={sectionIndex} section={section} sectionIndex={sectionIndex} />;
              }
            })}
          
          {/* Render Hinweis sections at the end */}
          {offer.additionalSections
            .filter(section => section.blockName === BLOCK_NAMES.HINWEIS)
            .map((section, sectionIndex) => (
              <HinweisSection key={`hinweis-${sectionIndex}`} section={section} sectionIndex={sectionIndex} />
            ))}
        </>
      )}
    </>
  );
};

export default OfferSlugPage;
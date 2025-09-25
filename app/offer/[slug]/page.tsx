import React from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

type Offer = {
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
  additionalSections?: Array<{
    title: string;
    description: string;
    benefits: string[];
    blockName: string;
    content?: string;
    image?: string;
    keyValuePairs?: Array<{
      key: string;
      value: string;
      id: string;
    }>;
    showButton?: boolean;
    buttonText?: string;
    buttonUrl?: string;
  }>;
};

const API_URL =
  `${process.env.NEXT_PUBLIC_API_BASE_URL || ""}/api/pages/68d3cde26d8a2d983dc0df48?depth=2&draft=false&locale=undefined&trash=false`;

// 🔧 helper function to normalize slug
function normalizeSlug(str: string) {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

async function getOfferBySlug(slug: string): Promise<Offer | null> {
  try {
    const timestamp = Date.now();
    const apiUrl = `${API_URL}&timestamp=${timestamp}`;
    console.log("Fetching offer from:", apiUrl);
    
    const res = await fetch(apiUrl, { 
      cache: "no-store",
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });
    if (!res.ok) return null;

    const json = await res.json();
    console.log("Offer API Response:", json);
    
    const doc = json?.doc ?? json?.docs?.[0] ?? json;
    const layout = Array.isArray(doc?.layout) ? doc.layout : [];

    let found: Offer | null = null;

    for (const block of layout) {
      // केवल locales[0] (first locale) use करें
      const entry = block?.locales?.[0];
      if (!entry) continue;

      const generatedSlug = entry.title ? normalizeSlug(entry.title) : "";
      console.log(`Comparing: "${generatedSlug}" === "${normalizeSlug(slug)}"`);
      
      if (generatedSlug === normalizeSlug(slug)) {
        // description निकालना - debug all content blocks first
        console.log("All content blocks:", entry.content);
        
        let description = "";
        
        // Try multiple approaches to find description
        const ckEditorBlock = entry.content?.find((c: any) => 
          c.blockType === "ckEditorBlock" && c.blockName === "image-content"
        );
        
        if (ckEditorBlock?.content) {
          console.log("Found ckEditorBlock:", ckEditorBlock);
          // Keep HTML formatting for proper display
          description = ckEditorBlock.content.trim();
        } else {
          // Fallback: try any ckEditorBlock
          const anyCtEditorBlock = entry.content?.find((c: any) => c.blockType === "ckEditorBlock");
          if (anyCtEditorBlock?.content) {
            console.log("Using fallback ckEditorBlock:", anyCtEditorBlock);
            description = anyCtEditorBlock.content.trim();
          }
        }
        
        console.log("Extracted description:", description);

        // image निकालना (imageBlock)
        let image = "/images/misc/placeholder.jpg";
        const imgBlock = entry.content?.find((c: any) => c.blockType === "imageBlock");
        if (imgBlock?.image?.url) {
          image = imgBlock.image.url;
        }

        // button निकालना (buttonContentBlock) - केवल तब जब block exist करे
        let buttonText = "";
        let buttonUrl = "";
        let buttonStyle = "";
        let hasButton = false;
        const buttonBlock = entry.content?.find((c: any) => c.blockType === "buttonContentBlock");
        if (buttonBlock) {
          hasButton = true;
          buttonText = buttonBlock.text?.trim() || "";
          buttonUrl = buttonBlock.url || "";
          buttonStyle = buttonBlock.style || "";
        }

        // सभी textContentContentBlock और contentShowcaseContentBlock को additionalSections में add करना
        let benefits: string[] = []; // Empty for compatibility
        let benefitsTitle = "";
        let benefitsSubtitle = "";
        let additionalSections: any[] = [];
        
        // Find all textContentContentBlock blocks
        const textContentBlocks = entry.content?.filter((c: any) => 
          c.blockType === "textContentContentBlock"
        ) || [];
        
        // Find all contentShowcaseContentBlock blocks
        const contentShowcaseBlocks = entry.content?.filter((c: any) => 
          c.blockType === "contentShowcaseContentBlock"
        ) || [];
        
        console.log("Found textContentContentBlocks:", textContentBlocks);
        console.log("Found contentShowcaseContentBlocks:", contentShowcaseBlocks);
        
        // Process each textContentContentBlock and add to additionalSections
        textContentBlocks.forEach((block: any, index: number) => {
          console.log(`Processing textContentBlock ${index}:`, block);
          
          const sectionBenefits: string[] = [];
          if (block.content) {
            const htmlContent = block.content;
            const liMatches = htmlContent.match(/<li[^>]*>(.*?)<\/li>/g);
            if (liMatches) {
              sectionBenefits.push(...liMatches.map((li: string) => 
                li.replace(/<[^>]*>/g, '')
                  .replace(/&amp;/g, '&')
                  .trim()
              ).filter((text: string) => text.length > 0));
            }
          }
          
          additionalSections.push({
            title: block.title?.trim() || "",
            description: block.description?.trim() || "",
            benefits: sectionBenefits,
            blockName: block.blockName || "",
            content: block.content || "",
            showButton: block.showButton || false,
            buttonText: block.buttonText?.trim() || "",
            buttonUrl: block.buttonUrl || ""
          });
        });

        // Process each contentShowcaseContentBlock and add to additionalSections
        contentShowcaseBlocks.forEach((block: any, index: number) => {
          console.log(`Processing contentShowcaseBlock ${index}:`, block);
          
          const sectionBenefits: string[] = [];
          if (block.content) {
            const htmlContent = block.content;
            const liMatches = htmlContent.match(/<li[^>]*>(.*?)<\/li>/g);
            if (liMatches) {
              sectionBenefits.push(...liMatches.map((li: string) => 
                li.replace(/<[^>]*>/g, '')
                  .replace(/&amp;/g, '&')
                  .trim()
              ).filter((text: string) => text.length > 0));
            }
          }
          
          additionalSections.push({
            title: block.title?.trim() || "",
            description: block.description?.trim() || "",
            benefits: sectionBenefits,
            blockName: block.blockName || "",
            content: block.content || "",
            image: block.image?.url || "",
            keyValuePairs: block.keyValuePairs || []
          });
        });
        
        console.log("All sections added to additionalSections:", additionalSections);

        found = {
          title: entry.title || "",
          subtitle: entry.subtitle || "",
          description: description,
          image: image,
          benefits: benefits,
          benefitsTitle: benefitsTitle,
          benefitsSubtitle: benefitsSubtitle,
          buttonText: buttonText,
          buttonUrl: buttonUrl,
          buttonStyle: buttonStyle,
          hasButton: hasButton,
          additionalSections: additionalSections,
        };
        console.log("Found matching offer:", found);
        break;
      }
    }

    return found;
  } catch (err) {
    console.error("Error in getOfferBySlug:", err);
    return null;
  }
}

// Generate static params for all offer slugs
export async function generateStaticParams() {
  try {
    const res = await fetch(API_URL, { cache: "no-store" });
    if (!res.ok) return [];

    const json = await res.json();
    const doc = json?.doc ?? json?.docs?.[0] ?? json;
    const layout = Array.isArray(doc?.layout) ? doc.layout : [];

    const slugs: { slug: string }[] = [];

    for (const block of layout) {
      // केवल locales[0] (first locale) use करें
      const entry = block?.locales?.[0];
      if (!entry || !entry.title) continue;

      const slug = normalizeSlug(entry.title);
      if (slug) {
        slugs.push({ slug });
      }
    }

    return slugs;
  } catch (err) {
    console.error("Error in generateStaticParams:", err);
    return [];
  }
}

const OfferSlugPage = async ({ params }: { params: { slug: string } }) => {
  const offer: Offer | null = await getOfferBySlug(params.slug);

  if (!offer) {
    return (
      <>
        <Breadcrumbs
          title={"Offer Not Found"}
          items={[{ label: "Home", href: "/" }, { label: "Offers", href: "/offer" }, { label: "Not Found" }]}
        />
        <main className="max-w-2xl mx-auto py-10 px-4">
          <h1 className="text-3xl font-bold mb-4 text-red-600">
            404 | No matching offer found
          </h1>
          <p className="mb-4">
            Requested slug: <b>{params.slug}</b>
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

      {/* All textContentContentBlock & contentShowcaseContentBlock Sections */}
      
      {/* First render all sections EXCEPT Hinweis */}
      {offer.additionalSections && offer.additionalSections
        .filter(section => section.blockName !== "Hinweis")
        .map((section, sectionIndex) => {
        // Special rendering for SessionPreise blockName
        if (section.blockName === "SessionPreise") {
          return (
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
                          {section.keyValuePairs && section.keyValuePairs.map((item: any, index: number) => (
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
        }

        // Special rendering for sessionAb blockName
        if (section.blockName === "sessionAb") {
          return (
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
                        .replace(/<ul[^>]*>[\s\S]*?<\/ul>/g, '') // Remove ul lists as they're handled separately
                        .replace(/<li[^>]*>[\s\S]*?<\/li>/g, '') // Remove any remaining li items
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
        }

        // Default rendering for other blocks
        return (
          section.benefits && section.benefits.length > 0 && (
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
                    <ul className="list-unstyled" style={{ fontSize: "1.18rem", color: "#2D1A3A", fontWeight: "500" }}>
                      {section.benefits.map((benefit, index) => (
                        <li key={index} className="mb-4 d-flex align-items-start">
                          <span style={{ color: "#7A566B", fontSize: "1.7rem", marginRight: "16px", marginTop: "2px" }}>
                            <i className="bi bi-stars"></i>
                          </span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
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
          )
        );
      })}

      {/* Finally render Hinweis (Stimmen aus den Sessions) at the very end */}
      {offer.additionalSections && offer.additionalSections
        .filter(section => section.blockName === "Hinweis")
        .map((section, sectionIndex) => (
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
                        __html: section.content
                          .replace(/<blockquote>/g, '<blockquote class="mb-2" style="border-left: 4px solid #7A566B; padding-left: 16px; margin-bottom: 12px;">')
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
        ))}
    </>
  );
};

export default OfferSlugPage;
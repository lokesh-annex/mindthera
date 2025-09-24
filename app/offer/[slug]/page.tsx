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
        // description निकालना (richTextBlock)
        let description = "";
        const richTextBlock = entry.content?.find((c: any) => c.blockType === "richTextBlock");
        if (richTextBlock?.content?.root?.children) {
          description = richTextBlock.content.root.children
            .map((c: any) =>
              (c.children || [])
                .map((cc: any) => cc.text || "")
                .join(" ")
            )
            .join("\n")
            .trim();
        }

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

        // locales[1] से benefits निकालना
        let benefits: string[] = [];
        let benefitsTitle = "";
        let benefitsSubtitle = "";
        const secondLocale = block?.locales?.[1];
        if (secondLocale?.content) {
          benefitsTitle = secondLocale.title || "";
          benefitsSubtitle = secondLocale.subtitle || "";
          const benefitsRichText = secondLocale.content?.find((c: any) => c.blockType === "richTextBlock");
          if (benefitsRichText?.content?.root?.children) {
            benefits = benefitsRichText.content.root.children
              .map((c: any) => 
                (c.children || [])
                  .map((cc: any) => cc.text || "")
                  .join(" ")
                  .trim()
              )
              .filter((text: string) => text.length > 0);
          }
        }

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
      <div className="container py-5">
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
            <p className="mt-3 text-right">
              {offer.description}
            </p>
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

      {/* Benefits Section - locales[1] data */}
      {offer.benefits && offer.benefits.length > 0 && (
        <section className="py-5 session-sec-bg-fe">
          <div className="container">
            <div className="row justify-content-center mb-4">
              <div className="col-lg-12 text-center">
                <h2 className="fw-bold mb-3" style={{ color: "#5C377D", fontSize: "2.1rem", letterSpacing: "1px" }}>
                  {offer.benefitsTitle.replace(":", "")}
                </h2>
                {offer.benefitsSubtitle && (
                  <p className="lead" style={{ color: "#3D2C4A", fontWeight: "500" }}>
                    {offer.benefitsSubtitle}
                  </p>
                )}
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <ul className="list-unstyled" style={{ fontSize: "1.18rem", color: "#2D1A3A", fontWeight: "500" }}>
                  {offer.benefits.map((benefit, index) => (
                    <li key={index} className="mb-4 d-flex align-items-start">
                      <span style={{ color: "#7A566B", fontSize: "1.7rem", marginRight: "16px", marginTop: "2px" }}>
                        <i className="bi bi-stars"></i>
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default OfferSlugPage;
import React from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
type Offer = {
  title: string;
  desc: string;
  image: string;
  htmlContent?: string;
};

const API_URL =
  "http://localhost:3001/api/pages/68b961bf0cdce0790917cc2f?depth=2&draft=false&locale=undefined&trash=false";

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
    
    const layout = Array.isArray(json?.doc?.layout)
      ? json.doc.layout
      : json?.layout ?? [];

    let found: Offer | null = null;

    for (const block of layout) {
      for (const entry of block?.locales || []) {
        const generatedSlug = entry.title ? normalizeSlug(entry.title) : "";
        console.log(`Comparing: "${generatedSlug}" === "${normalizeSlug(slug)}"`);
        if (generatedSlug === normalizeSlug(slug)) {
          found = {
            title: entry.title || "No Title",
            desc: entry.subtitle || "No Subtitle",
            image: entry.image?.url
              ? `http://localhost:3001${entry.image.url}`
              : "/images/misc/placeholder.jpg",
            htmlContent: entry.htmlContent || null, // ✅ include htmlContent
          };
          console.log("Found matching offer:", found);
          break;
        }
      }
      if (found) break;
    }

    return found;
  } catch (err) {
    console.error("Error in getOfferBySlug:", err);
    return null;
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
      <main className="max-w-3xl mx-auto py-10 px-4">
       
        
        
        {offer.htmlContent ? (
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: offer.htmlContent }}
          />
        ) : (
          <p className="text-gray-600">
            No additional content available for this offer.
          </p>
        )}
      </main>
    </>
  );
};

export default OfferSlugPage;

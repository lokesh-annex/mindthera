import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";

type Offer = {
  title: string;
  desc: string;
  description: string;
  image: string;
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
    const res = await fetch(API_URL, { cache: "no-store" });
    if (!res.ok) return null;

    const json = await res.json();
    const layout = Array.isArray(json?.doc?.layout) ? json.doc.layout : [];

    // Debug: Print all entry titles and generated slugs
    for (const block of layout) {
      for (const entry of block?.locales || []) {
        const generatedSlug = entry.title ? normalizeSlug(entry.title) : "";
        console.log("API entry title:", entry.title, "| Generated slug:", generatedSlug);
      }
    }
    console.log("Requested slug:", slug);

    let found: Offer | null = null;
    for (const block of layout) {
      for (const entry of block?.locales || []) {
        const generatedSlug = entry.title ? normalizeSlug(entry.title) : "";
        const normalizedSlug = normalizeSlug(slug);
        console.log(
          "Entry title:",
          entry.title,
          "| Generated slug:",
          generatedSlug,
          "| URL slug:",
          normalizedSlug
        );
        if (generatedSlug === normalizedSlug) {
          found = {
            title: entry.title || "No Title",
            desc: entry.subtitle || "No Subtitle",
            description: entry.description || "<p>No description available.</p>",
            image: entry.image?.url
              ? `http://localhost:3001${entry.image.url}`
              : "/images/misc/placeholder.jpg",
          };
        }
      }
    }
    if (!found) {
      console.log("No matching offer found for slug:", slug);
    }
    return found;
  } catch (err) {
    console.error("Error in getOfferBySlug:", err);
    return null;
  }
}

const OfferSlugPage = async ({ params }: { params: { slug: string } }) => {
  const offer: Offer | null = await getOfferBySlug(params.slug);

  // Debug message to confirm route and show requested slug
  if (!offer) {
    return (
      <main className="max-w-2xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-4 text-red-600">404 | No matching offer found</h1>
        <p className="mb-4">Requested slug: <b>{params.slug}</b></p>
        <p className="mb-4">Check your API data and slug normalization.</p>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{offer.title}</h1>
      <Image
        src={offer.image}
        alt={offer.title}
        width={600}
        height={400}
        className="mb-4 rounded"
      />
      <h2 className="text-xl font-semibold mb-2">{offer.desc}</h2>
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: offer.description }}
      />
    </main>
  );
};

export default OfferSlugPage;

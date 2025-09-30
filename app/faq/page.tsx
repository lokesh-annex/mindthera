// ./app/faq/layout.tsx
import FAQClient from "@/components/FAQClient";
import type { Metadata } from "next";

// API Endpoint for FAQ page
const API_URL_FAQ = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68c01158106eb845adbadfa2?depth=2&draft=false&locale=de&trash=false`;

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(API_URL_FAQ, {
      cache: "no-store",
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Failed to fetch FAQ metadata");

    const json = await res.json();
    const doc = json?.doc ?? json?.docs?.[0] ?? json;

    // Debug logs

    // Get data from root level (based on your API structure)
    const metaLocale = doc?.meta?.locales?.[0];
    const title = metaLocale?.title;
    const description = metaLocale?.description;

    return {
      title: title ? `${title} ` : "",
      description: description,
      keywords:
        "faq, häufige fragen, therapie, harmonyum, trauma-release, antworten, hilfe, beratung, mindthera",
    };
  } catch (error) {
    console.error("Error fetching FAQ metadata:", error);
    return {
      title: "",
      description:
        "",
    };
  }
}

// Server component wrapper
export default function FAQPage() {
  return <FAQClient />;
}

// ./app/faq/layout.tsx
import type { Metadata } from "next";

// API Endpoint for FAQ page
const API_URL_FAQ = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68c01158106eb845adbadfa2?depth=2&draft=false&locale=de&trash=false`;

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(API_URL_FAQ, { 
      cache: "no-store",
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) throw new Error("Failed to fetch FAQ metadata");

    const json = await res.json();
    const doc = json?.doc ?? json?.docs?.[0] ?? json;

    // Debug logs
    console.log("FAQ API Response:", JSON.stringify(doc, null, 2));

    // Get data from root level (based on your API structure)
    const title = doc?.title;
    const description = doc?.description;
    const labelText = doc?.label_text;
    
    console.log("FAQ Final title:", title);
    console.log("FAQ Final description:", description);
    console.log("FAQ Label text:", labelText);
    
    return {
      title: title ? `${title} ` : "",
      description: description ,
      keywords: "faq, häufige fragen, therapie, harmonyum, trauma-release, antworten, hilfe, beratung, mindthera",
    
   
    };
  } catch (error) {
    console.error('Error fetching FAQ metadata:', error);
    return {
      title: "FAQ | MindThera",
      description: "Häufig gestellte Fragen zu unseren Therapieangeboten, Harmonyum Behandlungen und Trauma-Release Sitzungen.",
    };
  }
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
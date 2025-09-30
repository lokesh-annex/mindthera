// ./app/kontakt/layout.tsx
import type { Metadata } from "next";

// API Endpoint for Kontakt page
const PAGE_API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68d635db4692d950d52c516a?depth=2&draft=false&locale=de&trash=false`;

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(PAGE_API_URL, { 
      cache: "no-store",
      next: { revalidate: 3600 }
    });
    if (!res.ok) throw new Error("Failed to fetch kontakt metadata");
    const json = await res.json();
    const doc = json?.doc ?? json?.docs?.[0] ?? json;
    // Get data from meta.locales[0] (German locale)
    const metaLocale = doc?.meta?.locales?.[0];
    console.log("Kontakt Meta Locale data:", metaLocale);
    
    const title = metaLocale?.title;
    const description = metaLocale?.description;
  
    return {
      title: title ? `${title}` : "",
      description: description,
      keywords: "kontakt, beratung, termin, therapie, harmonyum, trauma-release, anfrage, mindthera",
     
    
    };
  } catch (error) {
    console.error('Error fetching kontakt metadata:', error);
    return {
      title: "",
      description: "",
    };
  }
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
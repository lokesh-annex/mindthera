// ./app/offer/layout.tsx
import type { Metadata } from "next";

// API Endpoint
const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68d3cde26d8a2d983dc0df48?depth=2&draft=false&locale=de&trash=false`;

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(API_URL, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch metadata");

    const json = await res.json();
    const doc = json?.doc ?? json?.docs?.[0] ?? json;

    // 👇 hole direkt aus meta.locales[0]
    const metaLocale = doc?.meta?.locales?.[0];
    const title = metaLocale?.title ;
    const description = metaLocale?.description;

    return {
      title,
      description,
      keywords:
        "angebote, therapie, trauma, heilung, behandlung, beratung, services, harmonyum, trauma-release, schwangerschaft, familien-therapie",
    };
  } catch (e) {
    return {
      title: "",
      description: "",
    };
  }
}

export default function OfferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

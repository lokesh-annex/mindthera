import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68d3cde26d8a2d983dc0df48?depth=2&draft=false&locale=undefined&trash=false`;

// Dynamic import for client component
const OfferPageContent = dynamic(() => import("@/components/OfferPageContent"), {
  ssr: false,
  loading: () => (
    <div className="container py-5 text-center">
      <div className="d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary me-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="m-0 fs-5">Lade Angebote...</p>
      </div>
    </div>
  )
});

// Function to fetch offer page SEO data
async function getOfferPageSEO() {
  try {
    const res = await fetch(API_URL, { 
      cache: "no-store",
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) return null;
    const json = await res.json();
    const doc = json?.doc ?? json;
    
    // Get SEO data from locales[0] (German locale)
    const locale = doc?.locales?.[0];
    return {
      title: locale?.title || doc?.title || "Meine Angebote",
      description: locale?.description || "Entdecken Sie unsere professionellen Therapie- und Heilungsangebote für Ihr Wohlbefinden"
    };
  } catch (error) {
    console.error('Error fetching offer page SEO:', error);
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getOfferPageSEO();
  
  const title = seoData?.title || "Meine Angebote";
  const description = seoData?.description || "Entdecken Sie unsere professionellen Therapie- und Heilungsangebote für Ihr Wohlbefinden";

  return {
    title: `${title} | MindThera`,
    description,
    keywords: "angebote, therapie, trauma, heilung, behandlung, beratung, services",
    openGraph: {
      title: `${title} | MindThera`,
      description,
      images: [
        {
          url: "/images/offer/offer-hero.jpg",
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
      images: ["/images/offer/offer-hero.jpg"],
    },
    alternates: {
      canonical: "/offer",
    },
  };
}

// Server component wrapper
export default function OfferPage() {
  return <OfferPageContent />;
}
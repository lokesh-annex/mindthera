import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";

// Dynamic import for client component
const EventClient = dynamic(() => import("@/components/EventClient"), {
  ssr: false,
  loading: () => (
    <div className="container py-5 text-center">
      <div className="d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary me-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="m-0 fs-5">Lade Events...</p>
      </div>
    </div>
  )
});

const API_URL_EVENTS = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68c023ac106eb845adbae559?depth=2&draft=false&locale=de&trash=false`;

// Function to fetch event page SEO data
async function getEventPageSEO() {
  try {
    const res = await fetch(API_URL_EVENTS, { 
      cache: "no-store",
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) return null;
    const json = await res.json();
    const doc = json?.doc ?? json;
    
    console.log("Event API Response:", JSON.stringify(doc, null, 2));
    
    // Get data from meta.locales[0] (German locale)
    const metaLocale = doc?.meta?.locales?.[0];
    const title = metaLocale?.title;
    const description = metaLocale?.description;
    return { title, description };
  } catch (error) {
    console.error('Error fetching event SEO:', error);
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata() {
  const seoData = await getEventPageSEO();
  
  const title = seoData?.title;
  const description = seoData?.description ;

  return {
    title: `${title}`,
    description,
    keywords: "events, veranstaltungen, workshops, seminare, therapie, harmonyum, trauma-release, mindthera",
  };
}

// Server component wrapper
export default function EventPage() {
  return <EventClient />;
}

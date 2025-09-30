import React from "react";
import { Metadata } from 'next';
import Datenschutzbestimmung from "@/components/Datenschutzbestimmung";

const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68c131b5cb79fffc279458d0?depth=2&draft=false&locale=undefined&trash=false`;

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(API_URL, { 
      cache: 'no-store',
      next: { revalidate: 0 }
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch metadata');
    }
    
    const data = await res.json();
    const doc = data?.doc ?? data?.docs?.[0] ?? data;
    const metaLocale = doc?.meta?.locales?.[0];
    const title = metaLocale?.title;
    const description = metaLocale?.description;
    
    
    
    return {
      title: title,
      description: description,
    
    };
  } catch (error) {
    console.error('❌ Error generating Datenschutzbestimmung page metadata:', error);
    return {
      title: '',
      description: '',
    };
  }
}

const DatenschutzbestimmungPage = () => {
  return <Datenschutzbestimmung />;
};

export default DatenschutzbestimmungPage;

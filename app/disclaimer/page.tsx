import React from "react";
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const DisclaimerClient = dynamic(() => import('./DisclaimerClient'), {
  loading: () => (
    <div className="container py-5">
      <div className="d-flex align-items-center justify-content-center py-5">
        <div className="spinner-border text-primary me-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <span>Lade Disclaimer...</span>
      </div>
    </div>
  ),
});

const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68c3b30fd8f4df9f964d3d45?depth=2&draft=false&locale=undefined&trash=false`;

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
    console.error('❌ Error generating Disclaimer page metadata:', error);
    return {
      title: '',
      description: '',
    };
  }
}

export default function DisclaimerPage() {
  return <DisclaimerClient />;
}
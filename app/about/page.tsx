import { Metadata } from 'next';
import Breadcrumbs from "@/components/Breadcrumbs";
import WorkSection from "@/components/about/WorkSection";
import BuildSpacesSection from "@/components/about/BuildSpacesSection";
import QualificationsSection from "@/components/about/QualificationsSection";

const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68db928a32bade52d81dfc3d?depth=2&draft=false&locale=undefined&trash=false`;

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
    console.error('❌ Error generating About page metadata:', error);
    return {
      title: '',
      description: '',
    };
  }
}

const AboutUS = () => {
  return (
    <>
      <Breadcrumbs
        title={"Über mich"}
        items={[{ label: "Home", href: "/" }, { label: "Über mich" }]}
      />
      
   
      <WorkSection />
      <BuildSpacesSection />
      <QualificationsSection />
    </>
  );
};

export default AboutUS;

import { Metadata } from 'next';
import BlogList from "@/components/BlogList";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";

const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68dbb34e32bade52d81e06f6?depth=2&draft=false&locale=undefined&trash=false`;

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
    console.error('❌ Error generating Blog page metadata:', error);
    return {
      title: '',
      description: '',
    };
  }
}

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs
                title="Blog"
                items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
              />
    <section>
      <span className="absolute top-20 start-0">
                                 <Image
                                   src="/images/bg-2-copyright.webp"
                                   width={303}
                                   height={550}
                                    className="blog-copyright"
                                   alt="Background Copyright"
                                   priority
                                 />
                                   </span>
      <div className="container">
        <div className="row g-4 gy-5">
          <BlogList />
        
        </div>
      </div>
    </section>
    </>
  );
}
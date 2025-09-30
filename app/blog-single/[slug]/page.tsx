import React from "react";
import { Metadata } from 'next';
import { notFound } from "next/navigation";
import dynamic from 'next/dynamic';

const BlogSingleClient = dynamic(() => import('./BlogSingleClient'), {
  loading: () => (
    <div className="container py-5">
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2 m-0">Lade Artikel...</p>
      </div>
    </div>
  ),
});

async function fetchArticle(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts?where[slug][equals]=${encodeURIComponent(
        slug
      )}&depth=2&draft=false&locale=undefined&trash=false`,
      { cache: 'no-store', next: { revalidate: 0 } }
    );
    const data = await res.json();
    const doc = Array.isArray(data?.docs)
      ? data.docs[0]
      : Array.isArray(data)
      ? data[0]
      : data;
    return doc && doc.slug === slug ? doc : null;
  } catch (err) {
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  
  try {
    const article = await fetchArticle(slug);
    
    if (!article) {
      return {
        title: 'Article Not Found',
        description: 'The requested article could not be found.',
      };
    }

    console.log('📊 Blog Single Page API Response:', article);
    
    const doc = article;
    const metaLocale = doc?.meta?.locales?.[0];
    const title = metaLocale?.title || article?.title;
    const description = metaLocale?.description || article?.excerpt || article?.summary;
    
    console.log('📋 Blog Single Page SEO Data:', { title, description });
    
    const heroImage = article?.hero?.media || article?.featuredImage;
    const imageUrl = heroImage?.url;
    
    return {
      title: title || `${article?.title} | Blog`,
      description: description || 'Read this blog article',
      openGraph: {
        title: title || article?.title,
        description: description || 'Read this blog article',
        type: 'article',
        locale: 'de_DE',
        images: imageUrl ? [{ url: imageUrl, width: 1200, height: 600 }] : undefined,
        publishedTime: article?.publishedAt,
        authors: article?.author ? [article.author] : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title: title || article?.title,
        description: description || 'Read this blog article',
        images: imageUrl ? [imageUrl] : undefined,
      },
      alternates: {
        canonical: `/blog-single/${slug}`,
      },
    };
  } catch (error) {
    console.error('❌ Error generating Blog Single page metadata:', error);
    return {
      title: 'Blog Article',
      description: 'Read our blog article',
    };
  }
}

export default function BlogSinglePage({ params }: { params: { slug: string } }) {
  return <BlogSingleClient slug={params.slug} />;
}
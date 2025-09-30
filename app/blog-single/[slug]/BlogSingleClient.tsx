"use client";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

interface ArticleData {
  title: string;
  content: string;
  publishedAt: string;
  author: string;
  heroImageUrl: string;
  description: string;
}

interface BlogSingleClientProps {
  slug: string;
}

export default function BlogSingleClient({ slug }: BlogSingleClientProps) {
  const [article, setArticle] = useState<ArticleData>({
    title: "",
    content: "",
    publishedAt: "",
    author: "",
    heroImageUrl: "",
    description: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticle() {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts?where[slug][equals]=${encodeURIComponent(
            slug
          )}&depth=2&draft=false&locale=undefined&trash=false`
        );
        const data = await res.json();
        const doc = Array.isArray(data?.docs)
          ? data.docs[0]
          : Array.isArray(data)
          ? data[0]
          : data;

        if (doc && doc.slug === slug) {
          // Debug: Log the full document to see structure
          console.log('📊 Blog Single Article Data:', doc);
          
          // Extract simplified data
          const contentBlock = doc.layout?.find((b: any) => b.blockType === "content");
          const htmlContent = contentBlock?.locales?.[0]?.html || doc.content || "";
          
          // Try multiple image sources
          const heroImage = doc?.hero?.media || doc?.featuredImage || doc?.image || doc?.heroImage;
          let heroImageUrl = heroImage?.url || "";
          
          // If no full URL, try to construct it
          if (heroImageUrl && !heroImageUrl.startsWith('http')) {
            heroImageUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}${heroImageUrl}`;
          }
          
          console.log('🖼️ Hero Image Data:', { heroImage, heroImageUrl });

          const author = doc.populatedAuthors?.[0]?.name || doc.authors?.[0]?.name || "Unknown";
          const description = doc.description || doc.excerpt || doc.summary || "";

          setArticle({
            title: doc.title || "",
            content: htmlContent,
            publishedAt: doc.publishedAt || "",
            author: author,
            heroImageUrl: heroImageUrl,
            description: description,
          });
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    }

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2 m-0">Lade Artikel...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return notFound();
  }

  if (!article.title) {
    return notFound();
  }

  return (
    <>
      <Breadcrumbs
        title={article?.title || "Blog Article"}
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: article?.title || "Article" },
        ]}
      />

    

      {/* Article Content */}
      <div className="container py-5 blog-single">
        <div className="row justify-content-center">
          <div className="col-lg-8">
          <Image
              src={article.heroImageUrl}
              alt={article?.title || "Blog Image"}
              width={800}
              height={600}
              className="rounded-10px main-image mb-4 w-100"
            
            />
             <div className="mb-3 text-muted">
               {article.publishedAt ? (
                 new Date(article.publishedAt).toLocaleDateString("de-DE", {
                   day: "2-digit",
                   month: "long",
                   year: "numeric",
                 })
               ) : "12. August 2025"} &nbsp;|&nbsp; Autor: {article.author || "Kerstin R. Stoll"}<span> &nbsp;|&nbsp; Sprache: de</span>
             </div>
            {!article.heroImageUrl && (
              <h1
                className="mb-4 text-center"
                style={{ color: "rgb(92, 55, 125)" }}
              >
                {article.title}
              </h1>
            )}
<p><strong>{article.description || "Kurze Beschreibung zum Artikel."}</strong></p>
            {/* Published Date */}
            {article.publishedAt && !article.heroImageUrl && (
              <p className="text-muted text-center mb-4">
                {new Date(article.publishedAt).toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}

            {/* Content */}
            {article.content && (
              <div
                className="article-content"
                style={{
                  color: "#333",
                  lineHeight: "1.8",
                  fontSize: "16px",
                }}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            )}

         
          </div>
        </div>
      </div>
    </>
  );
}

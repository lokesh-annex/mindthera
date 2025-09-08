"use client";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function BlogSinglePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:3001/api/posts/68b9654e0cdce0790917cd22?depth=2&draft=false&locale=undefined&trash=false`
        );
        const data = await res.json();

        // slug match check
        if (data.slug === slug) {
          setArticle(data);
        } else {
          setArticle(null);
        }
      } catch (err) {
        setArticle(null);
      }
      setLoading(false);
    }

    fetchArticle();
  }, [slug]);

  if (loading) return <div className="container py-5">Loading...</div>;
  if (!article) return notFound();

  // Fields from API
  const imageUrl = article.heroImage?.url
    ? `http://localhost:3001${article.heroImage.url}`
    : null;
  const author = article.populatedAuthors?.[0]?.name || "Unknown";
  const date = new Date(article.publishedAt).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const locale = article.meta?.locales?.[0]?.locale;

  // Convert content JSON to HTML string
  const htmlContent =
    article.content?.root?.children
      ?.map((block: any) =>
        block.children.map((c: any) => c.text).join("")
      )
      .join("") || "";

  return (
    <main>
      <Breadcrumbs
        title={article.title}
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: article.title },
        ]}
      />
      <section className="container py-5 blog-single">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {imageUrl ? (
              <Image
                src={imageUrl}
                width={800}
                height={600}
                alt={article.title}
                className="rounded-10px main-image mb-4 w-100"
              />
            ) : (
              <div
                className="main-image mb-4 w-100"
                style={{
                  height: 600,
                  background: "#eee",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                No Image
              </div>
            )}

            <div className="mb-3 text-muted">
              {date} &nbsp;|&nbsp; Autor: {author}
              {locale && <span> &nbsp;|&nbsp; Sprache: {locale}</span>}
            </div>

            <article
              className="blog-content"
              dangerouslySetInnerHTML={{
                __html: `<p><strong>${article.description}</strong></p>${htmlContent}`,
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

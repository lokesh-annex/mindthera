"use client";
import Image from "next/image";
import Link from "next/link";
import { useBlogPosts } from "../hooks/useBlogPosts";

const BlogList = () => {
  const { posts: articles, loading } = useBlogPosts();

  if (loading) return <div>Lade Blogs...</div>;

  return (
    <>
      {articles.map((article, idx) => {
        // Resolve image with sizes fallback
        const hero = article.heroImage || article.image;
        const rawImg = hero?.url || hero?.url || hero?.url || hero?.url || "";
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";
        const imageUrl = rawImg
          ? (rawImg.startsWith("http") ? rawImg : `${baseUrl}${rawImg}`)
          : "/images/blog/placeholder.jpg";
        const slug = article.slug;
        const title = article.title;
        const description = article.description;
        const date = article.publishedAt
          ? new Date(article.publishedAt).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" })
          : "";
        return (
          <div className="col-lg-4 col-md-6 mb10" key={idx}>
            <div className="rounded-20px">
              <div className="post-image rounded-10px">
                <Image
                  alt={title || "Blog post"}
                  src={imageUrl}
                  className="lazy h-100"
                  height={300}
                  width={400}
                />
              </div>
              <div className="pt-2 h-100">
                <Link href={`/blog-single/${slug}`} className="text-dark text-decoration-none">
                  <h4 className="text-dark">{title}</h4>
                </Link>
                <p className="mb-3">{description}</p>
                <div className="relative bg-grey p-1 px-3 rounded-10px">
                  <div className="d-inline fs-14 fw-bold me-3">
                    <i className="bi bi-calendar id-color me-2"></i>
                    {date}
                   
                  </div>
                  <div className="d-inline fs-14 fw-600 ms-3">
                    <i className="bi bi-person me-1"></i>
                    {article.populatedAuthors?.[0]?.name || "Autor"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogList;

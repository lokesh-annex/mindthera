"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

<<<<<<< HEAD
const BlogList = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch(
          "http://localhost:3001/api/posts?depth=2&draft=false&locale=undefined&trash=false"
        );
        const data = await res.json();
        console.log("Fetched articles data:", data);
        if (Array.isArray(data.docs)) {
          setArticles(data.docs);
        } else if (Array.isArray(data)) {
          setArticles(data);
        } else {
          setArticles([]);
        }
      } catch (err) {
        console.error("Error fetching articles:", err);
        setArticles([]);
      }
      setLoading(false);
    }
    fetchArticles();
  }, []);

  if (loading) return <div>Lade Blogs...</div>;

  return (
    <>
      {articles.map((article, idx) => {
        // API returns docs array, so use correct fields
        const imageUrl = article.heroImage?.sizes?.og?.url
          ? `http://localhost:3001${article.heroImage.sizes.og.url}`
          : article.heroImage?.url
          ? `http://localhost:3001${article.heroImage.url}`
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
                  alt={title}
                  src={imageUrl}
                  className="lazy h-100"
                  height={300}
                  width={400}
                />
=======
const BlogList = () => (
  <>
    {articles.map((article, idx) => (
      <div className="col-lg-4 col-md-6 mb10 position-relative z-10" key={idx}>
        <div className="rounded-20px">
          <div className="post-image rounded-10px">
            <Image
              alt=""
              src={article.image}
              className="lazy h-100"
              height={300}
              width={400}
            />
          </div>
          <div className="pt-2 h-100">
            <Link href={`/blog-single/${article.slug}`} className="text-dark text-decoration-none">
              <h4 className="text-dark">{article.title}</h4>
            </Link>
            <p className="mb-3">{article.description}</p>
            <div className="relative bg-grey p-1 px-3 rounded-10px">
              <div className="d-inline fs-14 fw-bold me-3">
                <i className="bi bi-calendar id-color me-2"></i>
                {article.date}
>>>>>>> 2895d65f0c93258108df2d8b3d8019ff6643cfab
              </div>
              <div className="pt-2 h-100">
                <Link
                  href={`/blog/${slug}`}
                  className="text-dark text-decoration-none"
                >
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

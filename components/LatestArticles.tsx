"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const API_URL = "http://localhost:3001/api/posts?depth=2&draft=false&trash=false";

interface Post {
  slug?: string;
  title?: string;
  description?: string;
  publishedAt?: string;
  heroImage?: any;
  likes?: number;
  comments?: number;
}

const toImageUrl = (post: any) => {
  const imgObj = post?.heroImage;
  if (!imgObj) return "/images/blog/placeholder.jpg";
  if (imgObj?.sizes?.og?.url) return `http://localhost:3001${imgObj.sizes.og.url}`;
  if (imgObj?.url) return `http://localhost:3001${imgObj.url}`;
  return "/images/blog/placeholder.jpg";
};

const LatestArticles = () => {
  const [articles, setArticles] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch(API_URL, { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        const docs = Array.isArray(json?.docs) ? json.docs : Array.isArray(json) ? json : [];
        if (active) setArticles(docs as Post[]);
      } catch (e: any) {
        if (active) setError(e.message || 'Fehler beim Laden');
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, []);

  if (loading) return <section className="blog-page-homepage pt-lg-7 bg-white text-dark"><div className="container"><p>Lade...</p></div></section>;
  if (error) return <section className="blog-page-homepage pt-lg-7 bg-white text-dark"><div className="container"><p className='text-danger'>Error: {error}</p></div></section>;

  if (!articles.length) return <section className="blog-page-homepage pt-lg-7 bg-white text-dark"><div className="container"><p>Keine Artikel gefunden.</p></div></section>;

  const [main, ...rest] = articles;
  const sidebar = rest.slice(0, 3);
  const mainDate = main?.publishedAt ? new Date(main.publishedAt) : null;
  const mainDay = mainDate ? mainDate.toLocaleDateString('de-DE', { day: '2-digit' }) : '';
  const mainMonth = mainDate ? mainDate.toLocaleDateString('de-DE', { month: 'short' }) : '';
  const mainYear = mainDate ? mainDate.getFullYear() : '';
  const mainImg = toImageUrl(main);
  return (
    <section className="blog-page-homepage pt-lg-7 bg-white text-dark">
      <div className="container">
        <p className="text-uppercase text-muted fw-semibold small mb-1">
          Unser Blog
        </p>
        <h2 className="display-5 fw-bold mb-5">Der neuste Artikel</h2>
        <div className="row">
          {/* Main big article */}
          <div className="col-lg-6 mb-4">
            <div className="position-relative">
              <Link href={`/blog-single/${main.slug}`}>
                <Image src={mainImg} alt={main?.title || ''} className="img-fluid" width={600} height={500} />
              </Link>
            </div>
            <div className="d-flex mt-3">
              <div className="me-3 text-center">
                <h2 className="fw-bold mb-0">{mainDay}</h2>
                <small className="text-muted text-uppercase">{mainMonth} {mainYear}</small>
              </div>
              <div>
                <Link href={`/blog-single/${main.slug}`}>
                  <h2 className="fw-bold">{main.title}</h2>
                </Link>
                <p className="text-muted mb-2 small">{main.description}</p>
                <small className="text-muted">
                  {(main as any)?.likes || 0} Likes &nbsp;•&nbsp; {(main as any)?.comments || 0} Comment
                </small>
              </div>
            </div>
          </div>
          {/* Sidebar articles */}
          <div className="col-lg-6">
            {sidebar.map((item: any, idx: number) => {
              const img = toImageUrl(item);
              const dateStr = item?.publishedAt ? new Date(item.publishedAt).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' }) : '';
              return (
              <div key={idx} className="d-flex blog-article-home mb-4 align-items-center">
                <div className="flex-shrink-0 me-3 blog-image">
                  <Image src={img} alt={item?.title || ''} width={100} height={100} className="img-fluid" />
                </div>
                <div>
                  <small className="text-uppercase text-muted d-block mb-1">{dateStr}</small>
                  <Link href={`/blog-single/${item.slug}`}><h3 className="fw-bold mb-0">{item.title}</h3></Link>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;

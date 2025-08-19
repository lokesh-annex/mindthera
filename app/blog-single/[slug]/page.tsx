export const output = "export";

export function generateStaticParams() {
  return articles.map(article => ({ slug: slugify(article.title) }));
}

import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";

const articles = [
  {
    title: "Wie fühlt sich ein Leben ohne gespeichertes Trauma an?",
    image: "/images/blog/lamp.jpg",
    date: "12 August, 2025",
    description: "Kurze Beschreibung zum Artikel.",
    author: "Brunilda Doniger"
  },
  {
    title: "Ich baue Räume – keine Konzepte.",
    image: "/images/blog/holi.jpg",
    date: "25 July, 2025 ",
    description: "Warum ich mich Bewusstseins-Architektin nenne",
    author: "Brunilda Doniger"
  },
  {
    title: "Die 9 Traumabereiche – Wie tief sitzende Muster unser Leben prägen",
    image: "/images/blog/krishna1.jpg",
    date: "1 August, 2025",
    description: "Warum ich mich Bewusstseins-Architektin nenne",
    author: "Brunilda Doniger"
  },
  {
    title: "Die Urform der Menschlichkeit ist das befreite Trauma",
    image: "/images/blog/festival.jpg",
    date: "8 August, 2025",
    description: "Kurze Beschreibung zum Artikel.",
    author: "Brunilda Doniger"
  },
];

function slugify(title:any) {
  return encodeURIComponent(title.replace(/\s+/g, '-').toLowerCase());
}

export default function BlogSinglePage({ params }: any) {
  const { slug } = params;
  const article = articles.find(a => slugify(a.title) === slug);

  if (!article) {
    return (
      <main className="container py-5">
        <h1>Artikel nicht gefunden</h1>
        <p>Der gewünschte Blog-Artikel existiert nicht.</p>
      </main>
    );
  }

  return (
    <main>
      <Breadcrumbs
        title={article.title}
        items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: article.title }]}
      />
      <section className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="mb-4">{article.title}</h1>
            <Image src={article.image} width={800} height={400} alt="Blog" className="rounded-10px mb-4 w-100" />
            <div className="mb-3 text-muted">{article.date} &nbsp;|&nbsp; Autor: {article.author}</div>
            <article className="blog-content">
              <p><strong>{article.description}</strong></p>
              {/* PDF content or summary can be inserted here for each article */}
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

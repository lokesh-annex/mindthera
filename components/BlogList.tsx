import Image from "next/image";
import Link from "next/link";
const articles = [
  {
    title: "Wie fühlt sich ein Leben ohne gespeichertes Trauma an?",
    image: "/images/blog/lamp.jpg",
    date: "12 August, 2025",
    likes: 0,
    comments: 1,
    mainDay: "12",
    mainMonth: "Aug",
    mainYear: "2025",
    description: "Kurze Beschreibung zum Artikel.",
    author: "Brunilda Doniger"
  },
  {
    title: "Ich baue Räume – keine Konzepte.",
    image: "/images/blog/holi.jpg",
    date: "25 July, 2025 ",
    likes: 0,
    comments: 1,
    mainDay: "02",
    mainMonth: "May",
    description: "Warum ich mich Bewusstseins-Architektin nenne",
    author: "Brunilda Doniger"
  },
  {
    title: "Die 9 Traumabereiche – Wie tief sitzende Muster unser Leben prägen",
    image: "/images/blog/krishna1.jpg",
    date: "1 August, 2025",
    likes: 0,
    comments: 1,
    mainDay: "24",
    mainMonth: "Apr",
    description: "Warum ich mich Bewusstseins-Architektin nenne",
    author: "Brunilda Doniger"
  },
  {
    title: "Die Urform der Menschlichkeit ist das befreite Trauma",
    image: "/images/blog/festival.jpg",
    date: "8 August, 2025",
    likes: 0,
    comments: 1,
    mainDay: "10",
    mainMonth: "May",
    description: "Kurze Beschreibung zum Artikel.",
    author: "Brunilda Doniger"
  },
];

const BlogList = () => (
  <>
    {articles.map((article, idx) => (
      <div className="col-lg-4 col-md-6 mb10" key={idx}>
        <div className="rounded-20px">
          <div className="post-image rounded-10px">
            <Image
              alt=""
              src={article.image}
              className="lazy w-100"
              height={300}
              width={400}
            />
          </div>
          <div className="pt-2 h-100">
            <Link href={`/blog-single/${encodeURIComponent(article.title.replace(/\s+/g, '-').toLowerCase())}`} className="text-dark text-decoration-none">
              <h4 className="text-dark">{article.title}</h4>
            </Link>
            <p className="mb-3">{article.description}</p>
            <div className="relative bg-grey p-1 px-3 rounded-10px">
              <div className="d-inline fs-14 fw-bold me-3">
                <i className="bi bi-calendar id-color me-2"></i>
                {article.date}
              </div>
              <div className="d-inline fs-14 fw-600 ms-3">
                <i className="bi bi-person me-1"></i>
                {article.author || "Autor"}
              </div>
             
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default BlogList;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const articles = [
    {
    title: "Wie fühlt sich ein Leben ohne gespeichertes Trauma an?",
    image: "/images/blog/lamp.jpg",
    slug: "wie-fuehlt-sich-ein-leben-ohne-gespeichertes-trauma-an",
    date: "12 August, 2025",
    likes: 0,
    comments: 1,
    mainDay: "12",
    mainMonth: "Aug",
    mainYear: "2025",
    description: "Kurze Beschreibung zum Artikel."
    
  },
   {
    title: "Ich baue Räume – keine Konzepte.",
     slug: "ich-baue-raeume-keine-konzepte",
    image: "/images/blog/holi.jpg",
    date: "25 July, 2025 ",
    likes: 0,
    comments: 1,
    mainDay: "02",
    mainMonth: "May",
    description: " Wie tief sitzende Muster unser Leben prägen"
  },
  {
    title: "Die 9 Traumabereiche – Wie tief sitzende Muster unser Leben prägen",
      slug: "die-9-traumabereiche-wie-tief-sitzende-muster-unser-leben-praegen",
    image: "/images/blog/krishna1.jpg",
    date: "1 August, 2025",
    likes: 0,
    comments: 1,
    mainDay: "24",
    mainMonth: "Apr",
    description: " Wie tief sitzende Muster unser Leben prägen"
  },

  {
    title: "Die Urform der Menschlichkeit ist das befreite Trauma",
     slug: "die-urform-der-menschlichkeit-ist-das-befreite-trauma",
    image: "/images/blog/festival.jpg",
    date: "8 August, 2025",
    likes: 0,
    comments: 1,
    mainDay: "10",
    mainMonth: "May",
    description: "Kurze Beschreibung zum Artikel."
  },

   
];

const LatestArticles = () => {
  // Swap: first article is main, next 3 are sidebar
  const [main, ...sidebar] = articles;
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
                <Image
                  src={main.image}
                  alt={main.title}
                  className="img-fluid"
                  width={600}
                  height={500}
                />
              </Link>
            </div>
            <div className="d-flex mt-3">
              <div className="me-3 text-center">
                <h2 className="fw-bold mb-0">{main.mainDay}</h2>
                <small className="text-muted text-uppercase">{main.mainMonth} {main.mainYear}</small>
              </div>
              <div>
                  <Link href={`/blog-single/${main.slug}`}>
                <h2 className="fw-bold">{main.title}</h2>
                </Link>
                <p className="text-muted mb-2 small">{main.description}</p>
                <small className="text-muted">
                  {main.likes} Likes &nbsp;•&nbsp; {main.comments} Comment
                </small>
              </div>
            </div>
          </div>
          {/* Sidebar articles */}
          <div className="col-lg-6">
            {sidebar.map((item, idx) => (
              <div key={idx} className="d-flex blog-article-home mb-4 align-items-center">
                <div className="flex-shrink-0 me-3 blog-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="img-fluid"
                  />
                </div>
                <div>
                  <small className="text-uppercase text-muted d-block mb-1">
                    {item.date}
                  </small>
                  <Link href={`/blog-single/${item.slug}`}>
                    <h3 className="fw-bold mb-0">{item.title}</h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;

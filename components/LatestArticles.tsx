import React from "react";
import Image from "next/image";

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
    description: "Kurze Beschreibung zum Artikel."
  },
   {
    title: "Ich baue Räume – keine Konzepte.",
    image: "/images/blog/holi.jpg",
    date: "25 July, 2025 ",
    likes: 0,
    comments: 1,
    mainDay: "02",
    mainMonth: "May",
    description: "Warum ich mich Bewusstseins-Architektin nenne"
  },
  {
    title: "Die 9 Traumabereiche – Wie tief sitzende Muster unser Leben prägen",
    image: "/images/blog/krishna1.jpg",
    date: "1 August, 2025",
    likes: 0,
    comments: 1,
    mainDay: "24",
    mainMonth: "Apr",
    description: "Warum ich mich Bewusstseins-Architektin nenne"
  },

  {
    title: "Die Urform der Menschlichkeit ist das befreite Trauma",
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
    <section className="pt-lg-7 bg-white text-dark">
      <div className="container">
        <p className="text-uppercase text-muted fw-semibold small mb-1">
          Unser Blog
        </p>
        <h2 className="display-5 fw-bold mb-5">Der neuste Artikel</h2>
        <div className="row">
          {/* Main big article */}
          <div className="col-lg-6 mb-4">
            <div className="position-relative">
              <Image
                src={main.image}
                alt={main.title}
                className="img-fluid"
                width={600}
                height={500}
              />
            </div>
            <div className="d-flex mt-3">
              <div className="me-3 text-center">
                <h2 className="fw-bold mb-0">{main.mainDay}</h2>
                <small className="text-muted text-uppercase">{main.mainMonth} {main.mainYear}</small>
              </div>
              <div>
                <h2 className="fw-bold">{main.title}</h2>
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
              <div key={idx} className="d-flex mb-4 align-items-center">
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
                  <h3 className="fw-bold mb-0">{item.title}</h3>
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

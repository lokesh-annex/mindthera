import Image from "next/image";
const blogs = [
  {
    image: "images/blog/holi.jpg",
    title: "ch baue Räume – keine Konzepte.",
    link: "blog-single.html",
    desc: "Warum ich mich Bewusstseins-Architektin nenne",
    author: "Brunilda Doniger",
    authorImg: "images/testimonial/1.jpg",
    date: "18 Mar 2024",

  },
  {
    image: "images/blog/krishna1.jpg",
    title: "Die 9 Traumabereiche – Wie tief sitzende Muster unser Leben prägen",
    link: "blog-single.html",
    desc: "… und wie Harmonyum Trauma Release sie transformieren kann",
    author: "Brunilda Doniger",
    authorImg: "images/testimonial/1.jpg",
    date: "18 Mar 2024",

  },
  {
    image: "images/blog/festival.jpg",
    title: "Die Urform der Menschlichkeit ist das befreite Trauma",
    link: "blog-single.html",
    desc: "Wie tiefenwirksame Heilung jenseits von Sprache, Analyse und Geschichte geschieht",
    author: "Brunilda Doniger",
    authorImg: "images/testimonial/1.jpg",
    date: "18 Mar 2024",
  
  },
  {
    image: "images/blog/lamp.jpg",
    title: "Wie fühlt sich ein Leben ohne gespeichertes Trauma an?",
    link: "blog-single.html",
    desc: "Ein Einblick in das, was du tief in dir schon kennst.",
    author: "Brunilda Doniger",
    authorImg: "images/testimonial/1.jpg",
    date: "18 Mar 2024",
    
  }
];

const BlogList = () => (
  <>
    {blogs.map((blog, idx) => (
      <div className="col-lg-4 col-md-6 mb10" key={idx}>
        <div className="rounded-20px">
          <div className="post-image rounded-10px">
           
            <Image
              alt=""
              src={blog.image}
              className="lazy w-100"
              height={300}
              width={400}
            />
          </div>
          <div className="pt-2 h-100">
            <h4>
              <a className="text-dark" href={blog.link}>
                {blog.title}
              </a>
            </h4>
            <p className="mb-3">{blog.desc}</p>
            <div className="relative bg-grey p-1 px-3 rounded-10px">
              <div className="d-inline fs-14 fw-bold me-3">{blog.author}</div>
              <div className="d-inline fs-14 fw-600">
                <i className="bi bi-calendar id-color me-2"></i>
                {blog.date}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default BlogList;

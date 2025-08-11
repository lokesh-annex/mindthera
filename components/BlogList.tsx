import Image from "next/image";
const blogs = [
  {
    image: "images/blog/holi.jpg",
    title: "The Power of Positive Thinking",
    link: "blog-single.html",
    desc: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
    author: "Brunilda Doniger",
    authorImg: "images/testimonial/1.jpg",
    date: "18 Mar 2024",
    tag: "tips & tricks",
  },
  {
    image: "images/blog/holi.jpg",
    title: "Understanding the Roots of Anxiety",
    link: "blog-single.html",
    desc: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
    author: "Brunilda Doniger",
    authorImg: "images/testimonial/1.jpg",
    date: "18 Mar 2024",
    tag: "tips & tricks",
  },
  {
    image: "images/blog/holi.jpg",
    title: "The Psychology of Procrastination",
    link: "blog-single.html",
    desc: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
    author: "Brunilda Doniger",
    authorImg: "images/testimonial/1.jpg",
    date: "18 Mar 2024",
    tag: "tips & tricks",
  },
  {
    image: "images/blog/holi.jpg",
    title: "Stress Management Techniques",
    link: "blog-single.html",
    desc: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
    author: "Brunilda Doniger",
    authorImg: "images/testimonial/1.jpg",
    date: "18 Mar 2024",
    tag: "tips & tricks",
  },
  {
    image: "images/blog/holi.jpg",
    title: "The Psychology of Resilience",
    link: "blog-single.html",
    desc: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
    author: "Brunilda Doniger",
    authorImg: "images/testimonial/1.jpg",
    date: "18 Mar 2024",
    tag: "tips & tricks",
  },
  {
    image: "images/blog/holi.jpg",
    title: "The Secrets to a Fulfilling Life",
    link: "blog-single.html",
    desc: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
    author: "Brunilda Doniger",
    authorImg: "images/testimonial/1.jpg",
    date: "18 Mar 2024",
    tag: "tips & tricks",
  },
];

const BlogList = () => (
  <>
    {blogs.map((blog, idx) => (
      <div className="col-lg-4 col-md-6 mb10" key={idx}>
        <div className="rounded-20px">
          <div className="post-image rounded-10px">
            <div className="d-tagline">
              <span>{blog.tag}</span>
            </div>
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

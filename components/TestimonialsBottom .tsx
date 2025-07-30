import React from "react";

const testimonials = [
  {
    name: "Anjali Sharma",
    text: "MindThera helped me rediscover my inner peace. The therapists are truly caring and professional.",
    image: "/images/1.webp",
    role: "Student",
  },
  {
    name: "Rahul Verma",
    text: "The sessions were transformative. I feel more confident and positive about life.",
    image: "/images/1.webp",
    role: "Software Engineer",
  },
  {
    name: "Priya Singh",
    text: "A wonderful experience! The support and guidance I received made a real difference.",
    image: "/images/1.webp",
    role: "Artist",
  },
];

const TestimonialsBottom = () => {
  return (
    <section className="testimonials-bottom-section">
      <div className="testimonials-header">
        <span className="testimonials-label">Testimonials</span>
        <h2 className="testimonials-title">What Our Clients Say</h2>
      </div>
      <div className="testimonials-cards">
        {testimonials.map((testimonial, idx) => (
          <div className="testimonial-card" key={idx}>
            <div className="testimonial-image-wrap">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
            </div>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <span className="testimonial-role">{testimonial.role}</span>
            <p className="testimonial-text">{testimonial.text}</p>
        
            <span className="testimonial-index">{`0${idx + 1}`}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsBottom;
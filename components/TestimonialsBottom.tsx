import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const testimonials = [
  {
    name: "ganz ohne",
    text: "Nach nur einer Sitzung fühlte ich mich, als sei ein tonnenschwerer Druck von mir genommen worden.Ich konnte wieder frei durchatmen. Es war, als hätte mein Körper einen uralten Kampf beendet – ganz ohne Worte.",
    image: "/images/27.png",
    role: "Student",
  },
  {
    name: "Rahul Verma",
    text: "Ich war emotional blockiert, konnte weder Trauer noch Freude richtig fühlen.Nach der dritten HTR-Sitzung kam Bewegung in meine Empfindungen Ich fühlte zum ersten Mal wieder Verbindung – ohne Drama, ohne Wiederholung meiner Geschichte.",
    image: "/images/28.png",
    role: "Software Engineer",
  },
  {
    name: "Priya Singh",
    text: "Ich konnte wochenlang nicht schlafen. Mein Nervensystem war ständig im Alarmzustand. Schon nach zwei HTR-Terminen spürte ich, wie mein Körper nachts zur Ruhe kam. Es war, als hätte mein System endlich ‚Ja‘ zur Entspannung gesagt.",
     image: "/images/29.png",
    role: "Artist",
  },
  {
    name: "Sofia Müller",
    text: "Ich habe den Aufbau der Energie bei jeder Behandlung sehr klar gespürt. HTR gab der Heilung meiner multiplen Fraktur am Wadenbein den entscheidenden Impuls.",
     image: "/images/30.png",
    role: "Designer",
  },
];

const TestimonialsBottom = () => {
  return (
    <section className="testimonials-bottom-section">
      <div className="container">
        <div className="testimonials-header">
        <button
            className="btn fw-bold mb-3 btn-main px-5 py-3">
            Feedback
          </button>
          <h2 className="testimonials-title">Erfahrungsberichte von KundInnen</h2>
         
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={32}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="testimonials-cards"
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <div className="testimonial-card">
                <div className="testimonial-image-wrap">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={200}
                    height={200}
                    className="testimonial-image"
                  />
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <span className="testimonial-index">{`0${idx + 1}`}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
       
      </div>
    </section>
  );
};

export default TestimonialsBottom;

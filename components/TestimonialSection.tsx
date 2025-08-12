'use client';
import React from 'react';

const TestimonialSection = () => {
  return (
    <section className="position-relative testimonial-section text-light">
     
   
      <div className="container">
        <div className="row g-4 gx-5 relative z-index-1000 align-items-center">
          <div className="col-lg-2 offset-lg-1 col-sm-4 text-center">
            <img
              src="/images/team/2.webp"
              className="img-fluid circle"
              alt="Jeffery Mussman"
            />
            <h5 className="mt-3 mb-0">Kerstin R. Stoll</h5>
            <p className="small mb-2">CEO</p>
          </div>
          <div className="col-lg-8 col-sm-8">
            <p
              className="mb20 fs-32 fw-600 lh-1-3"
              data-wow-delay=".2s"
            >
           {/* Kerstin R. Stoll, CEO <br /> */}
Ich erinnere dich an das, was du längst bist –
durch Präsenz, Energie und seelische Wahrheit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

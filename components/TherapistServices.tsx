'use client';
import React from 'react';

const TherapistServices = () => {
  return (
    <section className="relative overflow-hidden pb60">
      <img
        src="/images/bg-2-copyright.png"
        className="w-20 absolute top-20 start-0 sw-anim"
        alt=""
      />
         <img
        src="/images/misc/flowers-crop-2.webp"
        className="w-30 absolute top-0 start-0 sw-anim"
        alt=""
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 text-center">
            <div className="subtitle mb-3">Our Services</div>
            <h2 className="" data-wow-delay=".2s">
              Therapist &amp; <span className="alt-font fw-500 fs-64 id-color-2">Treatments</span>
            </h2>
            <p className="lead mb-0 ">
              Qui culpa qui consequat officia cillum quis irure aliquip ut dolore sit eu culpa ut
              irure nisi occaecat dolore adipisicing do pariatur.
            </p>
            <div className="spacer-single" />
            <div className="spacer-half" />
          </div>
        </div>

        <div className="row g-4">
          {[
            {
              title: 'Individual Therapy',
              image: '1.webp',
            },
            {
              title: 'Couples Counseling',
              image: '2.webp',
            },
            {
              title: 'Career Counseling',
              image: '3.webp',
            },
            {
              title: 'Stress Management',
              image: '4.webp',
            },
            {
              title: 'Anxiety Treatment',
              image: '5.webp',
            },
            {
              title: 'Depression Therapy',
              image: '6.webp',
            },
          ].map((service, i) => (
            <div key={i} className="col-lg-4 col-sm-6">
              <div className="relative mb-3">
                <a href="" className="d-block hover mb-3">
                  <div className="relative overflow-hidden rounded-20px shadow-soft">
                    <img
                      src="/images/misc/flowers-crop-3-white.webp"
                      className="w-50 end-0 absolute hover-op-0"
                      alt=""
                    />
                    <div className="absolute start-0 w-100 abs-middle fs-36 text-white text-center">
                      <span className="btn-main hover-scale-in-2">Read More</span>
                    </div>
                    <img
                      src={`/images/services/${service.image}`}
                      className="img-fluid hover-scale-1-2"
                      alt={service.title}
                    />
                  </div>
                </a>
                <h4>{service.title}</h4>
                <p className="no-bottom">
                  Sint tempor consequat ad commodo nostrud occaecat ad nulla labore esse culpa non
                  dolore pariatur fugiat.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="spacer-double" />
      </div>
    </section>
  );
};

export default TherapistServices;

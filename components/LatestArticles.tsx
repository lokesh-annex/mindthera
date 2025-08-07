import React from 'react';
import Image from 'next/image';

const LatestArticles = () => {
  return (
    <section className="pt-lg-7 bg-white text-dark">
      <div className="container">
        <p className="text-uppercase text-muted fw-semibold small mb-1">Unser Blog</p>
        <h2 className="display-5 fw-bold mb-5">Der neuste Artikel</h2>

        <div className="row">
          {/* Main big article */}
          <div className="col-lg-6 mb-4">
            <div className="position-relative">
              <Image
                src="/images/blog/holi.jpg"
                alt="Traditional Holi delicacies"
                className="img-fluid"
                width={900}
                height={500}
              />
            
            </div>
            <div className="d-flex mt-3">
              <div className="me-3 text-center">
                <h2 className="fw-bold mb-0">24</h2>
                <small className="text-muted text-uppercase">Apr</small>
              </div>
              <div>
                <h2 className="fw-bold">Ich baue Räume – keine Konzepte.</h2>
                <p className="text-muted mb-2 small">
                 Warum ich mich Bewusstseins-Architektin nenne
                </p>
                <small className="text-muted">0 Likes &nbsp;•&nbsp; 1 Comment</small>
              </div>
            </div>
          </div>

          {/* Sidebar articles */}
          <div className="col-lg-6">
            {[
              {
                title: 'Ich baue Räume – keine Konzepte.',
                image: '/images/blog/krishna1.jpg',
              },
              {
                title: 'Ich baue Räume – keine Konzepte.',
                image: '/images/blog/festival.jpg',
              },
              {
                title: 'Ich baue Räume – keine Konzepte.',
                image: '/images/blog/lamp.jpg',
              },
            ].map((item, idx) => (
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
                  <small className="text-uppercase text-muted d-block mb-1">Apr 24, 2022</small>
                  <h3 className="fw-bold mb-0 ">{item.title}</h3>
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

import React from 'react';

import 'bootstrap-icons/font/bootstrap-icons.css';
const AboutUS = () => {
  return (
      <section>
        <div className="container relative">
          <img
            src="/images/misc/leaf.webp"
            className="absolute top-0 end-0 w-10 anim-up-down sm-hide"
            alt=""
          />

          <div className="row g-4 gx-5 align-items-center">
            {/* Left Column */}
            <div className="col-lg-6">
              <div className="relative">
                <div className="row g-4 z-1000">
                  <div className="col-6">
                    <div className="spacer-single sm-hide"></div>
                    <img
                      src="/images/misc/11.webp"
                      className="img-fluid rounded-10px mb-4 w-70 ms-30 "
                      data-wow-delay=".0s"
                      alt=""
                    />
                    <img
                      src="/images/misc/3.webp"
                      className="img-fluid rounded-10px"
                      data-wow-delay=".1s"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src="/images/misc/10.webp"
                      className="img-fluid rounded-10px mb-4 "
                      data-wow-delay=".2s"
                      alt=""
                    />
                    <img
                      src="/images/misc/8.webp"
                      className="img-fluid rounded-10px w-70 "
                      data-wow-delay=".3s"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6">
              <div className="subtitle  mb-3">Welcome</div>
              <h2 className="">
                Transform Your
                <span className="d-block mt-2 alt-font fw-500 fs-72 id-color-2">
                  Mental Health
                </span>
              </h2>
              <p className="">
                Located in New York, NY, Mindthera specializes in providing
                top-notch psychotherapy services. Our team of experienced
                professionals is dedicated to helping you achieve mental
                wellness and personal growth. Trust Mindthera for all your
                psychotherapy needs.
              </p>

              <div className="row g-4">
                <div className="col-xl-7">
                  <ul className="ul-style-2 text-dark fw-600">
                    <li>Ut cupidatat veniam cillum.</li>
                    <li>Ex labore dolore eiusmod aliquip.</li>
                    <li>Culpa exercitation.</li>
                    <li>Lorem ipsum elit sed commodo amet.</li>
                  </ul>
                </div>

                <div className="col-xl-5">
                  <div className="me-4">
                    <h4 className="fw-bold mb-1">Excellent</h4>
                    <div className="de-rating-ext fs-15">
                      <span className="d-stars">
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                      </span>
                      <div className="fs-14 mb-0">
                        Based on <span className="fw-bold">185 reviews</span>
                      </div>
                      <img
                        src="images/misc/trustpilot-invert.webp"
                        className="w-100px"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="spacer-10"></div>
              <a className="btn-main " href="about.html">
                About Us
              </a>
            </div>
          </div>
        </div>
      </section>

  );
};

export default AboutUS;

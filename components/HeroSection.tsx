import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroSection = () => {
  return (
    <>
    <section className="section-dark text-light hero-section no-top no-bottom position-relative overflow-hidden z-1000">
      <div className="v-center">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="swiper vh-100"
        >
        
          {/* Slide 2 */}
          <SwiperSlide>
            <div
              className="swiper-inner two"
              style={{ backgroundImage: "url(/images/slider/2.jpg)",backgroundSize: "100% 114%", backgroundPosition: "10%" }}
            >
              <div className="sw-caption relative z-1000">
                <div className="container">
                  <div className="row gx-5 align-items-center">
                    <div className="spacer-double"></div>
                    <div className="col-lg-6 offset-lg-6">
                      <div className="spacer-single"></div>
                         <div className="sw-text-wrapper">
                        {/* <div className="subtitle s2 mb-2">Mindthera</div> */}
                        <h2 className="slider-title mb-3">
                          Harmonyum Trauma Release® - Die Brücke ins goldene Zeitalter
                          <span className="d-block alt-font fw-500 id-color-2 fs-56 fs-xs-36">
                           Lass los, was dich bindet. Öffne dich für vertrauen, freude und manifestation – resonanzräume für dein Leben im goldenen zeitalter.
                          </span>
                        </h2>
                        {/* <div className="col-lg-8">
                          <p className="slider-teaser mb-3">
                            WISSENSCHAFT & WEISHEIT, KÖRPER & FREQUENZ WERDEN
                            MITEINANDER VERBUNDEN
                          </p>
                        </div> */}
                        <div className="spacer-10"></div>
                        <a
                          className="btn-main mb10 mb-3"
                          href="/harmonyum"
                        >
                          Harmonyum Trauma Release®
                        </a>
                      </div>
                    </div>
                    <div className="spacer-single"></div>
                  </div>
                </div>
              </div>
              {/* <Image
                src="/images/misc/flowers-crop.webp"
                width={400}
                height={281}
                className="absolute bottom-0 start-0 sw-anim folwer-image"
                alt="Flowers background"
              /> */}
            </div>
          </SwiperSlide>
        </Swiper>

      </div>
    </section>



    </>

  );
};

export default HeroSection;

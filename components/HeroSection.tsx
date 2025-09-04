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
    <section className="section-dark text-light hero-section-slider no-top no-bottom position-relative overflow-hidden z-1000">
      
     
     
          {/* Slide 2 */}
         
            <div
              className="swiper-inner two"
              style={{ backgroundImage: "url(/images/slider/2.jpg)",backgroundSize: "100% 114%", backgroundPosition: "10%" }}
            >
             
                <div className="container">
                  <div className="row gx-5 align-items-center">
                   
                    <div className="col-lg-6 offset-lg-6">
                      <div className="spacer-single"></div>
                         <div className="sw-text-wrapper">
                        {/* <div className="subtitle s2 mb-2">Mindthera</div> */}
                        <h2 className="slider-title mb-3">
                          Harmonyum Trauma Release® - Die Brücke ins goldene Zeitalter
                          <span className="d-block alt-font fw-500 id-color-2 fs-36 fs-xs-24">
                           Lass los, was dich bindet und öffne neue Resonanzräume in deinem Leben - Vertrauen, Freude & Fülle.
                          </span>
                        </h2>
                     
                       
                        <a
                          className="btn-main mb10 mb-3"
                          href="/harmonyum"
                        >
                          Harmonyum Trauma Release®
                        </a>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            
          
      

      
    </section>



    </>

  );
};

export default HeroSection;

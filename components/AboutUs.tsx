import React from "react";
import Image from "next/image";

import "bootstrap-icons/font/bootstrap-icons.css";
const AboutUS = () => {
  return (
    <section className="relative ">
       <span className="absolute top-15 start-0">
              <Image
                src="/images/bg-2-copyright.webp"
                width={393}
                height={625}
                 
                alt="Background Copyright"
                priority
              />
                </span>
      <div className="leaf-bg">
        <Image
          src="/images/misc/leaf-1.png"
          width={140}
          height={148}
          className="absolute top-10 end-10  anim-up-down sm-hide"
          alt=""
        />
      </div>
      <div className="container ">
        <div className="row g-4 gx-5 align-items-center">
          {/* Left Column */}
          <div className="col-lg-6">
            <div className="relative">
              <div className="row g-4 z-1000">
                <div className="col-6">
                  <div className="spacer-single sm-hide"></div>
                  <Image
                    src="/images/misc/11.webp"
                    className="img-fluid rounded-10px mb-4 w-70 ms-30 "
                    data-wow-delay=".0s"
                    width={500}
                    height={500}
                    alt=""
                  />
                  <Image
                    src="/images/misc/3.webp"
                    className="img-fluid rounded-10px"
                    data-wow-delay=".1s"
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <Image
                    src="/images/misc/10.webp"
                    className="img-fluid rounded-10px mb-4 "
                    data-wow-delay=".2s"
                    width={500}
                    height={500}
                    alt=""
                  />
                  <Image
                    src="/images/misc/8.webp"
                    className="img-fluid rounded-10px w-70 "
                    data-wow-delay=".3s"
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="subtitle  mb-3">WAS WIR TUN</div>
            <h2 className="">
              Hier endet das Verbiegen –
              <span className="d-block font-italic mt-2 alt-font fw-500 fs-42 id-color-2">
                und beginnt dein ganzes Sein
              </span>
            </h2>
            <p className="">
              Diese Methode ist mehr als Entspannung. Sie ist ein sanftes, aber
              tiefes Zurücksetzen deines Nervensystems – wie ein energetischer
              Reset auf Zell-ebene.
            </p>

            <div className="row g-4">
              <div className="col-xl-12">
                <ul className="ul-style-2 text-dark fw-600">
                  <li>
                    Während dein Körper loslässt, entladen sich emotionale und
                    seelische Spannungen,die oft über Jahre gespeichert wurden –
                    ohne, dass du sie nochmal durchleben musst.
                  </li>
                  <li>
                    Es ist kein Tun. Es ist ein Geschehen lassen. Ein
                    Heimkommen. Ich arbeite mit Menschen, die fühlen statt
                    erklären wollen.
                  </li>
                  <li>
                    Die bereit sind, alte Konstrukte loszulassen – um sich
                    selbst ein neues Zuhause zu erschaffen.
                  </li>
                  <li>
                    Du musst nicht „besser werden“. Du darfst zurückkehren in
                    dein ursprüngliches GanzSein.
                  </li>
                  <li>
                    Ich halte den Raum. Für deinen nächsten Bewusstseinsschritt.
                  </li>
                </ul>
              </div>
            </div>

            <div className="spacer-10"></div>
            <a className="btn-main " href="">
              Bist du bereit?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUS;

import React from "react";
import Image from "next/image";
export default function WarumBleibtTrauma() {
  return (
    <section
      className="py-4 position-relative"
    >
       <span className="absolute top-20 start-0">
                                <Image
                                  src="/images/bg-2-copyright.webp"
                                  width={393}
                                  height={635}
                                   
                                  alt="Background Copyright"
                                  priority
                                />
                                  </span>
      <div className="container">
      <div className="row align-items-center">
         <div className="col-md-5 text-center">
          <img
            src="/images/harmonyum-new.png"
            alt="Warum bleibt Trauma bestehen?"
           
            className="img-fluid"
            style={{ background: '#fff', padding: '10px' }}
          />
        </div>
        <div className="col-md-7">
          <h2 className="fw-bold mb-3">Warum bleibt Trauma bestehen?</h2>
          <p className="dark-color" style={{fontSize:'1.2rem', lineHeight:'2.5rem'}}>Trauma wird oft unbewusst über Generationen weitergegeben und kann sich in emotionalen, mentalen oder physischen Blockaden manifestieren. Diese sind im Gewebe, in den Muskeln, im Nervensystem, in der Lypmhflüssigkeit, in den Wirbeln und auf Zellebene gespeichert. Das Trauma kann das Leben über viele Generationen hinweg belasten, bis es in der Gegenwart aufgelöst wird.</p>
        </div>
       
        </div>
      </div>
    </section>
  );
}

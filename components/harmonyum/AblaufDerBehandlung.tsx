import React from "react";
import Image from "next/image";
export default function AblaufDerBehandlung() {
  return (
    <section className="py-10  session-sec-bg">
        <span className="absolute top-0 start-0">
                          <Image
                            src="/images/bg-2-copyright.webp"
                            width={203}
                            height={425}
                             
                            alt="Background Copyright"
                            priority
                          />
                            </span>
        <div className="container">
      <h3 className="fw-bold mb-3">Ablauf der Behandlung</h3>
      <p className="dark-color" style={{fontSize:'1.2rem', lineHeight:'2.5rem'}}>Wir beginnen mit einem kurzen Gespräch. Danach liegst du für ca. 30 Minuten bekleidet auf einer Massageliege auf dem Bauch. Du bleibst dann noch eine kurze Zeit liegen. Trinke nach einer Behandlung genügend Wasser.</p>
      <p className="dark-color" style={{fontSize:'1.2rem', lineHeight:'2.5rem'}}>Es wird empfohlen, sich mindestens 7–10 Behandlungen Harmonyum Trauma Release® geben zu lassen, da es viele Traumata gibt, die vergessen bzw. verdrängt wurden oder nicht bekannt sind.</p>
      </div>
    </section>
  );
}

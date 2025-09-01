"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
const OfferPage = () => {
  const tabData = [
  {
    label: "Für Paare & Familien",
    services: [
      {
        title: "Harmonyum Trauma Release®  ",
        image: "1.webp",
        desc: "Frequenzform zur Rückverbindung",
        slug: "harmonyum-trauma-release",
      },
      {
        title: "Paar-Special mit Kinderwunsch",
        image: "2.webp",
        desc: "Ein heilender Raum für Empfängnis – körperlich, energetisch, seelisch",
        slug: "paar-special-mit-kinderwunsch",
      },
      {
        title: "Ahnenfrieden – energetische Löschung von übernommenem Trauma",
        image: "3.webp",
        desc: "Du trägst, was du fühlst. Aber manches ist alt, gehört nicht zu dir und wartet auf Erlösung.",
         slug: "ahnenfrieden-energetische-loeschung",
      },
      {
        title: "Gemeinsame Familienzeit ",
        image: "4.webp",
        desc: "Ein heilender Raum für Eltern – in Rückverbindung mit sich selbst und ihren Kindern",
         slug: "gemeinsame-familienzeit",
      },
    ],
  },

  {
    label: "Für Schwangerschaft",
    services: [
      {
        title: "Schwangerschaft",
        image: "6.webp",
        desc: "Nervensystem-Beruhigung & Rückverbindung",
         slug: "schwangerschaft",
      },
      {
        title: "Mutter & Kind – Geburts-special",
        image: "7.webp",
        desc: "die Geburt verändert alles – auch das, was oft unsichtbar bleibt",
        slug: "mutter-und-kind-geburts-special",
      },
      {
        title: "Ergänzende Begleitung Im Wochenbett",
        image: "5.webp",
        desc: "weil Rückverbindung nicht mit der Geburt deines Kindes endet",
        slug: "wochenbett-begleitung",
      },
      {
        title: "Traumata Aus Der Kindheit",
        image: "8.webp",
        desc: "die ersten Jahre prägen alles – auch das, was wir längst vergessen haben",
        slug: "traumata-aus-der-kindheit",
      },
    ],
  },
  {
    label: "Für sofortige Hilfe",
    services: [
      {
        title: "Trauma Durch Emotionale & Körperliche Blockaden ",
        image: "9.webp",
        desc: "wenn etwas zu gross war, um verarbeitet zu werden – wird es vom Körper getragen",
        slug: "trauma-durch-emotionale-und-koerperliche-blockaden",
      },
      {
        title: "Trauma Nach Unfall",
        image: "10.webp",
        desc: "Erste-Hilfe-Special mit BlueBody-Aktivierung",
        slug: "trauma-nach-unfall",
      },
      {
        title: "Trauma Durch Chronischen Stress, Burnout, Depression & Überforderung",

        image: "11.webp",
        desc: "wenn nichts mehr geht – ist es Zeit, wieder bei dir anzukommen",
         slug: "trauma-durch-stress-burnout",
      },
      {
        title: "Trauma Durch Berufliche Belastung (Z. B. Notfallmedizin, Polizei, Rettungskräfte)",
        image: "12.webp",
        desc: "wenn Helfen traumatisch wird – braucht auch die Stärke einen Raum",
         slug: "trauma-durch-berufliche-belastung",
      },
    ],
  },
  {
    label: "Unsere Spezialangebote",
    services: [
      {
        title: "Seelenentbindung – Rückgabe Inkarnierter Traumafrequenzen",
        image: "15.webp",
        desc: "manchmal reagiert der Körper auf Dinge, die der Verstand nicht kennt",
         slug: "seelenentbindung-rueckgabe-traumafrequenzen",
      },
      {
        title: "Kollektive Erlebnisse (Krieg, Pandemie, Flucht, Gewalt Etc.)",
        image: "16.webp",
        desc: "manche Erfahrungen prägen nicht nur dich – sondern ganze Felder, Gesellschaften und Kulturen",
        slug: "kollektive-erlebnisse",
      },
      {
        title: "Hier wartet eine Überraschung auf dich",
        image: "14.webp",
        desc: "Dieses Angebot ist noch in Bearbeitung und braucht noch etwas Zeit…",
         slug: "ueberraschung-angebot",
      },
      {
        title: "Stille Heilt",
        image: "13.webp",
        desc: "Retreat zur Rückverbindung mit deiner Urform",
        slug: "stille-heilt-retreat",
      },
    ],
  },
];
  return (
    <main>
      <Breadcrumbs
        title="Meine Angebote"
        items={[{ label: "Home", href: "/" }, { label: "Meine Angebote" }]}
      />
      <section className="relative pb60 pt-2 mt-5">
        <span className="absolute top-0 start-0">
                                   <Image
                                     src="/images/bg-2-copyright.webp"
                                     width={393}
                                     height={625}
                                      
                                     alt="Background Copyright"
                                     priority
                                   />
                                     </span>
        <div className="container">
       
          {tabData.map((tab, idx) => (
            <div key={tab.label} >
              <div className="row mb-4 mt-3">
                <div className="col-lg-12 mb-4 mt-3">
                  <h3 className="fw-bold mb-0" style={{ color: '#5c377d', }}>
                    {tab.label}
                  </h3>
                </div>
              </div>
              <div className="row g-3">
                {tab.services.map((service, i) => (
                  <div className="col-xl-3 col-lg-4 mb-5 col-md-6 col-sm-6" key={i}>
                      <div className="relative h-100 rounded-10px p-4 rounded-20px d-flex flex-column" style={{ background: '#f8f5fd', position: 'relative' }}>
                        <div className="alt-font absolute end-0 pe-4 fw-bold fs-24 id-color">{(i+1).toString().padStart(2, '0')}</div>
                        <Image src={`/images/services/${service.image}`} width={120} height={120} className="img-fluid circle mb-4 w-30 mt-50 shadow-soft scaleIn animated" alt={service.title} />
                        <h4>{service.title}</h4>
                        <p className="no-bottom">{service.desc}</p>
                        
                        <Link className="btn-main btn-light-trans d-flex align-items-center justify-content-center" href={`/service/${service.slug}`} style={{ position: 'absolute', right: 20, bottom: 9, margin: '0 auto', padding: '0',width: '40px', height: '40px', borderRadius: '50%', background: '#5c377d', color: '#fff', boxShadow: '0 2px 8px rgba(92,55,125,0.15)' }} aria-label="Mehr erfahren">
                          <span className="bi bi-arrow-right" style={{ fontSize: '20px', color: '#fff' }}></span>
                        </Link>
                      </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        
        </div>
      </section>

    
    </main>



    
  );
};

export default OfferPage;

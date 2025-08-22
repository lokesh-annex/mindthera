"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const tabData = [
  {
    label: "Für Paare & Familien",
    services: [
      {
        title: "Harmonyum Trauma Release  ",
        image: "1.webp",
        desc: "Frequenzform zur Rückverbindung",
        slug: "harmonyum-trauma-release",
      },
      {
        title: "Paar-special Mit Kinderwunsch",
        image: "2.webp",
        desc: "ein heilender Raum für Empfängnis – körperlich, energetisch, seelisch",
        slug: "paar-special-mit-kinderwunsch",
      },
      {
        title: "Ahnenfrieden – Energetische Löschung Von Übernommenem Trauma",
        image: "3.webp",
        desc: "du trägst, was du fühlst. Aber Manches ist alt, gehört nicht zu dir und wartet auf Erlösung.",
         slug: "ahnenfrieden-energetische-loeschung",
      },
      {
        title: "Gemeinsame Familienzeit ",
        image: "4.webp",
        desc: "ein heilender Raum für Eltern – in Rückverbindung mit sich selbst und ihren Kindern",
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

const TherapistServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative  pb60 tabs-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 text-center">
           
            <h2 className="" data-wow-delay=".2s">
              Meine <span className="alt-font fw-500 ml-4 fs-64 id-color-2">Angebote</span>
            </h2>
            {/* <p className="lead mb-0 ">Dieses Angebot ist noch in Bearbeitung und braucht noch etwas Zeit…</p> */}
            <div className="spacer-single" />
            <div className="spacer-half" />
          </div>
        </div>

        {/* Tabs */}
  <div className="d-flex justify-content-center mb-5 gap-12 flex-wrap">
          {tabData.map((tab, idx) => (
            <button
              key={tab.label}
              className={`btn rounded-7 px-4 py-2  ${
                activeTab === idx ? "bg-primary text-white" : " "
              }  fw-bold`}
              onClick={() => setActiveTab(idx)}
              style={{ minWidth: 140, borderRadius: "50px" }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="row g-4">
          {tabData[activeTab].services.map((service, i) => (
            <div key={i} className="col-lg-3 col-sm-4">
              <div className="relative mb-3" style={{ minHeight: "470px" }}>
                <Link href="/" className="d-block hover mb-3">
                  <div className="relative overflow-hidden rounded-20px ">
                    {/* <img
                      src="/images/misc/flowers-crop-3-white.webp"
                      className="w-50 end-0 absolute hover-op-0"
                      alt=""
                    /> */}
                    <div className="absolute start-0 w-100 abs-middle fs-36 text-white text-center">
                      <span className="btn-main hover-scale-in-2">
                        Read More
                      </span>
                    </div>
                    <img
                      src={`/images/services/${service.image}`}
                      className="img-fluid hover-scale-1-2"
                      alt={service.title}
                    />
                  </div>
                </Link>
                <h4 className="text-center">
                  <Link href="/" className="text-decoration-none text-dark">
                    {service.title}
                  </Link>
                </h4>
                <p className="no-bottom text-center">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

         
       </div>
       <span className="absolute top-20 start-0">
        <Image
          src="/images/bg-2-copyright.webp"
          width={393}
          height={625}
           
          alt="Background Copyright"
          priority
        />
          </span>
    </section>





  );
};

export default TherapistServices;

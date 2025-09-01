import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import ServiceHarmonyumTraumaRelease from "@/components/offer-page/ServiceHarmonyumTraumaRelease";
import ServicePaarSpecialMitKinderwunsch from "@/components/offer-page/ServicePaarSpecialMitKinderwunsch";
import ServiceAhnenfriedenEnergetischeLoeschung from "@/components/offer-page/ServiceAhnenfriedenEnergetischeLoeschung";
import ServiceGemeinsameFamilienzeit from "@/components/offer-page/ServiceGemeinsameFamilienzeit";
import ServiceSchwangerschaft from "@/components/offer-page/ServiceSchwangerschaft";
import ServiceMutterUndKindGeburtsSpecial from "@/components/offer-page/ServiceMutterUndKindGeburtsSpecial";
import ServiceWochenbettBegleitung from "@/components/offer-page/ServiceWochenbettBegleitung";
import ServiceTraumataAusDerKindheit from "@/components/offer-page/ServiceTraumataAusDerKindheit";
import ServiceTraumaDurchEmotionaleUndKoerperlicheBlockaden from "@/components/offer-page/ServiceTraumaDurchEmotionaleUndKoerperlicheBlockaden";
import ServiceTraumaNachUnfall from "@/components/offer-page/ServiceTraumaNachUnfall";
import ServiceTraumaDurchStressBurnout from "@/components/offer-page/ServiceTraumaDurchStressBurnout";
import ServiceTraumaDurchBeruflicheBelastung from "@/components/offer-page/ServiceTraumaDurchBeruflicheBelastung";
import ServiceSeelenentbindungRueckgabeTraumafrequenzen from "@/components/offer-page/ServiceSeelenentbindungRueckgabeTraumafrequenzen";
import ServiceUeberraschungAngebot from "@/components/offer-page/ServiceUeberraschungAngebot";
import ServiceKollektiveErlebnisse from "@/components/offer-page/ServiceKollektiveErlebnisse";
import ServiceStilleHeiltRetreat from "@/components/offer-page/ServiceStilleHeiltRetreat";

const serviceData: Record<
  string,
  {
    label: string;
    title: string;
    image: string;
    subtitle: string;
    description: ReactNode;
  }
> = {
  "harmonyum-trauma-release": {
    
    title: "Harmonyum Trauma Release®",
    image: "/images/services/1.webp",
    subtitle: "Frequenzform zur Rückverbindung",
    label: "Für Paare & Familien",
    description: <ServiceHarmonyumTraumaRelease />,
  },
  "paar-special-mit-kinderwunsch": {
    title: "Paar-Special mit Kinderwunsch",
    image: "/images/services/2.webp",
    subtitle: "Ein heilender Raum für Empfängnis – körperlich, energetisch, seelisch",
    label: "Für Paare & Familien",
    description: <ServicePaarSpecialMitKinderwunsch />,
  },
  "ahnenfrieden-energetische-loeschung": {
    title: "Ahnenfrieden – energetische Löschung von übernommenem Trauma",
    image: "/images/services/3.webp",
    subtitle: "Du trägst, was du fühlst. Aber manches ist alt, gehört nicht zu dir und wartet auf Erlösung.",
    label: "Für Paare & Familien",
    description: <ServiceAhnenfriedenEnergetischeLoeschung />,
  },
  "gemeinsame-familienzeit": {
    title: "Gemeinsame Familienzeit ",
    image: "/images/services/4.webp",
    subtitle: "Ein heilender Raum für Eltern – in Rückverbindung mit sich selbst und ihren Kindern",
    label: "Für Paare & Familien",
    description: <ServiceGemeinsameFamilienzeit />,
  },

  "schwangerschaft": {
    title: "Schwangerschaft",
    image: "/images/services/6.webp",
    subtitle: "Nervensystem-Beruhigung & Rückverbindung",
    label: "Für Schwangerschaft",
    description: <ServiceSchwangerschaft />,
  },
  "mutter-und-kind-geburts-special": {
    title: "Mutter & Kind – Geburts-special",
    image: "/images/services/7.webp",
    subtitle: "die Geburt verändert alles – auch das, was oft unsichtbar bleibt",
    label: "Für Schwangerschaft",
    description: <ServiceMutterUndKindGeburtsSpecial />,
  },
  "wochenbett-begleitung": {
    title: "Ergänzende Begleitung Im Wochenbett",
    image: "/images/services/5.webp",
    subtitle: "weil Rückverbindung nicht mit der Geburt deines Kindes endet",
    label: "Für Schwangerschaft",
    description: <ServiceWochenbettBegleitung />,
  },
  "traumata-aus-der-kindheit": {
    title: "Traumata Aus Der Kindheit",
    image: "/images/services/8.webp",
    subtitle: "die ersten Jahre prägen alles – auch das, was wir längst vergessen haben",
    label: "Für Schwangerschaft",
    description: <ServiceTraumataAusDerKindheit />,
  },
  "trauma-durch-emotionale-und-koerperliche-blockaden": {
    title: "Trauma durch emotionale & körperliche Blockaden ",
    image: "/images/services/9.webp",
    subtitle: "wenn etwas zu gross war, um verarbeitet zu werden – wird es vom Körper getragen",
    label: "Für sofortige Hilfe",
    description: <ServiceTraumaDurchEmotionaleUndKoerperlicheBlockaden />,
  },
  "trauma-nach-unfall": {
    title: "Trauma nach Unfall",
    image: "/images/services/10.webp",
    subtitle: "Erste-Hilfe-Special mit BlueBody-Aktivierung",
    label: "Für sofortige Hilfe",
    description: <ServiceTraumaNachUnfall />,
  },
  "trauma-durch-stress-burnout": {
    title:"Trauma durch chronischen Stress, Burnout, Depression & Überforderung",
    image: "/images/services/11.webp",
    subtitle:"wenn nichts mehr geht – ist es Zeit, wieder bei dir anzukommen",
    label: "Für sofortige Hilfe",
    description: <ServiceTraumaDurchStressBurnout />,
  },
  "trauma-durch-berufliche-belastung": {
    title:"Trauma durch Berufliche Belastung (Z. B. Notfallmedizin, Polizei, Rettungskräfte)",
    image: "/images/services/12.webp",
    subtitle:"wenn Helfen traumatisch wird – braucht auch die Stärke einen Raum",
    label: "Für sofortige Hilfe",
    description: <ServiceTraumaDurchBeruflicheBelastung />,
  },
  "seelenentbindung-rueckgabe-traumafrequenzen": {
    title: "Seelenentbindung – Rückgabe Inkarnierter Traumafrequenzen",
    image: "/images/services/15.webp",
    subtitle:"manchmal reagiert der Körper auf Dinge, die der Verstand nicht kennt",
    label: "Unsere Spezialangebote",
    description: <ServiceSeelenentbindungRueckgabeTraumafrequenzen />,
  },
   "kollektive-erlebnisse": {
    title: "Kollektive Erlebnisse (Krieg, Pandemie, Flucht, Gewalt etc.)",
    image: "/images/services/16.webp",
    subtitle:"manche Erfahrungen prägen nicht nur dich – sondern ganze Felder, Gesellschaften und Kulturen",
    label: "Unsere Spezialangebote",
    description: <ServiceKollektiveErlebnisse />,
  },
  "ueberraschung-angebot": {
    title: "Hier wartet eine Überraschung auf dich",
    image: "/images/services/14.webp",
    subtitle:"Dieses Angebot ist noch in Bearbeitung und braucht noch etwas Zeit…",
    label: "Unsere Spezialangebote",
    description: <></>,
  },
 
  "stille-heilt-retreat": {
    title: "Stille heilt",
    image: "/images/services/13.webp",
    subtitle:"Retreat zur Rückverbindung mit deiner Urform",
    label: "Unsere Spezialangebote",
    description: <ServiceStilleHeiltRetreat />,
  },
};
export { serviceData };

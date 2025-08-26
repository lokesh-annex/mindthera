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
    title: string;
    image: string;
    subtitle: string;
    description: ReactNode;
  }
> = {
  "harmonyum-trauma-release": {
    title: "",
    image: "/images/services/1.webp",
    subtitle: "",
    description: <ServiceHarmonyumTraumaRelease />,
  },
  "paar-special-mit-kinderwunsch": {
    title: "",
    image: "/images/services/2.webp",
    subtitle: "",
    description: <ServicePaarSpecialMitKinderwunsch />,
  },
  "ahnenfrieden-energetische-loeschung": {
    title: "",
    image: "/images/services/3.webp",
    subtitle: "",
    description: <ServiceAhnenfriedenEnergetischeLoeschung />,
  },
  "gemeinsame-familienzeit": {
    title: "",
    image: "/images/services/4.webp",
    subtitle: "",
    description: <ServiceGemeinsameFamilienzeit />,
  },
  "schwangerschaft": {
    title: "",
    image: "/images/services/5.webp",
    subtitle: "",
    description: <ServiceSchwangerschaft />,
  },
  "mutter-und-kind-geburts-special": {
    title: "",
    image: "/images/services/6.webp",
    subtitle: "",
    description: <ServiceMutterUndKindGeburtsSpecial />,
  },
  "wochenbett-begleitung": {
    title: "",
    image: "/images/services/7.webp",
    subtitle: "",
    description: <ServiceWochenbettBegleitung />,
  },
  "traumata-aus-der-kindheit": {
    title: "",
    image: "/images/services/8.webp",
    subtitle: "",
    description: <ServiceTraumataAusDerKindheit />,
  },
  "trauma-durch-emotionale-und-koerperliche-blockaden": {
    title: "",
    image: "/images/services/9.webp",
    subtitle: "",
    description: <ServiceTraumaDurchEmotionaleUndKoerperlicheBlockaden />,
  },
  "trauma-nach-unfall": {
    title: "",
    image: "/images/services/10.webp",
    subtitle: "",
    description: <ServiceTraumaNachUnfall />,
  },
  "trauma-durch-stress-burnout": {
    title:
      "",
    image: "/images/services/12.webp",
    subtitle:
      "",
    description: <ServiceTraumaDurchStressBurnout />,
  },
  "trauma-durch-berufliche-belastung": {
    title:
      "",
    image: "/images/services/12.webp",
    subtitle:
      "",
    description: <ServiceTraumaDurchBeruflicheBelastung />,
  },
  "seelenentbindung-rueckgabe-traumafrequenzen": {
    title: "",
    image: "/images/services/13.webp",
    subtitle:
      "",
    description: <ServiceSeelenentbindungRueckgabeTraumafrequenzen />,
  },
  "ueberraschung-angebot": {
    title: "",
    image: "/images/services/13.webp",
    subtitle:
      "",
    description: <></>,
  },
  "kollektive-erlebnisse": {
    title: "",
    image: "/images/services/15.webp",
    subtitle:
      "",
    description: <ServiceKollektiveErlebnisse />,
  },
  "stille-heilt-retreat": {
    title: "",
    image: "/images/services/15.webp",
    subtitle:
      "",
    description: <ServiceStilleHeiltRetreat />,
  },
};
export { serviceData };

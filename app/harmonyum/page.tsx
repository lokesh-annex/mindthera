
// ...existing code...
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import HeroSection from "@/components/harmonyum/HeroSection";
// import Anwendungsbereiche from "@/components/harmonyum/Anwendungsbereiche";
import WirkungDerSitzung from "@/components/harmonyum/WirkungDerSitzung";
import WasIstTrauma from "@/components/harmonyum/WasIstTrauma";
import BeispieleTrauma from "@/components/harmonyum/BeispieleTrauma";
import WarumBleibtTrauma from "@/components/harmonyum/WarumBleibtTrauma";
import WarumHTR from "@/components/harmonyum/WarumHTR";
import Zielgruppen from "@/components/harmonyum/Zielgruppen";
import BabyFlyer from "@/components/harmonyum/BabyFlyer";
import AblaufDerBehandlung from "@/components/harmonyum/AblaufDerBehandlung";
import KontaktBuchung from "@/components/harmonyum/KontaktBuchung";
import HTRCertificate from "@/components/harmonyum/HTRCertificate";

export default function HarmonyumPage() {
  return (
    <>
      <Breadcrumbs
        title="Harmonyum"
        items={[{ label: "Home", href: "/" }, { label: "Harmonyum" }]}
      />

  <HeroSection />
  <WirkungDerSitzung />
  {/* <Anwendungsbereiche /> */}
  <WasIstTrauma />
  <BeispieleTrauma />
  <WarumBleibtTrauma />
  <WarumHTR />
  <Zielgruppen />
  <BabyFlyer />
  <AblaufDerBehandlung />
  <KontaktBuchung />
  <HTRCertificate />
    </>
  );
}

"use client";

import { useState, useEffect ,useRef } from "react";

import TestimonialSection from "@/components/TestimonialSection";
import TherapistServices from "@/components/TherapistServices";
import LatestArticles from "@/components/LatestArticles";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import ReligiousLifeSection from "@/components/ReligiousLifeSection";
import HeroSection from "@/components/HeroSection";
import AboutUS from "@/components/AboutUs";
import Header from "@/components/Header";
import DonationSection from "@/components/DonationSection";
import TestimonialsBottom from "@/components/TestimonialsBottom ";

export default function Home() {
const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const tryPlay = () => {
      if (!audioRef.current) return;

      audioRef.current
        .play()
        .then(() => {
          console.log("✅ Music started");
        })
        .catch((err) => {
          console.error("❌ Audio play error:", err.message);
        });

      document.removeEventListener("click", tryPlay);
      document.removeEventListener("keydown", tryPlay);
    };

    document.addEventListener("click", tryPlay);
    document.addEventListener("keydown", tryPlay);

    return () => {
      document.removeEventListener("click", tryPlay);
      document.removeEventListener("keydown", tryPlay);
    };
  }, []);
  return (
    <>
    <audio ref={audioRef} src="/music/bg-music.mp3" loop preload="auto" />

   
     
      <HeroSection />
      <AboutUS />
      <TestimonialSection />
      <TherapistServices />
      <ReligiousLifeSection />
      <LatestArticles />
      <TestimonialsBottom />
      <DonationSection />
      <NewsletterSection />
    
    </>
  );
}



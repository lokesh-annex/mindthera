"use client";

import { useState, useEffect } from "react";

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
  return (
    <>
      
     <Header />
      <HeroSection />
      <AboutUS />
      <TestimonialSection />
     
      <TherapistServices />
      <ReligiousLifeSection />
      <LatestArticles />
      <TestimonialsBottom />
       <DonationSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}

"use client";

import TestimonialSection from "@/components/TestimonialSection";
import TherapistServices from "@/components/TherapistServices";
import LatestArticles from "@/components/LatestArticles";
import NewsletterSection from "@/components/NewsletterSection";
import ReligiousLifeSection from "@/components/ReligiousLifeSection";
import HeroSection from "@/components/HeroSection";
import AboutUS from "@/components/AboutUs";
import DonationSection from "@/components/DonationSection";
import TestimonialsBottom from "@/components/TestimonialsBottom ";

export default function Home() {
  return (
    <>

   
     
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



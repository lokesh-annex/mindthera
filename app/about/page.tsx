"use client";
import { useState, useEffect, useCallback } from 'react';
import Breadcrumbs from "@/components/Breadcrumbs";
import WorkSection from "@/components/about/WorkSection";
import BuildSpacesSection from "@/components/about/BuildSpacesSection";
import QualificationsSection from "@/components/about/QualificationsSection";



const AboutUS = () => {
  return (
    <>
      <Breadcrumbs
        title={"Über mich"}
        items={[{ label: "Home", href: "/" }, { label: "Über mich" }]}
      />
      
   
      <WorkSection />
      <BuildSpacesSection />
      <QualificationsSection />
    </>
  );
};

export default AboutUS;

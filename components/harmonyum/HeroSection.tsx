import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="container-fluid py-8 position-relative harmonyum-hero-section"
      style={{
        backgroundImage: 'url(/images/slider/1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px',
        overflow: 'hidden',
      }}
    >
      <div className="harmonyum-hero-overlay"></div>
      <div className="row justify-content-center align-items-center" style={{ minHeight: '400px', zIndex: 2, position: 'relative' }}>
        <div className="col-md-8 text-center mx-auto harmonyum-hero-content animated fadeInUp">
          <h1 className="display-4 fw-bold harmonyum-title mb-3 animated-text-gradient">Harmonyum Trauma Release®</h1>
          <p className="lead dark-color dark-color">Tiefenentspannung & Aktivierung der Selbstheilung</p>
          <p className="mb-0 dark-color harmonyum-hero-desc dark-color">Harmonyum Trauma Release (HTR) ist eine innovative energetische Methode, die tiefsitzende Traumata im individuellen Energiefeld transformiert. Sie spürt nicht nur persönliche Blockaden auf, sondern auch karmische Belastungen, die über die Ahnenlinie weitergegeben wurden.</p>
        </div>
      </div>
    </section>
  );
}

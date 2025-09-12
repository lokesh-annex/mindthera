"use client";
import { useState, useEffect, useCallback } from 'react';
import Image from "next/image";

interface WorkSectionProps {
  apiData: any;
  loading: boolean;
  error: string | null;
}

const WorkSection = ({ apiData, loading, error }: WorkSectionProps) => {
  if (loading) {
    return (
      <section className="py-5 work-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 text-center">
              <div className="spinner-border text-primary mb-3" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="text-muted">Inhalt wird geladen...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-5 work-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 text-center">
              <div className="mb-3" style={{ fontSize: '2.5rem', color: '#dc3545' }}>
                <i className="bi bi-exclamation-triangle"></i>
              </div>
              <p className="text-danger">Fehler beim Laden: {error}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!apiData?.layout) {
    return null;
  }

  return (
    <section className="py-5 work-section">
      <span className="absolute top-20 start-0">
        <Image
          src="/images/bg-2-copyright.webp"
          width={393}
          height={625}
          alt="Background Copyright"
          priority
        />
      </span>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-12">
            <div className="p-4 p-md-5" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
              {apiData.layout.map((block: any, blockIndex: number) => {
                if (block.blockType === 'content') {
                  const deLocale = block.locales?.find((locale: any) => locale.locale === 'de');
                  if (deLocale?.html) {
                    return (
                      <div 
                        key={block.id || blockIndex}
                        className="richtext-content"
                        dangerouslySetInnerHTML={{ 
                          __html: deLocale.html 
                        }} 
                      />
                    );
                  }
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

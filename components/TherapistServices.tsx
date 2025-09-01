"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { serviceData } from "@/app/service/serviceData";
import { ReactNode } from "react";

type ServiceType = {
  label: string;
  title: string;
  image: string;
  subtitle: string;
  description: ReactNode;
};

const typedServiceData: Record<string, ServiceType> = serviceData;

// Group services by label from typedServiceData
const groupedLabels: Record<string, string[]> = {};
Object.entries(typedServiceData).forEach(([key, service]) => {
  if (service.label) {
    if (!groupedLabels[service.label]) groupedLabels[service.label] = [];
    groupedLabels[service.label].push(key);
  }
});
const labels = Object.keys(groupedLabels);

const TherapistServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative pb60 tabs-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 text-center">
            <h2 className="" data-wow-delay=".2s">
              Meine{" "}
              <span className="alt-font fw-500 font-italic ml-4 fs-54 id-color-2">Angebote</span>
            </h2>
            <div className="spacer-single" />
            <div className="spacer-half" />
          </div>
        </div>

        {/* Tabs */}
        <div className="d-flex justify-content-center mb-5 gap-12 flex-wrap">
          {labels.map((label, idx) => (
            <button
              key={label}
              className={`btn rounded-7 px-4 py-2  ${
                activeTab === idx ? "bg-primary text-white" : " "
              }  fw-bold`}
              onClick={() => setActiveTab(idx)}
              style={{ minWidth: 140, borderRadius: "50px" }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="row g-4">
          {groupedLabels[labels[activeTab]]?.map((key, i) => {
            const service = typedServiceData[key];
            if (!service) return null;
            return (
              <div key={i} className="col-lg-3 col-sm-4">
                <div className="relative mb-3" style={{ minHeight: "470px" }}>
                  <Link href={`/service/${key}`} className="d-block hover mb-3">
                    <div className="relative overflow-hidden rounded-20px ">
                      <div className="absolute start-0 w-100 abs-middle fs-36 text-white text-center">
                        <span className="btn-main hover-scale-in-2">Read More</span>
                      </div>
                      <img
                        src={service.image}
                        className="img-fluid hover-scale-1-2"
                        alt={service.title}
                      />
                    </div>
                  </Link>
                  <h4 className="text-center">
                    <Link
                      href={`/service/${key}`}
                      className="text-decoration-none text-dark"
                    >
                      {service.title}
                    </Link>
                  </h4>
                  <p className="no-bottom text-center">{service.subtitle}</p>
                </div>
              </div>
            );
          })}
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

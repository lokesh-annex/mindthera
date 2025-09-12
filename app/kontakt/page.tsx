"use client";
import React from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
const ContactPage = () => (
  <>
   <Breadcrumbs
        title="Kontakt"
        items={[{ label: "Home", href: "/" }, { label: "Kontakt" }]}
      />
  <section>
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
      <div className="row g-4 align-items-center">
        <div className="col-lg-6">
          <div className="subtitle fadeInUp mb-3">Contact Form</div>
          <h2 className="fadeInUp">Nimm Kontakt auf</h2>
          <p className="text-dark">Whether you have a question, a suggestion, or just want to say hello, this is the place to do it. Please fill out the form below with your details and message, and we&apos;ll get back to you as soon as possible.</p>
          
          <h4> Unser Büro</h4>
          <div className="row">
          
            <div className="col-lg-12">
              
              <div className="fw-bold text-dark mt-2"><i className="bi bi-envelope-fill me-2" style={{ color: 'rgb(45, 26, 58)' }}></i>Schicke Deine Nachricht</div>
              info@traumafrei.ch

              <div className="fw-bold text-dark mt-2"><i className="bi bi-telephone-fill me-2" style={{ color: 'rgb(45, 26, 58)' }}></i>Call Us Directly</div>
             +41 76 5607056
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="p-4 rounded-10px" style={{ background: 'rgba(var(--secondary-color-rgb), 0.1)' }}>
            <form
              name="contactForm"
              id="contact_form"
              className="position-relative z1000"
              onSubmit={e => {
                e.preventDefault();
                alert("Thank you for contacting us! Your message has been received.");
              }}
            >
              <div className="field-set">
                <input type="text" name="Name" id="name" className="form-control no-border" placeholder="Dein Name" required />
              </div>
              <div className="field-set">
                <input type="text" name="Email" id="email" className="form-control no-border" placeholder="Deine beste email-Adresse" required />
              </div>
              <div className="field-set">
                <input type="text" name="phone" id="phone" className="form-control no-border" placeholder="Deine Telefonnummer" required />
              </div>
              <div className="field-set mb20">
                <textarea
                  name="message"
                  id="message"
                  className="form-control no-border"
                  placeholder="Deine Nachricht an uns"
                  required
                  rows={5}
                />
              </div>
              
              <div id="submit" className="mt20">
                <input type="submit" id="send_message" value="Schicke Deine Nachricht" className="btn-main" />
              </div>
             
              
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
);

export default ContactPage;

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
    <div className="container">
      <div className="row g-4 align-items-center">
        <div className="col-lg-6">
          <div className="subtitle fadeInUp mb-3">Contact Form</div>
          <h2 className="fadeInUp">Get In Touch</h2>
          <p>Whether you have a question, a suggestion, or just want to say hello, this is the place to do it. Please fill out the form below with your details and message, and we&apos;ll get back to you as soon as possible.</p>
          <div className="spacer-single"></div>
          <h4>Our Office</h4>
          <div className="row">
            <div className="col-lg-6">
              <div className="img-with-cap mb20">
                <div className="d-title">Mon - Fri 08.00 - 18.00</div>
                <div className="d-overlay"></div>
                <Image src="/images/misc/5.webp" width={400} height={300} className="img-fullwidth rounded-1" alt="Office" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="fw-bold text-dark"><i className="bi bi-geo-alt-fill me-2 id-color-2"></i>Office Location</div>
              100 S Main St, Los Angeles, CA
              <div className="spacer-single"></div>
              <div className="fw-bold text-dark"><i className="bi bi-envelope-fill me-2 id-color-2"></i>Send a Message</div>
              contact@traumafrei.com
              <div className="spacer-single"></div>
              <div className="fw-bold text-dark"><i className="bi bi-telephone-fill me-2 id-color-2"></i>Call Us Directly</div>
              +XXXXXX XXXX XXX
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="p-4 bg-grey rounded-10px">
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
                <input type="text" name="Name" id="name" className="form-control no-border" placeholder="Your Name" required />
              </div>
              <div className="field-set">
                <input type="text" name="Email" id="email" className="form-control no-border" placeholder="Your Email" required />
              </div>
              <div className="field-set">
                <input type="text" name="phone" id="phone" className="form-control no-border" placeholder="Your Phone" required />
              </div>
              <div className="field-set mb20">
                <textarea
                  name="message"
                  id="message"
                  className="form-control no-border"
                  placeholder="Your Message"
                  required
                  rows={5}
                />
              </div>
              
              <div id="submit" className="mt20">
                <input type="submit" id="send_message" value="Send Message" className="btn-main" />
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

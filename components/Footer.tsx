"use client";
import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Image from 'next/image';
import Logo from "./Logo";
export default function Footer() {
  return (
    <div className="d-flex flex-column">
      <footer className="bg-dark text-light py-5 mt-auto">
        <div className="container">
          <div className="row align-items-center">
           
            <div className="col-md-4 text-center text-md-start">
              <span className="ms-md-3">
                Themename© 2025. All Rights Reserved.
              </span>
            </div>

         
            <div className="col-md-4 text-center my-2 my-md-0">
              <div className="d-inline-block px-3 py-1 ">
              <Logo />
              </div>
            </div>

           
            <div className="col-md-4 text-center text-md-end">
              <div className="d-inline-flex align-items-center me-md-3">
                <div className="footer-socail-icon d-flex align-items-center justify-content-center gap-3 me-2">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-facebook text-white"></i>
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-twitter text-white"></i>
                  </a>
                  <a
                    href="https://www.pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-pinterest text-white"></i>
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-instagram text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

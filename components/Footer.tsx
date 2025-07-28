"use client";
import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <div className="d-flex flex-column">
      <footer className="bg-dark text-light py-5 mt-auto">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side */}
            <div className="col-md-4 text-center text-md-start">
              <span className="ms-md-3">
                ThemeREX © 2025. All Rights Reserved.
              </span>
            </div>

            {/* Middle */}
            <div className="col-md-4 text-center my-2 my-md-0">
              <div className="d-inline-block px-3 py-1 ">
                <img
                  className="logo-main"
                  src="/images/logo.webp"
                  alt="Main Logo"
                />
              </div>
            </div>

            {/* Right Side */}
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

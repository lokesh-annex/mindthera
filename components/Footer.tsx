"use client";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "./Logo";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface FooterLink {
  label: string;
  url: string;
}

export default function Footer() {
  const [footerLinks, setFooterLinks] = useState<FooterLink[]>([]);

  useEffect(() => {
    async function fetchFooter() {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        const res = await fetch(
          `${baseUrl}/api/globals/footer?depth=2&draft=false&locale=undefined&trash=false`
        );
        const data = await res.json();

        if (data && data.navItems) {
          const links = data.navItems.map((item: any) => ({
            label: item.link?.label || "",
            url: item.link?.url || "#",
          }));
          setFooterLinks(links);
        }
      } catch (error) {
        console.error("Error fetching footer:", error);
      }
    }
    fetchFooter();
  }, []);

  return (
    <div className="d-flex flex-column">
      <footer className="primary-tint text-light py-5 mt-auto">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-center text-md-start">
              <span className="ms-md-3">
                Traumafrei.ch© 2025. All Rights Reserved
              </span>
            </div>

            <div className="col-md-4 text-center my-2 my-md-0">
              <div className="d-inline-block px-3 py-1">
                <Logo />
              </div>
            </div>

            <div className="col-md-4 text-center text-md-end">
              <div className="d-inline-flex align-items-center me-md-3">
                <div className="footer-socail-icon d-flex align-items-center justify-content-center gap-3 me-2">
                  <a
                    href="https://www.facebook.com/KerstinRStoll/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-facebook text-white"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kerstin-r-stoll-630917178/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-linkedin text-white"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/kerstin.r.stoll/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-instagram text-white"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col text-center">
                <ul className="list-inline mb-0">
                  {footerLinks.map((link, idx) => (
                    <li key={idx} className="list-inline-item mx-2">
                      <Link
                        href={link.url}
                        className="text-light text-decoration-none"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

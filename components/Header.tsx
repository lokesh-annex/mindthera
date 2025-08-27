"use client";
import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="transparent scroll-light has-topbar header-s1">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10 pt-2 pb-2">
              <div className="de-flex-col">
                <div id="logo">
                  <Logo />
                </div>
              </div>

              <div className="de-flex-col header-col-mid position-relative mob-order-3">
                <ul
                  id="mainmenu"
                  style={{
                    display:
                      typeof window !== "undefined" && window.innerWidth <= 992
                        ? menuOpen
                          ? "block"
                          : "none"
                        : undefined,
                  }}
                >
                  <li>
                    <Link className="menu-item" href="/">
                      Harmonyum
                    </Link>
                  </li>
                  <li>
                    <Link className="menu-item" href="/offer">
                      Angebote
                    </Link>
                  </li>

                  <li>
                    <Link className="menu-item" href="/about">
                      Über mich
                    </Link>
                  </li>
                  <li>
                    <Link className="menu-item" href="/event">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link className="menu-item" href="/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="menu-item" href="/faq">
                      Q&amp;A
                    </Link>
                  </li>
                  <li>
                    <Link className="menu-item" href="/contact">
                      Kontakt
                    </Link>
                  </li>
                </ul>
                <span
                  id="menu-btn"
                  onClick={() => setMenuOpen((open) => !open)}
                  aria-label="Menü öffnen/schließen"
                >
                  <i className="bi bi-list"></i>
                </span>
              </div>

              {/* Right Contact + Button */}
              <div className="de-flex-col mob-order-2">
                <div className="menu_side_area">
                  <Link href="/" className="btn-main d-xl-block">
                    Buche hier deinen Termin
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

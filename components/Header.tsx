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
      <style>{`
        @media (max-width: 768px) {
          #mainmenu {
            display: ${menuOpen ? "block" : "none"};
            position: absolute;
            top: 60px;
            left: 0;
            width: 100vw;
            background: #fff;
            z-index: 999;
            box-shadow: 0 4px 24px rgba(92,55,125,0.10);
            padding: 24px 0;
          }
          #menu-btn {
            display: inline-block;
            cursor: pointer;
            font-size: 2rem;
            color: #5c377d;
            margin-left: 16px;
          }
          .header-col-mid {
            width: 100%;
          }
            #mainmenu li:last-child {
    margin-bottom: 0;
    border: none;
 }
 .menu-item {
  color: #000 !important;
  padding: 0 10px !important;
    padding-bottom: 0px;
  padding-bottom: 0px !important;
}
#mainmenu {
   
    background: #fff !important;
    height: auto !important;
    z-index: 9999 !important;
    padding-bottom: 0px !important;
  }
  #menu-btn::before {
  
  display: none;
}
.header-col-mid #mainmenu {
   
    top: 69px;
  
  }
        }
        @media (min-width: 769px) {
          #mainmenu {
            display: flex !important;
            position: static;
            background: none;
            box-shadow: none;
            padding: 0;
          }
          #menu-btn {
            display: none;
          }
        }
      `}</style>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10 pt-2 pb-2">
              <div className="de-flex-col">
                <div id="logo">
                  <Logo />
                </div>
              </div>

              <div className="de-flex-col header-col-mid position-relative">
                <ul id="mainmenu">
                  <li>
                    <Link className="menu-item" href="/">
                      Harmonyum
                    </Link>
                  </li>
                  <li>
                    <Link className="menu-item" href="/">
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
              <div className="de-flex-col">
                <div className="menu_side_area">
                  <a
                    className="btn-main d-xl-block"
                  >
                   Buche hier deinen Termin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";
import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

export default function Header() {
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

              <div className="de-flex-col header-col-mid">
                <ul id="mainmenu">
                  <li>
                    <Link className="menu-item" href="/">
                      Harmonyum
                    </Link>
                  </li>
                  <li>
                    <Link className="menu-item" href="/angebote">
                      Angebote
                    </Link>
                  </li>

                  <li>
                    <Link className="menu-item" href="/about">
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link className="menu-item" href="/events">
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
                    <Link className="menu-item" href="/kontakt">
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Right Contact + Button */}
              <div className="de-flex-col">
                <div className="menu_side_area">
                  <div className="h-phone xs-hide">
                    <i className="icofont-headphone-alt"></i>
                    <span>Need Help?</span>+929 333 9296
                  </div>
                  <a
                    href="appointment.html"
                    className="btn-main d-xl-block d-md-none"
                  >
                    Make Appointment
                  </a>
                  <span id="menu-btn"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

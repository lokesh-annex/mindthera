'use client';
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Header() {
  return (
  <header className="transparent scroll-light has-topbar">
      

        {/* Main Header */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex sm-pt10">
                {/* Logo */}
                <div className="de-flex-col">
                  <div id="logo">
                    <a href="index.html">
                      <img
                        className="logo-main"
                        src="/images/logo.webp"
                        alt="Main Logo"
                      />
                      <img
                        className="logo-scroll"
                        src="/images/logo-black.webp"
                        alt="Scrolled Logo"
                      />
                      <img
                        className="logo-mobile"
                        src="/images/logo.webp"
                        alt="Mobile Logo"
                      />
                    </a>
                  </div>
                </div>

                {/* Menu */}
                <div className="de-flex-col header-col-mid">
                  <ul id="mainmenu">
                    <li>
                      <a className="menu-item" href="index.html">
                        Home
                      </a>
                    
                    </li>
                    <li>
                      <a className="menu-item" href="#">
                        Services
                      </a>
                      <ul>
                        <li>
                          <a className="menu-item" href="services.html">
                            Services Style 1
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="services-2.html">
                            Services Style 2
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="services-3.html">
                            Services Style 3
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="service-single.html">
                            Services Single
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="appointment.html">
                            Appointment
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="menu-item" href="about.html">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="study-case.html">
                        Study Case
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="blog.html">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="contact.html">
                        Contact
                      </a>
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

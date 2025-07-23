'use client';
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Header() {
  return (
  <header className="transparent scroll-light has-topbar">
        <div id="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex justify-content-between xs-hide">
                  {/* Left Topbar Widgets */}
                  <div className="header-widget d-flex">
                    <div className="topbar-widget">
                      <a href="#">
                        <i className="icofont-location-pin"></i>100 S Main St,
                        Los Angeles, CA
                      </a>
                    </div>
                    <div className="topbar-widget">
                      <a href="#">
                        <i className="icofont-clock-time"></i>
                        <span>Mon - Sat: 8AM - 9PM</span>
                        <span className="ms-3">Sunday: 10AM - 8PM</span>
                      </a>
                    </div>
                    <div className="topbar-widget">
                      <a href="#">
                        <i className="icofont-envelope"></i>
                        contact@mindthera.com
                      </a>
                    </div>
                  </div>

                  {/* Right Social Icons */}
                  <div className="social-icons">
                    <a href="#">
                      <i className="fa-brands fa-facebook fa-lg"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter fa-lg"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-youtube fa-lg"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-pinterest fa-lg"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-instagram fa-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>

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
                      <ul>
                        <li>
                          <a className="menu-item" href="index.html">
                            Homepage One
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="homepage-2.html">
                            Homepage Two
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="homepage-3.html">
                            Homepage Three
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="homepage-4.html">
                            Homepage Four
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="homepage-5.html">
                            Homepage Five
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="homepage-6.html">
                            Homepage Six
                          </a>
                        </li>
                      </ul>
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

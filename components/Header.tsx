"use client";
import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // closed by default
  const pathname = usePathname();

  // Close menu automatically on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { label: 'Harmonyum', href: '/' },
    { label: 'Angebote', href: '/offer' },
    { label: 'Über mich', href: '/about' },
    { label: 'Events', href: '/event' },
    { label: 'Blog', href: '/blog' },
    { label: 'Q&A', href: '/faq' },
    { label: 'Kontakt', href: '/contact' },
  ];

  const handleLinkClick = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 992) {
      setMenuOpen(false);
    }
  };
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
                        ? (menuOpen ? "block" : "none")
                        : undefined,
                  }}
                >
                  {navItems.map(item => (
                    <li key={item.href}>
                      <Link className="menu-item" href={item.href} onClick={handleLinkClick}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
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

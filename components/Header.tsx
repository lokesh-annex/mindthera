"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navItems, setNavItems] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/globals/header?depth=2&draft=false&trash=false")
      .then((res) => res.json())
      .then((data) => setNavItems(data?.navItems || []))
      .catch((err) => console.error("Error fetching header nav:", err));
  }, []);

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
                  {navItems.map((item, i) => (
                    <li key={i}>
                      <Link className="menu-item" href={item.link || "/"}>
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

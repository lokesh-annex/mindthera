"use client";
import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string; id?: string };

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const pathname = usePathname();

  // Close menu automatically on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Fetch menu items from API
  useEffect(() => {
    let active = true;
    const fetchMenu = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/globals/header?depth=2&draft=false&locale=undefined&trash=false`,
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        const rawItems: any[] = data?.navItems ?? (Array.isArray(data) ? data : []);

        const labelFallbackMap: Record<string, string> = {
          "harmonyum": "/",
          "angebote": "/offer",
          "über mich": "/about",
          "uber mich": "/about",
          "events": "/event",
          "blog": "/blog",
          "q&a": "/faq",
          "q & a": "/faq",
          "kontakt": "/contact",
        };

       
        const toPathFromSlug = (slug?: string) => {
          if (!slug) return "/";
          const clean = String(slug).trim().replace(/^\/+/, "");
          if (!clean || clean === "/" || clean.toLowerCase() === "home") return "/";
          return `/${clean}`;
        };

        const normalized: NavItem[] = rawItems
          .map((ni: any): NavItem => {
            const id = ni?.id;
            const label: string = ni?.label || ni?.link?.label || ni?.title || "Item";
            const lowerLabel = String(label).toLowerCase();

            // Resolve href from link field
            const link = ni?.link;
            let href: string | undefined;
            if (link?.type === "reference") {
              const refValue = link?.value || link?.doc || link?.reference?.value;
              const slug = refValue?.slug || refValue?.path || refValue?.url || refValue?.pathname;
              href = toPathFromSlug(slug);
            } else if (link?.url) {
              href = link.url;
            } else if (ni?.url || ni?.path || ni?.href) {
              href = ni?.href || ni?.url || ni?.path;
            }

            if (!href && labelFallbackMap[lowerLabel]) href = labelFallbackMap[lowerLabel];
            if (!href) href = "/";

            return { id, label, href };
          })
          .filter((i) => Boolean(i?.href && i?.label));

        if (active) setNavItems(normalized);
      } catch (err: any) {
        if (active) setError(err?.message || "Menu load failed");
        console.error("Menu load failed:", err);
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchMenu();
    return () => {
      active = false;
    };
  }, []);

  const handleLinkClick = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 992) {
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
                        ? menuOpen
                          ? "block"
                          : "none"
                        : undefined,
                  }}
                >
                  {loading && (
                    <li>
                      <span className="text-muted small">Lade Menü...</span>
                    </li>
                  )}
                  {!loading && error && (
                    <li>
                      <span className="text-danger small">{error}</span>
                    </li>
                  )}
                  {!loading && !error && navItems.map((item) => (
                    <li key={item.id || item.href}>
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

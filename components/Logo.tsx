"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/globals/header?depth=2&draft=false&locale=undefined&trash=false`;
const CMS_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

const Logo = () => {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [logoAlt, setLogoAlt] = useState<string>("Logo");

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch(API_URL, { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const header = data || {};
        const img = header.logo || header.siteLogo || header.headerLogo || header.logoLight || header.logoDark;
        const rawUrl: string | undefined = img?.url || img?.sizes?.og?.url || img?.sizes?.thumbnail?.url;
        if (active && rawUrl) {
          const full = rawUrl.startsWith('http') ? rawUrl : `${CMS_BASE}${rawUrl.startsWith('/') ? '' : '/'}${rawUrl}`;
          setLogoUrl(full);
          setLogoAlt(img?.alt || img?.title || "Logo");
        }
      } catch (e) {
        // fallback silently
      }
    })();
    return () => { active = false; };
  }, []);

  const src = logoUrl || '/images/logo.webp';

  return (
    <Link href="/">
      <Image
        className="logo-main"
        src={src}
        height={80}
        width={80}
        alt={logoAlt}
        priority
      />
    </Link>
  );
};

export default Logo;
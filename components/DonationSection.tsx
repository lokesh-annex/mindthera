"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const API_URL =
  "http://localhost:3001/api/pages/68c11c79cb79fffc279450d0?depth=2&draft=false&locale=undefined&trash=false";

const absUrl = (u?: string) =>
  u?.startsWith("http") ? u : u ? `http://localhost:3001${u}` : "";

const toMediaUrl = (m: any): string =>
  absUrl(
    m?.sizes?.og?.url ||
      m?.sizes?.large?.url ||
      m?.url ||
      m?.sizes?.thumbnail?.url ||
      ""
  );

const escapeHtml = (s: string) =>
  (s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const descriptionToHtml = (input: any): string => {
  if (!input) return "";
  if (typeof input === "string") return `<p>${escapeHtml(input)}</p>`;

  const root = input?.root || input;
  const children = Array.isArray(root?.children) ? root.children : [];

  return children
    .map((p: any) => {
      if (!Array.isArray(p?.children)) return "";
      const t = p.children
        .map((c: any) => {
          if (c?.type === "linebreak") return "<br />";
          let text = escapeHtml(c?.text || "");
          // ✅ Bold check
          if (c?.format === 1) {
            text = `<strong>${text}</strong>`;
          }
          return text;
        })
        .join("");
      return t ? `<p>${t}</p>` : "";
    })
    .join("");
};

type DonationContent = {
  image?: string;
  title?: string;
  bodyHtml?: string;
  raised?: number;
  goal?: number;
};

const DonationSection = () => {
  const [amount, setAmount] = useState(10);
  const [content, setContent] = useState<DonationContent>({});

  const handleAmountClick = (val: string) => setAmount(Number(val));
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAmount(Number(e.target.value));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`https://paypal.me/veraenderungench/${amount}`, "_blank");
  };


  useEffect(() => {
  let cancelled = false;
  (async () => {
    try {
      const res = await fetch(API_URL, { cache: "no-store" });
      if (!res.ok) return;
      const json = await res.json();
      const doc = json?.doc ?? json?.docs?.[0] ?? json;
      if (!doc) return;

      const next: DonationContent = {};

      // ✅ bodyHtml from hero.richText
      if (doc?.hero?.richText) {
        next.bodyHtml = descriptionToHtml(doc.hero.richText);
      }

      // ✅ title
      if (doc?.title) next.title = String(doc.title);

    let imgUrl = "";
if (doc?.hero?.image) {
  imgUrl = toMediaUrl(doc.hero.image);
} else if (doc?.image1?.url) {
  imgUrl = absUrl(doc.image1.url);   // direct image1 url use
}
next.image = imgUrl || "/images/misc/placeholder.jpg";
      if (typeof doc?.raised === "number") next.raised = doc.raised;
      if (typeof doc?.goal === "number") next.goal = doc.goal;

      if (!cancelled) setContent(next);
    } catch {}
  })();
  return () => {
    cancelled = true;
  };
}, []);

const absUrl = (u?: string) =>
  u?.startsWith("http") ? u : u ? `http://localhost:3001${u}` : "";
  return (
    <section
      className="donation-section"
      style={{ background: "#ffffff", padding: "100px 0" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {content.image && (
            <div className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
              <Image
                src={content.image}
                alt="Donation"
                width={550}
                height={500}
                style={{
                  borderRadius: "8px",
                  objectFit: "cover",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                }}
              />
            </div>
          )}

          <div className="col-lg-6">
          <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="fw-bold" style={{ fontSize: "1.1rem" }}>
                Raised:
                <span
                  style={{
                    color: "#5c377d",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginLeft: "5px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="18"
                    height="18"
                    viewBox="0 0 432.763 432.762"
                  >
                    <g>
                      <path
                        d="M374.363 342.635c-25.563 26.889-58.292 41.7-92.16 41.7-55.509 0-103.572-38.981-126.192-95.329h154.186c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.21-24.21-24.21H143.708a202.583 202.583 0 0 1-1.472-24.211c0-9.274.653-18.365 1.871-27.237h166.09c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.211-24.21-24.211H157.299c23.105-54.698 70.4-92.302 124.904-92.302 33.868 0 66.597 14.812 92.16 41.698 9.203 9.685 24.518 10.083 34.224.872 9.693-9.215 10.077-24.539.875-34.229C374.671 20.156 329.478 0 282.209 0c-80.712 0-149.705 58.62-176.478 140.724H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h54.503c-.981 8.934-1.542 18.007-1.542 27.237 0 8.192.428 16.255 1.211 24.211H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h63.916c26.043 83.691 95.733 143.75 177.433 143.75 47.274 0 92.456-20.161 127.247-56.755 9.208-9.693 8.83-25.015-.869-34.229-9.687-9.215-25.015-8.83-34.218.857z"
                        fill="#5c377d"
                      />
                    </g>
                  </svg>
                  {content.raised ?? 0}
                </span>
              </div>
              <div className="fw-bold" style={{ fontSize: "1.1rem" }}>
                Goal:
                <span
                  style={{
                    color: "#5c377d",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginLeft: "5px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="18"
                    height="18"
                    viewBox="0 0 432.763 432.762"
                  >
                    <g>
                      <path
                        d="M374.363 342.635c-25.563 26.889-58.292 41.7-92.16 41.7-55.509 0-103.572-38.981-126.192-95.329h154.186c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.21-24.21-24.21H143.708a202.583 202.583 0 0 1-1.472-24.211c0-9.274.653-18.365 1.871-27.237h166.09c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.211-24.21-24.211H157.299c23.105-54.698 70.4-92.302 124.904-92.302 33.868 0 66.597 14.812 92.16 41.698 9.203 9.685 24.518 10.083 34.224.872 9.693-9.215 10.077-24.539.875-34.229C374.671 20.156 329.478 0 282.209 0c-80.712 0-149.705 58.62-176.478 140.724H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h54.503c-.981 8.934-1.542 18.007-1.542 27.237 0 8.192.428 16.255 1.211 24.211H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h63.916c26.043 83.691 95.733 143.75 177.433 143.75 47.274 0 92.456-20.161 127.247-56.755 9.208-9.693 8.83-25.015-.869-34.229-9.687-9.215-25.015-8.83-34.218.857z"
                        fill="#5c377d"
                      />
                    </g>
                  </svg>
                  {content.goal?.toLocaleString('de-DE') ?? '12,000'}
                </span>
              </div>
            </div>

            <div
              style={{
                height: "6px",
                background: "#5c377d",
                width: "100%",
                marginBottom: "24px",
                borderRadius: "3px",
              }}
            ></div>
           

            {/* Body */}
            {content.bodyHtml && (
              <div
                className="text-muted mb-4"
                style={{ fontSize: "1.1rem", lineHeight: 1.7 }}
              >
                <div
                  style={{ fontSize: "15px" }}
                  dangerouslySetInnerHTML={{ __html: content.bodyHtml }}
                />
              </div>
            )}

          <form onSubmit={handleSubmit}>
              <div
                className="mb-3 d-flex align-items-center border border-secondary-subtle rounded"
                style={{ maxWidth: "140px" }}
              >
                <span
                  className="bg-white px-3 py-2"
                  style={{ borderRight: "none", fontWeight: 600 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="14"
                    height="14"
                    viewBox="0 0 432.763 432.762"
                  >
                    <g>
                      <path
                        d="M374.363 342.635c-25.563 26.889-58.292 41.7-92.16 41.7-55.509 0-103.572-38.981-126.192-95.329h154.186c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.21-24.21-24.21H143.708a202.583 202.583 0 0 1-1.472-24.211c0-9.274.653-18.365 1.871-27.237h166.09c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.211-24.21-24.211H157.299c23.105-54.698 70.4-92.302 124.904-92.302 33.868 0 66.597 14.812 92.16 41.698 9.203 9.685 24.518 10.083 34.224.872 9.693-9.215 10.077-24.539.875-34.229C374.671 20.156 329.478 0 282.209 0c-80.712 0-149.705 58.62-176.478 140.724H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h54.503c-.981 8.934-1.542 18.007-1.542 27.237 0 8.192.428 16.255 1.211 24.211H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h63.916c26.043 83.691 95.733 143.75 177.433 143.75 47.274 0 92.456-20.161 127.247-56.755 9.208-9.693 8.83-25.015-.869-34.229-9.687-9.215-25.015-8.83-34.218.857z"
                        fill="#5c377d"
                      />
                    </g>
                  </svg>
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="10"
                  value={amount}
                  onChange={handleInputChange}
                  style={{
                    height: "33px",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    borderLeft: "none",
                    outline: "none",
                    boxShadow: "none",
                    border: "none",
                  }}
                  min="1"
                />
              </div>

              <div className="mb-4 d-flex flex-wrap gap-2">
                {["10", "50", "100", "200"].map((val, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`btn btn-outline-dark px-4 py-2 fw-bold${amount === Number(val) ? " active bg-primary text-white border-primary" : ""}`}
                    style={{ minWidth: "80px" }}
                    onClick={() => handleAmountClick(val)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="13"
                      height="13"
                      viewBox="0 0 432.763 432.762"
                    >
                      <g>
                        <path
                          d="M374.363 342.635c-25.563 26.889-58.292 41.7-92.16 41.7-55.509 0-103.572-38.981-126.192-95.329h154.186c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.21-24.21-24.21H143.708a202.583 202.583 0 0 1-1.472-24.211c0-9.274.653-18.365 1.871-27.237h166.09c13.37 0 24.21-10.84 24.21-24.21s-10.84-24.211-24.21-24.211H157.299c23.105-54.698 70.4-92.302 124.904-92.302 33.868 0 66.597 14.812 92.16 41.698 9.203 9.685 24.518 10.083 34.224.872 9.693-9.215 10.077-24.539.875-34.229C374.671 20.156 329.478 0 282.209 0c-80.712 0-149.705 58.62-176.478 140.724H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h54.503c-.981 8.934-1.542 18.007-1.542 27.237 0 8.192.428 16.255 1.211 24.211H40.854c-13.37 0-24.21 10.84-24.21 24.21s10.84 24.21 24.21 24.21h63.916c26.043 83.691 95.733 143.75 177.433 143.75 47.274 0 92.456-20.161 127.247-56.755 9.208-9.693 8.83-25.015-.869-34.229-9.687-9.215-25.015-8.83-34.218.857z"
                          fill="#5c377d"
                        />
                      </g>
                    </svg>
                    <span className="ms-2">{val}</span>
                  </button>
                ))}
                <button
                  type="button"
                  className="btn btn-outline-dark px-4 py-2 fw-bold"
                  style={{ minWidth: "160px" }}
                >
                  Dein Betrag
                </button>
              </div>

              <button type="submit" className="btn-main px-3 py-2 fw-bold">
                Wir freuen uns über deine Spende
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;

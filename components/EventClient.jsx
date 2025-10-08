"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookingWidgetModal from "@/components/BookingWidgetModal";

const API_URL_EVENTS = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68c023ac106eb845adbae559?depth=2&draft=false&locale=de&trash=false`;

// EventItem interface converted to JSDoc comment for JavaScript
/**
 * @typedef {Object} EventItem
 * @property {string} title
 * @property {string} html
 * @property {string} [image]
 * @property {string} [button1]
 * @property {string} [button2]
 */

function absUrl(u) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  return u?.startsWith("http") ? u : u ? `${baseUrl}${u}` : "";
}

function normalizeEvents(doc) {
  if (!doc || !Array.isArray(doc.layout)) return [];
  const events = [];
  doc.layout.forEach((block) => {
    // Handle sectionBlockV2 with content array
    if (block?.blockType === "sectionBlockV2") {
      const locale = block?.locales?.find((l) => l.locale === "de") || block?.locales?.[0];
      if (locale?.content && Array.isArray(locale.content)) {
        locale.content.forEach((contentItem) => {
          if (contentItem?.blockType === "contentShowcaseContentBlock") {
            // Hide empty event sections
            const hasContent =
              (contentItem?.title && contentItem.title.trim() !== "") ||
              (contentItem?.description && contentItem.description.trim() !== "") ||
              (contentItem?.content && contentItem.content.trim() !== "") ||
              (contentItem?.image && contentItem.image.url) ||
              (contentItem?.buttons?.[0]?.text && contentItem.buttons[0].text.trim() !== "");
            if (!hasContent) return;
            events.push({
              title: contentItem?.title || "",
              subtitle: contentItem?.description || "",
              html: contentItem?.content || "",
              image: absUrl(contentItem?.image?.url),
              button1: contentItem?.buttons?.[0]?.text || "",
              button1Url: contentItem?.buttons?.[0]?.url || "",
              button2: contentItem?.buttons?.[1]?.text || "",
              button2Url: contentItem?.buttons?.[1]?.url || "",
            });
          }
        });
      }
    }
  });
  return events.filter(Boolean);
}

const EventClient = () => {
  const [events, setEvents] = useState([]);
  const [pageTitle, setPageTitle] = useState("Events");
  const [loading, setLoading] = useState(true);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch(API_URL_EVENTS, { cache: "no-store" });
        if (res.ok) {
          const json = await res.json();
          const doc = json?.doc ?? (Array.isArray(json?.docs) ? json.docs[0] : json);
          setPageTitle(doc?.title || "Events");
          setEvents(normalizeEvents(doc));
        }
      } catch (e) {
        console.error("Event fetch failed", e);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  return (
    <>
      <Breadcrumbs
        title={pageTitle}
        items={[{ label: "Home", href: "/" }, { label: pageTitle }]}
      />

      <section className="bg-light py-5 events-page">
        <div className="container">
          {loading ? (
            <div className="row justify-content-center py-5">
              <div className="col-12 text-center">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="spinner-border text-primary me-3" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p className="m-0 fs-5">Lade Events...</p>
                </div>
              </div>
            </div>
          ) : events.length === 0 ? (
            <div className="row justify-content-center py-5">
              <div className="col-md-8 text-center">
                <p className="mb-0" style={{ fontSize: "1.1rem" }}>
                  Aktuell sind keine Events verfügbar.
                </p>
              </div>
            </div>
          ) : (
            events.map((event, idx) => (
              <div
                key={idx}
                className="row align-items-center bg-white rounded-4 shadow-sm py-5 px-5 mb-5"
              >
                {event.image && (
                  <div className="col-md-5 d-flex align-items-center justify-content-center mb-4 mb-md-0">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={520}
                      height={520}
                      style={{ objectFit: "cover", width: "100%", borderRadius: "12px" }}
                    />
                  </div>
                )}
                <div className={`col-md-${event.image ? 7 : 12}`}>
                  <h3 className="fw-bold mb-2 text-primary" style={{ fontSize: "1.5rem" }}>
                    {event.title}
                  </h3>
               
                  {event.html && (
                    <div
                      className="mb-3"
                      style={{ fontSize: "1.08rem", color: "#333" }}
                      dangerouslySetInnerHTML={{ __html: event.html }}
                    />
                  )}
                  <div className="d-flex gap-2 flex-wrap">
                    {event.button1 && (
                      event.button1Url ? (
                        <a
                          className="btn-main mb-2"
                          href={event.button1Url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {event.button1}
                        </a>
                      ) : (
                        <button className="btn-main mb-2" onClick={() => setBookingOpen(true)}>{event.button1}</button>
                      )
                    )}
                    {event.button2 && (
                      event.button2Url ? (
                        <a
                          className="btn-main mb-2"
                          href={event.button2Url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {event.button2}
                        </a>
                      ) : (
                        <button className="btn-main mb-2">{event.button2}</button>
                      )
                    )}
                  </div>
                  {event.subtitle && (
                    <p className="fw-semibold mb-3 text-secondary" style={{ fontSize: "1.1rem" }}>
                      {event.subtitle}
                    </p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Booking Modal for Event page */}
      <BookingWidgetModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
};

export default EventClient;
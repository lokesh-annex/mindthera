import React, { useEffect } from "react";

interface BookingWidgetModalProps {
  open: boolean;
  onClose: () => void;
  iframeUrl?: string;
}

const DEFAULT_IFRAME_URL =
  "https://appointer-admin-panel.vercel.app/widget?provider=f6f2c8e6-d590-4038-94e4-e2f55e280866&locale=de";

export default function BookingWidgetModal({ open, onClose, iframeUrl }: BookingWidgetModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleMessage = (event: MessageEvent) => {
      if (event?.data?.type === "APPOINTMENT_BOOKED") {
        setTimeout(() => {
          onClose();
        }, 3000);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.7)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 8,
          maxWidth: "90vw",
          maxHeight: "90vh",
          overflow: "auto",
          position: "relative",
          boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
        }}
      >
        <button
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            fontSize: "1.5rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 2,
          }}
          aria-label="Schließen"
          onClick={onClose}
        >
          &times;
        </button>
        <iframe
          src={iframeUrl || DEFAULT_IFRAME_URL}
          style={{
            width: "90vw",
            maxWidth: "90vw",
            height: "80vh",
            border: "none",
            borderRadius: 8,
          }}
          allowFullScreen
        />
      </div>
    </div>
  );
}

"use client";
import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="cookie-consent-overlay">
      <div className="cookie-consent-popup">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-7">
              <div className="cookie-content">
                <h5 className="fw-bold mb-2 text-white">🍪 Cookie-Einstellungen</h5>
                <p className="mb-0 text-light">
                  Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. 
                  Diese helfen uns, die Website zu verbessern und Ihnen relevante Inhalte anzuzeigen.
                  <a 
                    href="/datenschutz" 
                    className="text-decoration-none ms-2"
                    style={{ color: "rgb(221, 190, 249)" }}
                  >
                    Mehr erfahren
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 text-end">
              <div className="cookie-buttons d-flex gap-2 justify-content-end flex-wrap">
                <button
                  onClick={declineCookies}
                  className="btn btn-outline-light btn-sm px-3"
                >
                  Ablehnen
                </button>
                <button
                  onClick={acceptCookies}
                  className="btn btn-light btn-sm px-3 fw-semibold"
                  style={{ 
                    background: "#5c377d", 
                    borderColor: "rgb(81, 15, 138)",
                    color: "#fff" 
                  }}
                >
                  Akzeptieren
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cookie-consent-overlay {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          animation: slideUp 0.3s ease-out;
        }

        .cookie-consent-popup {
          background: linear-gradient(135deg, #5c377d 0%, #7a566b 100%);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1rem 0;
          box-shadow: 0 -4px 20px rgba(92, 55, 125, 0.3);
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .cookie-consent-popup {
            padding: 1.5rem 0;
          }
          
          .cookie-buttons {
            justify-content: center !important;
            margin-top: 1rem;
          }
          
          .cookie-content {
            text-align: center;
            margin-bottom: 0.5rem;
          }
        }

      
      `}</style>
    </div>
  );
};

export default CookieConsent;
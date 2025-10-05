"use client";

import React from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  iframeUrl: string;
}

export default function BookingModal({ isOpen, onClose, iframeUrl }: BookingModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div 
      className="modal fade show d-block" 
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      role="dialog"
      aria-labelledby="bookingModalLabel"
      aria-hidden="false"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered" role="document">
        <div className="modal-content" style={{ height: '90vh' }}>
          <div className="modal-header">
            <h5 className="modal-title" id="bookingModalLabel">
              <i className="bi bi-calendar-check me-2"></i>
              Termin buchen
            </h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose}
              aria-label="Close"
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '0.5rem'
              }}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          <div className="modal-body p-0" style={{ height: 'calc(90vh - 60px)' }}>
            <iframe
              src={iframeUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              style={{
                border: 'none',
                borderRadius: '0 0 0.375rem 0.375rem'
              }}
              title="Booking Widget"
              allow="payment; microphone; camera"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

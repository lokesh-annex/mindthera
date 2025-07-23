'use client';
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
  return (
    <div className="d-flex flex-column">
      <footer className="bg-dark text-light py-3 mt-auto">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side */}
            <div className="col-md-4 text-center text-md-start">
              <span className="ms-md-3">ThemeREX © 2025. All Rights Reserved.</span>
            </div>

            {/* Middle */}
            <div className="col-md-4 text-center my-2 my-md-0">
              <div className="d-inline-block px-3 py-1 border border-light rounded">
                <span className="fw-bold">G:</span>
                <span className="text-danger mx-1">•</span> 
                <span className="fw-bold">TA</span>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-md-4 text-center text-md-end">
              <div className="d-inline-flex align-items-center me-md-3">
                <div
                  className="border border-light rounded-circle d-flex align-items-center justify-content-center me-2"
                  style={{ width: '24px', height: '24px' }}
                >
                  <i className="bi bi-facebook text-white"></i> 
                   <i className="bi bi-facebook text-white"></i> 
                    <i className="bi bi-facebook text-white"></i> 
                     <i className="bi bi-facebook text-white"></i> 
                      <i className="bi bi-facebook text-white"></i> 
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

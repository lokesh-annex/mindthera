// components/ReligiousLifeSection.jsx
import React from 'react';

const ReligiousLifeSection = () => {
  return (
  <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Overlapping Images */}
          <div className="col-lg-7 position-relative mb-4 mb-lg-0" style={{ minHeight: '350px' }}>
            <div style={{ position: 'relative', width: '100%', height: '550px' }}>
              <img
                src="/images/image-15.jpg"
                alt="Temple"
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '55%',
                  height: '100%',
                  objectFit: 'cover',
                
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08)'
                }}
              />
              <img
                 src="/images/image-16.jpg"
                alt="Spiritual Life"
                style={{
                  position: 'absolute',
                  left: '30%',
                  top: '40%',
                  width: '55%',
                  height: '80%',
                  objectFit: 'cover',
                 
                  boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                
                  zIndex: 2
                }}
              />
            </div>
          </div>
         
          <div className="col-lg-5">
            <div className="mb-2 text-uppercase fw-bold text-secondary" style={{ letterSpacing: '2px', fontSize: '15px' }}>Religious Life</div>
            <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem', lineHeight: 1.1 }}>
              The hub of creativity<br />and spirituality
            </h2>
            <p className="text-muted mb-4" style={{ maxWidth: '420px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            <div className="mb-4">
              <div className="fw-bold text-secondary" style={{ fontSize: '1.1rem' }}>SUN–THU: <span className="text-dark">9 AM – 18 PM</span></div>
              <div className="fw-bold text-secondary" style={{ fontSize: '1.1rem' }}>FRI: <span className="text-dark">9 AM – 15 PM</span></div>
            </div>
            <a className="btn btn-primary px-4 py-2 fw-bold" style={{ background: '#432c5c', border: 'none', fontSize: '1rem' }} href="about.html">
              ABOUT US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReligiousLifeSection;
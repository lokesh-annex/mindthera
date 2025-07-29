import React from 'react';
import Image from 'next/image';

const DonationSection  = () => {
  return (
   <section style={{ background: '#f1f7f4', padding: '60px 0' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Image */}
          <div className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
            <img
              src="/images/misc/10.webp"
              alt="Donation"
              style={{
                width: '90%',
                maxWidth: '500px',
                borderRadius: '8px',
                objectFit: 'cover',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)'
              }}
            />
          </div>
          {/* Right: Donation Form */}
          <div className="col-lg-6">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="fw-bold" style={{ fontSize: '1.1rem' }}>Raised: <span style={{ color: '#5a9e7c' }}>$15,572</span></div>
              <div className="fw-bold" style={{ fontSize: '1.1rem' }}>Goal: <span style={{ color: '#5a9e7c' }}>$12,000</span></div>
            </div>
            <div style={{ height: '6px', background: '#5a9e7c', width: '100%', marginBottom: '24px', borderRadius: '3px' }}></div>
            <p className="text-muted mb-4" style={{ maxWidth: '500px' }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod.
            </p>
            <form>
              <div className="mb-3 d-flex align-items-center border border-2 border-secondary-subtle rounded" style={{ maxWidth: '140px' }}>
                <span className="bg-white px-3 py-2" style={{ borderRight: 'none', fontWeight: 600 }}>$</span>
                <input
                  type="number"
                  className="form-control  "
                  placeholder="10"
                  style={{ height: '48px', fontSize: '1.1rem', fontWeight: 500, borderLeft: 'none',outline: 'none', boxShadow: 'none',border: 'none' }}
                  min="1"
                />
              </div>
              <div className="mb-4 d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-outline-dark px-4 py-2 fw-bold" style={{ minWidth: '100px' }}>$10</button>
                <button type="button" className="btn btn-outline-dark px-4 py-2 fw-bold" style={{ minWidth: '100px' }}>$50</button>
                <button type="button" className="btn btn-outline-dark px-4 py-2 fw-bold" style={{ minWidth: '100px' }}>$100</button>
                <button type="button" className="btn btn-outline-dark px-4 py-2 fw-bold" style={{ minWidth: '100px' }}>$200</button>
                <button type="button" className="btn btn-outline-dark px-4 py-2 fw-bold" style={{ minWidth: '160px' }}>Custom Amount</button>
              </div>
              <button type="submit" className="btn-main  px-3 py-2 fw-bold">
                DONATE NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

  );
};

export default DonationSection;

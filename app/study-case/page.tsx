'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StudyCase() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('*');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const studyCases = [
    {
      id: 1,
      title: "Navigating Identity",
      category: "Anxiety Treatment",
      service: "service-5",
      image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "From Trauma to Resilience",
      category: "Individual Therapy",
      service: "service-1",
      image: "https://images.pexels.com/photos/4101144/pexels-photo-4101144.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Breaking the Cycle",
      category: "Couples Counseling",
      service: "service-2",
      image: "https://images.pexels.com/photos/4101145/pexels-photo-4101145.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      title: "Lost in Translation",
      category: "Stress Management",
      service: "service-4",
      image: "https://images.pexels.com/photos/4101146/pexels-photo-4101146.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      title: "Unraveling Anxiety",
      category: "Depression Therapy",
      service: "service-6",
      image: "https://images.pexels.com/photos/4101147/pexels-photo-4101147.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      title: "Beyond the Surface",
      category: "Career Counseling",
      service: "service-3",
      image: "https://images.pexels.com/photos/4101148/pexels-photo-4101148.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const filters = [
    { key: '*', label: 'All services' },
    { key: 'service-1', label: 'Individual Therapy' },
    { key: 'service-2', label: 'Couples Counseling' },
    { key: 'service-3', label: 'Career Counseling' },
    { key: 'service-4', label: 'Stress Management' },
    { key: 'service-5', label: 'Anxiety Treatment' },
    { key: 'service-6', label: 'Depression Therapy' }
  ];

  const filteredCases = activeFilter === '*' 
    ? studyCases 
    : studyCases.filter(caseItem => caseItem.service === activeFilter);

  return (
    <>
      {/* Navigation */}
      <nav className={`navbar navbar-expand-lg fixed-top ${
        isScrolled ? 'header-scrolled' : 'header-transparent'
      }`}>
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" href="/">
            <div className="me-2 d-flex align-items-center justify-content-center" 
                 style={{
                   width: '40px',
                   height: '40px',
                   background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                   borderRadius: '10px',
                   color: 'white',
                   fontSize: '20px'
                 }}>
              🧠
            </div>
            <span className="fw-bold fs-4 text-gradient">Mindthera</span>
          </Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-4">
              <li className="nav-item">
                <Link className="nav-link" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href="/study-case">Study Case</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/appointment">Appointment</Link>
              </li>
            </ul>
            <div className="d-flex gap-2">
              <span className="d-none d-lg-block text-muted me-3">
                <i className="bi bi-telephone me-1"></i>
                Need Help? +929 333 9296
              </span>
              <Link href="/appointment" className="btn-primary-gradient">Make Appointment</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-gradient-primary text-white py-5" style={{ marginTop: '76px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-0">Study Case</h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-lg-end mb-0">
                  <li className="breadcrumb-item"><Link href="/" className="text-white-50">Home</Link></li>
                  <li className="breadcrumb-item active text-white">Study Case</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Study Cases Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {/* Filter Sidebar */}
            <div className="col-lg-3">
              <div className="bg-light p-4 rounded-custom">
                <h5 className="fw-bold mb-4">Filter by Service</h5>
                <ul className="list-unstyled">
                  {filters.map((filter) => (
                    <li key={filter.key} className="mb-2">
                      <button
                        className={`btn btn-link text-start p-0 text-decoration-none ${
                          activeFilter === filter.key ? 'text-primary fw-bold' : 'text-muted'
                        }`}
                        onClick={() => setActiveFilter(filter.key)}
                      >
                        {filter.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gallery */}
            <div className="col-lg-9">
              <div className="row g-4">
                {filteredCases.map((caseItem, index) => (
                  <div key={caseItem.id} className="col-lg-4 col-md-6">
                    <div className="gallery-item animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="position-relative overflow-hidden rounded-custom">
                        <img src={caseItem.image} className="img-fluid" alt={caseItem.title} />
                        <div className="gallery-overlay">
                          <Link href="#" className="btn btn-light btn-lg rounded-circle">
                            <i className="bi bi-plus-lg"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="text-center mt-3">
                        <h5 className="fw-bold mb-1">{caseItem.title}</h5>
                        <p className="text-muted mb-0">{caseItem.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredCases.length === 0 && (
                <div className="text-center py-5">
                  <i className="bi bi-search display-1 text-muted mb-3"></i>
                  <h4 className="text-muted">No cases found</h4>
                  <p className="text-muted">Try selecting a different filter to see more study cases.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-center mb-4">
                <div className="me-2 d-flex align-items-center justify-content-center" 
                     style={{
                       width: '40px',
                       height: '40px',
                       background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                       borderRadius: '10px',
                       color: 'white',
                       fontSize: '20px'
                     }}>
                  🧠
                </div>
                <span className="fw-bold fs-4 text-white">Mindthera</span>
              </div>
              <p className="mb-4">
                At Mindthera, we understand that life's challenges can sometimes feel overwhelming. 
                Our team of dedicated therapists is here to provide you with compassionate guidance and expert care.
              </p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5>Services</h5>
              <ul className="list-unstyled">
                <li><a href="#">Individual Therapy</a></li>
                <li><a href="#">Couples Counseling</a></li>
                <li><a href="#">Career Counseling</a></li>
                <li><a href="#">Stress Management</a></li>
                <li><a href="#">Anxiety Treatment</a></li>
                <li><a href="#">Depression Therapy</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5>Company</h5>
              <ul className="list-unstyled">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Our Services</Link></li>
                <li><Link href="/study-case">Study Case</Link></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Testimonials</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5>Contact Info</h5>
              <div className="mb-3">
                <i className="bi bi-geo-alt me-2"></i>
                <strong>Office Location</strong><br />
                100 S Main St, Los Angeles, CA
              </div>
              <div className="mb-3">
                <i className="bi bi-envelope me-2"></i>
                <strong>Send a Message</strong><br />
                contact@mindthera.com
              </div>
              <div className="d-flex gap-2">
                <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0">&copy; 2025 Mindthera. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex justify-content-md-end gap-3">
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bootstrap Icons CDN */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" />
      
      {/* Bootstrap JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}
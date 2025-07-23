'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const team = [
    {
      name: "Dr. James Dean",
      role: "Clinical Psychologist",
      image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Dr. Sophia Jenkins",
      role: "Licensed Therapist",
      image: "https://images.pexels.com/photos/5327581/pexels-photo-5327581.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Dr. Melissa Taylor",
      role: "Marriage Counselor",
      image: "https://images.pexels.com/photos/5327582/pexels-photo-5327582.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Dr. Noah Anderson",
      role: "Child Psychologist",
      image: "https://images.pexels.com/photos/5327583/pexels-photo-5327583.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

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
                <Link className="nav-link active" href="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/study-case">Study Case</Link>
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
              <h1 className="display-4 fw-bold mb-0">About Us</h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-lg-end mb-0">
                  <li className="breadcrumb-item"><Link href="/" className="text-white-50">Home</Link></li>
                  <li className="breadcrumb-item active text-white">About Us</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="position-relative">
                <img src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600" 
                     className="img-fluid rounded-custom shadow-custom" alt="About us" />
                <div className="position-absolute top-50 start-50 translate-middle">
                  <button className="btn btn-primary btn-lg rounded-circle" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-play-fill fs-3"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3">
                Who We Are
              </div>
              <h2 className="display-5 fw-bold mb-4">Introducing Our Expert Psychology Professionals</h2>
              <p className="lead mb-4">
                Located in New York, NY, Mindthera specializes in providing top-notch psychotherapy services. 
                Our team of experienced professionals is dedicated to helping you achieve mental wellness and personal growth. 
                Trust Mindthera for all your psychotherapy needs.
              </p>
              <Link href="/services" className="btn-primary-gradient">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="stat-number animate-scaleIn">6250+</div>
              <div className="fs-5">Happy Customers</div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="stat-number animate-scaleIn">3200+</div>
              <div className="fs-5">Successful Therapy</div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="stat-number animate-scaleIn">20+</div>
              <div className="fs-5">Years of Experience</div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-number animate-scaleIn">15+</div>
              <div className="fs-5">Specialists</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gradient-soft">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <div className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3">
                We Have Best Team
              </div>
              <h2 className="display-4 fw-bold mb-4">Our Specialists</h2>
            </div>
          </div>
          
          <div className="row g-4">
            {team.map((member, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="team-card animate-scaleIn" style={{ animationDelay: `${index * 0.1}s` }}>
                  <img src={member.image} className="img-fluid" alt={member.name} />
                  <div className="p-4 text-center">
                    <h5 className="fw-bold mb-1">{member.name}</h5>
                    <p className="text-muted mb-3">{member.role}</p>
                    <div className="d-flex justify-content-center gap-2">
                      <a href="#" className="btn btn-sm btn-outline-primary rounded-circle">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="#" className="btn btn-sm btn-outline-primary rounded-circle">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="#" className="btn btn-sm btn-outline-primary rounded-circle">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <div className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3">
                Vision & Mission
              </div>
              <h2 className="display-4 fw-bold mb-4">Vision & Mission</h2>
            </div>
          </div>
          
          <div className="row g-5">
            <div className="col-lg-6">
              <h4 className="fw-bold mb-4">Our Vision</h4>
              <p className="fs-5 lh-lg">
                To lead the mental health industry towards a more compassionate future by revolutionizing therapy 
                with innovative approaches, fostering emotional well-being, and enhancing the quality of life 
                for present and future generations.
              </p>
            </div>
            <div className="col-lg-6">
              <h4 className="fw-bold mb-4">Our Mission</h4>
              <ol className="fs-6 lh-lg">
                <li className="mb-3">
                  <span className="fw-bold text-primary">Innovation:</span> We strive to push the boundaries 
                  of therapeutic advancement, continuously innovating in treatment methods and therapeutic approaches.
                </li>
                <li className="mb-3">
                  <span className="fw-bold text-primary">Compassion:</span> Our commitment to compassionate care 
                  is unwavering. We aim to provide a safe, supportive environment for all our clients.
                </li>
                <li className="mb-3">
                  <span className="fw-bold text-primary">Quality & Safety:</span> The well-being and satisfaction 
                  of our clients are paramount. We uphold the highest standards of quality, safety, and confidentiality.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-gradient-primary text-white py-5">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-lg-4 col-md-6">
              <i className="bi bi-clock display-6 mb-3"></i>
              <div>
                <strong>Mon - Sat: 8AM - 9PM</strong><br />
                Sunday: 10AM - 8PM
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <i className="bi bi-geo-alt display-6 mb-3"></i>
              <div>
                <strong>789 Elm Avenue</strong><br />
                Brooklyn, NY 11201
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <i className="bi bi-telephone display-6 mb-3"></i>
              <div>
                <strong>+929 333 9296</strong><br />
                contact@mindthera.com
              </div>
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
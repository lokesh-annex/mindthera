'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Appointment() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Appointment request submitted successfully! We will contact you soon.');
  };

  const services = [
    "Individual Therapy",
    "Couples Counseling",
    "Career Counseling",
    "Stress Management",
    "Anxiety Treatment",
    "Depression Therapy"
  ];

  const timeSlots = [
    "10:00", "11:00", "12:00", "13:00", "14:00", 
    "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"
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
                <Link className="nav-link" href="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/study-case">Study Case</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href="/appointment">Appointment</Link>
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
              <h1 className="display-4 fw-bold mb-0">Appointment</h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-lg-end mb-0">
                  <li className="breadcrumb-item"><Link href="/" className="text-white-50">Home</Link></li>
                  <li className="breadcrumb-item active text-white">Appointment</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="section-padding bg-gradient-soft">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="bg-white p-5 rounded-custom shadow-custom">
                <div className="text-center mb-5">
                  <h2 className="display-5 fw-bold mb-3">Schedule Your Appointment</h2>
                  <p className="lead text-muted">
                    Take the first step towards better mental health. Fill out the form below to schedule your appointment.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    {/* Service Selection */}
                    <div className="col-12">
                      <label htmlFor="service" className="form-label fw-bold">Select Service</label>
                      <select 
                        name="service" 
                        id="service" 
                        className="form-control-custom form-select"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    {/* Date and Time */}
                    <div className="col-md-6">
                      <label htmlFor="date" className="form-label fw-bold">Select Date</label>
                      <input 
                        type="date" 
                        name="date" 
                        id="date" 
                        className="form-control-custom"
                        value={formData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="time" className="form-label fw-bold">Select Time</label>
                      <select 
                        name="time" 
                        id="time" 
                        className="form-control-custom form-select"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time, index) => (
                          <option key={index} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>

                    {/* Personal Information */}
                    <div className="col-md-4">
                      <label htmlFor="name" className="form-label fw-bold">Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        className="form-control-custom"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="email" className="form-label fw-bold">Email</label>
                      <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className="form-control-custom"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="phone" className="form-label fw-bold">Phone</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        className="form-control-custom"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <label htmlFor="message" className="form-label fw-bold">Have Any Message?</label>
                      <textarea 
                        name="message" 
                        id="message" 
                        rows={4}
                        className="form-control-custom"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your concerns or what you'd like to discuss..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 text-center">
                      <button type="submit" className="btn-primary-gradient btn-lg px-5">
                        <i className="bi bi-calendar-check me-2"></i>
                        Send Appointment Request
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-gradient-primary text-white py-5">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-lg-6 col-md-6">
              <i className="bi bi-clock display-6 mb-3"></i>
              <h4 className="fw-bold mb-3">Schedule Your Appointment Today!</h4>
              <div className="mb-3">
                <strong>Mon - Sat: 8AM - 9PM</strong><br />
                Sunday: 10AM - 8PM
              </div>
              <Link href="/appointment" className="btn btn-light btn-lg">
                Make Appointment
              </Link>
            </div>
            <div className="col-lg-6 col-md-6">
              <i className="bi bi-geo-alt display-6 mb-3"></i>
              <h4 className="fw-bold mb-3">Visit Our Clinic</h4>
              <div className="mb-3">
                <strong>789 Elm Avenue</strong><br />
                Brooklyn, NY 11201
              </div>
              <a href="#" className="btn btn-light btn-lg">
                Get Direction
              </a>
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
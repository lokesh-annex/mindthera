'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Services() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 1,
      title: "Individual Therapy",
      description: "Personalized one-on-one sessions to help you work through personal challenges and achieve mental wellness.",
      image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "$150"
    },
    {
      id: 2,
      title: "Couples Counseling",
      description: "Professional guidance to help couples improve communication and strengthen their relationships.",
      image: "https://images.pexels.com/photos/4101144/pexels-photo-4101144.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "$180"
    },
    {
      id: 3,
      title: "Career Counseling",
      description: "Expert advice to help you navigate career transitions and achieve professional fulfillment.",
      image: "https://images.pexels.com/photos/4101145/pexels-photo-4101145.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "$190"
    },
    {
      id: 4,
      title: "Stress Management",
      description: "Learn effective techniques to manage stress and improve your overall quality of life.",
      image: "https://images.pexels.com/photos/4101146/pexels-photo-4101146.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "$160"
    },
    {
      id: 5,
      title: "Anxiety Treatment",
      description: "Specialized treatment approaches to help you overcome anxiety and regain control of your life.",
      image: "https://images.pexels.com/photos/4101147/pexels-photo-4101147.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "$170"
    },
    {
      id: 6,
      title: "Depression Therapy",
      description: "Compassionate support and evidence-based treatments to help you overcome depression.",
      image: "https://images.pexels.com/photos/4101148/pexels-photo-4101148.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "$165"
    }
  ];

  const pricingPlans = [
    {
      title: "Individual Therapy",
      price: "$150",
      period: "/session",
      features: ["Personalized", "Confidential", "Effective"],
      color: "primary",
      image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      title: "Couples Counseling",
      price: "$180",
      period: "/session",
      features: ["Personalized", "Confidential", "Effective"],
      color: "secondary",
      image: "https://images.pexels.com/photos/4101144/pexels-photo-4101144.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      title: "Career Counseling",
      price: "$190",
      period: "/session",
      features: ["Personalized", "Confidential", "Effective"],
      color: "primary",
      image: "https://images.pexels.com/photos/4101145/pexels-photo-4101145.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  const faqs = [
    {
      question: "What kind of therapy services do you offer?",
      answer: "We provide a range of therapy services, including individual, couples, and group therapy sessions tailored to your needs."
    },
    {
      question: "Do you offer online therapy options?",
      answer: "Yes, we offer virtual therapy sessions for your convenience and comfort, ensuring you can access support from anywhere."
    },
    {
      question: "How can I schedule an appointment?",
      answer: "You can easily schedule an appointment by contacting our office via phone or email, or by filling out our online appointment request form."
    },
    {
      question: "Are your services covered by insurance?",
      answer: "We accept a variety of insurance plans, and our team can help you navigate the process to ensure you receive the coverage you are entitled to."
    },
    {
      question: "Do you offer specialized therapy for specific issues?",
      answer: "Our psychologists have expertise in various areas, such as anxiety, depression, trauma, and more, offering specialized therapy tailored to your unique needs."
    },
    {
      question: "Can I choose my therapist?",
      answer: "We strive to match you with a therapist who best fits your preferences and needs, ensuring a strong therapeutic alliance for effective treatment."
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
                <Link className="nav-link active" href="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">About Us</Link>
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
              <h1 className="display-4 fw-bold mb-0">Our Services</h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-lg-end mb-0">
                  <li className="breadcrumb-item"><Link href="/" className="text-white-50">Home</Link></li>
                  <li className="breadcrumb-item active text-white">Services</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <div className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3">
                Our Services
              </div>
              <h2 className="display-4 fw-bold mb-4">Therapist & Treatments</h2>
            </div>
          </div>
          
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div className="service-card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="position-relative mb-4">
                    <span className="position-absolute top-0 end-0 badge bg-primary fs-6 m-3">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <img src={service.image} className="img-fluid rounded-circle mx-auto d-block mb-3" 
                         style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt={service.title} />
                  </div>
                  <div className="text-center">
                    <h5 className="fw-bold mb-3">{service.title}</h5>
                    <p className="text-muted mb-4">{service.description}</p>
                    <Link href="/appointment" className="btn btn-outline-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-gradient-soft">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <div className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3">
                Our Package
              </div>
              <h2 className="display-4 fw-bold mb-4">Pricing Plans</h2>
            </div>
          </div>
          
          <div className="row g-4 justify-content-center">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="pricing-card animate-scaleIn" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`pricing-header ${plan.color}`}>
                    <h4 className="mb-0">{plan.title}</h4>
                  </div>
                  <div className="p-4 position-relative">
                    <img src={plan.image} className="position-absolute top-0 end-0 rounded-circle me-3 mt-3" 
                         style={{ width: '60px', height: '60px', objectFit: 'cover' }} alt={plan.title} />
                    <div className="text-center mb-4">
                      <span className="fs-6 text-muted">Start from</span>
                      <div className="mb-3">
                        <span className="display-5 fw-bold text-gradient">{plan.price}</span>
                        <span className="fs-6">{plan.period}</span>
                      </div>
                    </div>
                    <p className="text-muted mb-4">
                      Professional therapy sessions tailored to your specific needs and goals with experienced therapists.
                    </p>
                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="mb-2">
                          <i className="bi bi-check-circle-fill text-primary me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/appointment" className="btn btn-primary w-100">
                      Make Appointment
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <div className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3">
                Do you have
              </div>
              <h2 className="display-4 fw-bold mb-4">Any Questions</h2>
            </div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion accordion-custom" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" 
                              data-bs-toggle="collapse" data-bs-target={`#faq${index}`}>
                        {faq.question}
                      </button>
                    </h2>
                    <div id={`faq${index}`} className="accordion-collapse collapse" 
                         data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
'use client';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (agree && email) {
      alert(`Subscribed with: ${email}`);
      // Place your API call here
    } else {
      alert('Please enter an email and agree to the privacy policy.');
    }
  };

  return (
    <section className="py-5 text-center position-relative bg-light" style={{ backgroundImage: "url('/images/bg-pattern.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8">
            <h2 className="fw-bold">
              Our online meditation sessions are a <br /> great way to start your day
            </h2>
          </div>
        </div>
        <div className="justify-content-center">
          <div className="col-lg-8">
            <Form onSubmit={handleSubscribe}>
              <InputGroup className="mb-3 shadow-sm">
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button variant="dark" type="submit">
                  <i className="bi bi-send-fill me-2"></i>SUBSCRIBE
                </Button>
              </InputGroup>
              <div className="form-check d-flex justify-content-center">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  id="privacyCheck"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  required
                />
                <label className="form-check-label" htmlFor="privacyCheck">
                  I agree to the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                </label>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

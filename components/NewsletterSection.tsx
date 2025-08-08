'use client';
import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

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
    <section className="py-10 text-center newsletter-main position-relative bg-light">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8">
            <h2 className="fw-bold">
             Unser Flyer ist ein guter Start<br />  für mehr Informationen
            </h2>
          </div>
        </div>
        <div className="d-flex justify-content-center ">
          <div className="col-lg-8">
            <Form onSubmit={handleSubscribe}>
              <InputGroup className="newslatter-input-group-section mb-3">
                <Form.Control
                  type="email"
                  placeholder="Geben Sie Ihre E-Mail-Adresse ein"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button variant="dark" type="submit">
                  <i className="bi bi-send-fill me-2"></i>ABONNIEREN
                </Button>
              </InputGroup>
              <div className="form-check d-flex align-items-center justify-content-center">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  id="privacyCheck"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  required
                />
                <label className="form-check-label" htmlFor="privacyCheck">
                 Ich stimme dem zu <a href="" target="_blank" rel="noopener noreferrer">Datenschutzrichtlinie</a>.
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

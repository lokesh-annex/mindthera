"use client";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import DatenschutzPage from "@/app/datenschutz/page";
import { Form, Button, InputGroup } from "react-bootstrap";
import DatenschutzPageContent from "@/components/DatenschutzContent";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string|null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    if (!agree || !email) {
      setMessage("Bitte geben Sie eine E-Mail-Adresse ein und stimmen Sie der Datenschutzrichtlinie zu.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setMessage("Erfolgreich abonniert!");
        setEmail("");
        setAgree(false);
      } else {
        setMessage(data.message || "Fehler beim Abonnieren.");
      }
    } catch (err) {
      setMessage("Serverfehler. Bitte versuchen Sie es später erneut.");
    }
    setLoading(false);
  };

  return (
    <section className="py-10 text-center newsletter-main position-relative bg-light">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8">
            <h2 className="fw-bold">
              Unser Flyer ist ein guter Start
              <br /> für mehr Informationen
            </h2>
          </div>
        </div>
        <div className="d-flex justify-content-center ">
          <div className="col-lg-8">
            <Form onSubmit={handleSubscribe}>
              {message && (
                <div className={`mb-3 text-center fw-bold ${message.includes("Erfolgreich") ? "text-success" : "text-danger"}`}>
                  {message}
                </div>
              )}
              <InputGroup className="newslatter-input-group-section mb-3">
                <Form.Control
                  type="email"
                  placeholder="Geben Sie Ihre E-Mail-Adresse ein"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button variant="dark" type="submit" disabled={loading}>
                  <i className="bi bi-send-fill me-2"></i>
                  {loading ? "Wird gesendet..." : "ABONNIEREN"}
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
                  Ich stimme dem zu{" "}
                  <span
                    style={{
                      cursor: "pointer",
                      color: "#5c377d",
                      textDecoration: "underline",
                    }}
                    onClick={() => setShowModal(true)}
                  >
                    Datenschutzrichtlinie
                  </span>
                  .
                  <Modal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    size="lg"
                    scrollable
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Datenschutzerklärung</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <DatenschutzPageContent />
                    </Modal.Body>
                  </Modal>
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

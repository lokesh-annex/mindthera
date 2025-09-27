"use client";
import React, { useState, useEffect, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
import DatenschutzPage from "@/app/datenschutz/page";
import { Form, Button, InputGroup } from "react-bootstrap";
import DatenschutzPageContent from "@/components/DatenschutzContent";

// API endpoints
const FORM_API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/forms/68d519481b1e3f12d34e11c4?depth=2&draft=false&locale=undefined&trash=false`;
const PAGE_API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68d66e0f4692d950d52c5db9?depth=2&draft=false&locale=undefined&trash=false`;

// TypeScript interfaces
interface FormField {
  blockType: string;
  name: string;
  label: string;
  required: boolean;
  id: string;
}

interface FormData {
  title: string;
  fields: FormField[];
  submitButtonLabel: string;
  confirmationType: string;
  confirmationMessage: any;
  id: string;
}

interface PageContent {
  title?: string;
  layout?: {
    blockType: string;
    title?: string;
    description?: string;
    content?: string;
    id: string;
  }[];
}

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string|null>(null);
  const [emailError, setEmailError] = useState<string>("");
  const [checkboxError, setCheckboxError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [formData, setFormData] = useState<FormData | null>(null);
  const [pageContent, setPageContent] = useState<PageContent | null>(null);
  const [isLoadingContent, setIsLoadingContent] = useState(true);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const trimmedEmail = email.trim();
    return trimmedEmail.length > 0 && emailRegex.test(trimmedEmail) && trimmedEmail.length <= 254;
  };

  const clearErrors = () => {
    setEmailError("");
    setCheckboxError("");
    setMessage(null);
  };

  const renderHTMLContent = (htmlString: string): React.ReactNode => {
    if (!htmlString) return '';
    
    // Clean up HTML entities and format
    const cleanHTML = htmlString
      .replace(/&nbsp;/g, ' ')
      .replace(/&ldquo;/g, '"')
      .replace(/&rdquo;/g, '"')
      .replace(/Ã¼/g, 'ü')
      .replace(/Ã¶/g, 'ö')
      .replace(/Ã¤/g, 'ä')
      .replace(/ÃŸ/g, 'ß');
    
    return <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />;
  };

  const fetchData = useCallback(async () => {
    setIsLoadingContent(true);
    try {
      // Fetch form data
      const formRes = await fetch(FORM_API_URL, { cache: "no-store" });
      if (formRes.ok) {
        const formJson = await formRes.json();
        const formDoc = formJson?.doc ?? formJson;
        setFormData(formDoc);
      }
      
      // Fetch page content
      const pageRes = await fetch(PAGE_API_URL, { cache: "no-store" });
      if (pageRes.ok) {
        const pageJson = await pageRes.json();
        const pageDoc = pageJson?.doc ?? pageJson;
        setPageContent(pageDoc);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      setIsLoadingContent(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    clearErrors();
    
    // Validate email first
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setEmailError("Bitte geben Sie Ihre E-Mail-Adresse ein.");
      return;
    } else if (!validateEmail(trimmedEmail)) {
      setEmailError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }
    
    // Then validate checkbox if email is valid
    if (!agree) {
      setCheckboxError("Bitte stimmen Sie der Datenschutzrichtlinie zu.");
      return;
    }
    setLoading(true);
    try {
      // Submit to Payload CMS form submission endpoint
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/form-submissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          form: "68d519481b1e3f12d34e11c4",
          submissionData: {
            email: email.trim()
          }
        }),
      });
      const data = await res.json();
      if (res.ok) {
        // Get success message from API
        const confirmationText = formData?.confirmationMessage?.root?.children?.find((child: any) => 
          child.children?.[0]?.text
        )?.children?.[0]?.text || "Danke!";
        setSuccessMessage(confirmationText);
        
        // Show success popup
        setShowSuccessModal(true);
        setEmail("");
        setAgree(false);
        clearErrors(); // Clear all error messages
        
     
        setTimeout(() => {
          setShowSuccessModal(false);
        }, 5000);
      } else {
        // Handle specific server errors
        if (data.errors && data.errors.length > 0) {
          const error = data.errors[0];
          if (error.field === 'email') {
            setEmailError(error.message || "Ungültige E-Mail-Adresse.");
          } else {
            setMessage(error.message || "Fehler beim Abonnieren.");
          }
        } else {
          setMessage(data.message || "Fehler beim Abonnieren. Bitte versuchen Sie es später erneut.");
        }
      }
    } catch (err) {
      console.error('Newsletter submission error:', err);
      setMessage("Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.");
    }
    setLoading(false);
  };

  return (
    <section className="py-10 text-center newsletter-main position-relative bg-light">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-10">
            {isLoadingContent ? (
              // Loading spinner
              <div className="d-flex justify-content-center align-items-center py-5">
                <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : pageContent && pageContent.layout && pageContent.layout.length > 0 ? (
              <div>
                {pageContent.layout.map((block, index) => (
                  <div key={block.id || index} className="mb-3">
                    {block.title && (
                      <h2 
                        className="fw-bold mb-3" 
                        style={{ color: '#5c377d' }}
                        dangerouslySetInnerHTML={{ 
                          __html: block.title
                            .replace(/&ldquo;/g, '"')
                            .replace(/&rdquo;/g, '"')
                          
                        }}
                      />
                    )}
                    {block.description && (
                      <h4 className="mb-3" style={{ color: '#5c377d', fontWeight: '600' }}>
                        {block.description
                       
                        }
                      </h4>
                    )}
                    {block.content && (
                      <div className="dark-color">
                        {renderHTMLContent(block.content)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
          "" 
            )}
          </div>
        </div>
        <div className="d-flex justify-content-center ">
          <div className="col-lg-8">
            {message && (
              <div className="alert alert-danger text-center mb-3" role="alert">
                {message}
              </div>
            )}
            <Form onSubmit={handleSubscribe}>
              {message && (
                <div className="mb-3 text-center fw-bold text-danger">
                  {message}
                </div>
              )}
              <InputGroup className="newslatter-input-group-section mb-3">
                <Form.Control
                  type="email"
                  placeholder="Geben Sie Ihre E-Mail-Adresse ein"
                  value={email}
                  onChange={(e) => {
                    const newEmail = e.target.value;
                    setEmail(newEmail);
                    
                    // Clear email error when user starts typing
                    if (emailError && newEmail.trim()) {
                      setEmailError("");
                    }
                    
                    // If email becomes valid and checkbox is not checked, show checkbox error
                    if (newEmail.trim() && validateEmail(newEmail.trim()) && !agree && !emailError) {
                      setCheckboxError("Bitte stimmen Sie der Datenschutzrichtlinie zu.");
                    }
                  }}
                  className={emailError ? "is-invalid" : ""}
                  disabled={loading}
                  
                />
                <Button variant="dark" type="submit" disabled={loading}>
                  <i className="bi bi-send-fill me-2"></i>
                  {loading ? "Wird gesendet..." : (formData?.submitButtonLabel || "ABONNIEREN")}
                </Button>
              </InputGroup>
              {emailError && (
                <div className="text-danger text-center mb-2" style={{ fontSize: "0.875rem" }}>
                  {emailError}
                </div>
              )}
              <div className="form-check d-flex align-items-center justify-content-center">
                <input
                  className={`form-check-input me-2 ${checkboxError ? "is-invalid" : ""}`}
                  type="checkbox"
                  id="privacyCheck"
                  checked={agree}
                  onChange={(e) => {
                    setAgree(e.target.checked);
                    // Clear checkbox error when checked
                    if (checkboxError && e.target.checked) {
                      setCheckboxError("");
                    }
                  }}
                  disabled={loading}
                  
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
                  {/* Privacy Policy Modal */}
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
                  
                  {/* Success Popup Modal */}
                  <Modal
                    show={showSuccessModal}
                    onHide={() => setShowSuccessModal(false)}
                    centered
                    className="success-modal"
                  >
                    <Modal.Body className="text-center p-5" style={{  borderRadius: '15px', position: 'relative' }}>
                      {/* Close Icon */}
                      <button
                        onClick={() => setShowSuccessModal(false)}
                        style={{
                          position: 'absolute',
                          top: '15px',
                          right: '15px',
                          background: 'rgba(255,255,255,0.2)',
                          border: 'none',
                          borderRadius: '50%',
                          width: '35px',
                          height: '35px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
                        onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                      >
                        <i className="bi bi-x-lg" style={{ fontSize: '1.2rem' }}></i>
                      </button>
                      
                      <div className="mb-4">
                        <i className="bi bi-check-circle-fill" style={{ fontSize: '4rem', color: '#28a745' }}></i>
                      </div>
                      <h3 className="mb-3">{successMessage || "Danke!"}</h3>
                   
                   
                    </Modal.Body>
                  </Modal>
                </label>
              </div>
              {checkboxError && (
                <div className="text-danger text-center mt-2" style={{ fontSize: "0.875rem" }}>
                  {checkboxError}
                </div>
              )}
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

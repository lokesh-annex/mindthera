"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from "react-bootstrap/Modal";
import DatenschutzPage from "@/app/datenschutz/page";
import { Button, InputGroup } from "react-bootstrap";
import DatenschutzPageContent from "@/components/DatenschutzContent";
// import { brevoIntegration } from "@/lib/brevo";

// API endpoints
const FORM_API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/forms/68d519481b1e3f12d34e11c4?depth=2&draft=false&locale=undefined&trash=false`;
const PAGE_API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68d66e0f4692d950d52c5db9?depth=2&draft=false&locale=undefined&trash=false`;

// TypeScript interfaces
interface FormField {
  blockType: string;
  name: string;
  label: string;
  required?: boolean;
  defaultValue?: string;
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
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string|null>(null);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [formData, setFormData] = useState<FormData | null>(null);
  const [pageContent, setPageContent] = useState<PageContent | null>(null);
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [validationSchema, setValidationSchema] = useState<any>(null);
  const [initialValues, setInitialValues] = useState<{[key: string]: string | boolean}>({});

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

  const getStaticFieldName = (field: FormField, index: number): string => {
    // Return static field names based on field type
    switch (field.blockType) {
      case 'email':
        return 'email';
      case 'text':
        return 'name';
      case 'checkbox':
        return 'agree';
      default:
        return `field${index + 1}`;
    }
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
        
        // Create initial values and validation schema
        const initialVals: {[key: string]: string | boolean} = { agree: false };
        const schemaFields: {[key: string]: any} = {};
        
        formDoc.fields?.forEach((field: FormField, index: number) => {
          const staticFieldName = getStaticFieldName(field, index);
          initialVals[staticFieldName] = field.defaultValue || '';
          
          // Create Yup validation based on field type
          let fieldSchema;
          switch (field.blockType) {
            case 'email':
              fieldSchema = Yup.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
              break;
            default:
              fieldSchema = Yup.string();
          }
          
          if (field.required) {
            fieldSchema = fieldSchema.required(`${field.label} ist erforderlich.`);
          }
          
          schemaFields[staticFieldName] = fieldSchema;
        });
        
        // Add agreement checkbox validation
        schemaFields.agree = Yup.boolean().oneOf([true], 'Bitte stimmen Sie der Datenschutzrichtlinie zu.');
        
        setInitialValues(initialVals);
        setValidationSchema(Yup.object().shape(schemaFields));
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

  const handleFormikSubmit = async (values: {[key: string]: string | boolean}, { resetForm, setSubmitting }: any) => {
    setMessage(null);
    setLoading(true);
    
    try {
      // Convert static field names back to original field names for API submission
      const originalFieldData: {[key: string]: string} = {};
      
      formData?.fields?.forEach((field: FormField, index: number) => {
        const staticFieldName = getStaticFieldName(field, index);
        if (values[staticFieldName] && typeof values[staticFieldName] === 'string') {
          originalFieldData[field.name] = values[staticFieldName] as string;
        }
      });

      // Submit to Payload CMS form submission endpoint with readable field names
      const formattedSubmissionData = formData?.fields?.map((field: FormField, index: number) => {
        const staticFieldName = getStaticFieldName(field, index);
        return {
          field: field.name,       // Use field name instead of ID for better readability
          value: values[staticFieldName] || ''
        };
      }) || [];

      const submissionPayload = {
        form: "68d519481b1e3f12d34e11c4",
        submissionData: formattedSubmissionData
      };

      // Submit to Payload CMS only (Brevo commented out)
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/form-submissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionPayload),
      });
      
      const responseData = await res.json();
      
      if (res.ok) {
        // Get success message from API
        const confirmationText = formData?.confirmationMessage?.root?.children?.find((child: any) => 
          child.children?.[0]?.text
        )?.children?.[0]?.text || "Danke für deine Anmeldung zu unserem Newsletter! Schau in dein Postfach, um die Anmeldung zu bestätigen.";
        setSuccessMessage(confirmationText);
        
        // Show success popup
        setShowSuccessModal(true);
        setMessage(null);
        
        // Reset form to initial values
        resetForm();
        
        setTimeout(() => {
          setShowSuccessModal(false);
        }, 5000);
      } else {
        setMessage(responseData.message || "Fehler beim Abonnieren. Bitte versuchen Sie es später erneut.");
      }
    } catch (err) {
      console.error('Newsletter submission error:', err);
      setMessage("Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.");
    }
    setLoading(false);
    setSubmitting(false);
  };

  return (
    <section className="py-10 text-center newsletter-main position-relative bg-light">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-12">
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
            
            {/* Don't render until we have form data and validation schema */}
            {!formData || !validationSchema || Object.keys(initialValues).length === 0 ? (
              <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleFormikSubmit}
                enableReinitialize={true}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form>
                    <InputGroup className="newslatter-input-group-section mb-3">
                      <Field
                        type="email"
                        name="email"
                        className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
                        placeholder={"Geben Sie Ihre E-Mail-Adresse ein"}
                        disabled={loading || isSubmitting}
                      />
                      <Button variant="dark" type="submit" disabled={loading || isSubmitting}>
                        <i className="bi bi-send-fill me-2"></i>
                        {loading || isSubmitting ? "Wird gesendet..." : (formData?.submitButtonLabel || "ABONNIEREN")}
                      </Button>
                    </InputGroup>
                    <ErrorMessage name="email">
                      {msg => <div className="text-danger text-center mb-2" style={{ fontSize: "0.875rem" }}>{msg}</div>}
                    </ErrorMessage>
                    
                    <div className="form-check d-flex align-items-center justify-content-center">
                      <Field
                        type="checkbox"
                        name="agree"
                        className={`form-check-input me-2 ${touched.agree && errors.agree ? "is-invalid" : ""}`}
                        id="privacyCheck"
                        disabled={loading || isSubmitting}
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
                      </label>
                    </div>
                    <ErrorMessage name="agree">
                      {msg => <div className="text-danger text-center mt-2" style={{ fontSize: "0.875rem" }}>{msg}</div>}
                    </ErrorMessage>
                  </Form>
                )}
              </Formik>
            )}
            
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

// API endpoint
const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/forms/68d52ff11b1e3f12d34e1328?depth=2&draft=false&locale=undefined&trash=false`;

// TypeScript interfaces
interface FormField {
  blockType: string;
  name: string;
  label: string;
  defaultValue?: string;
  required?: boolean;
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

// Internal component that uses reCAPTCHA v3
const ContactFormFieldsInternal = () => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [validationSchema, setValidationSchema] = useState<any>(null);
  const [initialValues, setInitialValues] = useState<{[key: string]: string}>({});
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  
  const { executeRecaptcha } = useGoogleReCaptcha();

  const fetchFormData = useCallback(async () => {
    try {
      const res = await fetch(API_URL, { cache: "no-store" });
      if (!res.ok) return;
      const json = await res.json();
      const doc = json?.doc ?? json;
      setFormData(doc);
      
      // Create initial values and validation schema
      const initialVals: {[key: string]: string} = {};
      const schemaFields: {[key: string]: any} = {};
      
      doc.fields?.forEach((field: FormField, index: number) => {
        const typeCount = doc.fields.filter((f: FormField, i: number) => f.blockType === field.blockType && i <= index).length;
        
        const staticFieldName = (() => {
          switch (field.blockType) {
            case 'text': return typeCount > 1 ? `name${typeCount}` : 'name';
            case 'email': return typeCount > 1 ? `email${typeCount}` : 'email';
            case 'number': return typeCount > 1 ? `telephone${typeCount}` : 'telephone';
            case 'textarea': return typeCount > 1 ? `message${typeCount}` : 'message';
            default: return `defaultField${index + 1}`;
          }
        })();
          
        initialVals[staticFieldName] = field.defaultValue || '';
        
        // Create Yup validation based on field type
        let fieldSchema;
        switch (field.blockType) {
          case 'email':
            fieldSchema = Yup.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
            break;
          case 'number':
            fieldSchema = Yup.string().matches(/^[0-9+\-\s()]*$/, 'Bitte geben Sie eine gültige Telefonnummer ein.');
            break;
          case 'text':
            fieldSchema = Yup.string().min(2, 'Mindestens 2 Zeichen erforderlich.');
            break;
          case 'textarea':
            fieldSchema = Yup.string().min(10, 'Mindestens 10 Zeichen erforderlich.');
            break;
          default:
            fieldSchema = Yup.string();
        }
        
        if (field.required) {
          fieldSchema = fieldSchema.required(`${field.label} ist erforderlich.`);
        }
        
        schemaFields[staticFieldName] = fieldSchema;
      });
      
      // reCAPTCHA v3 validation - always optional since it's automatic
      schemaFields.recaptcha = Yup.string(); // No validation needed for v3
      initialVals.recaptcha = '';
      
      setInitialValues(initialVals);
      setValidationSchema(Yup.object().shape(schemaFields));
    } catch (err) {
      console.error('Error fetching form data:', err);
    }
  }, []);

  useEffect(() => {
    fetchFormData();
  }, [fetchFormData]);

  const handleFormikSubmit = async (values: {[key: string]: string}, { resetForm, setSubmitting, setFieldError, setFieldValue }: any) => {
    setMessage(null);
    setLoading(true);
    
    // Execute reCAPTCHA v3 - automatic execution
    let recaptchaTokenV3 = null;
    if (executeRecaptcha) {
      try {
        recaptchaTokenV3 = await executeRecaptcha('form_submit');
        console.log('reCAPTCHA v3 token generated successfully');
      } catch (error) {
        console.warn('reCAPTCHA v3 failed, proceeding without token:', error);
        // Don't block form submission for reCAPTCHA v3 failures
      }
    }
    
    try {
      // Convert static field names back to original field names for API submission
      const originalFieldData: {[key: string]: string} = {};
      
      formData?.fields?.forEach((field: FormField, index: number) => {
        const staticFieldName = getStaticFieldName(field, index);
        if (values[staticFieldName]) {
          originalFieldData[field.name] = values[staticFieldName];
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
        form: "68d52ff11b1e3f12d34e1328",
        submissionData: formattedSubmissionData,
        ...(recaptchaTokenV3 && { recaptchaToken: recaptchaTokenV3 })
      };

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
        )?.children?.[0]?.text || "Vielen Dank für Ihre Nachricht!";
        setSuccessMessage(confirmationText);
        
        // Show success popup
        setShowSuccessModal(true);
        setMessage(null); // Clear any error messages
        
        // Reset form to initial values
        resetForm();
        
        // Reset form state
        setRecaptchaToken(null);
        setFieldValue('recaptcha', '');
        
        setTimeout(() => {
          setShowSuccessModal(false);
        }, 5000);
      } else {
        setMessage(responseData.message || "Fehler beim Senden der Nachricht.");
        // Reset form state on error
        setRecaptchaToken(null);
        setFieldValue('recaptcha', '');
      }
    } catch (err) {
      setMessage("Serverfehler. Bitte versuchen Sie es später erneut.");
      // Reset form state on error
      setRecaptchaToken(null);
      setFieldValue('recaptcha', '');
    }
    setLoading(false);
    setSubmitting(false);
  };

  const getStaticFieldName = (field: FormField, index: number): string => {
    // Return static field names based on field type and make them unique
    const typeCount = formData?.fields?.filter((f, i) => f.blockType === field.blockType && i <= index).length || 1;
    
    switch (field.blockType) {
      case 'text':
        return typeCount > 1 ? `name${typeCount}` : 'name';
      case 'email':
        return typeCount > 1 ? `email${typeCount}` : 'email';
      case 'number':
        return typeCount > 1 ? `telephone${typeCount}` : 'telephone';
      case 'textarea':
        return typeCount > 1 ? `message${typeCount}` : 'message';
      default:
        return `defaultField${index + 1}`;
    }
  };

  const renderFormikField = (field: FormField, index: number) => {
    const fieldName = getStaticFieldName(field, index);
    
    switch (field.blockType) {
      case 'text':
        return (
          <div key={field.id} className="field-set position-relative">
            <Field 
              type="text" 
              name={fieldName}
              className="form-control no-border" 
              placeholder={field.label}
            />
            <ErrorMessage name={fieldName} component="div" className="text-danger position-absolute top-90 small" />
          </div>
        );
      case 'email':
        return (
          <div key={field.id} className="field-set position-relative">
            <Field 
              type="email" 
              name={fieldName}
              className="form-control no-border" 
              placeholder={field.label}
            />
            <ErrorMessage name={fieldName} component="div" className="text-danger position-absolute top-90 small" />
          </div>
        );
      case 'number':
        return (
          <div key={field.id} className="field-set position-relative">
            <Field 
              type="tel" 
              name={fieldName}
              className="form-control no-border" 
              placeholder={field.label}
            />
            <ErrorMessage name={fieldName} component="div" className="text-danger position-absolute top-90 small" />
          </div>
        );
      case 'textarea':
        return (
          <div key={field.id} className="field-set mb20 position-relative">
            <Field 
              as="textarea"
              name={fieldName}
              className="form-control no-border"
              placeholder={field.label}
              rows={5}
            />
            <ErrorMessage name={fieldName} component="div" className="text-danger position-absolute top-100 small" />
          </div>
        );
      default:
        return null;
    }
  };

  // Don't render until we have form data and validation schema
  if (!formData || !validationSchema || Object.keys(initialValues).length === 0) {
    return (
      <div className="col-lg-6">
        <div className="p-4 rounded-10px" style={{ background: 'rgba(var(--secondary-color-rgb), 0.1)' }}>
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="col-lg-6">
      <div className="p-4 rounded-10px" style={{ background: 'rgba(var(--secondary-color-rgb), 0.1)' }}>
        {message && (
          <div className={`mb-3 p-3 rounded ${message.includes("thank u") || message.includes("Thank you") ? "bg-success text-white" : "bg-danger text-white"}`}>
            {message}
          </div>
        )}
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormikSubmit}
          enableReinitialize={true}
        >
          {({ isSubmitting, setFieldValue, setFieldError }) => (
            <Form
              name="contactForm"
              id="contact_form"
              className="position-relative z1000"
            >
              {formData?.fields?.map((field, index) => renderFormikField(field, index))}
              
              {/* reCAPTCHA v3 - Invisible protection */}
              {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && 
               process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY !== '' && executeRecaptcha ? (
                <div className="field-set mb-3 position-relative">
                  <div className="alert alert-success small">
                    <i className="bi bi-shield-check me-2"></i>
                    reCAPTCHA v3 ist aktiv - Formulare werden automatisch geschützt
                  </div>
                  <Field name="recaptcha" type="hidden" value={recaptchaToken || ''} />
                  <ErrorMessage name="recaptcha" component="div" className="text-danger small mt-1" />
                </div>
              ) : (
                <div className="field-set mb-3 position-relative">
                  <div className="alert alert-warning">
                    <i className="bi bi-info-circle me-2"></i>
                    reCAPTCHA ist im Entwicklungsmodus deaktiviert
                  </div>
                </div>
              )}
              
              <div id="submit" className="mt30">
                <button 
                  type="submit" 
                  id="send_message" 
                  className="btn-main" 
                  disabled={loading || isSubmitting}
                >
                  {loading || isSubmitting ? "Wird gesendet..." : (formData?.submitButtonLabel || "Schicke Deine Nachricht")}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Success Popup Modal */}
      <Modal
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
        centered
        backdrop="static"
        keyboard={false}
      >
            {/* Close Icon */}
            <button
              type="button"
              className="btn-close  position-absolute top-0 end-0 m-3"
              onClick={() => setShowSuccessModal(false)}
              style={{ fontSize: '0.8rem' ,zIndex: 9}}
            ></button>
        <Modal.Body className="text-center p-5">
          <div 
            className="p-4 rounded-4"
            style={{
            
              position: 'relative'
            }}
          >
        
            
            {/* Success Icon */}
            <div className="mb-3">
              <i className="bi bi-check-circle-fill" style={{ fontSize: '3rem', color: '#28a745' }}></i>
            </div>
            
            {/* Success Message */}
            <h4 className="mb-3">Erfolgreich gesendet!</h4>
            <p className="mb-0" style={{ fontSize: '1.1rem' }}>
              {successMessage}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

// Main component with reCAPTCHA v3 provider
const ContactFormFields = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}>
      <ContactFormFieldsInternal />
    </GoogleReCaptchaProvider>
  );
};

export default ContactFormFields;
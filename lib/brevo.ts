// Brevo (formerly Sendinblue) integration
interface BrevoContact {
  email: string;
  attributes?: {
    FIRSTNAME?: string;
    LASTNAME?: string;
    [key: string]: any;
  };
  listIds?: number[];
}

interface BrevoResponse {
  success: boolean;
  message?: string;
  id?: number;
}

class BrevoIntegration {
  private apiKey: string;
  private baseUrl = 'https://api.brevo.com/v3';
  private isConfigured: boolean;

  constructor() {
    this.apiKey = process.env.NEXT_PUBLIC_BREVO_API_KEY || '';
    this.isConfigured = !!(this.apiKey && this.apiKey !== 'your-brevo-api-key-here' && this.apiKey.length > 10);
    
    // Debug logging
    console.log('🔍 Brevo Debug Info:', {
      hasApiKey: !!this.apiKey,
      apiKeyLength: this.apiKey?.length,
      apiKeyStart: this.apiKey?.substring(0, 20) + '...',
      isConfigured: this.isConfigured,
      envVars: {
        NEXT_PUBLIC_BREVO_API_KEY: !!process.env.NEXT_PUBLIC_BREVO_API_KEY,
        NEXT_PUBLIC_BREVO_LIST_ID: process.env.NEXT_PUBLIC_BREVO_LIST_ID
      }
    });
    
    if (!this.isConfigured) {
      console.warn('❌ Brevo integration disabled - API key not configured properly');
    } else {
      console.log('✅ Brevo integration enabled');
    }
  }

  async subscribeToNewsletter(email: string, name?: string): Promise<BrevoResponse> {
    if (!this.isConfigured) {
      console.info('Brevo subscription skipped - not configured');
      return {
        success: true, // Return success so form doesn't fail
        message: 'Brevo integration not configured - using CMS only'
      };
    }

    try {
      // Parse name into first and last name if provided
      const nameParts = name ? name.trim().split(' ') : [];
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      // Step 1: Add contact to list
      const contactData: BrevoContact = {
        email: email.toLowerCase().trim(),
        attributes: {
          FIRSTNAME: firstName,
          LASTNAME: lastName,
        },
        listIds: [process.env.NEXT_PUBLIC_BREVO_LIST_ID ? parseInt(process.env.NEXT_PUBLIC_BREVO_LIST_ID) : 1]
      };

      const contactResponse = await fetch(`${this.baseUrl}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': this.apiKey,
        },
        body: JSON.stringify(contactData),
      });

      const contactResult = await contactResponse.json();
      
      // Contact creation success (or already exists)
      const contactSuccess = contactResponse.ok || contactResponse.status === 400;

      // Step 2: Send transactional welcome email
      let emailSuccess = false;
      let emailMessage = '';

      if (contactSuccess) {
        try {
          const emailResult = await this.sendWelcomeEmail(email, firstName, lastName);
          emailSuccess = emailResult.success;
          emailMessage = emailResult.message || '';
        } catch (emailError) {
          console.warn('Welcome email failed but contact was added:', emailError);
          emailMessage = 'Contact added but welcome email failed';
        }
      }

      if (contactSuccess) {
        return {
          success: true,
          message: `Successfully subscribed${emailSuccess ? ' and welcome email sent' : ' (welcome email pending)'}`,
          id: contactResult.id
        };
      } else {
        console.error('Brevo contact creation error:', contactResult);
        return {
          success: false,
          message: contactResult.message || 'Failed to subscribe to newsletter'
        };
      }
    } catch (error) {
      console.error('Brevo integration error:', error);
      return {
        success: false,
        message: 'Network error while subscribing to newsletter'
      };
    }
  }

  async sendWelcomeEmail(email: string, firstName?: string, lastName?: string): Promise<BrevoResponse> {
    if (!this.isConfigured) {
      return {
        success: false,
        message: 'Brevo not configured'
      };
    }

    try {
      const emailData = {
        to: [
          {
            email: email.toLowerCase().trim(),
            name: firstName ? `${firstName} ${lastName || ''}`.trim() : email
          }
        ],
        templateId: parseInt(process.env.NEXT_PUBLIC_BREVO_TEMPLATE_ID || '1'), // You'll need to create this template
        params: {
          FIRSTNAME: firstName || '',
          LASTNAME: lastName || '',
          EMAIL: email
        }
      };

      const response = await fetch(`${this.baseUrl}/smtp/email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': this.apiKey,
        },
        body: JSON.stringify(emailData),
      });

      const result = await response.json();

      if (response.ok) {
        return {
          success: true,
          message: 'Welcome email sent successfully',
          id: result.messageId
        };
      } else {
        console.error('Brevo email API error:', result);
        return {
          success: false,
          message: result.message || 'Failed to send welcome email'
        };
      }
    } catch (error) {
      console.error('Brevo email error:', error);
      return {
        success: false,
        message: 'Network error while sending welcome email'
      };
    }
  }

  async updateContact(email: string, attributes: { [key: string]: any }): Promise<BrevoResponse> {
    if (!this.isConfigured) {
      return {
        success: true,
        message: 'Brevo integration not configured - using CMS only'
      };
    }

    try {
      const response = await fetch(`${this.baseUrl}/contacts/${encodeURIComponent(email)}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'api-key': this.apiKey,
        },
        body: JSON.stringify({ attributes }),
      });

      if (response.ok) {
        return {
          success: true,
          message: 'Contact updated successfully'
        };
      } else {
        const result = await response.json();
        return {
          success: false,
          message: result.message || 'Failed to update contact'
        };
      }
    } catch (error) {
      console.error('Brevo update error:', error);
      return {
        success: false,
        message: 'Network error while updating contact'
      };
    }
  }
}

export const brevoIntegration = new BrevoIntegration();
// Quick test to verify Brevo integration
import { brevoIntegration } from './lib/brevo';

console.log('Testing Brevo Integration...');

// Test newsletter subscription
brevoIntegration.subscribeToNewsletter('test@example.com', 'Test User')
  .then(result => {
    console.log('Brevo Test Result:', result);
    if (result.success) {
      console.log('✅ Brevo integration is working!');
    } else {
      console.log('❌ Brevo integration failed:', result.message);
    }
  })
  .catch(error => {
    console.error('Brevo test error:', error);
  });
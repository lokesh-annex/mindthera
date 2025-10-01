# Brevo Newsletter Integration with Transactional Emails

## Overview
This integration connects your newsletter form to Brevo (formerly Sendinblue) for:
1. **Contact Management**: Adds subscribers to your mailing list
2. **Transactional Emails**: Sends immediate welcome/confirmation emails
3. **CMS Integration**: Saves submissions to your Payload CMS

## Complete Setup Steps

### 1. Get Brevo API Key
1. Sign up for a free account at [Brevo](https://www.brevo.com/)
2. Go to **Settings** → **API Keys**
3. Create a new API key with **Send emails** and **Manage contacts** permissions
4. Copy the API key

### 2. Create Contact List
1. In Brevo dashboard, go to **Contacts** → **Lists**
2. Create a new list for your newsletter (e.g., "Newsletter Subscribers")
3. Note the List ID (visible in URL or list settings)

### 3. Create Email Template
1. Go to **Campaigns** → **Templates** → **Create a Template**
2. Choose **Transactional Template**
3. Design your welcome email with these variables:
   - `{{params.FIRSTNAME}}` - First name
   - `{{params.LASTNAME}}` - Last name
   - `{{params.EMAIL}}` - Email address
4. Save template and note the **Template ID**

### 4. Configure Environment Variables
Update your `.env.local` file:

```bash
# Brevo Configuration
NEXT_PUBLIC_BREVO_API_KEY=your-actual-api-key-here
NEXT_PUBLIC_BREVO_LIST_ID=your-list-id-here
NEXT_PUBLIC_BREVO_TEMPLATE_ID=your-template-id-here
```

### 5. Sample Email Template Content
Create a template with this structure:

**Subject**: `Willkommen bei unserem Newsletter, {{params.FIRSTNAME}}!`

**HTML Content**:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Newsletter Bestätigung</title>
</head>
<body>
    <h1>Willkommen {{params.FIRSTNAME}}!</h1>
    <p>Vielen Dank für deine Anmeldung zu unserem Newsletter.</p>
    <p>Deine E-Mail-Adresse <strong>{{params.EMAIL}}</strong> wurde erfolgreich hinzugefügt.</p>
    <p>Du erhältst in Kürze weitere Informationen von uns.</p>
    <br>
    <p>Mit freundlichen Grüßen,<br>Dein Traumafrei Team</p>
</body>
</html>
```

### 6. Features Included

✅ **Contact Management**: Adds subscribers to Brevo contact list
✅ **Transactional Emails**: Sends immediate welcome email after subscription
✅ **Dual Submission**: Saves to both Payload CMS and Brevo
✅ **Error Handling**: Continues if one service fails
✅ **Name Parsing**: Automatically splits full names into first/last
✅ **Duplicate Handling**: Handles existing subscribers gracefully
✅ **German Localization**: All messages in German
✅ **Template Variables**: Personalizes emails with user data

### 7. Testing
1. Start your development server: `npm run dev`
2. Navigate to a page with the newsletter form
3. Submit a test email
4. Check:
   - Your email inbox for the welcome email
   - Your Payload CMS admin for the form submission
   - Your Brevo dashboard for the new contact

### 8. Form Flow
1. User enters email and agrees to privacy policy
2. Form submits to **both** services simultaneously:
   - **Payload CMS**: Saves form submission for record keeping
   - **Brevo Contact API**: Adds contact to newsletter list
   - **Brevo Email API**: Sends transactional welcome email
3. Success message shows if submission succeeds
4. User receives immediate welcome email

### 9. Error Handling
- If **contact creation fails**: Shows error, no email sent
- If **contact succeeds but email fails**: Shows success, logs warning
- If **both fail**: Shows error message
- Network errors are handled gracefully

### 10. Customization
You can modify the Brevo integration in `lib/brevo.ts`:
- Add custom contact attributes
- Change email template variables
- Add conditional logic for different templates
- Customize error messages

### 11. Production Deployment
Ensure your production environment variables are set:
- `NEXT_PUBLIC_BREVO_API_KEY`
- `NEXT_PUBLIC_BREVO_LIST_ID`  
- `NEXT_PUBLIC_BREVO_TEMPLATE_ID`

The integration will automatically disable if API key is missing, allowing the form to still work with just Payload CMS.
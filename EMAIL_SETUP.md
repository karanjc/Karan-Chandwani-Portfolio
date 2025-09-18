# 📧 Email Configuration Setup

Your contact form is configured to send emails to `karanjchandwani@gmail.com` using EmailJS.

## Setup Steps:

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up with your Gmail account
3. Verify your email

### 2. Create Email Service
1. Go to **Email Services** → **Add New Service**
2. Choose **Gmail**
3. Connect your Gmail account (`karanjchandwani@gmail.com`)
4. Service ID will be: `service_portfolio`

### 3. Create Email Template
1. Go to **Email Templates** → **Create New Template**
2. Template ID: `template_contact`
3. Use this template:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

### 4. Get Your Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**
3. Replace `YOUR_PUBLIC_KEY` in `src/components/Contact.tsx` line 27

### 5. Update the Code
Replace line 27 in `Contact.tsx`:
```tsx
user_id: 'YOUR_ACTUAL_PUBLIC_KEY_HERE',
```

## Alternative: Simple mailto Solution

If you prefer a simpler solution, I can change the form to use `mailto:` which opens the user's email client:

```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  const subject = encodeURIComponent(formData.subject)
  const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)
  window.location.href = `mailto:karanjchandwani@gmail.com?subject=${subject}&body=${body}`
}
```

## Test the Form
1. Complete the EmailJS setup
2. Update your public key
3. Run `npm install` to install EmailJS
4. Test the contact form

The form will now send emails directly to your Gmail inbox! 📬
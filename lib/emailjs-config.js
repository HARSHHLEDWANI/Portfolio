// EmailJS Configuration
// Get these values from your EmailJS dashboard (https://dashboard.emailjs.com/)

export const emailjsConfig = {
  // Replace with your EmailJS Public Key
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY_HERE',
  
  // Replace with your EmailJS Service ID
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID_HERE',
  
  // Replace with your EmailJS Template ID
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID_HERE',
  
  // Your email address where you'll receive the messages
  RECEIVER_EMAIL: process.env.NEXT_PUBLIC_RECEIVER_EMAIL || 'your-email@example.com',
};

// Verify configuration
export const isEmailJSConfigured = () => {
  return (
    emailjsConfig.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE' &&
    emailjsConfig.SERVICE_ID !== 'YOUR_SERVICE_ID_HERE' &&
    emailjsConfig.TEMPLATE_ID !== 'YOUR_TEMPLATE_ID_HERE'
  );
};

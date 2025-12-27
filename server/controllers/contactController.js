// In-memory storage for contact messages (replace with database later)
const contactMessages = [];

export const submitContact = (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  const errors = {};

  if (!name || name.trim().length === 0) {
    errors.name = 'Name is required';
  }

  if (!email || email.trim().length === 0) {
    errors.email = 'Email is required';
  } else {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
  }

  if (!message || message.trim().length === 0) {
    errors.message = 'Message is required';
  }

  // If there are validation errors, return them
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors,
    });
  }

  // Store the message (in production, save to database)
  const contactData = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    timestamp: new Date().toISOString(),
  };

  contactMessages.push(contactData);

  // Log to console (in production, send email or save to database)
  console.log('New contact message received:', contactData);

  // Return success response
  res.status(200).json({
    success: true,
    message: "Message received. I'll get back to you soon.",
  });
};



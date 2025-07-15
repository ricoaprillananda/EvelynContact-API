const Contact = require('../models/Contact');

const submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  // Simple validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const contact = await Contact.create({ name, email, message });
    res.status(201).json({ message: 'Form submitted successfully', data: contact });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = { submitContactForm };

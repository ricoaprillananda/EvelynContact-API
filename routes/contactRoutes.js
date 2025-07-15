const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController');

router.post('/', submitContactForm); // POST /api/contact

module.exports = router;

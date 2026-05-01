const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Submit contact form
router.post('/', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        const contact = await newContact.save();
        res.json(contact);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Get messages (Admin only)
const { auth, authorize } = require('../middleware/auth');
router.get('/', auth, authorize(['Admin']), async (req, res) => {
    try {
        const messages = await Contact.find().sort({ date: -1 });
        res.json(messages);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Medicine = require('../models/Medicine');
const { auth, authorize } = require('../middleware/auth');

// Get all medicines
router.get('/', auth, async (req, res) => {
    try {
        const medicines = await Medicine.find();
        res.json(medicines);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Add medicine
router.post('/', auth, authorize(['Admin']), async (req, res) => {
    try {
        const newMedicine = new Medicine(req.body);
        const medicine = await newMedicine.save();
        res.json(medicine);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Update stock
router.put('/:id', auth, authorize(['Admin']), async (req, res) => {
    try {
        const medicine = await Medicine.findByIdAndUpdate(req.params.id, { stock: req.body.stock }, { new: true });
        res.json(medicine);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;

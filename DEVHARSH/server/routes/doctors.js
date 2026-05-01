const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const { auth, authorize } = require('../middleware/auth');

// Get all doctors
router.get('/', async (req, res) => {
    try {
        const doctors = await Doctor.find().populate('userId', 'name email');
        res.json(doctors);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Add/Update doctor profile
router.post('/', auth, authorize(['Admin', 'Doctor']), async (req, res) => {
    try {
        const { userId, specialization, availability, image, experience, phone, name } = req.body;
        let doctor = await Doctor.findOne({ userId });
        if (doctor) {
            doctor = await Doctor.findOneAndUpdate({ userId }, { specialization, availability, image, experience, phone, name }, { new: true });
        } else {
            doctor = new Doctor({ userId, specialization, availability, image, experience, phone, name });
            await doctor.save();
        }
        res.json(doctor);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;

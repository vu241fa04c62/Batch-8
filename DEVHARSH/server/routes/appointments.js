const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const { auth, authorize } = require('../middleware/auth');

// Get all appointments
router.get('/', auth, async (req, res) => {
    try {
        let query = {};
        if (req.user.role === 'Doctor') {
            // Find doctor profile for this user
            const Doctor = require('../models/Doctor');
            const doctor = await Doctor.findOne({ userId: req.user.id });
            if (doctor) query.doctor = doctor._id;
        }
        const appointments = await Appointment.find(query).populate('patient doctor');
        res.json(appointments);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Book appointment
router.post('/', auth, async (req, res) => {
    try {
        const newAppointment = new Appointment(req.body);
        const appointment = await newAppointment.save();
        res.json(appointment);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Update appointment status
router.put('/:id', auth, authorize(['Admin', 'Doctor']), async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        res.json(appointment);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;

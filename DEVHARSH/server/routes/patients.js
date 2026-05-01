const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');
const { auth, authorize } = require('../middleware/auth');

// Get all patients
router.get('/', auth, async (req, res) => {
    try {
        const patients = await Patient.find().populate('assignedDoctor');
        res.json(patients);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Add patient
router.post('/', auth, authorize(['Admin', 'Doctor']), async (req, res) => {
    try {
        const newPatient = new Patient(req.body);
        const patient = await newPatient.save();
        res.json(patient);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Update patient
router.put('/:id', auth, authorize(['Admin', 'Doctor']), async (req, res) => {
    try {
        const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(patient);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Delete patient
router.delete('/:id', auth, authorize(['Admin']), async (req, res) => {
    try {
        await Patient.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Patient deleted' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;

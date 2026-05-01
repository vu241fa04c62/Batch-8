const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String },
    disease: { type: String },
    assignedDoctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    history: [{
        date: { type: Date, default: Date.now },
        diagnosis: String,
        treatment: String
    }],
    contact: String,
    address: String
});

module.exports = mongoose.model('Patient', PatientSchema);

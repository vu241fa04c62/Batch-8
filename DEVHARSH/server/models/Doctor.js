const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    availability: { type: String, default: 'Available' }, // Available, Busy, Offline
    image: { type: String },
    experience: Number,
    phone: String
});

module.exports = mongoose.model('Doctor', DoctorSchema);

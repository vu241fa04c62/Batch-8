const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: String,
    stock: { type: Number, default: 0 },
    price: Number,
    expiryDate: Date,
    manufacturer: String
});

module.exports = mongoose.model('Medicine', MedicineSchema);

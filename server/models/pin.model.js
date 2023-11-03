const mongoose = require('mongoose');

const PinSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    grade: {
        type: String
    },
    plating: {
        type: String
    },
    image: {
        type: String
    },
    category: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

const Pin = mongoose.model('Pin', PinSchema)
module.exports = Pin

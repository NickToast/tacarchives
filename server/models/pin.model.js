const mongoose = require('mongoose');

const PinSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

const Pin = mongoose.model('Pin', PinSchema)
module.exports = Pin

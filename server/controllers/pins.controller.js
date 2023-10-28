const Pin = require('../models/pin.model');

const testing = (req, res) => {
    res.json('Pin Test is working')
}


//Upload Pin to Database
const UploadPin = (req, res) => {
    try {
        const {name, price, image} = req.body

        
    } catch (error) {
        
    }


}

module.exports = {
    testing,
}
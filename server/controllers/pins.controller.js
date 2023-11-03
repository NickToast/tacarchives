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

const disneyPins = (req, res) => {
    Pin.find({category: 'disney'})
        .then(pin => {
            res.json(pin);
            console.log(pin);
        })
        .catch(err => console.log(err))
}
const animePins = (req, res) => {
    Pin.find({category: 'anime'})
        .then(pin => {
            res.json(pin);
            console.log(pin);
        })
        .catch(err => console.log(err))
}
const hpPins = (req, res) => {
    Pin.find({category: 'hp'})
        .then(pin => {
            res.json(pin);
            console.log(pin);
        })
        .catch(err => console.log(err))
}
const sonnyAngelPins = (req, res) => {
    Pin.find({category: 'sonny'})
        .then(pin => {
            res.json(pin);
            console.log(pin);
        })
        .catch(err => console.log(err))
}
const smiskiPins = (req, res) => {
    Pin.find({category: 'smiski'})
        .then(pin => {
            res.json(pin);
            console.log(pin);
        })
        .catch(err => console.log(err))
}
const otherPins = (req, res) => {
    Pin.find({category: 'other'})
        .then(pin => {
            res.json(pin);
            console.log(pin);
        })
        .catch(err => console.log(err))
}

// app.get('/allPins', (req, res) => {
//     Pin.find()
//         .then(pin => {
//             res.json(pin);
//             console.log(pin);
//         })
//         .catch(err => console.log(err))
// })

module.exports = {
    testing,
    disneyPins,
    animePins,
    hpPins,
    sonnyAngelPins,
    smiskiPins,
    otherPins
}
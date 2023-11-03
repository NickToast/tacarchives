const express = require('express')
const router = express.Router() //initializes express
const cors = require('cors')
const { testing, disneyPins, animePins, hpPins, sonnyAngelPins, smiskiPins, otherPins } = require('../controllers/pins.controller')

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
)

//Endpoints
router.get('/testingpin', testing)
router.get('/disneyPins', disneyPins)
router.get('/animePins', animePins)
router.get('/hpPins', hpPins)
router.get('/sonnyAngelPins', sonnyAngelPins)
router.get('/smiskiPins', smiskiPins)
router.get('/otherPins', otherPins)


module.exports = router
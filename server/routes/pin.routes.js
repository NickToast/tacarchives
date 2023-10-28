const express = require('express')
const router = express.Router() //initializes express
const cors = require('cors')
const { testing } = require('../controllers/pins.controller')

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
)

//Endpoints
router.get('/testingpin', testing)


module.exports = router
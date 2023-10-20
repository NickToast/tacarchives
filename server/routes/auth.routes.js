const express = require('express')
const router = express.Router() //initializes express
const cors = require('cors')
const { test } = require('../controllers/auth.controller')

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
)

router.get('/', test)

module.exports = router
// const authController = require('../controllers/auth.controller')

// router.route('/')
//     .post()

// router.route('/refresh')
//     .get()


const express = require('express')
const router = express.Router() //initializes express
const cors = require('cors')
const { test, registerUser, loginUser, getProfile, logout } = require('../controllers/auth.controller')

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
)


//Endpoints and functions
router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)
router.post('/logout', logout)

module.exports = router
// const authController = require('../controllers/auth.controller')

// router.route('/')
//     .post()

// router.route('/refresh')
//     .get()


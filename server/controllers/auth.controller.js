const User = require('../models/user.model');
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json('test is working')
}

//Register Endpoint Function

const registerUser = async (req, res) => {
    try {
        const {username, email,password} = req.body
        //Check if name is entered
        if (!username) {
            return res.json({
                error: "Username is required"
            })
        };
        //Check if password is good
        if (!password) {
            return res.json({
                error: "Password is required"
            })
        };
        if (password.length < 6) {
            return res.json({
                error: "Password should be at least 6 characters long"
            })
        };
        //Check email
        const exist = await User.findOne({email});
        if (exist) {
            return res.json({
                error: "Email has been taken already"
            })
        }

        const hashedPassword = await hashPassword(password);
        //If everything passes, then create the User
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        })

        return res.json(user);
    } catch (error) {
        console.log(error);
    }
}

//Login Endpoint Function

const loginUser = async (req, res) => {
    try {
        //Destructure for email and password
        const {email, password} = req.body

        //Check if User exists
        const user = await User.findOne({email});
        if(!user) {
            return res.json({
                error: 'No user found'
            })
        }

        //Check if password matches
        const match = comparePassword(password, user.password); 
        if(match) {
            jwt.sign({
                email: user.email,
                id: user._id,
                username: user.username
            }, process.env.JWT_SECRET, {}, (err, token) => {
                //If error, it will throw an error
                if(err) throw err;
                //If no errors, creates a cookie called token, and we use json to send it as an object of user
                res.cookie('token', token).json(user)
            })
        }
        if(!match) {
            res.json({
                error: 'Incorrect email/password'
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const getProfile = (req, res) => {
    const {token} = req.cookies
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if(err) throw err;
            res.json(user);
        })
    } else {
        res.json(null);
    }
}

const logout = (req, res) => {
    res.clearCookie('token');
    res.sendStatus(200);
}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile,
    logout
}
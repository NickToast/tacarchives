const jwt = require("jsonwebtoken");

//Authenticate function takes in a few arguments (req, res, and next)
module.exports.authenticate = (req, res, next) => {
    // Function then checks the usertoken that should be created and in the "cookies" object of req (with the secret we used to sign in) when signing in
    jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY, (err, payload) => {
        // Callback function that receives error and a payload (the info stored in the cookie)  
        if (err) { 
        // If error -> 401 status code and pass an object back signifying the user attempting to access the route is not authenticated
        res.status(401).json({verified: false});
        } else {
        next();
        }
    });
}


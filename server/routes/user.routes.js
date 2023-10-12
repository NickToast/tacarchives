// inside of user.routes.js
const Users = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');
module.exports = app => {
    app.post("/api/register", Users.register);
    app.post("/api/login", Users.login);
    // this route now has to be authenticated
    // in order to get to this route, you must first be logged in or registered on the site
    app.get("/api/users", authenticate, Users.getAll);
}


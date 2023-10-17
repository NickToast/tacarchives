// inside of user.routes.js
const userController = require('../controllers/users.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.post("/api/register", userController.register);
    app.post("/api/login", userController.login);
    app.post("api/logout", userController.logout);
    // this route now has to be authenticated
    // in order to get to this route, you must first be logged in or registered on the site
    app.get("/api/users", authenticate, userController.getAll);
}


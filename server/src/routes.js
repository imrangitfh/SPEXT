const authenticationController = require('./controllers/authenticationController');
const dashboardController = require('./controllers/dashboardController');

module.exports = (app) => {
    app.post("/register", authenticationController.register);
    app.post("/dashboard", dashboardController.upload);
}
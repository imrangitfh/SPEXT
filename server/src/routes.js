const authenticationController = require('./controllers/authenticationController');
const dashboardController = require('./controllers/dashboardController');

module.exports = (app) => {
    app.post("/register", authenticationController.register);
    app.post("/dashboard", dashboardController.upload);
    app.post("/", authenticationController.signin);
    app.get("/dashboard",authenticationController.getUser);
    app.put("/forgot",authenticationController.changeUser);
    app.delete("/dashboard", authenticationController.deleteUser);
}
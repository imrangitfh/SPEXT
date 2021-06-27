const authenticationController = require('./controllers/authenticationController');

module.exports = (app) => {
    app.post("/register", authenticationController.register);
    app.post("/", authenticationController.signin);
    app.get("/dashboard",authenticationController.getUser);
    app.put("/forgot",authenticationController.changeUser);
    app.delete("/dashboard", authenticationController.deleteUser)
}
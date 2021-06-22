var db = require('../database');
var mysql = require('mysql');
var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "spext_db"
    });

connection.connect( (error) => {
    if(error) {
        console.log(error);
    }
    else{
        console.log("MYSQL Connected ....");
    }
});

module.exports = {
    async register (req, res) {
        try{
            //var spext_user = {
                var user_email = await req.body.email;
                var user_username = await req.body.username;
                var user_password =  await req.body.password;
            //};
            var sql ="INSERT INTO users (username, email, password) VALUES ('" + req.body.username + "', '" + req.body.email + "', '" + req.body.password +"')";
                connection.query(sql, function (err, result) {
                if (err) throw err
            });
        } catch (err) {
            res.status(400).send({
                error: 'this email is already in use.'
            })
        }
    }
}
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
            var spext_user = {
                'user_email' : await "'"+req.body.email+"'",
                'user_username' : await "'"+req.body.username+"'",
                'user_password' :  await "'"+req.body.password+"'",
            };
            var sql ="INSERT INTO users (username, email, password) VALUES (" + spext_user.user_username + ", " + spext_user.user_email + ", " + spext_user.user_password +")";
                connection.query(sql, function (err, result) {
                if (err) throw err
                    else res.send({statusCode:200, msg:'login successful', spext_user})
            });
        } catch (err) {
            res.status(400).send({
                error: 'this email is already in use.'
            })
        }
    }
}
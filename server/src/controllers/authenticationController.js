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
        let duplicate = false;
        try{
            var spext_user = {
                'user_email' : await "'"+req.body.email+"'",
                'user_username' : await "'"+req.body.username+"'",
                'user_password' :  await "'"+req.body.password+"'",
                'user_answer' : await "'"+req.body.question_answer+"'",
            };
            var sql ="INSERT INTO users (username, email, password, question_answer) VALUES " +
                "(" + spext_user.user_username + ", " + spext_user.user_email + ", " +
                spext_user.user_password + ", " + spext_user.user_answer + ")";
            connection.query(sql, function (err, result) {
                //if(err) throw err;
                //console.log(err);
                if (!err){
                    res.send({statusCode:200, msg:'register successful', spext_user})
                }
                if(err){
                    if(err.errno === 1062){
                        duplicate = true
                        res.send({statusCode:200, msg:'register not successful', duplicate})
                    } else {
                        throw err
                    }
                }
            });
        } catch (err) {
            res.status(400).send({
                error: 'this email is already in use.'
            })
        }
    },
    async signin (req, res) {
        try{
            var spext_user = {
                'user_username' : await "'" + req.body.username + "'",
                'user_password' :  await "'" + req.body.password + "'",
            };
            console.log(spext_user);
            var sql ="SELECT * FROM users WHERE username LIKE " + spext_user.user_username + ";";
            let successful = true;
            connection.query(sql, function (err, result) {
                let id = 0;
                if(result.length >= 1){
                    id = result[0].id;
                    if (err) throw err
                    else if("'" + result[0].password + "'" === spext_user.user_password){
                        res.send({statusCode:200, msg:'login successful', successful, id})
                    } else {
                        successful = false;
                        res.send({statusCode:200, msg:'login not successful', successful, id})
                    }
                }
                else{
                    successful = false;
                    res.send({statusCode:200, msg:'login not successful', successful, id})
                }
                //console.log(result[0].password)
                //console.log(spext_user.user_password)
                // console.log("'" + result[0].password + "'" === spext_user.user_password)

            });
        } catch (err) {
            res.status(400).send({
                error: 'Wrong login credentials!'
            })
        }
    },
    async getUser(req,res){
        try{
            console.log(req.headers.authorization)
            var sql ="SELECT * FROM users WHERE id LIKE " + req.headers.authorization + ";";
            connection.query(sql, function (err, result) {
                res.send({statusCode:200, msg:'user successful', result})
            });
            //console.log(res)
        }catch (err){
            res.status(400).send({
                error: 'no such User'
            })
        }
    },
    async changeUser(req, res) {
        var changed = false;
        try {
            var spext_user = {
                'user_username' : await "'" + req.body.username + "'",
                'user_question' :  await "'" + req.body.question_answer + "'",
                'user_password' : await "'" + req.body.password + "'"
            };
            var sql = "UPDATE users SET users.password = " + spext_user.user_password + " WHERE username = " + spext_user.user_username + " AND question_answer = " + spext_user.user_question+ ";";
            connection.query(sql, function (err, result) {
                if(err) throw err
                //console.log(result.OkPacket.data.affectedRows)
                let result_ = JSON.parse(JSON.stringify(result))
                //console.log(string.affectedRows)
                if(result_.affectedRows.toString() === '0'){
                    res.send({statusCode:200, msg:'no matching user found', result, changed})
                } else {
                    changed = true
                    res.send({statusCode:200, msg:'user changed successful', result, changed})
                }
                //console.log(changed)
            })
        } catch (err){
            res.status(400).send({
                error: 'not able to change password because of incorrect credentials'
            })
        }
    },
    async deleteUser(req, res) {
        var deleted = false
        try{
            console.log("DELETE: " + req.headers.authorization)
            var sql = "DELETE FROM users WHERE id LIKE " + req.headers.authorization + ";";
            connection.query(sql, function (err, result) {
                if (err) throw err
                let result_ = JSON.parse(JSON.stringify(result))
                if(result_.affectedRows.toString() === '0') {
                    res.send({statusCode:200, msg:'No user deleted', deleted})
                } else {
                    deleted = true
                    res.send({statusCode:200, msg:'User deleted', deleted})
                }
            })
        } catch (err) {
            res.status(400).send({
                error: 'Something went wrong'
            })
        }
    }
}
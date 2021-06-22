const dotenv = require('dotenv');

dotenv.config({path: './.env'});

const db = ({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


module.exports = db;
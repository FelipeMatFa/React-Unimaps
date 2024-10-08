const mysql = require('mysql2');
const dotenv = require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// console.log("Chave Gemini:", process.env.CHAVE_GEMINI);

connection.connect( (err) => {
    if (err){
        throw err;
    } else {
        console.log("Mysql connected!");
    }
});

module.exports = connection;
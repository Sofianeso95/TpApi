const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

let db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root1',
    password: '',
    database: 'api',
    socketPath:'/Applications/MAMP/tmp/mysql/mysql.sock',
})


module.exports = db;
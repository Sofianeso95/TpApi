const mysql = require('mysql');

let db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root1',
    password: '',
    database: 'Api',
    socketPath:'/Applications/MAMP/tmp/mysql/mysql.sock',
})


module.exports = db;
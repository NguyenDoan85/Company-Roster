const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection(
  {
  host: 'localhost',
  port: 3001,
  user: process.env.DB_USER,,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.DB_NAME
});

module.exports = connection;
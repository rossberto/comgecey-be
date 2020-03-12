const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_SCHEMA);

const mysql = require('mysql');
/*
const connection = mysql.createPool({
  multipleStatements: true,
  host    : 'localhost',
  user    : 'root',
  password: 'ironhack',
  database: 'mydb'
});
*/

const connection = mysql.createPool({
  multipleStatements: true,
  host    : process.env.DB_HOST,
  user    : process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA
});

/*
connection.getConnection(function(err, connection) {
  if (err) throw err;
  console.log("Connected!");
});
*/

module.exports = connection;

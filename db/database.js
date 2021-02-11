const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const mysql = require('mysql');

/*
console.log('Local Database...');
const connection = mysql.createPool({
  multipleStatements: true,
  host    : 'localhost',
  user    : 'root',
  password: 'ironhack',
  database: 'mydb'
});
*/

/*
console.log(process.env.DB_HOST_A2);
console.log(process.env.DB_USER_A2);
console.log(process.env.DB_PASSWORD_A2);
console.log(process.env.DB_SCHEMA_A2);
*/
const connection = mysql.createPool({
  multipleStatements: true,
  host    : process.env.DB_HOST_A2,
  user    : process.env.DB_USER_A2,
  password: process.env.DB_PASSWORD_A2,
  database: process.env.DB_SCHEMA_A2
});

console.log(connection);
/*
connection.getConnection(function(err, connection) {
  if (err) throw err;
  console.log("Connected!");
});
*/

module.exports = connection;

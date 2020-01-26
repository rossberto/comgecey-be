const mysql = require('mysql');

const connection = mysql.createPool({
  multipleStatements: true,
  host    : 'localhost',
  user    : 'root',
  password: 'ironhack',
  database: 'mydb'
});

/*
connection.getConnection(function(err, connection) {
  if (err) throw err;
  console.log("Connected!");
});
*/

module.exports = connection;

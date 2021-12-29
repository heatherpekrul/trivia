/* Get Database Connection */

const mysql = require('mysql');

module.exports = (req) => {
  return mysql.createConnection({
    host : req.app.get('MYSQL_HOST'),
    user : req.app.get('MYSQL_USER'),
    password : req.app.get('MYSQL_PASSWORD'),
    database : req.app.get('MYSQL_DB'),
  });
};
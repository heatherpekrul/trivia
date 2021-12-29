/* Get Database Connection */
const bluebird = require('bluebird');
const mysql = require('mysql2/promise');

module.exports = async (req) => {
  return await mysql.createConnection({
    host : req.app.get('MYSQL_HOST'),
    user : req.app.get('MYSQL_USER'),
    password : req.app.get('MYSQL_PASSWORD'),
    database : req.app.get('MYSQL_DB'),
    Promise: bluebird,
  });
};
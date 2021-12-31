const express = require('express');
const router = express.Router();
const bluebird = require('bluebird');
const mysql = require('mysql2/promise');

router.use(async (req, res, next) => {
  const connection = await mysql.createPool({
    host : req.app.get('MYSQL_HOST'),
    user : req.app.get('MYSQL_USER'),
    password : req.app.get('MYSQL_PASSWORD'),
    database : req.app.get('MYSQL_DB'),
    Promise: bluebird,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  req.app.set('MYSQL_CONNECTION', connection);

  return next();
});

module.exports = router;
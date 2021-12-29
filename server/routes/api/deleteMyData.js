const express = require('express');
const router = express.Router();
const GetDatabaseConnection = require('../../utilities/getDatabaseConnection');
const IsAuthenticated = require('../../utilities/isAuthenticated');
const GetUserId = require('../../utilities/getUserId');

router.post('/api/deleteMyData', async (req, res) => {
  if (!IsAuthenticated(req)) return res.status(401).send();

  try {
    res.setHeader('Content-Type', 'application/json');

    const connection = GetDatabaseConnection(req);
     
    connection.connect();
  
    const userId = GetUserId(req);
     
    /* The delete queries rely on foreign keys to be cascading. */
    await connection.query(`
      delete from users
      where users.id = ?
    `, 
    [userId],
     function (error, results, fields) {
      if (error) throw error;

      return res.send();
    });
     
    connection.end();
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
});

module.exports = router;
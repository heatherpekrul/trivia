const express = require('express');
const router = express.Router();
const GetDatabaseConnection = require('../../utilities/getDatabaseConnection');
const IsAuthenticated = require('../../utilities/isAuthenticated');
const GetUserId = require('../../utilities/getUserId');

router.get('/api/getOwnedGames', async (req, res) => {
  if (!IsAuthenticated(req)) return res.sendStatus(401);

  try {
    res.setHeader('Content-Type', 'application/json');

    const connection = GetDatabaseConnection(req);
     
    connection.connect();
  
    const userId = GetUserId(req);

    let gameResults = [];
     
    await connection.query(`
      SELECT *
      FROM games
      INNER JOIN users ON games.owner_user_id = users.id
      WHERE users.email = '${userId}'
    `, function (error, results, fields) {
      if (error) throw error;

      if (results) {
        gameResults = JSON.parse(JSON.stringify(results));
      }

      return res.send(gameResults);
    });
     
    connection.end();
  } catch (e) {
    console.error(e);
    return res.sendStatus(500);
  }
});

module.exports = router;
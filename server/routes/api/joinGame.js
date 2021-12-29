const express = require('express');
const router = express.Router();
const GetDatabaseConnection = require('../../utilities/getDatabaseConnection');
const IsAuthenticated = require('../../utilities/isAuthenticated');
const GetUserId = require('../../utilities/getUserId');

router.post('/api/joinGame/:gameId', async (req, res) => {
  if (!IsAuthenticated(req)) return res.status(401).send();

  try {
    res.setHeader('Content-Type', 'application/json');

    const connection = GetDatabaseConnection(req);
     
    connection.connect();
  
    const userId = GetUserId(req);
    const gameId = req.params.gameId;

    let gameResults = [];
    
    await connection.query(`
    insert ignore into game_participants (game_id, user_id, is_owner)
    values (?, ?, 0)
    `,
    [gameId, userId],
    function (error, results, fields) {
      if (error) throw error;

      if (results) {
        gameResults = JSON.parse(JSON.stringify(results));
      }

      return res.send(gameResults);
    });
     
    connection.end();
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
});

module.exports = router;
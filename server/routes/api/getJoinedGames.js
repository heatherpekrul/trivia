const express = require('express');
const router = express.Router();
const GetDatabaseConnection = require('../../utilities/getDatabaseConnection');
const IsAuthenticated = require('../../utilities/isAuthenticated');
const GetUserId = require('../../utilities/getUserId');

router.get('/api/getJoinedGames', async (req, res) => {
  if (!IsAuthenticated(req)) return res.status(401).send();

  try {
    res.setHeader('Content-Type', 'application/json');

    const connection = GetDatabaseConnection(req);
     
    connection.connect();
  
    const userId = GetUserId(req);

    let gameResults = [];
     
    /* This query returns the list of games where the person is already registered and is not the owner. */
    await connection.query(`
    select games.id, games.name
    from games
    where id in (
        select game_id
        from game_participants
        where user_id = ?
        and is_owner = 0
    )`,
    [userId],
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
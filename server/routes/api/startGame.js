const express = require('express');
const router  = express.Router();
const GetDatabaseConnection = require('../../utilities/getDatabaseConnection');

router.post('/api/startGame/:gameId', (req, res) => {
  if (!IsAuthenticated(req)) return res.status(401).send();

  try {
    res.setHeader('Content-Type', 'application/json');

    const connection = GetDatabaseConnection(req);
    connection.connect();
  
    const userId = GetUserId(req);

    /**
     * Query that updates the game with the id of the first round
     * of the given game above where the logged-in user is the owner
     */
     
    /* await connection.query(`
      SELECT *
      FROM games
      INNER JOIN game_participants ON (games.id = game_participants.game_id)
      INNER JOIN users ON (game_participants.user_id = users.id)
      WHERE users.email = '${userId}' AND game_participants.is_owner = 1
    `, function (error, results, fields) {
      if (error) throw error;

      if (results) {
        gameResults = JSON.parse(JSON.stringify(results));
      } */

      return res.send();
    });
     
    connection.end();
  } catch(e) {
    console.error(e);
    return res.status(500).send();
  }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const GetDatabaseConnection = require('../../utilities/getDatabaseConnection');
const IsAuthenticated = require('../../utilities/isAuthenticated');
const GetUserId = require('../../utilities/getUserId');
const IsValidId = require('../../utilities/isValidId');

router.get('/api/getCurrentGame/:gameId', async (req, res) => {
  try {
    if (!IsAuthenticated(req)) return res.status(401).send();
    const userId = GetUserId(req);
    if (!IsValidId(userId)) return res.status(401).send();

    if (!IsValidId(req.params.gameId)) return res.status(400).send();
    const gameId = req.params.gameId;

    const connection = await GetDatabaseConnection(req);
     
    const [rows] = await connection.execute(`
      SELECT games.*, COUNT(*) AS total_rounds
      FROM games
      INNER JOIN rounds ON (rounds.game_id = games.id)
      WHERE games.id = '${gameId}'
      AND games.id IN (
        SELECT game_id
        FROM game_participants
        WHERE user_id = '${userId}'
        UNION
        SELECT game_id
        FROM games
        WHERE owner_user_id = '${userId}'
      )
      GROUP BY games.id, games.name;
    `);

    res.setHeader('Content-Type', 'application/json');
    return res.send(rows);
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
});

module.exports = router;
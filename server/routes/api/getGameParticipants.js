const express = require('express');
const router = express.Router();
const IsAuthenticated = require('../../utilities/isAuthenticated');
const IsValidId = require('../../utilities/isValidId');

router.get('/api/getGameParticipants/:gameId', async (req, res) => {
  try {
    if (!IsAuthenticated(req)) return res.status(401).send();

    if (!IsValidId(req.params.gameId)) return res.status(400).send();
    const gameId = req.params.gameId;

    const connection = req.app.get('MYSQL_CONNECTION');
     
    const [rows] = await connection.execute(`
      SELECT users.id, users.name, users.image_url
      FROM game_participants gp
      INNER JOIN users ON gp.user_id = users.id
      WHERE gp.game_id = ?
    `, [gameId]);

    res.setHeader('Content-Type', 'application/json');
    return res.send(rows);
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
});

module.exports = router;
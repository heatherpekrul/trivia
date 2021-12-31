const express = require('express');
const router = express.Router();
const IsAuthenticated = require('../../utilities/isAuthenticated');
const GetUserId = require('../../utilities/getUserId');
const IsValidId = require('../../utilities/isValidId');

router.post('/api/deleteGame/:gameId', async (req, res) => {
  try {
    if (!IsAuthenticated(req)) return res.status(401).send();
    const userId = GetUserId(req);
    if (!IsValidId(userId)) return res.status(401).send();
  
    if (!IsValidId(req.params.gameId)) return res.status(400).send();
    const gameId = req.params.gameId;

    const connection = req.app.get('MYSQL_CONNECTION');
     
    await connection.execute(`
      DELETE FROM games WHERE games.id = ? AND owner_user_id = ?;
    `, [gameId, userId]);

    res.setHeader('Content-Type', 'application/json');
    res.send();
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
});

module.exports = router;
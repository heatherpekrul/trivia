const express = require('express');
const router = express.Router();
const IsAuthenticated = require('../../utilities/isAuthenticated');
const GetUserId = require('../../utilities/getUserId');
const IsValidId = require('../../utilities/isValidId');

router.post('/api/joinGame/:entryKey', async (req, res) => {
  try {
    if (!IsAuthenticated(req)) return res.status(401).send();
    const userId = GetUserId(req);
    if (!IsValidId(userId)) return res.status(401).send();

    const entryKey = req.params.entryKey;
    const entryKeyRegex = new RegExp('^[A-Za-z0-9_]*$', 'g');
    if (!entryKeyRegex.test(entryKey)) return res.status(400).send();

    const connection = req.app.get('MYSQL_CONNECTION');

    const [rows] = await connection.execute(`
      SELECT id FROM games WHERE entry_key = ?;
    `, [entryKey]);

    if (!rows || rows.length !== 1 || !rows[0].id) return res.status(400).send();
    const gameId = rows[0].id;
    
    await connection.execute(`
      INSERT IGNORE INTO game_participants (game_id, user_id)
      values (?, ?)
    `, [gameId, userId]);

    res.send();
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const IsAuthenticated = require('../../utilities/isAuthenticated');
const GetUserId = require('../../utilities/getUserId');
const IsValidId = require('../../utilities/isValidId');

router.post('/api/deleteMyData', async (req, res) => {
  try {
    if (!IsAuthenticated(req)) return res.status(401).send();
    const userId = GetUserId(req);
    if (!IsValidId(userId)) return res.status(401).send();

    const connection = req.app.get('MYSQL_CONNECTION');

    await connection.execute(`
      DELETE FROM users
      WHERE users.id = ?
    `, [userId]);

    req.session.destroy((err) => {
      return res.send();
    });
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
});

module.exports = router;
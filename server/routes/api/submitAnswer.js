const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
const IsAuthenticated = require('../../utilities/isAuthenticated');
const GetUserId = require('../../utilities/getUserId');
const IsValidId = require('../../utilities/isValidId');

var jsonParser = bodyParser.json({ type: 'application/json' });

router.post('/api/submitAnswer', jsonParser, async (req, res) => {
  try {

    if (!IsAuthenticated(req)) return res.status(401).send();
    const userId = GetUserId(req);
    if (!IsValidId(userId)) return res.status(401).send();
    
    console.info('Submit Answer User Id', userId);

    if (!req.body || req.body.length === 0) {
      console.log('request body not found');
      return res.sendStatus(400);
    }

    console.info('Submit Answer Request Body', req.body);


    const answerId = req.body.answerId;

    const connection = req.app.get('MYSQL_CONNECTION');

    await connection.execute(`
      INSERT INTO responses(user_id, answer_id, question_id)
      SELECT ?, ?, q1.id
      from questions q1
      where exists (
        select 1
        from answers a1
        where a1.id = ?
        and q1.id = a1.question_id
      )
      ON DUPLICATE KEY UPDATE answer_id = ?;
    `, [userId, answerId, answerId, answerId]);

    res.setHeader('Content-Type', 'application/json');
    res.send();
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
});

module.exports = router;
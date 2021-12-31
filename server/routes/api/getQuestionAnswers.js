const express = require('express');
const router = express.Router();
const IsAuthenticated = require('../../utilities/isAuthenticated');
const GetUserId = require('../../utilities/getUserId');
const IsValidId = require('../../utilities/isValidId');

router.get('/api/getQuestionAnswers/:questionId', async (req, res) => {
  try {
    if (!IsAuthenticated(req)) return res.status(401).send();
    const userId = GetUserId(req);
    if (!IsValidId(userId)) return res.status(401).send();

    if (!IsValidId(req.params.questionId)) return res.status(400).send();
    const questionId = req.params.questionId;

    const connection = req.app.get('MYSQL_CONNECTION');
     
    const [rows] = await connection.execute(`
      SELECT
        id, 
        answer
      FROM answers a  
      WHERE a.question_id = ? 
      ORDER BY a.sort
    `, [questionId]);

    res.setHeader('Content-Type', 'application/json');
    return res.send(rows);
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
});

module.exports = router;
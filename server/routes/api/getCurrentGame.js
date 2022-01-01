const express = require('express');
const router = express.Router();
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

    const connection = req.app.get('MYSQL_CONNECTION');
     
    const [rows] = await connection.execute(`
    SELECT 
      g1.id, 
      g1.name, 
      g1.description, 
      g1.is_completed,
      r1.id AS round_id, 
      r1.name AS round_name,
      r1.description AS round_description,
      r1.sort AS round_index,
      r1.is_completed AS round_completed,
      q1.id AS question_id,
      q1.question,
      q1.sort AS question_index,
      q1.image_url AS question_image_url,
      (
        SELECT COUNT(*)
        FROM rounds
        WHERE rounds.game_id = g1.id
      ) AS total_rounds,
      (
        SELECT COUNT(*)
        FROM questions
        WHERE questions.round_id = g1.current_round_id
      ) AS current_round_total_questions
    FROM games g1
    LEFT OUTER JOIN rounds r1 ON (g1.current_round_id = r1.id)
    LEFT OUTER JOIN questions q1 ON (g1.current_question_id = q1.id)
    WHERE g1.id = ?
    AND g1.id IN (
      SELECT game_id
      FROM game_participants
      WHERE user_id = ?
      UNION
      SELECT id
      FROM games
      WHERE owner_user_id = ?
    )
    `, [gameId, userId, userId]);

    res.setHeader('Content-Type', 'application/json');
    return res.send(rows);
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
});

module.exports = router;
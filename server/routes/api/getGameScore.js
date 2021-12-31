const express = require('express');
const router = express.Router();
const IsAuthenticated = require('../../utilities/isAuthenticated');
const GetUserId = require('../../utilities/getUserId');
const IsValidId = require('../../utilities/isValidId');

router.get('/api/getGameScore/:gameId', async (req, res) => {
  try {
    if (!IsAuthenticated(req)) return res.status(401).send();
    const userId = GetUserId(req);
    if (!IsValidId(userId)) return res.status(401).send();

    if (!IsValidId(req.params.gameId)) return res.status(400).send();
    const gameId = req.params.gameId;

    const connection = req.app.get('MYSQL_CONNECTION');
     
    const [rows] = await connection.execute(`
    select 
      u.id, 
      u.name, 
      u.image_url, 
      count(distinct a.id) as score
    from users u 
    inner join game_participants gp on (gp.user_id = u.id)
    left outer join responses r on (r.user_id = u.id)
    left outer join (
      select * 
      from answers 
      where question_id in (
        select id 
        from questions
        where round_id in (
          select id 
          from rounds 
          where game_id = ?) 
        )
      ) a on (a.id = r.answer_id and a.question_id = r.question_id and a.is_correct = true)
    where gp.game_id = ?
    group by u.id, u.name, u.image_url 
    order by score desc
    `, [gameId, gameId]);

    res.setHeader('Content-Type', 'application/json');
    return res.send(rows);
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
});

module.exports = router;
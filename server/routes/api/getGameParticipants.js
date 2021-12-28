const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const IsAuthenticated = require('../../utilities/isAuthenticated');
const GetUserId = require('../../utilities/getUserId');

router.get('/api/getGameParticipants/:gameId', async (req, res) => {
  if (!IsAuthenticated(req)) return res.sendStatus(401);

  try {
    res.setHeader('Content-Type', 'application/json');

    const connection = mysql.createConnection({
      host : req.app.get('MYSQL_HOST'),
      user : req.app.get('MYSQL_USER'),
      password : req.app.get('MYSQL_PASSWORD'),
      database : req.app.get('MYSQL_DB'),
    });
     
    connection.connect();
  
    const userId = GetUserId(req);
    const gameId = req.params.gameId; 

    let gameResults = [];
     
    await connection.query(`
      select u1.id, u1.email
      from game_participants g1
      inner join users u1 on (g1.user_id = u1.id)
      where game_id = ?
      and is_owner != 1
    `, [gameId],
     function (error, results, fields) {
      if (error) throw error;

      if (results) {
        gameResults = JSON.parse(JSON.stringify(results));
      }

      return res.send(gameResults);
    });
     
    connection.end();
  } catch (e) {
    console.error(e);
    return res.sendStatus(500);
  }
});

module.exports = router;
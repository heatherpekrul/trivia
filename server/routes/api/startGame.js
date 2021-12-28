const express = require('express');
const router  = express.Router();
const mysql = require('mysql');

router.post('/api/startGame', (req, res) => {
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

    let gameResults = [];
     
    await connection.query(`
      SELECT *
      FROM games
      INNER JOIN game_participants ON (games.id = game_participants.game_id)
      INNER JOIN users ON (game_participants.user_id = users.id)
      WHERE users.email = '${userId}' AND game_participants.is_owner = 1
    `, function (error, results, fields) {
      if (error) throw error;

      if (results) {
        gameResults = JSON.parse(JSON.stringify(results));
      }

      return res.send(gameResults);
    });
     
    connection.end();
  } catch(e) {
    console.error(e);
    res.sendStatus(500);
  }
});

module.exports = router;
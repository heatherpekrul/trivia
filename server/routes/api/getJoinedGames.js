const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const IsAuthenticated = require('../../utilities/isAuthenticated');
const GetUserId = require('../../utilities/getUserId');

router.get('/api/getJoinedGames', async (req, res) => {
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
     
    /* TODO: write query for getting joined games so that they can be rejoined */
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
  } catch (e) {
    console.error(e);
    return res.sendStatus(500);
  }
});

module.exports = router;
const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const router  = express.Router();
const GetDatabaseConnection = require('../../utilities/getDatabaseConnection');

router.post('/api/login', async (req, res) => {
  try {
    const client = new OAuth2Client(req.app.get('GOOGLE_CLIENT_ID'));

    async function verify() {
      const ticket = await client.verifyIdToken({
          idToken: req.body.credential,
          audience: req.app.get('GOOGLE_CLIENT_ID'),
      });
      const payload = ticket.getPayload();

      req.session.user = {
        email: payload.email,
        name: payload.given_name,
        image: payload.picture,
      };
    }

    await verify().catch(function (err) {
      console.error(err);
      return res.redirect('/login');
    });

    const connection = GetDatabaseConnection(req);
    connection.connect();

    await connection.query(`
      INSERT IGNORE INTO users (email) VALUES ('${req.session.user.email}');
    `, function (error, results, fields) {
      if (error) throw error;
    });
     
    connection.end();

    req.session.save(function(err) {
      return res.redirect('/');
    });
  } catch (e) {
    console.error(e);
    return res.sendStatus(500);
  }
});

module.exports = router;
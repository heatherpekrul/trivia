const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const router = express.Router();

router.post('/api/login', async (req, res) => {
  try {
    const client = new OAuth2Client(req.app.get('GOOGLE_CLIENT_ID'));

    const connection = req.app.get('MYSQL_CONNECTION');

    async function verify() {
      const ticket = await client.verifyIdToken({
        idToken: req.body.credential,
        audience: req.app.get('GOOGLE_CLIENT_ID'),
      });
      const payload = ticket.getPayload();

      req.session.user = {
        email: payload.email,
        name: payload.given_name,
        image_url: payload.picture,
      };
    }

    await verify()
      .then(async () => {
        //users[id, email, created]
        await connection.execute(`
          INSERT INTO users (email)
          VALUES (?)
          ON DUPLICATE KEY UPDATE email = ?;
        `, [
          req.session.user.email,
          req.session.user.email
        ]);

        const [rows] = await connection.execute(`
          SELECT id FROM users WHERE email = ?;
        `, [req.session.user.email]);

        req.session.user.id = rows[0].id;
      })
      .then(() => {
        req.session.save((err) => {
          if (err) {
            throw new Error(`Unable to save session with error: ${err}`);
          };
        });
      })
      .catch((err) => {
        console.error(err);
        throw new Error(`Unable to login with error: ${err}`);
      });

    return res.send();
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
});

module.exports = router;
const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const router  = express.Router();
const GetDatabaseConnection = require('../../utilities/getDatabaseConnection');

router.post('/api/login', async (req, res) => {
  try {
    const client = new OAuth2Client(req.app.get('GOOGLE_CLIENT_ID'));

    const connection = await GetDatabaseConnection(req);

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
      await connection.execute(`
        INSERT INTO users (email, name, image_url)
        VALUES ('${req.session.user.email}', '${req.session.user.name}', '${req.session.user.image_url}')
        ON DUPLICATE KEY UPDATE email = '${req.session.user.email}', name = '${req.session.user.name}', image_url = '${req.session.user.image_url}';
      `);

      const [rows] = await connection.execute(`
        SELECT id FROM users WHERE email = '${req.session.user.email}';
      `);

      req.session.user.id = rows[0].id;
    })
    .then(() => {
      req.session.save((err) => {
        if (err) console.error(err);
        return res.redirect('/');
      });
    })
    .catch((err) => {
      console.error(err);
      return res.redirect('/login');
    });
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
});

module.exports = router;
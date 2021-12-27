const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const router  = express.Router();

router.post('/api/login', (req, res) => {
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

  verify().catch(function (err) {
    console.error(err);
    return res.redirect('/login');
  });

  req.session.save(function(err) {
    return res.redirect('/');
  });
});

module.exports = router;
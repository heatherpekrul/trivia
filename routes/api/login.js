var express = require('express');
const { OAuth2Client } = require('google-auth-library');
var router  = express.Router();

router.post('/', (req, res) => {
  console.log({
    ENV: req.app.get('env'),
    reqsettings: req.app.settings,
    GOOGLE_CLIENT_ID: req.app.settings.GOOGLE_CLIENT_ID,
    reqbody: req.body,
  });

  const client = new OAuth2Client(req.app.get('GOOGLE_CLIENT_ID'));

  async function verify() {
    const ticket = await client.verifyIdToken({
        idToken: req.body.credential,
        audience: req.app.get('GOOGLE_CLIENT_ID'),
    });
    const payload = ticket.getPayload();
    // const userid = payload['sub'];
    // console.log({ payload, userid });

    req.session.user = {
      email: payload.email,
      name: payload.given_name,
      image: payload.picture,
    };

    console.log('set session value to ', req.session);
  }
  verify().catch(function (err) {
    console.error(err);
    res.redirect('/login');
  });

  req.session.save(function(err) {
    res.redirect('/');
  });
});

module.exports = router;
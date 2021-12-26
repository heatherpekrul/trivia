var express = require('express');
const { OAuth2Client } = require('google-auth-library');
var router  = express.Router();

router.get('/', function(req, res) {
  console.log({
    myVar: req.app.get('myVar'),
    reqAppSettings: req.app.settings,
  });
  return res.send('hello world');
});

router.get('/login', (req, res) => {
  res.render('login', {
    subject: 'Trivia Login',
    name: 'our template',
    link: 'https://google.com'
  });
});

router.post('/api/login', (req, res) => {
  console.log({
    ENV: req.app.get('env'),
    reqsettings: req.app.settings,
    GOOGLE_CLIENT_ID: req.app.settings.GOOGLE_CLIENT_ID,
  });

  const client = new OAuth2Client(req.app.get('GOOGLE_CLIENT_ID'));

  async function verify() {
    const ticket = await client.verifyIdToken({
        idToken: req.body.credential,
        audience: req.app.get('GOOGLE_CLIENT_ID'),
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    // console.log({ payload, userid });

    req.session = {
      user: {
        email: payload.email,
        name: payload.given_name,
        image: payload.picture,
      }
    };
  }
  verify().catch(console.error);

  res.send();
});

// 404
router.use(function(req, res, next) {
  res.send('oh no');
});

module.exports = router;
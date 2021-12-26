const express = require('express');
const {OAuth2Client} = require('google-auth-library');
const app = express.Router();

app.post('/api/login', (req, res) => {
  const client = new OAuth2Client(req.app.get('GOOGLE_CLIENT_ID'));
  console.log(req.body);

  async function verify() {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    console.log({ payload, userid })
  }
  verify().catch(console.error);

  res.send();
});

module.exports = app;
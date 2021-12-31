const express = require('express');
const router  = express.Router();

const DeleteGame = require('./deleteGame');
const DeleteMyData = require('./deleteMyData');
const GetCurrentGame = require('./getCurrentGame');
const GetGameParticipants = require('./getGameParticipants');
const GetJoinedGames = require('./getJoinedGames');
const GetOwnedGames = require('./getOwnedGames');
const JoinGame = require('./joinGame');
const Login = require('./login');
const Logout = require('./logout');
const ProgressGame = require('./progressGame');
const RemoveJoinedGame = require('./removeJoinedGame');

router.use(DeleteGame);
router.use(DeleteMyData);
router.use(GetCurrentGame);
router.use(GetGameParticipants);
router.use(GetJoinedGames);
router.use(GetOwnedGames);
router.use(JoinGame);
router.use(Login);
router.use(Logout);
router.use(ProgressGame);
router.use(RemoveJoinedGame);

router.get('/api/*', (req, res) => {
  res.sendStatus(404);
});

router.post('/api/*', (req, res) => {
  res.sendStatus(404);
});

module.exports = router;
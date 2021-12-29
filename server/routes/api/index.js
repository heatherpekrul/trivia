const express = require('express');
const router  = express.Router();

const DeleteGame = require('./deleteGame');
const DeleteMyData = require('./deleteMyData');
const GetGameParticipants = require('./getGameParticipants');
const GetJoinedGames = require('./getJoinedGames');
const GetOwnedGames = require('./getOwnedGames');
const JoinGame = require('./joinGame');
const Login = require('./login');
const Logout = require('./logout');

router.use(DeleteGame);
router.use(DeleteMyData);
router.use(GetGameParticipants);
router.use(GetJoinedGames);
router.use(GetOwnedGames);
router.use(JoinGame);
router.use(Login);
router.use(Logout);

module.exports = router;
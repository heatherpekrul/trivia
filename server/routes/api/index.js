const express = require('express');
const router  = express.Router();

const DeleteMyData = require('./deleteMyData');
const GetGameParticipants = require('./getGameParticipants');
const GetOwnedGames = require('./getOwnedGames');
const JoinGame = require('./joinGame');
const Login = require('./login');
const Logout = require('./logout');

router.use(DeleteMyData);
router.use(GetGameParticipants);
router.use(GetOwnedGames);
router.use(JoinGame);
router.use(Login);
router.use(Logout);

module.exports = router;
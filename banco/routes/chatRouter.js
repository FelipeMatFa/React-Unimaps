const express = require("express");
const router = express.Router();

const { criarPrompt } = require('../controller/chatController');

router.post("/chat", criarPrompt);

module.exports = router;
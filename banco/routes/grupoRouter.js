const express = require("express");
const router = express.Router();

const { criarGrupo } = require('../controller/grupoController');

router.post("/grupo", criarGrupo);

module.exports = router;
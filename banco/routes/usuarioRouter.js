const express = require("express");
const router = express.Router();

const { selecionarUsuario, atualizarDados } = require('../controller/usuarioController');

router.get('/usuario/:id', selecionarUsuario);
router.put('/atualizarUsuario', atualizarDados);



module.exports = router;
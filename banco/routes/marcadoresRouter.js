const express = require("express");
const router = express.Router();

const { marcarLugar, listarLugaresMapa } = require('../controller/marcadoresController.js');

router.post('/marcarLugar', marcarLugar);
router.get('/listarLugaresMapa', listarLugaresMapa);

module.exports = router;
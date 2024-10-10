const express = require("express");
const router = express.Router();

const { selecionarUsuario, atualizarDados } = require('../controller/usuarioController');

/**
 * @swagger
 * /api/login:
 *   get:
 *     summary: Consulta o usuário
 *     responses:
 *        200:
 *           description: Faz a consulta de todos os dados do usuário pelo id
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 */
router.get('/usuario/:id', selecionarUsuario);

/**
 * @swagger
 * /api/atualizarUsuario:
 *   put:
 *     summary: Atualiza os dados
 *     responses:
 *        200:
 *           description: Atualiza os dados do usuário
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 */
router.put('/atualizarUsuario', atualizarDados);

module.exports = router;
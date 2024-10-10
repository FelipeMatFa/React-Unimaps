const express = require("express");
const router = express.Router();

const { login } = require('../controller/loginController');

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Consulta dados do usuário
 *     responses:
 *        201:
 *           description: Consulta dados do usuário na tabela de usuários
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 */
router.post("/login", login);

module.exports = router;
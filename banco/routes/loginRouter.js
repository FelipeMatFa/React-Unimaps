const express = require("express");
const router = express.Router();

const { login, consultarPerfis, consultarUser } = require('../controller/loginController');

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

/**
 * @swagger
 * /api/consultarperfis:
 *   post:
 *     summary: Consulta dados de outros usuários
 *     responses:
 *        201:
 *           description: Consulta dados de nome e foto do usuário
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 */
router.get("/consultarperfis", consultarPerfis);

router.get("/consultaruser", consultarUser)

module.exports = router;
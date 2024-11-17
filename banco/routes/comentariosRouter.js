const express = require("express");
const router = express.Router();

const { comentar } = require('../controller/comentariosController.js');

/**
 * @swagger
 * /api/comenentar:
 *   post:
 *     summary: Inserir comentário à um post
 *     responses:
 *        200:
 *           description: Inserir um comentário à um post da tabela comentarios
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 */
router.post('/comentar', comentar);

module.exports = router;
const express = require("express");
const router = express.Router();

const { criarPrompt, listarEstatisticas, ResponderChat, enviarAcerto } = require('../controller/chatController');

/**
 * @swagger
 * /api/chat:
 *   post:
 *     summary: Cria prompt do gemini
 *     responses:
 *        201:
 *           description: Envia prompt para o gemini
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 */
router.post("/chat", criarPrompt);

router.post("/chat/resposta", ResponderChat);

router.post("/chat/enviaracerto", enviarAcerto);

router.post("/estatisticas", listarEstatisticas);

module.exports = router;
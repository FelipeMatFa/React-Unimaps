const express = require("express");
const router = express.Router();

const { criarPrompt } = require('../controller/chatController');

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

module.exports = router;
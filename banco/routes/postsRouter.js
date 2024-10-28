const express = require("express");
const router = express.Router();

const { selecionarPosts } = require('../controller/postsController');

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Consulta os posts
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
router.get('/posts', selecionarPosts);

module.exports = router;
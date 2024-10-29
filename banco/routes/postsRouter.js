const express = require("express");
const router = express.Router();

const { selecionarPosts, criarPosts } = require('../controller/postsController');

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

/**
 * @swagger
 * /api/criarposts:
 *   post:
 *     summary: Crie um post
 *     responses:
 *        200:
 *           description: Insere dados de titulo e caminho da imagem para a tabela posts
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 */
router.post('/criarposts', criarPosts);

module.exports = router;
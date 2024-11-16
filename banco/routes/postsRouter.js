const express = require("express");
const router = express.Router();

const { selecionarPosts, criarPosts, excluirPost, selecionarPostsUsuario, selecionarPost } = require('../controller/postsController');

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
 *        201:
 *           description: Insere dados de título e caminho da imagem para a tabela posts
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   success:
 *                     type: boolean
 *                   message:
 *                     type: string
 */
router.post('/criarposts', criarPosts);

/**
 * @swagger
 * /api/excluirposts:
 *   delete:
 *     summary: Excluir um post
 *     responses:
 *        201:
 *           description: Deleta dados da tabela post pelo id do post
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   success:
 *                     type: boolean
 *                   message:
 *                     type: string
 */
router.delete('/excluirposts', excluirPost)

router.post('/posts/usuario', selecionarPostsUsuario)

router.get('/post/selecionarpost', selecionarPost)

module.exports = router;

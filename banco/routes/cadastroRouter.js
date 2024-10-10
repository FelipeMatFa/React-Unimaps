const { Router } = require('express');
const router = Router();

const { cadastrarUser } = require('../controller/cadastroController');

/**
 * @swagger
 * /api/cadastro:
 *   post:
 *     summary: Cria um usuário
 *     responses:
 *        201:
 *           description: Insere dados do usuário na tabela de usuários
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 */
router.post('/cadastro', cadastrarUser);

module.exports = router;
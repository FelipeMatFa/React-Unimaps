const express = require("express");
const router = express.Router();

const { marcarLugar, listarLugaresMapa } = require('../controller/marcadoresController.js');

/**
 * @swagger
 * /api/marcarLugar:
 *   post:
 *     summary: Cria dados de marcadores
 *     responses:
 *        201:
 *           description: Insere dados na tabela de marcadores
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 */
router.post('/marcarLugar', marcarLugar);

/**
 * @swagger
 * /api/listarLugaresMapa:
 *   get:
 *     summary: Lista marcadores do mapa
 *     responses:
 *        200:
 *           description: Seleciona os lugares da tabela de marcadores
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 */
router.get('/listarLugaresMapa', listarLugaresMapa);

module.exports = router;
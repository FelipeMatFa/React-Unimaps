const express = require('express');
const { upload, cadastrarUser } = require('../upload');

const router = express.Router();

/**
 * @swagger
 * /api/upload:
 *   post:
 *     summary: Faz upload de arquivo
 *     responses:
 *       200:
 *         description: Insere dentro da pasta uploads arquivos e insere no banco a rota dos arquivos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 file:
 *                   type: object
 *                   properties:
 *                     filename:
 *                       type: string
 *                     path:
 *                       type: string
 */
router.post('/upload', upload.single('file'), cadastrarUser);

module.exports = router;

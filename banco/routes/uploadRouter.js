const express = require('express');
const { upload } = require('../upload');

const router = express.Router();

/**
 * @swagger
 * /api/upload:
 *   post:
 *     summary: Faz upload de arquivo
 *     responses:
 *       201:
 *         description: Retorna o caminho do arquivo enviado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     imagePath:
 *                       type: string
 */
router.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'Nenhum arquivo foi enviado.' });
    }

    const imagePath = '/uploads/' + req.file.filename;

    res.status(201).json({
        success: true,
        message: "Upload realizado com sucesso!",
        data: {
            imagePath: imagePath,
        },
    });
});

module.exports = router;

const express = require('express');
const upload = require('../upload');

const router = express.Router();

router.post('/upload', upload.single('file'), (req, res) => {
    res.json({ message: 'Arquivo recebido!', file: req.file });
});

module.exports = router;

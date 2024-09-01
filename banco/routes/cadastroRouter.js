const { Router } = require('express');
const router = Router();

const { cadastrarUser } = require('../controller/cadastroController');

router.post('/cadastro', cadastrarUser);

module.exports = router;
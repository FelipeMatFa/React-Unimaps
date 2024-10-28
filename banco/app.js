const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const cadastroRouter = require('./routes/cadastroRouter');
const loginRouter = require('./routes/loginRouter');
const marcarLugar = require('./routes/marcadoresRouter');
const chatRouter = require('./routes/chatRouter');
const usuario = require('./routes/usuarioRouter');
const uploadRouter = require('./routes/uploadRouter');
const postsRouter = require('./routes/postsRouter');

const app = express();
app.set('port', process.env.PORT || 3005);

app.use(express.json());
app.use(cors());

app.use('/api', [
    cadastroRouter,
    loginRouter,
    marcarLugar,
    chatRouter,
    usuario,
    uploadRouter,
    postsRouter
]);

module.exports = app;

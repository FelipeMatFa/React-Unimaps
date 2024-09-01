const express = require('express');
const dotenv = require('dotenv').config();
const cadastroRouter = require('./routes/cadastroRouter');
const loginRouter = require("./routes/loginRouter");
const marcarLugar = require("./routes/marcadoresRouter");
const chatRouter = require('./routes/chatRouter');

const app = express();
app.set('port', process.env.PORT || 3005);

const cors = require('cors');
app.use(express.json());
app.use(cors());

app.use('/api', [
    cadastroRouter,
    loginRouter,
    marcarLugar,
    chatRouter
]);

module.exports = app;
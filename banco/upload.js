const multer = require('multer');
const path = require('path');
const connection = require('./config/db');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

async function cadastrarUser(req, res) {
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'Nenhum arquivo foi enviado.' });
    }

    const imagePath = '/uploads/' + req.file.filename;
    const params = [imagePath, req.body.titulo, req.body.id];

    const query = "INSERT INTO post(imagem, titulo, id_usuario) VALUES (?, ?, ?)";
    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Ops! Não deu...",
                query: err.sql,
                sqlMessage: err.sqlMessage,
            });
        }
        res.status(201).json({
            success: true,
            message: "Sucesso!",
            data: {
                insertId: results.insertId,
                imagePath: imagePath,
            },
        });
    });
}

module.exports = {
    upload,
    cadastrarUser,
};

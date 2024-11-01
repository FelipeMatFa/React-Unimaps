const multer = require('multer');
const path = require('path');

// Configuração do armazenamento para o multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');  // Local
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));  // Nome do arquivo
    },
});

const upload = multer({ storage });

// Retornar link imagem requisição
async function uploadImage(req, res) {
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
}

module.exports = {
    upload,
    uploadImage,
};

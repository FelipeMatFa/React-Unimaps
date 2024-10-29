const connection = require('../config/db');

async function selecionarPosts(request, response) {
    const query = "SELECT posts.id,posts.titulo,posts.imagem, posts.id_usuario,usuario.nome AS usuario_nome,usuario.foto AS usuario_foto_perfil FROM posts JOIN usuario ON posts.id_usuario = usuario.id;";

    connection.query(query, (err, results) => {
        if (results && results.length > 0) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Posts encontrados!",
                });
        }
    });
}

async function criarPosts(request, response) {
    const params = Array(
        request.body.imagem,
        request.body.titulo,
    );

    const query = "INSERT INTO post(imagem,titulo) VALUES(?,?)";

    connection.query(query, (err, results) => {
        if (results && results.length > 0) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Erro ao criar post!",
                });
        }
    });
}

module.exports = {
    selecionarPosts,
    criarPosts,
}
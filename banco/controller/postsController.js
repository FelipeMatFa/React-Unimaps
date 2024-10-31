const connection = require('../config/db');

async function selecionarPosts(request, response) {
    const query = `
    SELECT 
        post.id,
        post.titulo,
        post.imagem,
        post.id_usuario,
        usuario.nome AS usuario_nome,
        usuario.foto AS usuario_foto_perfil 
    FROM post 
    JOIN usuario ON post.id_usuario = usuario.id
    -- WHERE post.id_usuario = ?  -- Descomente e adicione o valor se precisar filtrar por id_usuario
`;
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
    console.log(request.body); // Verificar os dados recebidos

    const params = [
        request.body.imagem,
        request.body.titulo,
        request.body.id_usuario
    ];

    const query = "INSERT INTO post(imagem, titulo, id_usuario) VALUES (?, ?, ?)";

    connection.query(query, params, (err, results) => {
        if (err) {
            return response.status(400).json({
                success: false,
                message: "Erro ao criar post!",
                error: err.sqlMessage, // Retornar mensagem de erro
            });
        }

        if (results.affectedRows > 0) {
            response.status(201).json({
                success: true,
                message: "Post criado com sucesso!",
                data: {
                    insertId: results.insertId,
                }
            });
        } else {
            response.status(400).json({
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
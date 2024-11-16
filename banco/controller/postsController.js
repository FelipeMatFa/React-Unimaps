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
    `;

    connection.query(query, (err, results) => {
        if (err) {
            return response.status(500).json({
                success: false,
                message: "Erro ao buscar posts",
                error: err.sqlMessage,
            });
        }

        if (results && results.length > 0) {
            response.status(200).json({
                success: true,
                message: "Sucesso!",
                data: results,
            });
        } else {
            response.status(404).json({
                success: false,
                message: "Nenhum post encontrado.",
            });
        }
    });
}

async function selecionarPostsUsuario(request, response) {
    const query = `
        SELECT * FROM post WHERE id_usuario = ?;
    `;

    const param = request.body.id;
    connection.query(query, [param], (err, results) => {
        if (err) {
            return response.status(500).json({
                success: false,
                message: "Erro ao buscar posts",
                error: err.sqlMessage,
            });
        }

        if (results && results.length > 0) {
            response.status(200).json({
                success: true,
                message: "Sucesso!",
                data: results,
            });
        } else {
            response.status(404).json({
                success: false,
                message: "Nenhum post encontrado.",
            });
        }
    });
}

async function criarPosts(request, response) {
    const { titulo, imagem, id_usuario } = request.body;

    const params = [
        imagem,
        titulo,
        id_usuario
    ];

    const query = "INSERT INTO post(imagem, titulo, id_usuario) VALUES (?, ?, ?)";

    connection.query(query, params, (err, results) => {
        if (err) {
            return response.status(400).json({
                success: false,
                message: "Erro ao criar post!",
                error: err.sqlMessage,
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

async function excluirPost(request, response) { 
    const id = request.query.id;
    const params = [id];

    const query = "DELETE FROM post WHERE id = ?";

    connection.query(query, params, (err, results) => {
        if (err) {
            return response.status(400).json({
                success: false,
                message: "Ops! Não deu...",
                query: err.sql,
                sqlMessage: err.sqlMessage
            });
        }
        
        response.status(201).json({
            success: true,
            message: "Sucesso!",
            data: results
        });
    });
}

async function selecionarPost(request, response) {
    const id = request.query.id; // Obtem o ID da query string

    if (!id) {
        return response.status(400).json({
            success: false,
            message: "ID não fornecido.",
        });
    }

    const query = "SELECT * FROM post WHERE id = ?";

    connection.query(query, [id], (err, results) => {
        if (err) {
            return response.status(500).json({
                success: false,
                message: "Erro ao buscar o post!",
                error: err.sqlMessage,
            });
        }

        if (results.length > 0) {
            return response.status(200).json({
                success: true,
                message: "Post encontrado com sucesso!",
                data: results,
            });
        } else {
            return response.status(404).json({
                success: false,
                message: "Post não encontrado!",
            });
        }
    });
}

module.exports = {
    selecionarPosts,
    criarPosts,
    excluirPost,
    selecionarPostsUsuario,
    selecionarPost
};

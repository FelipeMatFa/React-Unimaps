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
    const id = request.query.id; // Obtém o ID da query string

    if (!id) {
        return response.status(400).json({
            success: false,
            message: "ID do post não fornecido.",
        });
    }

    const query = `
        SELECT 
            post.id AS post_id, 
            post.id_usuario, 
            post.imagem, 
            post.titulo,
            comentarios.id AS comentario_id,
            comentarios.comentario,
            usuario_post.nome AS nome_usuario_post, 
            usuario_post.foto AS foto_usuario_post,
            usuario_comentario.nome AS nome_usuario_comentario,
            usuario_comentario.foto AS foto_usuario_comentario
        FROM post
        LEFT JOIN comentarios ON post.id = comentarios.id_post
        LEFT JOIN usuario AS usuario_post ON post.id_usuario = usuario_post.id
        LEFT JOIN usuario AS usuario_comentario ON comentarios.id_usuario = usuario_comentario.id
        WHERE post.id = ?
`;

    connection.query(query, [id], (err, results) => {
        if (err) {
            return response.status(500).json({
                success: false,
                message: "Erro ao buscar os dados do post e comentários!",
                error: err.sqlMessage,
            });
        }

        if (results.length > 0) {
            // Agrupando os dados do post e comentários
            const post = {
                id: results[0].post_id,
                id_usuario: results[0].id_usuario,
                imagem: results[0].imagem,
                titulo: results[0].titulo,
                usuario: {
                    nome: results[0].nome_usuario_post,
                    foto: results[0].foto_usuario_post,
                },
                comentarios: results
                    .filter((row) => row.comentario_id)
                    .map((row) => ({
                        id: row.comentario_id,
                        texto: row.comentario,
                        usuario: {
                            nome: row.nome_usuario_comentario,
                            foto: row.foto_usuario_comentario,
                        },
                    })),
            };
            

            return response.status(200).json({
                success: true,
                message: "Post e comentários encontrados com sucesso!",
                data: post,
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

const connection = require('../config/db');

async function comentar(request, response) {
    const { id_usuario, id_post, comentario } = request.body;

    if (!id_post || !comentario || !id_usuario) {
        return response.status(400).json({
            success: false,
            message: "ID do post, ID do usuário ou comentário não fornecido.",
        });
    }

    const query = 'INSERT INTO comentarios(id_usuario, id_post, comentario) values (?, ?, ?)';

    connection.query(query, [id_usuario, id_post, comentario], (err, results) => {
        if (err) {
            return response.status(500).json({
                success: false,
                message: "Erro ao salvar o comentário!",
                error: err.sqlMessage,
            });
        }

        if (results) {
            return response.status(200).json({
                success: true,
                message: "Comentário salvo com sucesso!",
                data: results,
            });
        } else {
            return response.status(404).json({
                success: false,
                message: "Falha ao salvar o comentário.",
            });
        }
    });
}

module.exports = {
    comentar,
};

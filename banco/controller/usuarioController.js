const connection = require('../config/db');

async function selecionarUsuario(request, response) {
    const { id } = request.params;

    const query = "SELECT * FROM usuario WHERE id = ?";

    connection.query(query, [id], (err, results) => {
        if (results && results.length > 0) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results[0] 
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Usuário não encontrado",
                    query: err ? err.sql : null,
                    sqlMessage: err ? err.sqlMessage : null
                });
        }
    });
}

async function atualizarDados(request, response) {
    const { email, nome, senha, foto, id } = request.body;

    const params = [email, nome, senha, foto, id];
    const query = "UPDATE usuario SET email = ?, nome = ?, senha = ?, foto = ? WHERE id = ?";

    connection.query(query, params, (err, results) => {
        if (err) {
            return response.status(400).json({
                success: false,
                message: "Ops! Não deu...",
                sql: query,
                sqlMessage: err.sqlMessage,
            });
        }

        response.status(201).json({
            success: true,
            message: "Sucesso!",
            data: results,
        });
    });
}

module.exports = {
    selecionarUsuario,
    atualizarDados
}
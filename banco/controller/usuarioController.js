const connection = require('../config/db');

async function selecionarUsuario(request, response){
    const params = Array(
        request.body.id,
    );

    const query = "select * from usuario where id = ?";

    connection.query(query, params, (err, results) => {
        if(results){
            response
                .status(201)
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
                    message: "Ops! Não deu...",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

async function atualizarDados(request, response){
    const params = Array(
        request.body.email,
        request.body.nome,
        request.body.senha,
        request.body.id
    );

    const query = "UPDATE usuario SET email = ?, nome = ?, senha = ? WHERE id = ?";

    connection.query(query, params, (err, results) => {
        if(results){
            response
                .status(201)
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
                    message: "Ops! Não deu...",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

module.exports = {
    selecionarUsuario,
    atualizarDados
}
const connection = require('../config/db');

async function criarGrupo(request, response){
    const params = Array(
        request.body.nome,
        request.body.descricao,
        request.body.conversas
    );

    const query = "INSERT INTO grupo(nome,descricao,conversas) VALUES(?,?,?)";

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
    criarGrupo
}
const connection = require('../config/db');

async function cadastrarUser(request, response){
    const params = Array(
        request.body.nome,
        request.body.senha,
        request.body.email,
        request.body.foto
    );

    const query = "INSERT INTO usuario(nome,senha,email,foto) VALUES(?,?,?,?)";

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
    cadastrarUser
}
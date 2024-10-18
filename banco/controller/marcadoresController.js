const connection = require('../config/db');

async function marcarLugar(request, response){
    const params = Array(
        request.body.titulo,
        request.body.descricao,
        request.body.latitude,
        request.body.longitude,
        request.body.id
    );

    const query = "INSERT INTO marcadores(titulo,descricao,latitude,longitude,id_usuario) VALUES(?,?,?,?,?)";

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

async function listarLugaresMapa(request, response){
    const id = request.query.id; // Obtendo o parâmetro id da query string
    const params = [id];
    
    const query = "SELECT * FROM marcadores where id_usuario = ?";

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

async function excluirMarcador(request, response) { 
    const id = request.query.id; // Mudei de id_marcador para id
    const params = [id];

    const query = "DELETE FROM marcadores WHERE id = ?";

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

module.exports = {
    marcarLugar,
    listarLugaresMapa,
    excluirMarcador
}
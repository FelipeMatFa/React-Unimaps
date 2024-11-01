const connection = require("../config/db");

async function login(request, response) {    
  const email = request.body.email;
  const query = "SELECT * FROM usuario WHERE email = ?";

  connection.query(query, email, (err, results) => {    
    if(results) {
      const password = request.body.senha;
      const passwordQuery = results[0].senha;

      if (password === passwordQuery) {
        response
          .status(200)
          .json({
            success: true,
            message: "Sucesso!",
            data: results
          })
      } else {
        response
          .status(400)
          .json({
            success: false,
            message: "Sem Sucesso!",
            data: err
          })
      }
    }
  }) 
}

async function consultarPerfis(request, response) { 
  const query = "SELECT foto, nome FROM usuario WHERE id >= 1 and id <= 5";

  connection.query(query, (err, results) => {    
      if (results && results.length > 0){
        response
          .status(200)
          .json({
            success: true,
            message: "Sucesso!",
            data: results
          })
      } else {
        response
          .status(400)
          .json({
            success: false,
            message: "Sem Sucesso!",
            data: err
          })
      }
    })
}

async function consultarUser(request, response) { 
  const query = "SELECT * from usuario where id = ?";
  const param = request.query.id;

  connection.query(query, [param], (err, results) => {    
      if (err) {
          console.error("Erro ao consultar o banco de dados:", err);
          return response.status(500).json({
              success: false,
              message: "Erro interno no servidor",
              error: err
          });
      }

      if (results && results.length > 0) {
          response.status(200).json({
              success: true,
              message: "Sucesso!",
              data: results
          });
      } else {
          response.status(404).json({
              success: false,
              message: "Usuário não encontrado!",
              data: []
          });
      }
  });
}


module.exports = {
  login,
  consultarPerfis,
  consultarUser
}
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

module.exports = {
  login
}
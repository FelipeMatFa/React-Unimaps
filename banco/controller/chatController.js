const connection = require('../config/db');
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Inicialize o cliente com a chave da API
const genAI = new GoogleGenerativeAI(process.env.CHAVE_GEMINI);

async function criarPrompt(request, response) {
   
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = request.body.prompt;
        
        if (!prompt) {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Prompt não fornecido."
                });
        }

        
        const result = await model.generateContent(prompt);
        // console.log(result)
        const resultado = await result.response;
        
        const text = resultado.text();
        
        if(text){
            
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: text
                });
        }else{
         response
            .status(400)
            .json({
                success: false,
                message: "Ops! Não deu...",
            });
        }
}

async function listarEstatisticas(request, response){
    const id = request.query.id;
    const params = [id];
    
    const query = "SELECT * FROM estudosIA where id = 8";

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
    criarPrompt,
    listarEstatisticas
};
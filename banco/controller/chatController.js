const { GoogleGenerativeAI } = require("@google/generative-ai");
const connection = require('../config/db'); 

const genAI = new GoogleGenerativeAI(process.env.CHAVE_GEMINI);

async function criarPrompt(request, response) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = request.body.prompt;

    if (!prompt) {
        return response.status(400).json({
            success: false,
            message: "Prompt não fornecido."
        });
    }

    try {
        const result = await model.generateContent(prompt);
        
        if (result && result.response && result.response.text) {
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: result.response.text
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Ops! Não deu..."
            });
        }
    } catch (error) {
        console.error("Erro ao gerar conteúdo:", error);
        response.status(500).json({
            success: false,
            message: "Erro ao processar a solicitação."
        });
    }
}

async function listarEstatisticas(request, response) {
    const id = request.query.id;
    const params = [id];
    
    const query = "SELECT * FROM estudosIA where id = ?";

    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso!",
                data: results
            });
        } else {
            response.status(400).json({
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

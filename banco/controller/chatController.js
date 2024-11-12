require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const connection = require('../config/db');

const genAI = new GoogleGenerativeAI(process.env.CHAVE_GEMINI);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

async function criarPrompt(request, response) {
    const prompt = request.body.prompt;

    if (!prompt) {
        return response
            .status(400)
            .json({
                success: false,
                message: "Prompt não fornecido."
            });
    }

    try {
        const result = await model.generateContent(prompt);
        const resultado = await result.response;
        const text = resultado.text();
        
        if (result && result.response && result.response.text) {
            response.status(201).json({
                success: true,
                message: "Sucesso!",
                data: text
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

async function ResponderChat(request, response) {
    const { pergunta, resposta } = request.body;

    if (!pergunta || !resposta) {
        return response.status(400).json({
            success: false,
            message: "Pergunta e/ou resposta não fornecida."
        });
    }

    try {
        const result = await model.generateContent(`Pergunta: ${pergunta}, Resposta: ${resposta}; agora corrija isso e envie o número de acertos no formato 0X/05, onde X é o número de acertos`);

        const resultado = await result.response;

        const text = resultado.text();
        console.log(text)

        if (text) {
            response.status(200)
                .json({
                    success: true,
                    message: "Resposta gerada com sucesso!",
                    data: text
                }
            );
        } else {
            response.status(400).json({
                success: false,
                message: "Erro ao gerar resposta."
            });
        }
    } catch (error) {
        console.error("Erro ao processar a solicitação:", error);
        response.status(500).json({
            success: false,
            message: "Erro ao processar a solicitação."
        });
    }
}

async function enviarAcerto(request, response) {
    const params = Array(
        request.body.acertos,
        request.body.mencao,
        request.query.id
    )
    
    const query = "Insert into estudosIA(acertos,mencao,id) values (?,?,?)";

    connection.query(query, params, (err, results) => {
        if (err) {
            return response.status(500).json({
                success: false,
                message: "Erro ao inserir menções no banco.",
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

async function listarEstatisticas(request, response) {
    const id = request.query.id;
    const params = [id];
    
    const query = "SELECT * FROM estudosIA where id = ?";

    connection.query(query, params, (err, results) => {
        if (err) {
            return response.status(500).json({
                success: false,
                message: "Erro ao executar a consulta.",
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
    criarPrompt,
    ResponderChat,
    enviarAcerto,
    listarEstatisticas
};
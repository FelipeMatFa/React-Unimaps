import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/LoginForm.css';

const baseURL = "http://localhost:3001/api/cadastro";

function FormCadastro() {
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    
    const navigate = useNavigate();

    const handleCadastro = () => {
        navigate('/login');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(baseURL, { email, nome, senha });
            if (response.data.success) {
                console.log(response.data)
                handleCadastro();
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            alert("Ocorreu um erro ao tentar fazer login.");
        }
    };

    return (
        <form className='formulario-login' onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <input
                type="email"
                placeholder='exemplo@gmail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <input
                type="name"
                placeholder='Seu nome'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />

            <input
                type="password"
                placeholder='*********'
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
            />

            <input
                type="submit"
                value='CONFIRMAR'
            />
        </form>
    );
}

export default FormCadastro;

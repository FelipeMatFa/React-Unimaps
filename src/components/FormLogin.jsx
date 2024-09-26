import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/LoginForm.css';

const baseURL = "http://localhost:3001/api/login";

function FormLogin() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/home');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(baseURL, { email, senha });
            if (response.data.success) {
                console.log(response.data)
                sessionStorage.setItem('userName', response.data.data[0].nome);
                sessionStorage.setItem('id', response.data.data[0].id);
                handleLogin();
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
            <h1>Faça seu Login</h1>

            <input
                type="email"
                placeholder='exemplo@gmail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

export default FormLogin;

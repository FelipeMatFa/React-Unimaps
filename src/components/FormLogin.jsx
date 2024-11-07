import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/LoginForm.css';
import images from '../assets/image';

const baseURL = "https://react-unimaps.vercel.app/api/login";

function FormLogin() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const savedEmail = localStorage.getItem('usuario');
        const savedSenha = localStorage.getItem('senha');

        if (savedEmail) {
            setEmail(savedEmail);
            setIsChecked(true);
        }

        if (savedSenha) {
            setSenha(savedSenha);
        }
    }, []);

    const handleLogin = () => {
        navigate('/home');
    };

    const handleSenha = () => {
        navigate('/');
    };

    const handleCadastro = () => {
        navigate('/cadastro');
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(baseURL, { email, senha });
            if (response.data.success) {
                console.log(response.data);
                sessionStorage.setItem('userName', response.data.data[0].nome);
                sessionStorage.setItem('id', response.data.data[0].id);

                if (isChecked) {
                    localStorage.setItem('usuario', response.data.data[0].email);
                    localStorage.setItem('senha', response.data.data[0].senha);
                } else {
                    localStorage.removeItem('usuario');
                    localStorage.removeItem('senha');
                }
                
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
            <h1 id='titulo-login'>Fazer Login</h1>

            <div className='formulario-login_container'>
                <div className='container_input-email'>
                    <img src={images.userIco} alt="" />
                    <input
                        id='formulario-login_email'
                        type="email"
                        placeholder='Nome ou email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className='container_input-senha'>
                    <img src={images.passWord} alt="" />
                    <input
                        id='formulario-login_senha'
                        type="password"
                        placeholder='Senha'
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </div>
            </div>     

            <div className='formulario-login_checkbox'>
                <div className='checkbox_input-checkbox'>
                    <input 
                        id='input-checkbox_caixa'
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <p id='input-checkbox_texto'>
                        Lembre-me
                    </p>
                </div>

                <a 
                    id='checkbox_redefinir-senha'
                    onClick={handleSenha}
                >
                    Esqueceu a senha?
                </a>
            </div>

            <input
                id='formulario-login_submit'
                type="submit"
                value='Login'
            />

            <a
                id='formulario-login_cadastro'
                onClick={handleCadastro}
            >
                Novo aqui? Crie uma conta
            </a>
        </form>
    );
}

export default FormLogin;

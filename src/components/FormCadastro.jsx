import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/FormCadastro.css';
import images from '../assets/image'

const baseURL = "http://localhost:3001/api/cadastro";

function FormCadastro() {
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    const foto = '/public/user.png'

    // const postFotoUsuario = async (titulo, imagePath) => {
    //     try {
    //         const { data } = await axios.post('http://localhost:3001/api/upload', {
    //             titulo,
    //             imagem: imagePath,
    //             id_usuario: sessionStorage.getItem('id'),
    //         });
    //         if (data.success) console.log("Publicação criada com sucesso!");
    //         else alert(data.message || "Erro inesperado.");
    //     } catch (error) {
    //         console.error("Erro ao fazer a postagem:", error);
    //     }
    // };
    
    const navigate = useNavigate();

    const handleCadastro = () => {
        navigate('/login');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(baseURL, { email, nome, senha, foto });
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
            <h1 id='titulo-login'>Cadastre-se</h1>

            <div className='formulario-login_container'>

                <div className='container_input-email'>
                    <img
                        src={images.userIco} alt="" 
                    />
                    <input
                        id='formulario-login_email'
                        type="email"
                        placeholder='Example@gmail.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className='container_input-email'>
                    <img
                        src={images.userIco} alt="" 
                    />
                    <input
                        id='formulario-login_email'
                        type="text"
                        placeholder='Seu nome'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>

                <div className='container_input-senha'>
                    <img 
                        src={images.passWord} alt="" 
                    />
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

            <input
                id='formulario-login_submit'
                type="submit"
                value='Confirmar'
            />

            <a
                id='formulario-login_cadastro'
                onClick={handleCadastro}
            >
                Já possui conta? Clique aqui!
            </a>
        </form>
    );
}

export default FormCadastro;

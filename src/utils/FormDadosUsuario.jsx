import '../styles/FormDados.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = "http://localhost:3001/api/usuario";
    
function FormDadosUsuario(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    console.log(nome, email, senha);

    const carregarPerfil = async () => {
        const id = sessionStorage.getItem('id')

        try {
            const response = await axios.get(baseURL, id);
            if (response.data.success) {
                console.log(response.data.nome);
                setEmail(response.data.email)
                setNome(response.data.nome)
                setSenha(response.data.senha)
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            alert("Ocorreu um erro ao tentar salvar seus dados");
        }
    };

    useEffect(() => {
        carregarPerfil();
        const savedEmail = localStorage.getItem('usuario');
        const savedSenha = localStorage.getItem('senha');
        const savedNome = localStorage.getItem('nome');

        if (savedEmail) {
            setEmail(savedEmail);
        }

        if (savedSenha) {
            setSenha(savedSenha);
        }

        if (savedNome) {
            setSenha(savedNome);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(baseURL, { email, senha });
            if (response.data.success) {
                alert('Good Job')
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            alert("Ocorreu um erro ao tentar salvar seus dados");
        }
    };

    return(
        <form className='FormDados' onSubmit={handleSubmit}>
            <div className='FormDados_div-input'>
                <p>Nome</p>
                <input 
                    type="text" 
                    id='div-input_input-nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
            </div>

            <div className='FormDados_div-input'>
                <p>Email</p>
                <input 
                    type="email" 
                    id='div-input_input-email'
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className='FormDados_div-input'>
                <p>Senha</p>
                <input 
                    type="senha"  
                    id='div-input_input-senha'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
            </div>  

            <input 
                type="submit" 
                value="Salvar dados"
                id='div-input_input-submit'
            />
        </form>
    )
}

export default FormDadosUsuario;
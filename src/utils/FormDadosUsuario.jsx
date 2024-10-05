import '../styles/FormDados.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

let id = sessionStorage.getItem('id')
const consultaURL = `http://localhost:3001/api/usuario/${id}`;
const atualizarUsuario = "http://localhost:3001/api/atualizarUsuario"
    
function FormDadosUsuario(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const carregarPerfil = async () => {
        try {
            const response = await axios.get(consultaURL);
            if (response.data.success) {
                console.log(response.data.data);
                setEmail(response.data.data.email)
                setNome(response.data.data.nome)
                setSenha(response.data.data.senha)
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        carregarPerfil();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(atualizarUsuario, { email, nome, senha, id });
            
            if (response.data.success) {
                alert('Dados atualizados com sucesso')
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
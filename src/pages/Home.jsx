import Header from '../components/Header';
import "../styles/Home.css";
import PerfisComponent from '../components/PerfisComponent';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import ButtonPost from '../components/ButtonPost';

function Home() {
    const [Posts, setPosts] = useState([]);
    const autenticado = sessionStorage.getItem('id');

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/posts`);
                
                console.log(response.data);

                if (response.data.success && Array.isArray(response.data.data)) {
                    setPosts(response.data.data);
                } else {
                    alert(response.data.message || "Erro inesperado na estrutura da resposta.");
                }
            } catch (error) {
                console.error("Erro ao carregar conteúdo:", error);
            }
        };

        getPosts();
    }, []);

    return (
        <div className='main'>
            <Header />

            <h1 id="main_paragrafo">
                Bem-vindo {sessionStorage.getItem('userName')}!
            </h1>

            <section className='main_navegacao'>
                <PerfisComponent />
            </section>
            
            <hr id='main_linha'></hr>

            <section className='posts'>
                {Array.isArray(Posts) && Posts.map(Post => (
                    <div className="posts_listados" key={Post.id}>
                        <section className='posts_listados_cabecalho'>
                            <div className='posts_listados_cabecalho_usuario'>
                                <img 
                                    className="user-avatar" 
                                    src={Post.usuario_foto_perfil}
                                    alt="Foto de perfil"
                                />
                                <p className="username">{Post.usuario_nome}</p>
                            </div>
                            
                            <div className="posts_listados_cabecalho_botoes">
                                <button id="botao-seguir">Seguir</button>
                                {parseInt(autenticado) === parseInt(Post.id_usuario) ? (
                                    <button id="botao_excluir">X</button>
                                ) : (
                                    <button id="botao-info">:</button>
                                )}
                            </div>
                        </section>

                        <img src={Post.imagem} className="post-image" alt="" />
                        <p className="post-title">{Post.titulo}</p>
                    </div>
                ))}
            </section>
            
            <ButtonPost/>
        </div>
    );
}

export default Home;

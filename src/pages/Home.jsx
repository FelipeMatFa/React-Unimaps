import React, { useEffect, useState } from 'react';
import axios from 'axios';

// CSS
import "../styles/Home.css";

// COMPONENTES
import Header from '../components/Header';
import PerfisComponent from '../components/PerfisComponent';
import ButtonPost from '../components/HomeButtonPost';
import ButtonRemove from '../components/ButtonRemove';

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const autenticado = sessionStorage.getItem('id');

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/posts`);
                if (response.data.success && Array.isArray(response.data.data)) {
                    setPosts(response.data.data);
                } else {
                    alert(response.data.message || "Erro inesperado na estrutura da resposta.");
                }
            } catch (error) {
                console.error("Erro ao carregar conteúdo:", error);
                alert("Ocorreu um erro ao carregar os posts.");
            } finally {
                setLoading(false);
            }
        };

        getPosts();
    }, []);

    const handlePostRemove = (id) => {
        setPosts((prevPosts) => prevPosts.filter(post => post.id !== id));
    };

    return (
        <div className='main'>
            <Header />
            <h1 id="main_paragrafo">
                Bem-vindo {sessionStorage.getItem('userName')}!
            </h1>

            <section className='main_navegacao'>
                <PerfisComponent />
            </section>
            
            <hr id='main_linha' />

            <section className='posts'>
                {loading ? (
                    <p>Carregando posts...</p>
                ) : (
                    Array.isArray(posts) && posts.map(Post => (
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
                                    {parseInt(autenticado) === parseInt(Post.id_usuario) ? (
                                        <ButtonRemove
                                            id_post={Post.id}
                                            onPostRemove={handlePostRemove}
                                        />
                                    ) : (
                                        <button id="botao-info">:</button>
                                    )}
                                </div>
                            </section>

                            <img src={Post.imagem} className="post-image" alt="" />
                            <p className="post-title">{Post.titulo}</p>
                        </div>
                    ))
                )}
            </section>
            
            <ButtonPost />
        </div>
    );
}

export default Home;

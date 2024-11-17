import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

// CSS
import "../styles/infoPost.css";

// HEADER
import Header from "./Header";
import FormComentario from "./FormComentario";

function InfoPost() {
    const [post, setPost] = useState(null);
    const location = useLocation();

    const { id } = location.state || {};

    const getPost = async () => {
        if (!id) {
            console.error("ID não encontrado");
            return;
        }

        try {
            const response = await axios.get(`http://localhost:3001/api/post/selecionarpost`, {
                params: { id },
            });

            if (response.data.success) {
                setPost(response.data.data);
            } else {
                console.warn("Nenhum post encontrado.");
            }
        } catch (error) {
            console.error("Erro ao carregar conteúdo:", error);
        }
    };

    useEffect(() => {
        getPost();
    }, [id]);

    return (
        <div>
            <Header />
            <section className="primeira-sessao_posts">
                {post ? (
                    <ul className="posts-usuario">
                        <li key={post.id} className="posts-usuario_corpo">
                            <img 
                                src={post.imagem} 
                                className="imagem"
                                alt="Post" />
                            <div className="conteudo">
                                <h1>{post.titulo}</h1>
                                <section className="sessao-conteudo">
                                <div className="comentarios">
                                    {post.comentarios && post.comentarios.length > 0 ? (
                                        post.comentarios.map((comentario) => (
                                            <div key={comentario.id} className="comentario">
                                                <img 
                                                    src={post.usuario.foto}
                                                />
                                                <section className="comentario-info">
                                                    <p id="nome-usuario">{post.usuario.nome}</p>
                                                    <p id="comentario-usuario">{comentario.texto}</p>
                                                </section>
                                            </div>
                                        ))
                                    ) : (
                                        <p>Seja o primeiro a comentar!</p>
                                    )}
                                </div>
                                    <FormComentario 
                                        id_post={id}
                                        getPost={getPost} // Passando a função getPost para o FormComentario
                                    />
                                </section>
                            </div>
                        </li>
                    </ul>
                ) : (
                    <p>Carregando...</p>
                )}
            </section>
        </div>
    );
}

export default InfoPost;
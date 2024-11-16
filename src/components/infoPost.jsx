import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

// HEADER
import Header from "./Header";

function InfoPost() {
    const [post, setPost] = useState([]);
    const location = useLocation();

    const { id } = location.state || {};

    useEffect(() => {
        const getPost = async () => {
            if (!id) {
                console.error("ID não encontrado");
                return;
            }

            try {
                const response = await axios.get(`http://localhost:3001/api/post/selecionarpost`, {
                    params: { id },
                });

                if (response.data.success && response.data.data.length > 0) {
                    setPost(response.data.data);
                } else {
                    console.warn("Nenhum post encontrado.");
                }
            } catch (error) {
                console.error("Erro ao carregar conteúdo:", error);
            }
        };

        getPost();
    }, [id]);

    return (
        <div>
            <Header></Header>
            <ul className="posts-usuario">
            {post.map((p) => (
                <li key={p.id}>
                    <img src={p.imagem} alt="Post" />
                </li>
            ))}
        </ul>
        </div>
    );
}

export default InfoPost;

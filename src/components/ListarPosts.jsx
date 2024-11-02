import axios from "axios";
import { useEffect, useState } from "react";
import ButtonRemove from '../components/ButtonRemove';

import '../styles/PerfilPage.css';

function ListarPosts() {
    const [posts, setPosts] = useState([]);
    let id = sessionStorage.getItem('id');

    useEffect(() => {
        const requisitarPosts = async () => {
            try {
                const response = await axios.post(`http://localhost:3001/api/posts/usuario`, {id});
                if (response.data.success) {
                    setPosts(response.data.data);
                } else {
                    alert(response.data.message);
                }
            } catch (error) {
                console.log(error);
                alert("Erro ao requisitar posts.");
            }
        };

        requisitarPosts();
    }, [id]);

    const handlePostRemove = (id) => {
        setPosts((prevPosts) => prevPosts.filter(post => post.id !== id));
    };

    return (
        <ul className="posts-usuario">
            {posts.map(post => (
                <div className="posts-listados" key={post.id}>
                    <div className="image-container">
                        <img 
                            id="foto-post"
                            src={post.imagem} 
                            alt=""
                        />
                        <span className="image-text">{post.titulo}</span>
                        <ButtonRemove 
                            id="button-remove"
                            id_post={post.id}
                            onPostRemove={handlePostRemove}
                        />
                    </div>
                </div>
            ))}
        </ul>
    );
}

export default ListarPosts;
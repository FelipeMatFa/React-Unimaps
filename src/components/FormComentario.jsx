import axios from "axios";
import { useState } from "react";

function FormComentario({ id_post, getPost }) {
    const [comentario, setComentario] = useState('');
    const id_usuario = sessionStorage.getItem('id');

    const postComentarios = async () => {
        if (!id_post || !comentario) {
            console.error("ID do post ou comentário não encontrado");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3001/api/comentar", { id_usuario, id_post, comentario });

            if (response.data.success) {
                console.log(response.data.data);
                getPost();
            } else {
                console.warn("Não foi possível comentar.");
            }
        } catch (error) {
            console.error("Erro ao postar conteúdo:", error);
        }
    };

    return (
        <form className="mensagem" onSubmit={(e) => { e.preventDefault(); postComentarios(); }}>
            <input
                type="text"
                className="mensagem_input-text"
                placeholder="Escreva um comentário"
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                required
            />
            <input
                className="mensagem_input-submit"
                type="submit"
                value="Comentar"
            />
        </form>
    );
}

export default FormComentario;

import React from 'react';
import axios from 'axios';

function ButtonRemove({ id_post, onPostRemove }) { // Recebendo callback(onPostRemove)

    const excluirPost = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3001/api/excluirposts?id=${id}`);
            if (response.data.success) {
                console.log(response.data.success);
                onPostRemove(id);
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            alert("Erro ao excluir o post: " + error);
        }
    };

    return (
        <button 
            id="botao_excluir"
            onClick={() => excluirPost(id_post)}    
        >X</button>
    )
}

export default ButtonRemove;
import React, { useState } from "react";
import axios from "axios";

function Modal({ isOpen, onClose, titulo, setTitulo, file, setFile, postPublicacao }) {
    if (!isOpen) return null;

    return (
        <div className="modal-div">
            <div className="modal-content">
                <button onClick={onClose} id="close-button">X</button>    
                <h1>Nova publicação</h1>
                <form className="modal-content_form" onSubmit={postPublicacao}>
                    <input
                        id="modal-content_form-input-file"
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        required
                    />
                    <input
                        id="modal-content_form-input-text"
                        type="text"
                        placeholder="Escreva aí..."
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                    <input type="submit" name="" id="" />
                </form>
            </div>
        </div>
    );
}

function ButtonPost() {
    const [titulo, setTitulo] = useState("");
    const [file, setFile] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    const consultarModal = async (e) => {
        e.preventDefault();

        if (!file) {
            alert("Por favor, selecione um arquivo.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("file", file);

            const response = await axios.post('http://localhost:3001/api/upload', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.data.success) {
                console.log("Arquivo enviado com sucesso!");
                console.log(response.data)
                postPublicacao(response.data.data);
            } else {
                alert(response.data.message || "Erro inesperado.");
            }
        } catch (error) {
            console.error("Erro ao consultar o modal:", error);
        }
    };

    const postPublicacao = async (caminhoFile) => {
        try {
            const response = await axios.post('http://localhost:3001/api/criarposts', { titulo, caminhoFile }, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.data.success) {
                console.log("Publicação criada com sucesso!");
            } else {
                alert(response.data.message || "Erro inesperado na estrutura da resposta.");
            }
        } catch (error) {
            console.error("Erro ao fazer a postagem:", error);
        }
    };

    return (
        <div>
            <Modal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                titulo={titulo} 
                setTitulo={setTitulo} 
                file={file} 
                setFile={setFile} 
                postPublicacao={consultarModal}
            />
            <button id="main_button-post" onClick={handleOpenModal}>
                +
            </button>
        </div>
    );
}

export default ButtonPost;

import React, { useState } from "react";
import axios from "axios";

function Modal({ isOpen, onClose, onSubmit }) {
    if (!isOpen) return null;

    const handleFileChange = (e) => onSubmit(e.target.files[0], 'file');
    const handleTextChange = (e) => onSubmit(e.target.value, 'titulo');

    return (
        <div className="modal-div">
            <div className="modal-content">
                <button onClick={onClose} id="close-button">X</button>
                <h1>Nova publicação</h1>
                <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
                    <input type="file" required onChange={handleFileChange} />
                    <input type="text" placeholder="Escreva aí..." required onChange={handleTextChange} />
                    <input type="submit" value="Publicar" />
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
    const handleCloseModal = () => {
        setModalOpen(false);
        setTitulo("");
        setFile(null);
    };

    const handleSubmit = async (value, type) => {
        if (type === 'file') setFile(value);
        else if (type === 'titulo') setTitulo(value);
        else if (file && titulo) await uploadData();
    };

    const uploadData = async () => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("titulo", titulo);
        formData.append("id", sessionStorage.getItem("id"));

        try {
            const { data } = await axios.post('http://localhost:3001/api/upload', formData);
            if (data.data) {
                console.log("Arquivo enviado com sucesso!");
                await postPublicacao(titulo, data.data.imagePath);
            } else {
                alert(data.message || "Erro inesperado.");
            }
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
        } finally {
            handleCloseModal();
        }
    };

    const postPublicacao = async (titulo, imagePath) => {
        try {
            const { data } = await axios.post('http://localhost:3001/api/criarposts', {
                titulo,
                imagem: imagePath,
                id_usuario: sessionStorage.getItem('id'),
            });
            if (data.success) console.log("Publicação criada com sucesso!");
            else alert(data.message || "Erro inesperado.");
        } catch (error) {
            console.error("Erro ao fazer a postagem:", error);
        }
    };

    return (
        <div>
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleSubmit}
            />
            <button id="main_button-post" onClick={handleOpenModal}>+</button>
        </div>
    );
}

export default ButtonPost;

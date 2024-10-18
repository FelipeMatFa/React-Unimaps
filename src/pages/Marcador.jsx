import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [id_usuario, setIdUsuario] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('titulo', titulo);
        formData.append('descricao', descricao);
        formData.append('latitude', latitude);
        formData.append('longitude', longitude);
        formData.append('id_usuario', id_usuario);

        try {
            const response = await axios.post('http://localhost:3001/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error('Erro ao fazer upload', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} required />
            <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
            <textarea placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
            <input type="text" placeholder="Latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} required />
            <input type="text" placeholder="Longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} required />
            <input type="text" placeholder="ID do Usuário" value={id_usuario} onChange={(e) => setIdUsuario(e.target.value)} required />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default FileUpload;

import React, { useState } from 'react';
import Modal from './TelaModal';

// Componentes
import ButtonMarcadores from '../components/ButtonMarcadores';

const App = ({recarregar, localizacao}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [titulo, setTitulo] = useState(''); 
  const [descricao, setDescricao] = useState(''); 

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button 
        style={
          {padding: "1vh 2vh",
           width: "100%", 
           color: "white", 
           backgroundColor: "black", 
           border: "none",
           borderRadius: "10px"}
        } 
        onClick={toggleModal}>Adicionar marcador</button>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <h2>Adicionar marcação</h2>
        <input 
          id='input-titulo'
          type="text" 
          placeholder='Titulo'
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <input 
          id='input-descricao'
          type="text" 
          placeholder='Descrição'
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <ButtonMarcadores titulo={titulo} descricao={descricao} localizacao={localizacao}/>
      </Modal>
    </div>
  );
};

export default App;

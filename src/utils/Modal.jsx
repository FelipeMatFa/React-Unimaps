import React, { useState } from 'react';
import Modal from './TelaModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <h1>Aplicación de Ejemplo</h1>
      <button onClick={toggleModal}>Abrir Modal</button>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <h2>Contenido del Modal</h2>
        <p>Este es el contenido de tu modal.</p>
      </Modal>
    </div>
  );
};

export default App;

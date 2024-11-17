import axios from "axios";
import { useState } from "react";

function ModalPerfil({ isOpen, onClose, usuario }) {
  const [nome, setNome] = useState(usuario.nome || "");
  const [email, setEmail] = useState(usuario.email || "");
  const [senha, setSenha] = useState(usuario.senha || "");
  const [file, setFile] = useState(null);

  const id = sessionStorage.getItem('id');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        let foto = null;

        if (file) {
            const formData = new FormData();
            formData.append("file", file);

            const uploadResponse = await axios.post("http://localhost:3001/api/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (uploadResponse.data.success) {
                foto = uploadResponse.data.data.imagePath;
            }
        }

        const updateResponse = await axios.put("http://localhost:3001/api/atualizarUsuario",
            {id, nome, email, senha, foto},
            {headers: {"Content-Type": "application/json"}}
        );

        if (updateResponse.data.success) {
            alert("Usuário atualizado com sucesso!");
            onClose(); // Fechar mod
            window.location.reload(); // Recarregar
        } else {
            alert(updateResponse.data.message);
        }
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        alert("Erro ao atualizar usuário. Tente novamente.");
    }
};


  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <h2>Editar Perfil</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Senha:
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
          </label>
          <label>
            Foto:
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </label>
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}

export default ModalPerfil;
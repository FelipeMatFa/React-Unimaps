import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home, Login, LangPage, Mapa, Chat, Enem, Cadastro, Tarefas, Perfil, FileUpload } from './pages';

function App() {
  const autenticado = sessionStorage.getItem('id');

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LangPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />

        {autenticado ? (
          <>
            <Route path='/home' element={<Home />} />
            <Route path='/enem' element={<Enem />} />
            <Route path='/mapa' element={<Mapa />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/home/perfil' element={<Perfil />} />
            <Route path='/tarefas' element={<Tarefas />} />
            <Route path='/FileUpload' element={<FileUpload />} />
            <Route path='*' element={<Navigate to="/home" />} />
          </>
        ) : (
          <Route path='*' element={<Navigate to="/" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

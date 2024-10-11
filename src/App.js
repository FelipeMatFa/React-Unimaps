import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login'
import LangPage from './pages/langpage/LangPage';
import Mapa from './pages/Mapa';
import Chat from './pages/Chat';
import Enem from './pages/Enem';
import Cadastro from './pages/Cadastro';
import Tarefas from './pages/Tarefas'
import Perfil from './pages/Perfil';

import Modal from './utils/Modal'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/enem' element={<Enem/>} />
        <Route path='/mapa' element={<Mapa/>} />
        <Route path='/' element={<LangPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/chat' element={<Chat/>} />
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/home/perfil' element={<Perfil/>}/>
        <Route path='/tarefas' element={<Tarefas/>}/>
        
        <Route path='/modal' element={<Modal/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

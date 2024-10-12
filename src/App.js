import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login, LangPage, Mapa, Chat, Enem, Cadastro, Tarefas, Perfil } from './pages';
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

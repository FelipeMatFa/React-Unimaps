import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage'
import LangPage from './pages/langpage/LangPage';
import MapaPage from './pages/mapa/MapaPage';
import ChatPage from './pages/chat/ChatPage';
import EnemPage from './pages/enem/EnemPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/enem' element={<EnemPage/>} />
        <Route path='/mapa' element={<MapaPage/>} />
        <Route path='/' element={<LangPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/chat' element={<ChatPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importações atualizadas para a nova estrutura de pastas
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import CursoWeb from './pages/CursoWeb/CursoWeb';
import Suporte from './pages/Suporte/Suporte';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/curso" element={<CursoWeb />} />
        <Route path="/suporte" element={<Suporte />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import CursoWeb from './pages/CursoWeb/CursoWeb';
import Suporte from './pages/Suporte/Suporte';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
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
import React from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import CursoWeb from './pages/CursoWeb/CursoWeb';
import Suporte from './pages/Suporte/Suporte';

function App() {
  const caminho = window.location.pathname;

  if (caminho === '/login') {
    return <Login />;
  }

  if (caminho === '/curso') {
    return <CursoWeb />;
  }

  if (caminho === '/suporte') {
    return <Suporte />;
  }

  return <Home />;
}

export default App;
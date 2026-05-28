import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import CursoWeb from './pages/CursoWeb';

function App() {
  // Lê o que está escrito na URL do navegador
  const caminho = window.location.pathname;

  // Renderiza a tela baseada na URL
  if (caminho === '/login') {
    return <Login />;
  }

  if (caminho === '/curso') {
    return <CursoWeb />;
  }

  // Se a URL for apenas '/' (ou qualquer outra coisa que não exista), mostra a Home
  return <Home />;
}

export default App;
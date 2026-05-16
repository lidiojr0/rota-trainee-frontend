import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* Cabeçalho */}
      <NavBar />
      
      {/* Resto da página*/}
      <main style={{ padding: '20px', minHeight: '60vh' }}>
        <h1>Plataforma</h1>
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

export default App;

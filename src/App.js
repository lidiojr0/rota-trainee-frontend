import React from 'react';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      
      {/* Colocar o resto do conteúdo das páginas*/}
      <main style={{ padding: '20px' }}>
        <h1>Plataforma</h1>
      </main>
    </div>
  );
}

export default App;

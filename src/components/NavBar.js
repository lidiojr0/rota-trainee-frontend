import React from 'react';
import './NavBar.css';

import logoImg from '../assets/logo.svg';
import lupaImg from '../assets/lupa.svg';
import carrinhoImg from '../assets/carrinho.svg';
import perfilImg from '../assets/perfil.svg';

function NavBar() {
  return (
    <nav className="navbar">
      
      {/* Left Section */}
      <div className="nav-left">
        <img src={logoImg} alt="Logo Mindemy" className="logo-icon" />
      </div>
      
      {/* Center Section */}
      <div className="nav-center">
        <h2>MINDEMY</h2>
      </div>

      {/* Right Section */}
      <div className="nav-right">
        <div className="search-container">
          <img src={lupaImg} alt="Buscar" className="search-icon" />
          <input type="text" placeholder="Pesquisar por qualquer coisa" />
        </div>
        <img src={carrinhoImg} alt="Carrinho" className="action-icon" />
        <img src={perfilImg} alt="Perfil" className="action-icon perfil-icon" />
      </div>

    </nav>
  );
}

export default NavBar;
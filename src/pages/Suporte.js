// === IMPORTS ===
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ChatButton from '../components/ChatButton';
import './Suporte.css';

// === ASSETS ===
import searchIcon from '../assets/lupa.svg';
import supportIcon from '../assets/perfil.svg';
import cartIcon from '../assets/icone-carrinho.svg';
import bookIcon from '../assets/livro.svg';
import starIcon from '../assets/icone-estrela.svg';

function Suporte() {
  // === RENDER ===
  return (
    <div className="suporte-page">
      <NavBar />
      <div className="navbar-spacer"></div>

      <main className="suporte-container">
        {/* === SEÇÃO DE BUSCA === */}
        <section className="suporte-hero">
          <h1 className="suporte-titulo">Como podemos ajudar?</h1>

          <div className="suporte-search-box">
            <img src={searchIcon} alt="Buscar" className="suporte-search-icon" />
            <input
              type="text"
              placeholder="Exemplo: Como saber o curso ideal para mim?"
              className="suporte-input"
            />
          </div>

          <p className="suporte-popular">
            <strong>Popular:</strong> <span className="suporte-popular-item">Como ver os meus cursos</span>, <span className="suporte-popular-item">Como acessar meus certificados</span>, <span className="suporte-popular-item">Sistema de reembolso</span>
          </p>
        </section>

        {/* === SEÇÃO DE ASSUNTOS (CARDS) === */}
        <section className="suporte-assuntos">
          <h2 className="assuntos-titulo">Assuntos</h2>

          <div className="cards-grid">
            <div className="assunto-card">
              <img src={supportIcon} alt="Suporte" className="card-icone" />
              <ul>
                <li>Fale com nosso suporte</li>
                <li>Fale com nossos professores</li>
                <li>Dúvidas frequentes</li>
                <li>SAC</li>
              </ul>
            </div>

            <div className="assunto-card">
              <img src={cartIcon} alt="Carrinho" className="card-icone" />
              <ul>
                <li>Adquirir novos cursos</li>
                <li>Meu carrinho</li>
                <li>Ver meus cursos</li>
                <li>Meus Certificados</li>
              </ul>
            </div>

            <div className="assunto-card">
              <img src={bookIcon} alt="Biblioteca" className="card-icone" />
              <ul>
                <li>Falar com professores</li>
                <li>Materiais gratuitos</li>
                <li>Biblioteca Mindemy®</li>
                <li>Quero ser um professor</li>
                <li>Avaliações acadêmicas</li>
              </ul>
            </div>

            <div className="assunto-card">
              <img src={starIcon} alt="Avaliações" className="card-icone" />
              <ul>
                <li>Avaliar um curso</li>
                <li>Minhas avaliações</li>
                <li>Avaliações da comunidade</li>
                <li>Cursos mais avaliados</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <ChatButton />

      <Footer />
    </div>
  );
}

export default Suporte;
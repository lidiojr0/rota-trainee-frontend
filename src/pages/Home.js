import React, { useState } from 'react';
import './Home.css';
import heroGif from '../assets/hero-animacao.gif'; 
import searchIcon from '../assets/lupa.svg'; 
import cookieIcon from '../assets/cookie.svg';

function Home() {
  const [showCookies, setShowCookies] = useState(true);

  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            {">>"} Adquira<br />
            habilidades práticas e<br />
            transforme sua carreira<br />
            com cursos que<br />
            preparam você para o<br />
            mercado de trabalho
          </h1>

          <h2 className="hero-subtitle">
            Aprenda hoje, conquiste o amanhã!<br />
            Invista no seu Sucesso!
          </h2>

          <div className="hero-search">
            <img src={searchIcon} alt="Ícone de busca" className="hero-search-icon" />
            <input type="text" placeholder="Pesquisar por algum curso" />
          </div>
        </div>

        <div className="hero-image-container">
          <img src={heroGif} alt="Estudante acompanhando aula" className="hero-image" />
        </div>

        {/* Cookie Banner */}
        {showCookies && (
          <div className="cookie-banner">
            <div className="cookie-content">
              <img src={cookieIcon} alt="Ícone de Cookie" className="cookie-icon" />
              <p>Usamos cookies na entrega dos nossos serviços <a href="#">Saber mais</a></p>
            </div>
            <div className="cookie-actions">
              <button className="btn-cookie btn-reject" onClick={() => setShowCookies(false)}>Reject</button>
              <button className="btn-cookie btn-ok" onClick={() => setShowCookies(false)}>Ok</button>
            </div>
          </div>
        )}
      </section>

      {/* Divider */}
      <div className="divider-bar"></div>

    </div>
  );
}

export default Home;
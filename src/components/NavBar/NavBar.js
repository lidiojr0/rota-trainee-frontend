import React, { useState, useEffect } from 'react';
import './NavBar.css';

// --- Assets Desktop ---
import logoImg from '../../assets/logo.svg';
import lupaImg from '../../assets/lupa.svg';
import carrinhoImg from '../../assets/carrinho.svg';
import perfilImg from '../../assets/perfil.svg';

// --- Assets Mobile ---
import logoMobileImg from '../../assets/logo-mobile.svg';
import menuIcon from '../../assets/menu-sanduiche.svg';
import carrinhoMobileImg from '../../assets/carrinho-mobile.svg';
import iconeX from '../../assets/icone-x.svg';

function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);

    if (!menuAberto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${!isVisible ? 'navbar-hidden' : ''} ${isVisible ? 'navbar-fixed' : ''}`}>
        
        {/* === LEFT SECTION === */}
        <div className="nav-left">
          <img src={logoImg} alt="Logo Mindemy" className="logo-icon desktop-only" />
          <img src={menuIcon} alt="Menu Mobile" onClick={toggleMenu} className="action-icon mobile-pointer mobile-only" />
        </div>
        
        {/* === CENTER SECTION === */}
        <div className="nav-center">
          <h2 className="desktop-only">MINDEMY</h2>
          <img src={logoMobileImg} alt="Mindemy" className="logo-mobile-icon mobile-only" />
        </div>

        {/* === RIGHT SECTION === */}
        <div className="nav-right">
          
          <div className="desktop-only search-and-icons">
            <div className="search-container">
              <img src={lupaImg} alt="Buscar" className="search-icon" />
              <input type="text" placeholder="Pesquisar por qualquer coisa" />
            </div>
            <img src={carrinhoImg} alt="Carrinho" className="action-icon" />
            <img src={perfilImg} alt="Perfil" className="action-icon perfil-icon" />
          </div>

          <img src={carrinhoMobileImg} alt="Carrinho" className="action-icon mobile-pointer mobile-only" />
        </div>

      </nav>

      {/* === MOBILE MENU OVERLAY (TELA CHEIA) === */}
      <div className={`mobile-menu-overlay ${menuAberto ? 'open' : ''}`}>
        <div className="overlay-header">
          <h2>MINDEMY</h2>
          <img src={iconeX} alt="Fechar" onClick={toggleMenu} className="close-icon" />
        </div>
        
        <ul className="overlay-links">
          <li><a href="#">Perfil</a></li>
          <li><a href="#">Ensine na Mindemy</a></li>
          <li><a href="#">Baixe o aplicativo</a></li>
          <li><a href="#">Quem somos</a></li>
          <li><a href="#">Fale conosco</a></li>
        </ul>

        <div className="overlay-search">
          <img src={lupaImg} alt="Buscar" className="search-icon-mobile" />
          <input type="text" placeholder="Pesquisar por qualquer coisa" />
        </div>
      </div>
    </>
  );
}

export default NavBar;

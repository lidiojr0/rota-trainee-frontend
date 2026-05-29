import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoFooterImg from '../../assets/logo-footer.svg';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <hr className="footer-line" />

        <div className="footer-bottom">
          <div className="footer-links">
            <Link to="/">Mindemy</Link>
            <Link to="#">Ensine na Mindemy</Link>
            <Link to="#">Baixe o aplicativo</Link>
            <Link to="#">Quem somos</Link>
            <Link to="/suporte">Fale conosco</Link>
          </div>

          <div className="footer-logo">
            <img src={logoFooterImg} alt="Mindemy - Invista no seu sucesso" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
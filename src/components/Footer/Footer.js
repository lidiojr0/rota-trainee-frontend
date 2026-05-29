import React from 'react';
import './Footer.css';
import logoFooterImg from '../../assets/logo-footer.svg';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <hr className="footer-line" />

        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#">Mindemy</a>
            <a href="#">Ensine na Mindemy</a>
            <a href="#">Baixe o aplicativo</a>
            <a href="#">Quem somos</a>
            <a href="#">Fale conosco</a>
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

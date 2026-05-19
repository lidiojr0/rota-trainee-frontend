import React, { useState } from 'react';
import './Login.css';
import olhoImg from '../assets/olho.svg';
import logoImg from '../assets/logo.svg';

function Login() {
  const [authMode, setAuthMode] = useState('login');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <div className="auth-page">
      
      {/* Header */}
      <div className="auth-header">
        <img src={logoImg} alt="Mindemy Logo" className="auth-logo" />
        <button 
          className="toggle-auth-btn"
          onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
        >
          {authMode === 'login' ? 'Cadastre-se agora' : 'Fazer Login'}
        </button>
      </div>

      {/* Main Content */}
      <div className="auth-container">
        
        <h1 className="gradient-text">
          {authMode === 'login' && 'Login'}
          {authMode === 'register' && 'Invista no seu sucesso!'}
          {authMode === 'forgot' && 'Redefina sua senha'}
        </h1>
        
        <p className="auth-subtitle">
          {authMode === 'login' && 'Digite o endereço de e-mail e a senha da sua conta Mindemy.'}
          {authMode === 'register' && 'Crie sua conta agora e tenha acesso a cursos exclusivos, desenvolvidos por especialistas, para você dominar as habilidades mais requisitadas do mercado. Invista no seu futuro e aprenda no seu ritmo, com conteúdo de qualidade e atualizado. Não perca tempo, o futuro da tecnologia espera por você!'}
          {authMode === 'forgot' && 'Digite o endereço de e-mail que você usa na Mindemy para enviarmos um link de redefinição de senha.'}
        </p>

        {/* Form */}
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          
          {authMode === 'register' && (
            <>
              <div className="input-group">
                <label>Nome do usuário</label>
                <input type="text" />
              </div>
              <div className="input-group">
                <label>CPF</label>
                <input type="text" />
              </div>
            </>
          )}

          <div className="input-group">
            <label>Endereço de e-mail</label>
            <input type="email" />
          </div>

          {authMode !== 'forgot' && (
            <div className="input-group senha-group">
              <label>Senha</label>
              <div className="input-with-icon">
                <input type={mostrarSenha ? "text" : "password"} />
                <img 
                  src={olhoImg} 
                  alt="Mostrar/Esconder senha" 
                  className="eye-icon"
                  onClick={() => setMostrarSenha(!mostrarSenha)} 
                />
              </div>
            </div>
          )}

          {authMode === 'register' && (
            <div className="input-group senha-group">
              <label>Confirmação de Senha</label>
              <div className="input-with-icon">
                <input type={mostrarSenha ? "text" : "password"} />
                <img 
                  src={olhoImg} 
                  alt="Mostrar/Esconder senha" 
                  className="eye-icon"
                  onClick={() => setMostrarSenha(!mostrarSenha)} 
                />
              </div>
            </div>
          )}

          {authMode === 'login' && (
            <a 
              href="#" 
              className="forgot-password"
              onClick={(e) => {
                e.preventDefault();
                setAuthMode('forgot');
              }}
            >
              Esqueceu a senha?
            </a>
          )}

          {/* Actions */}
          <div className="auth-actions">
            <button className="btn-primary" type="submit">
              {authMode === 'login' && 'Entrar'}
              {authMode === 'register' && 'Cadastrar'}
              {authMode === 'forgot' && 'Enviar'}
            </button>
            
            {authMode !== 'login' && (
              <button 
                className="btn-cancel" 
                type="button" 
                onClick={() => setAuthMode('login')}
              >
                Cancele
              </button>
            )}
          </div>
        </form>
        
        {authMode === 'login' && <p className="auth-footer-text">Precisa de ajuda para entrar?</p>}

      </div>
    </div>
  );
}

export default Login;
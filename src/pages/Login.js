import React, { useState } from 'react';
import './Login.css';
import olhoImg from '../assets/olho.svg';
import logoImg from '../assets/logo.svg';

function Login() {
  const [authMode, setAuthMode] = useState('login');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <div className="auth-page">
      
      {/* Cabeçalho */}
      <div className="auth-header">
        <img src={logoImg} alt="Mindemy Logo" className="auth-logo" />
        
        <button 
          className="toggle-auth-btn"
          onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
        >
          {authMode === 'login' ? 'Cadastre-se agora' : 'Fazer Login'}
        </button>
      </div>

      <div className="auth-container">
        
        {/* Título */}
        <h1 className="gradient-text">
          {authMode === 'login' && 'Login'}
          {authMode === 'register' && 'Invista no seu sucesso!'}
          {authMode === 'forgot' && 'Redefina sua senha'}
        </h1>
        
        {/* Subtítulo */}
        <p className="auth-subtitle">
          {authMode === 'login' && 'Digite o endereço de e-mail e a senha da sua conta Mindemy.'}
          {authMode === 'register' && 'Crie sua conta agora e tenha acesso a cursos exclusivos, desenvolvidos por especialistas, para você dominar as habilidades mais requisitadas do mercado. Invista no seu futuro e aprenda no seu ritmo, com conteúdo de qualidade e atualizado. Não perca tempo, o futuro da tecnologia espera por você!'}
          {authMode === 'forgot' && 'Digite o endereço de e-mail que você usa na Mindemy para enviarmos um link de redefinição de senha.'}
        </p>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          
          {/* Campos exclusivos do Cadastro */}
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

          {/* Campo de E-mail (vai aparecer em todas as telas) */}
          <div className="input-group">
            <label>Endereço de e-mail</label>
            <input type="email" />
          </div>

          {/* Campo de Senha (vai aparecer no Login e no Cadastro, mas não no Forgot) */}
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

          {/* Confirmação de Senha (só no Cadastro) */}
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

          {/* Link de Esqueci a Senha */}
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

          {/* Botões de Ação */}
          <div className="auth-actions">
            <button className="btn-primary" type="submit">
              {authMode === 'login' && 'Entrar'}
              {authMode === 'register' && 'Cadastrar'}
              {authMode === 'forgot' && 'Enviar'}
            </button>
            
            {/* o botão de cancelar aparece no Cadastro e na Redefinição, e volta para o Login */}
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
        
        {/* rodapé que só tem no Login */}
        {authMode === 'login' && <p className="auth-footer-text">Precisa de ajuda para entrar?</p>}

      </div>
    </div>
  );
}

export default Login;

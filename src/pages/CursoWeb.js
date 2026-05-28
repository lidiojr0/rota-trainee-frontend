import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './CursoWeb.css';

// Assets
import cursoImg from '../assets/curso-web.jpg';
import iconePlayCard from '../assets/icone-play.svg';
import globoImg from '../assets/globo.svg';
import legendaImg from '../assets/legenda.svg';
import alarmeImg from '../assets/alarme.svg';
import favoritoImg from '../assets/favorito.svg';
import instrutorImg from '../assets/alberto.jpg';

// Estrelas
import estrelaAmarela from '../assets/estrela.svg';
import estrelaCinza from '../assets/estrela-cinza.svg';


function CursoWeb() {
    return (
        <div className="curso-page">
            <NavBar />

            {/* HERO */}
      <section className="curso-hero">
        <div className="curso-hero-container">
          {/* Info */}
          <div className="curso-info">
            {/* Título */}
            <h1 className="curso-titulo">Desenvolvimento Web</h1>
            <p className="curso-subtitulo">
              Transforme ideias em realidade com este curso completo de desenvolvimento web.
            </p>

            {/* Avaliações */}
            <div className="curso-dados-linha">
              <span className="badge-mais-vendido">Mais Vendidos</span>
              
              <div className="curso-avaliacoes">
                <span className="nota">4.7</span>
                <div className="estrelas">
                  <img src={estrelaAmarela} alt="Estrela" />
                  <img src={estrelaAmarela} alt="Estrela" />
                  <img src={estrelaAmarela} alt="Estrela" />
                  <img src={estrelaAmarela} alt="Estrela" />
                  <div className="meia-estrela-container">
                    <img src={estrelaCinza} alt="" className="estrela-fundo" />
                    <div className="estrela-corte">
                      <img src={estrelaAmarela} alt="" />
                    </div>
                  </div>
                </div>
                <span className="qtd-avaliacoes">(512 avaliações)</span>
              </div>
            </div>

            <div className="curso-criador">
              Criado por <span className="criador-nome">Alberto Romanhol</span>
            </div>

            <div className="curso-idiomas">
              <div className="idioma-item">
                <img src={globoImg} alt="Idioma" />
                <span>Português</span>
              </div>
              <div className="idioma-item">
                <img src={legendaImg} alt="Legendas" />
                <span>Português / Inglês</span>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="curso-card-compra">
            <div className="card-img-container">
              <img src={cursoImg} alt="Preview do Curso" className="card-img-bg" />
              <div className="card-img-overlay">
                <img src={iconePlayCard} alt="Assistir Preview" className="play-gigante" />
              </div>
            </div>

            <div className="card-conteudo">
              <div className="card-precos">
                <span className="preco-atual">R$ 49,90</span>
                <span className="preco-antigo">R$ 154,90</span>
              </div>

              <div className="card-urgencia">
                <img src={alarmeImg} alt="Alarme" />
                <span><b>Só mais 8 horas</b> por este preço!</span>
              </div>

              <div className="card-botoes-linha1">
                <button className="btn-add-carrinho">Adicionar ao carrinho</button>
                <button className="btn-favorito">
                  <img src={favoritoImg} alt="Favoritar" />
                </button>
              </div>
              
              <button className="btn-comprar-agora">Comprar agora</button>
              
              <p className="garantia-texto">Garantia de devolução do dinheiro em 30 dias</p>

              <div className="card-lista-inclusos">
                <h4>Este curso inclui:</h4>
                <ul>
                  <li>57 horas de vídeo sob demanda</li>
                  <li>51 recursos para download</li>
                  <li>Acesso no dispositivo móvel e na TV</li>
                  <li>Acesso total vitalício</li>
                  <li>Certificado de conclusão</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

            {/* === SEÇÃO DE CONTEÚDO (Abaixo do Hero) === */}
      <section className="curso-detalhes">
        <div className="curso-detalhes-container">
          
          {/* Conteúdo */}
          <div className="curso-texto-principal">
            
            {/* Bloco 1 */}
            <div className="secao-texto">
              <h2 className="titulo-secao">O que você aprenderá?</h2>
              
              <h3 className="subtitulo-secao">Front-End Dinâmico e Responsivo</h3>
              <ul className="lista-secao">
                <li>Fundamentos de HTML, CSS e JavaScript para criar páginas incríveis.</li>
                <li>Frameworks modernos, como React e Vue.js, para interfaces interativas e profissionais.</li>
              </ul>

              <h3 className="subtitulo-secao">Back-End Robusto e Escalável</h3>
              <ul className="lista-secao">
                <li>Criação de sistemas potentes com Node.js, Express e bancos de dados como MongoDB e MySQL.</li>
              </ul>

              <h3 className="subtitulo-secao">Versionamento e Colaboração</h3>
              <ul className="lista-secao">
                <li>Domine Git e GitHub para trabalhar em equipe de maneira eficiente.</li>
              </ul>

              <h3 className="subtitulo-secao">Implantação Profissional</h3>
              <ul className="lista-secao">
                <li>Aprenda a hospedar seus projetos em plataformas como Heroku e AWS, deixando seu trabalho acessível ao mundo.</li>
              </ul>
            </div>

            {/* Bloco 2 */}
            <div className="secao-texto">
              <h2 className="titulo-secao">Por que escolher esse curso?</h2>

              <h3 className="subtitulo-secao">Projetos Reais para o Portfólio</h3>
              <ul className="lista-secao">
                <li>Desenvolva projetos práticos que destacam suas habilidades e impressionam recrutadores.</li>
              </ul>

              <h3 className="subtitulo-secao">Networking Valioso</h3>
              <ul className="lista-secao">
                <li>Conecte-se com outros profissionais e amplie suas oportunidades no mercado.</li>
              </ul>

              <h3 className="subtitulo-secao">Certificado Reconhecido</h3>
              <ul className="lista-secao">
                <li>Comprove seu domínio em desenvolvimento web com um certificado que faz a diferença.</li>
              </ul>

              <h3 className="subtitulo-secao">Suporte Personalizado</h3>
              <ul className="lista-secao">
                <li>Tire dúvidas com mentores experientes e receba feedback estratégico para melhorar ainda mais.</li>
              </ul>

              <h3 className="subtitulo-secao">Preparação para o Mercado de Trabalho</h3>
              <ul className="lista-secao">
                <li>Esteja pronto para criar sites responsivos, aplicativos completos e enfrentar desafios reais.</li>
              </ul>

              <h3 className="subtitulo-secao">Materiais Exclusivos</h3>
              <ul className="lista-secao">
                <li>Acesse conteúdos extras, dicas do mercado e atualizações sobre as últimas tendências tecnológicas.</li>
              </ul>
            </div>
            {/* Bloco 3 */}
            <div className="secao-texto">
              <h2 className="titulo-secao">Descrição</h2>
              <div className="texto-corrido">
                <p>Bem-vindo ao nosso curso de Desenvolvimento Web! Este curso, oferecido pela Mindemy, é perfeito para iniciantes e entusiastas da programação que desejam aprender a criar sites dinâmicos e responsivos, do front-end ao back-end. Vamos guiá-lo em cada etapa, desde os fundamentos de HTML, CSS e JavaScript, até o uso de frameworks modernos como React e Vue.js para criar interfaces interativas e profissionais.</p>
                <p>Você também aprenderá a construir sistemas robustos com Node.js, Express e bancos de dados como MongoDB e MySQL. Além disso, dominará técnicas de versionamento e colaboração com Git e GitHub. Ao final do curso, você será capaz de hospedar seus projetos em plataformas como Heroku e AWS, tornando-os acessíveis ao mundo.</p>
                <p>Este curso é ideal para quem deseja se tornar um desenvolvedor completo, criando páginas incríveis e sistemas escaláveis, com habilidades práticas para projetos reais. Não há pré-requisitos, apenas a paixão por aprender e construir soluções inovadoras!<br />Junte-se a nós na Mindemy e inicie sua jornada no desenvolvimento web!</p>
              </div>
            </div>

            {/* Bloco 4 */}
            <div className="secao-texto">
              <h2 className="titulo-secao">Instrutor</h2>
              
              <div className="instrutor-perfil">
                <img src={instrutorImg} alt="Alberto Romanhol" className="instrutor-foto" />
                <div className="instrutor-dados">
                  <span className="instrutor-nome">Alberto Romanhol</span>
                  <span className="instrutor-cargo">Senior Web Development<br />Engineer & Technical Instructor</span>
                </div>
              </div>

              <div className="texto-corrido">
                <p>Olá, sou Alberto, Senior <strong>Web Development Engineer</strong> na <strong>Amazon</strong> e também <strong>instrutor de desenvolvimento web</strong>. Com anos de experiência criando soluções inovadoras para uma das maiores empresas de tecnologia do mundo, estou empolgado em compartilhar meu conhecimento com você!</p>
                <p>Convido você a se juntar ao meu curso de <strong>Desenvolvimento Web</strong>, onde vamos explorar as <strong>tecnologias mais recentes</strong>, como <strong>React, Node.js</strong>, e muito mais. Juntos, vamos construir <strong>projetos reais</strong>, aprimorar suas habilidades e prepará-lo para enfrentar os <strong>desafios do mercado de trabalho.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

            <Footer />
        </div>
    );
}

export default CursoWeb;
/* ==========================================================================
   IMPORTS & CONFIGURATION
   ========================================================================== */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import ChatButton from '../../components/ChatButton/ChatButton';
import './Home.css';

// --- Assets: Hero & Globals ---
import heroGif from '../../assets/hero-animacao.gif';
import searchIcon from '../../assets/lupa.svg';
import cookieIcon from '../../assets/cookie.svg';

// --- Assets: Courses Carousel ---
import iconePlay from '../../assets/icone-play.svg';
import setaEsquerda from '../../assets/seta-esquerda.svg';
import setaDireita from '../../assets/seta-direita.svg';
import setaPequena from '../../assets/seta-pequena-direita.svg';

// --- Assets: Course Images ---
import cursoWebImg from '../../assets/curso-web.jpg';
import cursoDadosImg from '../../assets/curso-dados.jpg';
import cursoDesignImg from '../../assets/curso-design.jpg';
import cursoMktImg from '../../assets/curso-mkt.jpg';
import cursoProjetosImg from '../../assets/curso-projetos.jpg';

// --- Assets: Features Section ---
import iconePc from '../../assets/icone-pc.svg';
import iconeCertificado from '../../assets/icone-certificado.svg';
import iconeGrafico from '../../assets/icone-grafico.svg';
import iconeAlvo from '../../assets/icone-alvo.svg';
import codigoImg from '../../assets/codigo-img.png';
import iconeMinimizar from '../../assets/icone-minimizar.svg';
import iconeFechar from '../../assets/icone-fechar.svg';

// --- Assets: Testimonials Section ---
import iconeAspas from '../../assets/icone-aspas.svg';
import aluno1 from '../../assets/aluno1.png';
import aluno2 from '../../assets/aluno2.png';
import aluno3 from '../../assets/aluno3.png';

/* ==========================================================================
   DATA MOCKS
   ========================================================================== */
const cursos = [
  {
    id: 1,
    titulo: 'Desenvolvimento Web',
    descricao: 'Aprenda a criar sites e aplicativos modernos com as principais tecnologias do mercado. Domine HTML, CSS, JavaScript e frameworks como React e Vue.js.',
    link: 'Ver Curso de Desenvolvimento Web',
    imagem: cursoWebImg,
    path: '/curso'
  },
  {
    id: 2,
    titulo: 'Ciência de Dados',
    descricao: 'Descubra como transformar informações em insights valiosos e conquistar o mercado. Aprenda análise de dados, machine learning e ferramentas como Python, R e SQL.',
    link: 'Ver Curso de Ciência de Dados',
    imagem: cursoDadosImg
  },
  {
    id: 3,
    titulo: 'Design Gráfico',
    descricao: 'Aprenda a criar designs incríveis com as principais ferramentas do mercado. Domine softwares como Adobe Photoshop, Illustrator e InDesign.',
    link: 'Ver Curso de Design',
    imagem: cursoDesignImg
  },
  {
    id: 4,
    titulo: 'Marketing Digital',
    descricao: 'Domine as estratégias que impulsionam marcas e negócios na internet. Aprenda a criar campanhas eficazes, gerenciar redes sociais e produzir conteúdos impactantes.',
    link: 'Ver Curso de Marketing',
    imagem: cursoMktImg
  },
  {
    id: 5,
    titulo: 'Gestão de Projetos',
    descricao: 'Torne-se um líder eficaz com este curso de gestão de projetos. Aprenda métodos como Scrum, Agile e Kanban, sendo capaz de gerenciar e entregar projetos com sucesso.',
    link: 'Ver Curso de Gestão',
    imagem: cursoProjetosImg
  }
];

/* ==========================================================================
   MAIN COMPONENT
   ========================================================================== */
function Home() {
  const [showCookies, setShowCookies] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 850);
      setCurrentIndex(0);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlides = isMobile ? cursos.length - 1 : cursos.length - 3;
  const tamanhoDoSalto = isMobile ? 394 : 390;

  const proximoSlide = () => {
    if (currentIndex < maxSlides) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const slideAnterior = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="home-container">
      <NavBar />

      {/* ==========================================
          1. HERO SECTION
          ========================================== */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            {">>"} <span className="hero-adquira">Adquira</span><br />
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

      <div className="divider-bar"></div>

      {/* ==========================================
          2. COURSES SECTION (Carousel)
          ========================================== */}
      <section className="courses-section">
        <h2 className="courses-main-title">
          Tudo o que você precisa, exatamente onde você precisa.
        </h2>

        <div className="carousel-area">
          <h3 className="carousel-subtitle">Conheça nossos cursos</h3>

          <div className="carousel-content">

            <button className="carousel-arrow" onClick={slideAnterior}>
              <img src={setaEsquerda} alt="Anterior" />
            </button>

            <div className="carousel-window">
              <div
                className="cards-wrapper"
                style={{ transform: `translateX(-${currentIndex * tamanhoDoSalto}px)` }}
              >
                {cursos.map((curso) => (
                  <div className="course-card" key={curso.id}>
                    <div className="course-img-container">
                      <img src={curso.imagem} alt={curso.titulo} className="course-img" />
                      <div className="course-img-overlay">
                        <img src={iconePlay} alt="Play" className="play-icon" />
                      </div>
                    </div>
                    <div className="course-info">
                      <h4>{curso.titulo}</h4>
                      <p>{curso.descricao}</p>
                      <Link to={curso.path || '#'} className="course-link">
                        {curso.link} <img src={setaPequena} alt="Seta" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="carousel-arrow" onClick={proximoSlide}>
              <img src={setaDireita} alt="Próximo" />
            </button>

          </div>
        </div>

        <button className="btn-all-courses">TODOS OS CURSOS</button>
      </section>

      {/* ==========================================
          3. FEATURES SECTION (Tabs & Mockup)
          ========================================== */}
      <section className="features-section">
        <h2 className="features-title">Foque no que realmente importa</h2>

        <div className="features-content">

          <div className="features-list">

            <div className="feature-card active">
              <img src={iconePc} alt="Treinamento prático" className="feature-icon" />
              <div className="feature-text">
                <h4>Treinamento prático</h4>
                <p>Pratique o que você aprendeu, com exercícios, simulados, testes e use a IA para aprender.</p>
              </div>
            </div>

            <div className="feature-card">
              <img src={iconeCertificado} alt="Certificações" className="feature-icon" />
              <div className="feature-text">
                <h4>Certificações Qualificadas</h4>
                <p>Prepare-se para receber certificações reconhecidas pelo setor. Impulsione seu currículo!</p>
              </div>
            </div>

            <div className="feature-card">
              <img src={iconeGrafico} alt="Análises" className="feature-icon" />
              <div className="feature-text">
                <h4>Análises e feedbacks</h4>
                <p>Receba insights personalizadas de como está seu aprendizado, te ajudando a resolver seus maiores problemas.</p>
              </div>
            </div>

            <div className="feature-card">
              <img src={iconeAlvo} alt="Conteúdo" className="feature-icon" />
              <div className="feature-text">
                <h4>Conteúdo personalizável</h4>
                <p>Tenha trilhas personalizadas para os seus objetivos. Visualize suas metas antes de concluí-las!</p>
              </div>
            </div>

          </div>

          <div className="features-mockup">
            <div className="mockup-header">
              <div className="mockup-actions">
                <img src={iconeMinimizar} alt="Minimizar" />
                <img src={iconeFechar} alt="Fechar" />
              </div>
            </div>

            <div className="mockup-body">
              <div className="mockup-instructions">
                <h3 className="mockup-subtitle">Instruções</h3>
                <h4 className="mockup-task-title">Teste seu conhecimento em Front-End</h4>
                <p className="mockup-desc">
                  Coloque suas habilidades de Front-End à prova! Crie uma página responsiva e interativa usando HTML, CSS e JavaScript. Teste sua criatividade e domínio das tecnologias criando um layout funcional, moderno e compatível com diferentes dispositivos.
                </p>
                <button className="btn-start-challenge">INICIAR DESAFIO</button>
              </div>

              <div className="mockup-code">
                <img src={codigoImg} alt="Código Front-End" />
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="divider-bar divider-footer">MINDEMY</div>

      {/* ==========================================
          4. TESTIMONIALS SECTION
          ========================================== */}
      <section className="testimonials-section">
        <div className="testimonials-container">

          <div className="testimonials-header">
            <h2 className="testimonials-title">Veja o que outros alunos estão dizendo</h2>
            <div className="testimonials-line"></div>
          </div>

          <div className="testimonials-content">

            <div className="testimonial-card">
              <img src={iconeAspas} alt="Aspas" className="quote-icon" />
              <p className="testimonial-text">
                A Mindemy foi essencial na minha trajetória até o mercado de trabalho, desde o alinhamento dos meus objetivos à colheita dos frutos. Obrigado a toda a equipe!
              </p>
              <div className="testimonial-author">
                <img src={aluno1} alt="Rodrigo Romanhol" className="author-avatar" />
                <div className="author-info">
                  <span className="author-name">Rodrigo Romanhol</span>
                  <span className="author-role">Designer e CEO da<br />Rod Produções</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <img src={iconeAspas} alt="Aspas" className="quote-icon" />
              <p className="testimonial-text">
                A Mindemy realmente fez diferença no meu trajeto no mundo digital, e foi uma excelente guia para criar a 7even.
              </p>
              <div className="testimonial-author">
                <img src={aluno2} alt="Victor Cabral" className="author-avatar" />
                <div className="author-info">
                  <span className="author-name">Victor Cabral</span>
                  <span className="author-role">CTO da 7even e Gestor<br />de Tráfego</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <img src={iconeAspas} alt="Aspas" className="quote-icon" />
              <p className="testimonial-text">
                A Mindemy me deu as ferramentas necessárias para crescer. Aprendi o que precisava para o mundo real e conquistei uma promoção com confiança no meu conhecimento.
              </p>
              <div className="testimonial-author">
                <img src={aluno3} alt="Lorenzo Ozório" className="author-avatar" />
                <div className="author-info">
                  <span className="author-name">Lorenzo Ozório</span>
                  <span className="author-role">Desenvolvedor Web,<br />Diretor da Usimicro</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ChatButton />
      <Footer />
    </div>
  );
}

export default Home;
# 🚀 Rota Trainee Front-End - Emakers Jr.

Bem-vindo ao repositório do projeto desenvolvido durante a **Rota de Front-End** do Processo Trainee da **Emakers Jr. (2026.1)**.

Este projeto consiste em uma aplicação web responsiva construída com **React**, com o objetivo de consolidar conhecimentos em:

* Componentização
* Gerenciamento de estado
* Roteamento de páginas
* Responsividade
* Estilização com CSS

---

## 👨‍💻 Desenvolvedor

**Lídio Júnior Pereira Batista**

---

# 🛠️ Tecnologias Utilizadas

Para garantir a consistência e a correta execução do projeto em qualquer ambiente, utilize as seguintes tecnologias e dependências:

## 🟢 Ambiente de Execução

| Tecnologia | Versão |
|------------|---------|
| **Node.js** | `v22.21.0` |


## 📦 Core da Aplicação

| Tecnologia / Biblioteca | Versão    | Descrição                                         |
| ----------------------- | --------- | ------------------------------------------------- |
| **React**               | `^19.2.6` | Biblioteca principal para construção da interface |
| **React DOM**           | `^19.2.6` | Renderização da aplicação no navegador            |
| **React Router DOM**    | `^7.16.0` | Gerenciamento de rotas SPA                        |
| **React Scripts**       | `5.0.1`   | Scripts de build e desenvolvimento                |
| **CSS3**                | Puro      | Estilização e responsividade                      |

---

## 🧪 Bibliotecas de Teste e Monitoramento

| Biblioteca                    | Versão    |
| ----------------------------- | --------- |
| `@testing-library/react`      | `^16.3.2` |
| `@testing-library/jest-dom`   | `^6.9.1`  |
| `@testing-library/dom`        | `^10.4.1` |
| `@testing-library/user-event` | `^13.5.0` |
| `web-vitals`                  | `^2.1.4`  |

---

# 📂 Organização do Projeto

```text
rota-trainee-frontend/
├── public/                  # Arquivos estáticos globais
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
│
└── src/                     # Código-fonte principal
    ├── assets/              # Imagens, SVGs, ícones e animações
    │
    ├── components/          # Componentes reutilizáveis
    │   ├── ChatButton/      # Botão flutuante de chat
    │   ├── Footer/          # Rodapé global
    │   └── NavBar/          # Barra de navegação responsiva
    │
    ├── pages/               # Páginas da aplicação
    │   ├── CursoWeb/        # Página detalhada do curso
    │   ├── Home/            # Página inicial
    │   ├── Login/           # Login, registro e recuperação
    │   └── Suporte/         # Central de atendimento
    │
    ├── App.js               # Configuração das rotas
    ├── index.js             # Entrada principal do React
    └── index.css            # Estilos globais
```

---

# 📱 Telas Implementadas

## 🏠 Home

Página inicial contendo:

* Hero Section
* Catálogo de serviços
* Carrossel interativo de cursos

---

## 🔐 Autenticação

Sistema dinâmico contendo:

* Login
* Registro de conta
* Recuperação de senha

Tudo integrado em uma única interface fluida.

---

## 📚 CursoWeb

Página dedicada à apresentação detalhada de um curso específico, contendo:

* Informações gerais
* Cronogramas
* Conteúdo programático

---

## 🛟 Suporte

Central de atendimento voltada para:

* Envio de dúvidas
* Contato com a equipe
* Formulários de suporte

---

# ✨ Funcionalidades Implementadas

## 📌 NavBar Adaptativa

* Alteração visual baseada em scroll
* Menu hambúrguer funcional
* Responsividade para dispositivos móveis

---

## 🎠 Carrossel Nativo

Carrossel desenvolvido do zero utilizando:

* `transform`
* `transition`
* CSS puro

Sem bibliotecas externas.

---

## 🧠 Formulários Inteligentes

* Validação em tempo real
* Exibir/Ocultar senha
* Alternância dinâmica entre formulários

---

## ⚛️ Gerenciamento de Estado

Uso intensivo do `useState` para:

* Controle do menu mobile
* Controle do carrossel
* Banner de cookies
* Alternância de telas
* Estados da interface

---

## 📱 Responsividade

Interface adaptada para:

* Smartphones
* Tablets
* Diferentes resoluções

---

# ⚙️ Como Executar o Projeto

## 1️⃣ Clone o repositório

```bash
git clone https://github.com/SEU_USUARIO/rota-trainee-frontend.git
```

---

## 2️⃣ Acesse o diretório do projeto

```bash
cd rota-trainee-frontend
```

---

## 3️⃣ Instale as dependências

```bash
npm install
```

---

## 4️⃣ Inicie o servidor de desenvolvimento

```bash
npm start
```

---

## 🌐 Acesso Local

Após iniciar o servidor, a aplicação estará disponível em:

```text
http://localhost:3000
```

---

# 📌 Observações

Projeto desenvolvido exclusivamente para fins educacionais e avaliativos durante o Processo Trainee da **Emakers Jr.**

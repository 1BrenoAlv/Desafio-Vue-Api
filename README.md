# 🌌 Rick and Morty Explorer

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge\&logo=vue.js\&logoColor=4FC08D)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge\&logo=typescript\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-F6D365?style=for-the-badge\&logo=vue.js\&logoColor=white)

Uma aplicação web moderna desenvolvida para explorar o universo de **Rick and Morty** utilizando a API oficial da série.

O projeto foi construído com foco em:

* Arquitetura escalável
* Organização modular
* Boas práticas de desenvolvimento
* Experiência do usuário
* Responsividade
* Tipagem estática com TypeScript

---

# 🔗 Repositório

[Rick and Morty Explorer Repository](https://github.com/1BrenoAlv/Desafio-Vue-Api?utm_source=chatgpt.com)

---

# ✨ Funcionalidades

## 👨‍🚀 Listagem de Personagens

* Consumo dinâmico da API oficial
* Paginação automática
* Cards responsivos

---

## 🔍 Busca e Filtros

O sistema permite combinar múltiplos filtros simultaneamente:

* Busca por nome
* Status
* Espécie
* Gênero

Tudo funcionando de forma reativa e integrada.

---

## 🌎 Tradução Dinâmica

Os dados vindos da API são traduzidos automaticamente para português através de utilitários personalizados.

### Exemplos:

* `Alive → Vivo`
* `Dead → Morto`
* `Human → Humano`

---

## 🪟 Modal de Detalhes

Visualização completa do personagem utilizando:

* `vue-final-modal`
* Componentes reutilizáveis
* Layout acessível

---

## 🎨 Feedback Visual

A aplicação possui tratamento completo de UX:

* Loading states
* Toasts de ações
* Tratamento de erro 404
* Feedback visual para buscas vazias

---

## 📱 Responsividade

A interface foi construída seguindo a abordagem:

* Mobile First
* Sidebar retrátil
* Layout adaptável para desktop e mobile

---

# 🛠️ Tecnologias Utilizadas

| Tecnologia      | Descrição               |
| --------------- | ----------------------- |
| Vue 3           | Framework principal     |
| TypeScript      | Tipagem estática        |
| Pinia           | Gerenciamento de estado |
| Tailwind CSS    | Estilização             |
| Vue Router 4    | Roteamento              |
| Axios           | Requisições HTTP        |
| Vue Final Modal | Modais                  |
| Vue Sonner      | Toasts                  |

---

# 🏗️ Arquitetura do Projeto

O projeto segue uma arquitetura modularizada para facilitar:

* Escalabilidade
* Organização
* Reutilização
* Manutenção

---

# 📂 Estrutura de Pastas

```text
📦 src
 ┣ 📂 assets
 ┃ ┗ Recursos globais, imagens e estilos

 ┣ 📂 pages
 ┃ ┗ Páginas vinculadas às rotas

 ┣ 📂 router
 ┃ ┗ Configuração do Vue Router

 ┣ 📂 shared
 ┃ ┣ 📂 components
 ┃ ┃ ┗ Componentes reutilizáveis

 ┃ ┣ 📂 helpers
 ┃ ┃ ┗ Funções auxiliares

 ┃ ┣ 📂 layouts
 ┃ ┃ ┗ Estruturas visuais da aplicação

 ┃ ┣ 📂 services
 ┃ ┃ ┗ Camada de comunicação HTTP

 ┃ ┣ 📂 stores
 ┃ ┃ ┗ Gerenciamento de estado com Pinia

 ┃ ┣ 📂 types
 ┃ ┃ ┗ Interfaces e tipagens TypeScript

 ┃ ┗ 📂 utils
 ┃   ┗ Funções utilitárias e regras de negócio

 ┣ 📜 App.vue
 ┗ 📜 main.ts
```

---

# 🧠 Padrões Arquiteturais

## 📡 services/

Centraliza toda comunicação com APIs externas.

### Benefícios:

* Reutilização
* Separação de responsabilidades
* Facilidade para manutenção

---

## 🗂️ stores/

Gerenciamento global de estado utilizando Pinia.

### Responsabilidades:

* Estado da aplicação
* Filtros
* Dados dos personagens
* Controle dos modais

---

## 🧩 utils/

Funções puras e reutilizáveis.

### Exemplos:

* Tradutores
* Formatadores
* Dicionários

---

# 🚀 Como Executar o Projeto

## 📋 Pré-requisitos

* Node.js LTS
* npm ou yarn

---

## 1️⃣ Clone o repositório

```bash
git clone https://github.com/1BrenoAlv/Desafio-Vue-Api.git
```

---

## 2️⃣ Acesse a pasta do projeto

```bash
cd Desafio-Vue-Api
```

---

## 3️⃣ Instale as dependências

```bash
npm install
```

---

## 4️⃣ Execute o projeto

```bash
npm run dev
```

---

## 5️⃣ Abra no navegador

```text
http://localhost:5173
```

---

# 📚 Aprendizados Aplicados

Durante o desenvolvimento foram aplicados conceitos importantes como:

* Composition API
* Componentização
* Gerenciamento global de estado
* Tipagem avançada
* Arquitetura modular
* Boas práticas com Vue 3
* Responsividade
* UX/UI

---

# 👨‍💻 Autor

Desenvolvido por **Breno Alves**.

🔗 GitHub:
[Breno Alves GitHub](https://github.com/1BrenoAlv?utm_source=chatgpt.com)

---

# ⭐ Contribuição

Sinta-se à vontade para:

* Abrir Issues
* Enviar Pull Requests
* Dar feedbacks
* Deixar uma estrela no repositório ⭐

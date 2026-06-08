# 🔍 Localiza CEP

Aplicação Front-End desenvolvida com **React, Vite e JavaScript**, responsável por realizar consultas de endereços através da API ViaCEP.

O sistema permite que o usuário informe um CEP válido e obtenha informações detalhadas do endereço correspondente, incluindo logradouro, bairro, cidade e estado.

O projeto foi desenvolvido com foco na prática de conceitos fundamentais do ecossistema React, consumo de APIs REST, gerenciamento de estado e construção de interfaces responsivas utilizando CSS puro.

---

# 🚀 Tecnologias Utilizadas

* React
* Vite
* JavaScript (ES6+)
* CSS
* API ViaCEP

---

# 🧠 Arquitetura da Aplicação

A aplicação foi estruturada utilizando componentização para promover reutilização de código, organização e facilidade de manutenção.

```text
src
│
├── components
│   ├── ModalCepIncompleto.jsx
│   └── ModalCepNaoEncontrado.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

---

### 🎯 Objetivo da Arquitetura

* Separação de responsabilidades
* Reutilização de componentes
* Melhor organização do código
* Facilidade de manutenção
* Escalabilidade da aplicação

---

# 📌 Funcionalidades

* Consulta de CEP através da API ViaCEP
* Busca assíncrona de dados
* Exibição automática de endereço
* Validação de CEP informado
* Tratamento de CEP incompleto
* Tratamento de CEP inexistente
* Exibição de mensagens de erro através de modais
* Interface responsiva para diferentes dispositivos

---

# 🔄 Fluxo da Aplicação

```text
Usuário informa o CEP
          ↓
Validação dos dados informados
          ↓
Requisição para API ViaCEP
          ↓
Processamento da resposta
          ↓
Exibição dos dados do endereço
```

---

# 🌐 Integração com API

A aplicação consome a API pública ViaCEP através de requisições HTTP utilizando JavaScript.

Exemplo de consulta:

```http
https://viacep.com.br/ws/01001000/json/
```

Dados retornados pela API:

```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP"
}
```

---

# 🎨 Interface e Estilização

Toda a camada visual da aplicação foi desenvolvida utilizando **CSS puro**, sem utilização de frameworks de estilização.

O design foi construído com foco em:

* Simplicidade
* Legibilidade
* Organização visual
* Experiência do usuário
* Responsividade

---

# 🎯 Objetivos do Projeto

* Aplicar conceitos de React
* Praticar componentização
* Consumir APIs REST
* Trabalhar com estados e eventos
* Implementar validações de entrada
* Desenvolver interfaces responsivas
* Organizar projetos Front-End
* Realizar deploy utilizando GitHub Pages

---

# 🌐 Demonstração

🔗 Acesse o projeto:

---

# 👩🏾‍💻 Desenvolvido por

**Sophia Almeida**

# Lista de Tarefas em React

Este é um projeto simples desenvolvido em **React** que permite ao usuário gerenciar uma lista de tarefas. O nome do usuário e as tarefas são armazenadas no **LocalStorage** para manter os dados entre sessões.

## Funcionalidades

- O usuário pode inserir seu nome, que será salvo e exibido na interface.
- Adicionar e remover tarefas da lista.
- Alterar a cor de fundo do aplicativo.
- Os dados do nome e da lista de tarefas são armazenados no **LocalStorage**.

## Estrutura do Projeto

```
/
|-- node_modules/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |   |-- Cadastro.jsx
|   |   |-- ThemeSelector.jsx
|   |-- App.jsx
|   |-- App.css
|   |-- index.css
|   |-- main.jsx
|-- .gitignore
|-- eslint.config.js
|-- index.html
|-- package-lock.json
|-- package.json
|-- README.md
|-- vite.config.js
```

- **src/components/Cadastro.jsx**: Componente responsável pelo gerenciamento do nome do usuário e da lista de tarefas.
- **src/components/ThemeSelector.jsx**: Componente que altera a cor de fundo do aplicativo.
- **src/App.jsx**: Arquivo principal que gerencia os componentes.
- **src/main.jsx**: Ponto de entrada da aplicação.
- **index.html**: Arquivo HTML base do projeto.
- **package.json**: Lista de dependências do projeto.

## Como Executar

1. Clone o repositório:
   ```sh
   git clone https://github.com/PedrohmCandido/Exercicio-PDF2-Introducao-ao-Front-End.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd second-class
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Execute o projeto:
   ```sh
   npm run dev
   ```

## Tecnologias Utilizadas

- React
- Vite
- JavaScript (JSX)
- CSS


 
 
 Tela Inicial onde cadastra-se o nome
 ![image](https://github.com/user-attachments/assets/e815899a-049f-4a0f-b3ed-b816fdcf3447)
 
 
 Tela Inicial do Projeto
 ![image](https://github.com/user-attachments/assets/c38032ad-69f1-48c9-b4b4-e0c58fb1caa6)
 
 
 LocalStorage contendo o nome e as tarefas registradas
 ![image](https://github.com/user-attachments/assets/2ba48755-7152-4f32-b1f6-6e6a6813f039)
 
 
 Mudança da cor do fundo através dos botões
 ![image](https://github.com/user-attachments/assets/af697974-33f9-4677-bad7-016c78e5e5b9)
 
 
 Registro de uma nova tarefa
 ![image](https://github.com/user-attachments/assets/1b2efb06-3dc7-4cf1-a63f-65916b35fb35)

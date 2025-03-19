// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';  // Alterado de 'react-dom' para 'react-dom/client'
import App from './App';
import './index.css'; // Arquivo CSS global

// Criando o root e renderizando o componente App
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

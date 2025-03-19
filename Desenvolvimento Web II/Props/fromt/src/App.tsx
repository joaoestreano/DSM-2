// App.tsx
import React from 'react';
import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2';
import './App.css';  // Importando o arquivo de estilo

const App: React.FC = () => {
  return (
    <div className="App">
      <Exercise1 />
      <Exercise2 />
    </div>
  );
};

export default App;

// Exercise2.tsx
import React, { useState } from 'react';
import Ball from './Ball';
import '../App.css';  // Importando o arquivo de estilo

const Exercise2: React.FC = () => {
  const [inputValue, setInputValue] = useState<number | string>('');
  const [numbers, setNumbers] = useState<number[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddNumber = () => {
    const num = Number(inputValue);
    if (!isNaN(num)) {
      setNumbers((prevNumbers) => {
        const newNumbers = [...prevNumbers, num];
        if (newNumbers.length > 12) {
          newNumbers.shift();
        }
        return newNumbers;
      });
      setInputValue('');
    }
  };

  const handleRightClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
    event.preventDefault();
    setNumbers((prevNumbers) => prevNumbers.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2>Inserir Números</h2>
      <div className="input-container">
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Digite um número"
        />
        <button className="button" onClick={handleAddNumber}>
          Adicionar Número
        </button>
      </div>
      <div className="numbers-list">
        {numbers.map((num, index) => (
          <Ball key={index} number={num} onRemove={(event) => handleRightClick(event, index)} />
        ))}
      </div>
    </div>
  );
};

export default Exercise2;

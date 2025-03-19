// Exercise1.tsx
import React, { useState } from 'react';
import Ball from './Ball';
import '../App.css';  // Importando o arquivo de estilo

const Exercise1: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value >= 1 && value <= 12) {
      setQuantity(value);
    }
  };

  const generateRandomNumbers = () => {
    const numbers: number[] = [];
    for (let i = 0; i < quantity; i++) {
      numbers.push(Math.floor(Math.random() * 100));
    }
    setRandomNumbers(numbers.sort((a, b) => a - b));
  };

  return (
    <div className="container">
      <h2>Gerador de Números Aleatórios</h2>
      <div className="input-container">
        <p>Quantos números você quer gerar? (máximo 12): </p>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          max="12"
        />
        <button className="button" onClick={generateRandomNumbers}>
          Gerar Números
        </button>
      </div>
      <div className="numbers-list">
        {randomNumbers.map((num, index) => (
          <Ball
            key={index}
            number={num}
            onRemove={() => setRandomNumbers(randomNumbers.filter((_, i) => i !== index))}
          />
        ))}
      </div>
    </div>
  );
};

export default Exercise1;

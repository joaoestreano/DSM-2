import React from 'react';
import { useContext } from 'react';
import { letterCtx } from '../contexts/LetterCtx';
import Ball from './ball';

const Display: React.FC = () => {
  const { input } = useContext(letterCtx);

  if (input === '') {
    return <div>Sem entrada</div>; 
  }

    return (
    <div>
      {input.split('').map((letter, index) => (
        <Ball key={index} letter={letter} />
      ))}
    </div>
  );
};

export default Display;

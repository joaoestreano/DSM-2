// Ball.tsx
import React from 'react';


interface BallProps {
  number: number;
  onRemove: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

const Ball: React.FC<BallProps> = ({ number, onRemove }) => {
  return (
    <li className="ball" onContextMenu={onRemove}>
      {number}
    </li>
  );
};

export default Ball;

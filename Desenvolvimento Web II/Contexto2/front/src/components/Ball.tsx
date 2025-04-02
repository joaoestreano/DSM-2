import React from 'react';

interface BallProps {
  letter: string;
}

const Ball: React.FC<BallProps> = ({ letter }) => {
  return (
    <div style={ballStyles}>
      <span>{letter}</span>
    </div>
  );
};

const ballStyles: React.CSSProperties = {
  display: 'inline-block',
  backgroundColor: '#007BFF',
  color: '#fff',
  padding: '10px',
  margin: '5px',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  textAlign: 'center',
  lineHeight: '40px',
};

export default Ball;

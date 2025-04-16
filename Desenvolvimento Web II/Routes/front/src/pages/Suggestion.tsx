import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSuggestionContext } from '../context/SuggestionContext';

const Container = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Button = styled.button`
  margin-top: 1rem;
`;

const Suggestion = () => {
  const { generateSuggestion } = useSuggestionContext();
  const [currentSuggestion, setCurrentSuggestion] = useState<number[]>([]);

  useEffect(() => {
    const suggestion = generateSuggestion();
    setCurrentSuggestion(suggestion);
  }, []);

  const handleNewSuggestion = () => {
    const suggestion = generateSuggestion();
    setCurrentSuggestion(suggestion);
  };

  return (
    <Container>
      <h2>Sua sugestão de aposta</h2>
      <p>{currentSuggestion.join(', ')}</p>
      <Button onClick={handleNewSuggestion}>Nova sugestão</Button>
    </Container>
  );
};

export default Suggestion;
